$ErrorActionPreference = 'Stop'
$catmemeRoot = $PSScriptRoot
$catmemeUrl = 'http://127.0.0.1:8197/'
function Test-CatMeme {
    try { $catmemeHealth = Invoke-RestMethod -Uri ($catmemeUrl + 'api/health') -TimeoutSec 2; return ($catmemeHealth.app -eq 'CATMEMECHIMP') } catch { return $false }
}
if (-not (Test-CatMeme)) {
    $catmemeNode = (Get-Command node -ErrorAction Stop).Source
    Start-Process -FilePath $catmemeNode -ArgumentList ('"' + (Join-Path $catmemeRoot 'server.mjs') + '"') -WorkingDirectory $catmemeRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $catmemeRoot 'out\server.log') -RedirectStandardError (Join-Path $catmemeRoot 'out\server-error.log')
    for ($catmemeAttempt = 0; $catmemeAttempt -lt 20; $catmemeAttempt++) {
        if (Test-CatMeme) { break }
        Start-Sleep -Milliseconds 250
    }
    if (-not (Test-CatMeme)) { throw 'CATMEMECHIMP could not start. Check out/server-error.log; port 8197 may be in use.' }
}
$catmemeBrowser = @(
    "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
    "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
if ($catmemeBrowser) {
    $catmemeProfile = Join-Path $env:LOCALAPPDATA 'CATMEMECHIMP\browser-profile'
    Start-Process -FilePath $catmemeBrowser -ArgumentList @('--app=' + $catmemeUrl, '--user-data-dir="' + $catmemeProfile + '"', '--no-first-run', '--no-default-browser-check', '--disable-session-crashed-bubble')
} else { Start-Process $catmemeUrl }
