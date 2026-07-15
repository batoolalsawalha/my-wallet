// Translations Dictionary
const translations = {
    ar: {
        title: "MyWallet - إدارة المصاريف الشخصية",
        subTitle: "مساعدك المالي الشخصي بالدينار الأردني",
        balance: "الرصيد الحالي",
        monthlyExpenses: "مصاريف هذا الشهر",
        monthlyBudget: "الميزانية الشهرية",
        currency: "د.أ",
        addTransaction: "إضافة مصروف أو دخل",
        expense: "مصروف",
        income: "دخل",
        amount: "المبلغ (د.أ)",
        category: "التصنيف",
        selectCategory: "اختر التصنيف...",
        date: "التاريخ",
        note: "ملاحظة",
        notePlaceholder: "مثال: شراء بقالة، بنزين السيارة...",
        submitAdd: "إضافة المعاملة",
        submitEdit: "حفظ التعديل",
        cancelEdit: "إلغاء التعديل",
        quickStats: "إحصائيات سريعة",
        topSpending: "أكثر فئة صرفاً هذا الشهر:",
        noData: "لا يوجد بيانات",
        budgetComparison: "مقارنة بميزانية الشهر:",
        budgetUsed: "مستخدم",
        dailyAverage: "المتوسط اليومي للصرف:",
        perDay: "د.أ / يوم",
        chartTitle: "توزيع المصاريف للشهر الحالي",
        chartPlaceholder: "أضف مصاريف هذا الشهر لعرض الرسم البياني التوضيحي",
        historyHeader: "سجل المعاملات",
        allCategories: "كل التصنيفات",
        allTransactions: "كل المعاملات",
        emptyState: "لا يوجد أي معاملات مسجلة بعد. ابدأ بإضافة مصروف أو دخل!",
        exportJson: "تصدير البيانات (JSON)",
        exportPdf: "تصدير كـ PDF (طباعة)",
        importData: "استيراد البيانات",
        clearData: "مسح البيانات",
        copyright: "MyWallet © 2026 - إدارة الأموال بكل سهولة وذكاء",
        editBudgetTitle: "تعديل الميزانية الشهرية",
        newBudgetLabel: "الميزانية الجديدة بالدينار الأردني (د.أ)",
        saveChanges: "حفظ التغييرات",
        deleteConfirm: "هل أنت متأكد من حذف هذه المعاملة؟",
        clearConfirm: "تحذير: هل أنت متأكد من رغبتك في حذف كافة المعاملات وإعادة ضبط المحفظة؟ لا يمكن التراجع عن هذا الإجراء.",
        clearAlert: "تم مسح كافة البيانات وإعادة تهيئة التطبيق.",
        importSuccess: "تم استيراد البيانات وتحديث المحفظة بنجاح!",
        importError: "فشل الاستيراد: هيكلية ملف البيانات غير صالحة!",
        importFailed: "فشل استيراد البيانات! يرجى التأكد من اختيار ملف JSON صحيح.",
        budgetInputAlert: "يرجى إدخال قيمة صحيحة للميزانية!",
        amountInputAlert: "يرجى إدخال مبلغ صحيح!",
        alertWarning: "تنبيه تحذيري: لقد استهلكت أكثر من 85% من ميزانيتك المحددة لهذا الشهر. المتبقي لك هو {remaining} د.أ فقط.",
        alertDanger: "تنبيه حرج: لقد تجاوزت ميزانيتك الشهرية المحددة بقيمة {diff} د.أ! يرجى ترشيد استهلاكك.",
        incomeDepositText: "إيداع دخل",
        catFood: "أكل",
        catTransport: "مواصلات",
        catShopping: "تسوق",
        catEducation: "دراسة",
        catOthers: "غيره",
        categories: {
            'أكل': 'أكل',
            'مواصلات': 'مواصلات',
            'تسوق': 'تسوق',
            'دراسة': 'دراسة',
            'غيره': 'غيره',
            'دخل': 'دخل'
        }
    },
    en: {
        title: "MyWallet - Personal Finance",
        subTitle: "Your Personal Finance Assistant in JOD",
        balance: "Current Balance",
        monthlyExpenses: "Monthly Expenses",
        monthlyBudget: "Monthly Budget",
        currency: "JOD",
        addTransaction: "Add Expense or Income",
        expense: "Expense",
        income: "Income",
        amount: "Amount (JOD)",
        category: "Category",
        selectCategory: "Select Category...",
        date: "Date",
        note: "Note",
        notePlaceholder: "e.g., Grocery shopping, car fuel...",
        submitAdd: "Add Transaction",
        submitEdit: "Save Changes",
        cancelEdit: "Cancel Edit",
        quickStats: "Quick Stats",
        topSpending: "Top spending category this month:",
        noData: "No data",
        budgetComparison: "Budget utilization:",
        budgetUsed: "used",
        dailyAverage: "Daily Average Spending:",
        perDay: "JOD / day",
        chartTitle: "Expenses Distribution (Current Month)",
        chartPlaceholder: "Add expenses this month to display the chart",
        historyHeader: "Transaction History",
        allCategories: "All Categories",
        allTransactions: "All Transactions",
        emptyState: "No transactions recorded yet. Start by adding an expense or income!",
        exportJson: "Export Data (JSON)",
        exportPdf: "Export to PDF (Print)",
        importData: "Import Data",
        clearData: "Clear Data",
        copyright: "MyWallet © 2026 - Smart & Easy Money Management",
        editBudgetTitle: "Edit Monthly Budget",
        newBudgetLabel: "New Budget in Jordanian Dinar (JOD)",
        saveChanges: "Save Changes",
        deleteConfirm: "Are you sure you want to delete this transaction?",
        clearConfirm: "Warning: Are you sure you want to delete all transactions and reset the wallet? This action cannot be undone.",
        clearAlert: "All data cleared and wallet reset.",
        importSuccess: "Data imported and wallet updated successfully!",
        importError: "Import failed: Invalid data structure!",
        importFailed: "Failed to import data! Make sure you select a valid JSON file.",
        budgetInputAlert: "Please enter a valid budget amount!",
        amountInputAlert: "Please enter a valid amount!",
        alertWarning: "Warning Alert: You have used over 85% of your monthly budget. Only {remaining} JOD remaining.",
        alertDanger: "Critical Alert: You have exceeded your monthly budget by {diff} JOD! Please reduce spending.",
        incomeDepositText: "Income Deposit",
        catFood: "Food",
        catTransport: "Transport",
        catShopping: "Shopping",
        catEducation: "Education",
        catOthers: "Others",
        categories: {
            'أكل': 'Food',
            'مواصلات': 'Transport',
            'تسوق': 'Shopping',
            'دراسة': 'Education',
            'غيره': 'Others',
            'دخل': 'Income'
        }
    }
};

// App state management
let state = {
    transactions: [],
    budget: 300.00, // Default monthly budget in JOD
    lang: 'ar'     // Default language
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
const exportPdfBtn = document.getElementById('exportPdfBtn');
const langToggleBtn = document.getElementById('langToggleBtn');

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
    // Load data from LocalStorage
    loadLocalStorage();

    // Set Language and UI Direction
    setLanguage(state.lang);

    // Set default date in form to today
    document.getElementById('date').value = new Date().toISOString().split('T')[0];

    // Event Listeners
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Language Toggle button
    langToggleBtn.addEventListener('click', () => {
        const nextLang = state.lang === 'ar' ? 'en' : 'ar';
        setLanguage(nextLang);
    });

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
            alert(translations[state.lang].budgetInputAlert);
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
    
    // Export PDF
    exportPdfBtn.addEventListener('click', () => window.print());

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
            // Default lang if missing
            if (!state.lang) state.lang = 'ar';
        } catch (e) {
            console.error('Error parsing local storage data', e);
        }
    } else {
        state.transactions = [];
        state.budget = 300.00;
        state.lang = 'ar';
        saveLocalStorage();
    }
}

function saveLocalStorage() {
    localStorage.setItem('wallet_state', JSON.stringify(state));
}

// Language and Translation handler
function setLanguage(lang) {
    state.lang = lang;
    saveLocalStorage();

    // Toggle button text
    langToggleBtn.innerText = lang === 'ar' ? 'EN' : 'عربي';

    // Set HTML Dir and Lang
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Translate DOM Elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Translate Placeholders
    document.getElementById('note').placeholder = translations[lang].notePlaceholder;

    // Refresh dynamic contents
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    currentDateEl.innerText = today.toLocaleDateString(lang === 'ar' ? 'ar-JO' : 'en-US', options);

    // Redraw interface
    updateUI();
}

// Handle Form Submission (Add / Edit Transaction)
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
        alert(translations[state.lang].amountInputAlert);
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
                note: note || (type === 'income' ? translations[state.lang].incomeDepositText : `${translations[state.lang].expense} ${translations[state.lang].categories[category] || category}`),
                category
            };
            editingTxId = null;
            submitBtn.innerText = translations[state.lang].submitAdd;
            cancelEditBtn.style.display = 'none';
        }
    } else {
        const newTx = {
            id: Date.now().toString(),
            type,
            amount,
            date,
            note: note || (type === 'income' ? translations[state.lang].incomeDepositText : `${translations[state.lang].expense} ${translations[state.lang].categories[category] || category}`),
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
    submitBtn.innerText = translations[state.lang].submitEdit;
    cancelEditBtn.style.display = 'block';
}

// Cancel edit mode
function cancelEditTransaction() {
    editingTxId = null;
    transactionForm.reset();
    document.getElementById('date').value = new Date().toISOString().split('T')[0];
    document.querySelector('.select-type-row label[data-type="expense"]').click();
    
    submitBtn.innerText = translations[state.lang].submitAdd;
    cancelEditBtn.style.display = 'none';
}

// Delete Transaction
function deleteTransaction(id) {
    if (confirm(translations[state.lang].deleteConfirm)) {
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
    budgetProgressLabel.innerText = `${monthlyExpenses.toFixed(2)} / ${state.budget.toFixed(2)} ${translations[state.lang].currency}`;

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
        const msg = translations[state.lang].alertDanger.replace('{diff}', diff);
        createAlertElement('danger', msg);
    } else if (percentage >= 85) {
        const remaining = (budget - monthlyExpenses).toFixed(2);
        const msg = translations[state.lang].alertWarning.replace('{remaining}', remaining);
        createAlertElement('warning', msg);
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
    budgetUsageLabel.innerText = `${percentage.toFixed(0)}% ${translations[state.lang].budgetUsed}`;
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
    dailyAverageDisplay.innerText = `${dailyAverage.toFixed(2)} ${translations[state.lang].currency} / ${state.lang === 'ar' ? 'يوم' : 'day'}`;

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
        const translatedCat = translations[state.lang].categories[topCategory] || topCategory;
        topCategoryDisplay.innerHTML = `
            <span class="badge-icon" style="background-color: ${categoryColors[topCategory]}22; border-color: ${categoryColors[topCategory]}; color: ${categoryColors[topCategory]}">
                <i class="fa-solid ${iconName}"></i>
            </span>
            <span class="badge-name">${translatedCat}</span>
            <span class="badge-amount">${maxAmount.toFixed(2)} ${translations[state.lang].currency}</span>
        `;
    } else {
        topCategoryDisplay.innerHTML = `
            <span class="badge-icon"><i class="fa-solid fa-question"></i></span>
            <span class="badge-name">${translations[state.lang].noData}</span>
            <span class="badge-amount">0.00 ${translations[state.lang].currency}</span>
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
            const displayNote = tx.type === 'income' ? (tx.note === 'الراتب الشهري' && state.lang === 'en' ? 'Monthly Salary' : tx.note) : tx.note;

            li.innerHTML = `
                <div class="tx-icon ${typeClass}">
                    <i class="fa-solid ${iconClass}"></i>
                </div>
                <div class="tx-details">
                    <span class="tx-title">${displayNote}</span>
                    <span class="tx-note">${tx.type === 'income' ? translations[state.lang].incomeDepositText : (translations[state.lang].categories[tx.category] || tx.category)}</span>
                </div>
                <div class="tx-time-amount">
                    <span class="tx-date">${tx.date}</span>
                    <span class="tx-amount ${amountClass}">${amountPrefix}${parseFloat(tx.amount).toFixed(2)} ${translations[state.lang].currency}</span>
                </div>
                <div class="tx-actions" style="display: flex; gap: 0.3rem; margin-right: 0.5rem; margin-left: 0.5rem; align-items: center;">
                    <button onclick="startEditTransaction('${tx.id}')" class="tx-edit-btn" title="${translations[state.lang].submitEdit}" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.9rem; padding: 0.3rem; border-radius: 6px; transition: color 0.2s, background-color 0.2s; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onclick="deleteTransaction('${tx.id}')" class="tx-delete-btn" title="Delete">
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

    const originalLabels = Object.keys(categorySums);
    const labels = originalLabels.map(cat => translations[state.lang].categories[cat] || cat);
    const dataValues = Object.values(categorySums);
    const backgroundColors = originalLabels.map(label => categoryColors[label]);

    if (expenseChartInstance) {
        // Update existing chart
        expenseChartInstance.data.labels = labels;
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
                        rtl: state.lang === 'ar',
                        labels: {
                            color: '#9fa4dd',
                            font: {
                                family: state.lang === 'ar' ? 'Cairo' : 'Plus Jakarta Sans',
                                size: 12
                            },
                            padding: 15
                        }
                    },
                    tooltip: {
                        rtl: state.lang === 'ar',
                        titleFont: { family: state.lang === 'ar' ? 'Cairo' : 'Plus Jakarta Sans' },
                        bodyFont: { family: state.lang === 'ar' ? 'Cairo' : 'Plus Jakarta Sans' },
                        callbacks: {
                            label: function(context) {
                                const value = context.raw || 0;
                                return ` ${context.label}: ${value.toFixed(2)} ${translations[state.lang].currency}`;
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
                if (!state.lang) state.lang = 'ar';
                saveLocalStorage();
                setLanguage(state.lang);
                alert(translations[state.lang].importSuccess);
            } else {
                alert(translations[state.lang].importError);
            }
        } catch (err) {
            alert(translations[state.lang].importFailed);
        }
    };
    reader.readAsText(file);
}

// Clear all app data
function clearAllData() {
    if (confirm(translations[state.lang].clearConfirm)) {
        state.transactions = [];
        state.budget = 300.00;
        state.lang = 'ar';
        saveLocalStorage();
        setLanguage('ar');
        alert(translations[state.lang].clearAlert);
    }
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.error(`Service Worker Error: ${err}`));
}
