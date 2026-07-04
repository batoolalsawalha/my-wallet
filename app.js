// App state management
let state = {
    transactions: [],
    budget: 300.00 // Default monthly budget in JOD
};

let editingTxId = null;


// Category Icon Mapping
const categoryIcons = {
    'أكل': 'fa-hamburger',
    'مواصلات': 'fa-bus-simple',
    'تسوق': 'fa-bag-shopping',
    'دراسة': 'fa-book-open',
    'غيره': 'fa-ellipsis'
};

// Category Colors for Chart
const categoryColors = {
    'أكل': '#ff7043',     // Coral Orange
    'مواصلات': '#29b6f6',  // Cyan Blue
    'تسوق': '#ab47bc',     // Purple
    'دراسة': '#26a69a',    // Teal
    'غيره': '#78909c'      // Blue Grey
};

// DOM Elements
const currentDateEl = document.getElementById('currentDate');
const currentBalanceEl = document.getElementById('currentBalance');
const totalMonthlyExpensesEl = document.getElementById('totalMonthlyExpenses');
const monthlyBudgetEl = document.getElementById('monthlyBudget');
const budgetProgressBar = document.getElementById('budgetProgressBar');
const budgetProgressPercent = document.getElementById('budgetProgressPercent');
const budgetProgressLabel = document.getElementById('budgetProgressLabel');
const alertsContainer = document.getElementById('alertsContainer');
const transactionForm = document.getElementById('transactionForm');
const transactionList = document.getElementById('transactionList');
const noTransactionsEl = document.getElementById('noTransactions');
const filterCategory = document.getElementById('filterCategory');
const filterType = document.getElementById('filterType');
const topCategoryDisplay = document.getElementById('topCategoryDisplay');
const budgetUsageLabel = document.getElementById('budgetUsageLabel');
const dailyAverageDisplay = document.getElementById('dailyAverageDisplay');
const exportDataBtn = document.getElementById('exportDataBtn');
const importFileInput = document.getElementById('importFileInput');
const clearDataBtn = document.getElementById('clearDataBtn');
const submitBtn = document.getElementById('submitBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');

// Modals elements
const budgetModal = document.getElementById('budgetModal');
const editBudgetBtn = document.getElementById('editBudgetBtn');
const closeBudgetModal = document.getElementById('closeBudgetModal');
const saveBudgetBtn = document.getElementById('saveBudgetBtn');
const newBudgetInput = document.getElementById('newBudgetInput');

// Chart instance
let expenseChartInstance = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Set current date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    currentDateEl.innerText = today.toLocaleDateString('ar-JO', options);
    
    // Set default date in form to today
    document.getElementById('date').value = today.toISOString().split('T')[0];

    // Load data from LocalStorage
    loadLocalStorage();

    // Render dashboard and transactions
    updateUI();

    // Event Listeners
    setupEventListeners();

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.error(`Service Worker Error: ${err}`));
    }
});

// Setup Event Listeners
function setupEventListeners() {
    // Toggle transaction type styling in form
    const typeLabels = document.querySelectorAll('.select-type-row .type-btn');
    typeLabels.forEach(label => {
        label.addEventListener('click', (e) => {
            typeLabels.forEach(lbl => lbl.classList.remove('active'));
            label.classList.add('active');
            
            const categoryGroup = document.getElementById('categoryGroup');
            const categorySelect = document.getElementById('category');
            
            if (label.getAttribute('data-type') === 'income') {
                categoryGroup.style.opacity = '0.3';
                categoryGroup.style.pointerEvents = 'none';
                categorySelect.removeAttribute('required');
            } else {
                categoryGroup.style.opacity = '1';
                categoryGroup.style.pointerEvents = 'auto';
                categorySelect.setAttribute('required', 'required');
            }
        });
    });

    // Form submit
    transactionForm.addEventListener('submit', handleAddTransaction);

    // Cancel Edit Button
    cancelEditBtn.addEventListener('click', cancelEditTransaction);

    // Filters change
    filterCategory.addEventListener('change', updateTransactionList);
    filterType.addEventListener('change', updateTransactionList);

    // Budget modal
    editBudgetBtn.addEventListener('click', () => {
        newBudgetInput.value = state.budget;
        budgetModal.classList.add('active');
    });

    closeBudgetModal.addEventListener('click', () => {
        budgetModal.classList.remove('active');
    });

    // Save Budget
    saveBudgetBtn.addEventListener('click', () => {
        const val = parseFloat(newBudgetInput.value);
        if (!isNaN(val) && val > 0) {
            state.budget = val;
            saveLocalStorage();
            updateUI();
            budgetModal.classList.remove('active');
        } else {
            alert('يرجى إدخال قيمة صحيحة للميزانية!');
        }
    });

    // Close modal on click outside content
    window.addEventListener('click', (e) => {
        if (e.target === budgetModal) {
            budgetModal.classList.remove('active');
        }
    });

    // Export Data
    exportDataBtn.addEventListener('click', exportData);

    // Import Data
    importFileInput.addEventListener('change', importData);

    // Clear Data
    clearDataBtn.addEventListener('click', clearAllData);
}

// Local Storage operations
function loadLocalStorage() {
    const savedState = localStorage.getItem('wallet_state');
    if (savedState) {
        try {
            state = JSON.parse(savedState);
        } catch (e) {
            console.error('Error parsing local storage data', e);
        }
    } else {
        // Load default mock data for demonstration
        const today = new Date();
        const y = today.getFullYear();
        const m = String(today.getMonth() + 1).padStart(2, '0');
        
        state.transactions = [
            { id: '1', type: 'income', amount: 450.00, date: `${y}-${m}-01`, note: 'الراتب الشهري', category: 'دخل' },
            { id: '2', type: 'expense', amount: 45.00, date: `${y}-${m}-03`, note: 'مشتريات بقالة كارفور', category: 'أكل' },
            { id: '3', type: 'expense', amount: 15.00, date: `${y}-${m}-05`, note: 'بنزين سيارة وتكلفة مواصلات', category: 'مواصلات' },
            { id: '4', type: 'expense', amount: 35.00, date: `${y}-${m}-10`, note: 'كتب ومستلزمات دراسية', category: 'دراسة' },
            { id: '5', type: 'expense', amount: 80.00, date: `${y}-${m}-15`, note: 'ملابس وحذاء جديد', category: 'تسوق' }
        ];
        state.budget = 250.00;
        saveLocalStorage();
    }
}

function saveLocalStorage() {
    localStorage.setItem('wallet_state', JSON.stringify(state));
}

// Handle Form Submission (Add Transaction)
function handleAddTransaction(e) {
    e.preventDefault();
    
    const type = document.querySelector('input[name="txType"]:checked').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const note = document.getElementById('note').value.trim();
    let category = 'دخل'; // Default category for income

    if (type === 'expense') {
        category = document.getElementById('category').value;
    }

    if (isNaN(amount) || amount <= 0) {
        alert('يرجى إدخال مبلغ صحيح!');
        return;
    }

    if (editingTxId) {
        const txIndex = state.transactions.findIndex(tx => tx.id === editingTxId);
        if (txIndex !== -1) {
            state.transactions[txIndex] = {
                ...state.transactions[txIndex],
                type,
                amount,
                date,
                note: note || (type === 'income' ? 'دخل إضافي' : `مصروف ${category}`),
                category
            };
            editingTxId = null;
            submitBtn.innerText = 'إضافة المعاملة';
            cancelEditBtn.style.display = 'none';
        }
    } else {
        const newTx = {
            id: Date.now().toString(),
            type,
            amount,
            date,
            note: note || (type === 'income' ? 'دخل إضافي' : `مصروف ${category}`),
            category
        };
        state.transactions.push(newTx);
    }

    saveLocalStorage();
    updateUI();

    // Reset Form
    transactionForm.reset();
    document.getElementById('date').value = new Date().toISOString().split('T')[0];
    
    // Reset transaction type buttons UI
    document.querySelector('.select-type-row label[data-type="expense"]').click();
}

// Start editing a transaction
function startEditTransaction(id) {
    const tx = state.transactions.find(t => t.id === id);
    if (!tx) return;

    editingTxId = id;
    
    // Fill the form inputs
    document.getElementById('amount').value = tx.amount;
    document.getElementById('date').value = tx.date;
    document.getElementById('note').value = tx.note;
    
    // Select type
    const typeLabels = document.querySelectorAll('.select-type-row .type-btn');
    typeLabels.forEach(lbl => {
        if (lbl.getAttribute('data-type') === tx.type) {
            lbl.click();
        }
    });

    if (tx.type === 'expense') {
        document.getElementById('category').value = tx.category;
    }

    // Scroll to the form
    document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth' });

    // Change button text and display cancel button
    submitBtn.innerText = 'حفظ التعديل';
    cancelEditBtn.style.display = 'block';
}

// Cancel edit mode
function cancelEditTransaction() {
    editingTxId = null;
    transactionForm.reset();
    document.getElementById('date').value = new Date().toISOString().split('T')[0];
    document.querySelector('.select-type-row label[data-type="expense"]').click();
    
    submitBtn.innerText = 'إضافة المعاملة';
    cancelEditBtn.style.display = 'none';
}

// Delete Transaction
function deleteTransaction(id) {
    if (confirm('هل أنت متأكد من حذف هذه المعاملة؟')) {
        state.transactions = state.transactions.filter(tx => tx.id !== id);
        saveLocalStorage();
        updateUI();
    }
}

// Calculate values and update UI components
function updateUI() {
    // 1. Calculate Balance and Totals
    let balance = 0;
    let monthlyExpenses = 0;

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-11

    state.transactions.forEach(tx => {
        const txAmt = parseFloat(tx.amount);
        const txDate = new Date(tx.date);
        
        if (tx.type === 'income') {
            balance += txAmt;
        } else {
            balance -= txAmt;
            
            // Filter expenses of current month/year
            if (txDate.getFullYear() === currentYear && txDate.getMonth() === currentMonth) {
                monthlyExpenses += txAmt;
            }
        }
    });

    // Update main text displays
    animateNumber('currentBalance', balance);
    animateNumber('totalMonthlyExpenses', monthlyExpenses);
    
    monthlyBudgetEl.innerText = state.budget.toFixed(2);

    // 2. Budget Progress Bar
    const budgetPercent = state.budget > 0 ? (monthlyExpenses / state.budget) * 100 : 0;
    budgetProgressBar.style.width = `${Math.min(budgetPercent, 100)}%`;
    budgetProgressPercent.innerText = `${Math.round(budgetPercent)}%`;
    budgetProgressLabel.innerText = `${monthlyExpenses.toFixed(2)} / ${state.budget.toFixed(2)} د.أ`;

    // Adjust budget progress bar colors based on limits
    if (budgetPercent >= 100) {
        budgetProgressBar.style.background = 'linear-gradient(90deg, #ff1744, #ff5252)';
    } else if (budgetPercent >= 85) {
        budgetProgressBar.style.background = 'linear-gradient(90deg, #ff9100, #ffab00)';
    } else {
        budgetProgressBar.style.background = 'linear-gradient(90deg, #ffd54f, #00e676)';
    }

    // 3. Trigger Smart Budget Alerts
    renderAlerts(monthlyExpenses, state.budget);

    // 4. Update Stats & Quick Info
    updateStats(monthlyExpenses, currentYear, currentMonth);

    // 5. Update transaction list with current filters
    updateTransactionList();

    // 6. Update Pie Chart
    updateChart(currentYear, currentMonth);
}

// Alert Notification System
function renderAlerts(monthlyExpenses, budget) {
    alertsContainer.innerHTML = '';
    
    if (budget <= 0) return;

    const percentage = (monthlyExpenses / budget) * 100;

    if (percentage >= 100) {
        const diff = (monthlyExpenses - budget).toFixed(2);
        createAlertElement('danger', `تنبيه حرج: لقد تجاوزت ميزانيتك الشهرية المحددة بقيمة ${diff} د.أ! يرجى ترشيد استهلاكك.`);
    } else if (percentage >= 85) {
        const remaining = (budget - monthlyExpenses).toFixed(2);
        createAlertElement('warning', `تنبيه تحذيري: لقد استهلكت أكثر من 85% من ميزانيتك المحددة لهذا الشهر. المتبقي لك هو ${remaining} د.أ فقط.`);
    }
}

function createAlertElement(type, message) {
    const alert = document.createElement('div');
    alert.className = `alert-card ${type}`;
    
    const icon = type === 'danger' ? 'fa-triangle-exclamation' : 'fa-circle-exclamation';
    
    alert.innerHTML = `
        <div class="alert-icon"><i class="fa-solid ${icon}"></i></div>
        <div class="alert-message">${message}</div>
    `;
    alertsContainer.appendChild(alert);
}

// Update Quick Statistics Area
function updateStats(monthlyExpenses, currentYear, currentMonth) {
    // 1. Budget usage percentage text
    const percentage = state.budget > 0 ? (monthlyExpenses / state.budget) * 100 : 0;
    budgetUsageLabel.innerText = `${percentage.toFixed(0)}% مستخدم`;
    if (percentage >= 100) {
        budgetUsageLabel.style.color = 'var(--expense)';
    } else if (percentage >= 85) {
        budgetUsageLabel.style.color = 'var(--warning)';
    } else {
        budgetUsageLabel.style.color = 'var(--income)';
    }

    // 2. Average daily spending in the current month
    const today = new Date();
    let daysCount = today.getDate(); // Days elapsed in this month
    if (today.getMonth() !== currentMonth || today.getFullYear() !== currentYear) {
        // If not current month, divide by total days in that month
        daysCount = new Date(currentYear, currentMonth + 1, 0).getDate();
    }
    const dailyAverage = monthlyExpenses / (daysCount || 1);
    dailyAverageDisplay.innerText = `${dailyAverage.toFixed(2)} د.أ / يوم`;

    // 3. Top category spent on this month
    const categorySums = {};
    state.transactions.forEach(tx => {
        if (tx.type === 'expense') {
            const txDate = new Date(tx.date);
            if (txDate.getFullYear() === currentYear && txDate.getMonth() === currentMonth) {
                categorySums[tx.category] = (categorySums[tx.category] || 0) + parseFloat(tx.amount);
            }
        }
    });

    let topCategory = null;
    let maxAmount = 0;

    for (const cat in categorySums) {
        if (categorySums[cat] > maxAmount) {
            maxAmount = categorySums[cat];
            topCategory = cat;
        }
    }

    if (topCategory && maxAmount > 0) {
        const iconName = categoryIcons[topCategory] || 'fa-tag';
        topCategoryDisplay.innerHTML = `
            <span class="badge-icon" style="background-color: ${categoryColors[topCategory]}22; border-color: ${categoryColors[topCategory]}; color: ${categoryColors[topCategory]}">
                <i class="fa-solid ${iconName}"></i>
            </span>
            <span class="badge-name">${topCategory}</span>
            <span class="badge-amount">${maxAmount.toFixed(2)} د.أ</span>
        `;
    } else {
        topCategoryDisplay.innerHTML = `
            <span class="badge-icon"><i class="fa-solid fa-question"></i></span>
            <span class="badge-name">لا يوجد بيانات</span>
            <span class="badge-amount">0.00 د.أ</span>
        `;
    }
}

// Render/Filter Transactions List
function updateTransactionList() {
    const selectedCategory = filterCategory.value;
    const selectedType = filterType.value;
    
    // Clear list
    transactionList.innerHTML = '';

    // Filter transactions
    const filteredTxs = state.transactions.filter(tx => {
        const matchesCategory = selectedCategory === 'all' || tx.category === selectedCategory;
        const matchesType = selectedType === 'all' || tx.type === selectedType;
        return matchesCategory && matchesType;
    });

    // Sort by date descending
    filteredTxs.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (filteredTxs.length === 0) {
        noTransactionsEl.style.display = 'flex';
        transactionList.style.display = 'none';
    } else {
        noTransactionsEl.style.display = 'none';
        transactionList.style.display = 'flex';

        filteredTxs.forEach(tx => {
            const li = document.createElement('li');
            li.className = 'transaction-item';

            const iconClass = tx.type === 'income' ? 'fa-arrow-up-long' : (categoryIcons[tx.category] || 'fa-tag');
            const typeClass = tx.type === 'income' ? 'income-icon' : 'expense-icon';
            const amountPrefix = tx.type === 'income' ? '+' : '-';
            const amountClass = tx.type === 'income' ? 'income-amount' : 'expense-amount';

            li.innerHTML = `
                <div class="tx-icon ${typeClass}">
                    <i class="fa-solid ${iconClass}"></i>
                </div>
                <div class="tx-details">
                    <span class="tx-title">${tx.note}</span>
                    <span class="tx-note">${tx.type === 'income' ? 'إيداع دخل' : tx.category}</span>
                </div>
                <div class="tx-time-amount">
                    <span class="tx-date">${tx.date}</span>
                    <span class="tx-amount ${amountClass}">${amountPrefix}${parseFloat(tx.amount).toFixed(2)} د.أ</span>
                </div>
                <div class="tx-actions" style="display: flex; gap: 0.3rem; margin-right: 0.5rem; align-items: center;">
                    <button onclick="startEditTransaction('${tx.id}')" class="tx-edit-btn" title="تعديل المعاملة" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.9rem; padding: 0.3rem; border-radius: 6px; transition: color 0.2s, background-color 0.2s; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onclick="deleteTransaction('${tx.id}')" class="tx-delete-btn" title="حذف المعاملة">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            `;
            transactionList.appendChild(li);
        });
    }
}

// Update the Chart.js visualization
function updateChart(currentYear, currentMonth) {
    const categorySums = {
        'أكل': 0,
        'مواصلات': 0,
        'تسوق': 0,
        'دراسة': 0,
        'غيره': 0
    };

    let hasExpenses = false;

    state.transactions.forEach(tx => {
        if (tx.type === 'expense') {
            const txDate = new Date(tx.date);
            if (txDate.getFullYear() === currentYear && txDate.getMonth() === currentMonth) {
                if (categorySums[tx.category] !== undefined) {
                    categorySums[tx.category] += parseFloat(tx.amount);
                    hasExpenses = true;
                }
            }
        }
    });

    const placeholder = document.getElementById('chartPlaceholder');
    const canvas = document.getElementById('expenseChart');

    if (!hasExpenses) {
        canvas.style.display = 'none';
        placeholder.style.display = 'flex';
        if (expenseChartInstance) {
            expenseChartInstance.destroy();
            expenseChartInstance = null;
        }
        return;
    }

    canvas.style.display = 'block';
    placeholder.style.display = 'none';

    const labels = Object.keys(categorySums);
    const dataValues = Object.values(categorySums);
    const backgroundColors = labels.map(label => categoryColors[label]);

    if (expenseChartInstance) {
        // Update existing chart
        expenseChartInstance.data.datasets[0].data = dataValues;
        expenseChartInstance.update();
    } else {
        // Create new chart
        const ctx = canvas.getContext('2d');
        expenseChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: dataValues,
                    backgroundColor: backgroundColors,
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        rtl: true,
                        labels: {
                            color: '#9fa4dd',
                            font: {
                                family: 'Cairo',
                                size: 12
                            },
                            padding: 15
                        }
                    },
                    tooltip: {
                        rtl: true,
                        titleFont: { family: 'Cairo' },
                        bodyFont: { family: 'Cairo' },
                        callbacks: {
                            label: function(context) {
                                const value = context.raw || 0;
                                return ` ${context.label}: ${value.toFixed(2)} د.أ`;
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }
}

// Animate numbers for rich UI look
function animateNumber(id, endValue) {
    const el = document.getElementById(id);
    const duration = 800; // ms
    const startTime = performance.now();
    const startValue = parseFloat(el.innerText) || 0;

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function: outQuad
        const easeProgress = progress * (2 - progress);
        const currentValue = startValue + easeProgress * (endValue - startValue);
        
        el.innerText = currentValue.toFixed(2);

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            el.innerText = endValue.toFixed(2);
        }
    }

    requestAnimationFrame(updateNumber);
}

// Export wallet state as JSON file
function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `wallet_export_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Import wallet state from JSON file
function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const importedState = JSON.parse(evt.target.result);
            if (importedState && Array.isArray(importedState.transactions) && typeof importedState.budget === 'number') {
                state = importedState;
                saveLocalStorage();
                updateUI();
                alert('تم استيراد البيانات وتحديث المحفظة بنجاح!');
            } else {
                alert('فشل الاستيراد: هيكلية ملف البيانات غير صالحة!');
            }
        } catch (err) {
            alert('فشل استيراد البيانات! يرجى التأكد من اختيار ملف JSON صحيح.');
        }
    };
    reader.readAsText(file);
}

// Clear all app data
function clearAllData() {
    if (confirm('تحذير: هل أنت متأكد من رغبتك في حذف كافة المعاملات وإعادة ضبط المحفظة؟ لا يمكن التراجع عن هذا الإجراء.')) {
        state.transactions = [];
        state.budget = 300.00;
        saveLocalStorage();
        updateUI();
        alert('تم مسح كافة البيانات وإعادة تهيئة التطبيق.');
    }
}
