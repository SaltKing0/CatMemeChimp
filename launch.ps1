$ErrorActionPreference = 'Stop'
$memeRoot = $PSScriptRoot
$memeLog = Join-Path $memeRoot 'out'
New-Item -ItemType Directory -Force -Path $memeLog | Out-Null
$memeUrl = 'http://127.0.0.1:8197/'
function Test-Meme {
    try { $memeHealth = Invoke-RestMethod -Uri ($memeUrl + 'api/health') -TimeoutSec 2; return ($memeHealth.app -eq 'MEMECHIMP') } catch { return $false }
}
if (-not (Test-Meme)) {
    $memeNode = (Get-Command node -ErrorAction Stop).Source
    Start-Process -FilePath $memeNode -ArgumentList ('"' + (Join-Path $memeRoot 'server.mjs') + '"') -WorkingDirectory $memeRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $memeRoot 'out\server.log') -RedirectStandardError (Join-Path $memeRoot 'out\server-error.log')
    for ($memeAttempt = 0; $memeAttempt -lt 20; $memeAttempt++) {
        if (Test-Meme) { break }
        Start-Sleep -Milliseconds 250
    }
    if (-not (Test-Meme)) { throw 'MEMECHIMP could not start. Check out/server-error.log; port 8197 may be in use.' }
}
$memeBrowser = @(
    "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
    "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
if ($memeBrowser) {
    $memeProfile = Join-Path $env:LOCALAPPDATA 'MEMECHIMP\browser-profile'
    Start-Process -FilePath $memeBrowser -ArgumentList @('--app=' + $memeUrl, '--user-data-dir="' + $memeProfile + '"', '--no-first-run', '--no-default-browser-check', '--disable-session-crashed-bubble')
} else { Start-Process $memeUrl }
