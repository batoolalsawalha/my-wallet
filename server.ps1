$port = 8000
$localPath = "C:\Users\bsawa\OneDrive\Desktop\personal-finance-app"

# Create listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.AuthenticationSchemes = [System.Net.AuthenticationSchemes]::Anonymous

try {
    $listener.Start()
    Write-Host "Server running at http://localhost:$port/"
    
    # Open Microsoft Edge automatically to localhost url
    Start-Process "msedge.exe" "http://localhost:$port/index.html"
    
    # Main server loop
    while ($listener.IsListening) {
        $response = $null
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/" -or $urlPath -eq "") { $urlPath = "/index.html" }
            
            # Build file path
            # Remove leading slash to resolve path correctly
            $relPath = $urlPath.Substring(1)
            $filePath = [System.IO.Path]::Combine($localPath, $relPath)
            
            if (Test-Path $filePath -PathType Leaf) {
                # Detect MIME-Type
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".svg"  { "image/svg+xml" }
                    ".json" { "application/json; charset=utf-8" }
                    default { "application/octet-stream" }
                }
                
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("File Not Found")
                $response.ContentType = "text/plain"
                $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            }
            $response.Close()
        } catch {
            Write-Host "Request handler error: $_"
            if ($response -ne $null) {
                try { $response.Close() } catch {}
            }
        }
    }
} catch {
    Write-Host "Server startup error: $_"
} finally {
    if ($listener -ne $null) {
        $listener.Close()
    }
}
