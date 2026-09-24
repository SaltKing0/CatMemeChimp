$memeRoot = Split-Path -Parent $PSScriptRoot
$memeDesktop = [Environment]::GetFolderPath('Desktop')
$memeShortcutPath = Join-Path $memeDesktop 'MEMECHIMP.lnk'
$memeShell = New-Object -ComObject WScript.Shell
$memeShortcut = $memeShell.CreateShortcut($memeShortcutPath)
$memeShortcut.TargetPath = Join-Path $env:WINDIR 'System32\wscript.exe'
$memeShortcut.Arguments = '"' + (Join-Path $memeRoot 'start.vbs') + '"'
$memeShortcut.WorkingDirectory = $memeRoot
$memeShortcut.IconLocation = (Join-Path $memeRoot 'public\assets\chimp.ico') + ',0'
$memeShortcut.Description = 'Good memes. Questionable behavior. Your MEMECHIMP archive.'
$memeShortcut.Save()
Write-Output ('Desktop shortcut installed: ' + $memeShortcutPath)
