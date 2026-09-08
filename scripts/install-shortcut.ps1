$catmemeRoot = Split-Path -Parent $PSScriptRoot
$catmemeDesktop = [Environment]::GetFolderPath('Desktop')
$catmemeShortcutPath = Join-Path $catmemeDesktop 'CATMEMECHIMP.lnk'
$catmemeShell = New-Object -ComObject WScript.Shell
$catmemeShortcut = $catmemeShell.CreateShortcut($catmemeShortcutPath)
$catmemeShortcut.TargetPath = Join-Path $env:WINDIR 'System32\wscript.exe'
$catmemeShortcut.Arguments = '"' + (Join-Path $catmemeRoot 'start.vbs') + '"'
$catmemeShortcut.WorkingDirectory = $catmemeRoot
$catmemeShortcut.IconLocation = (Join-Path $catmemeRoot 'public\assets\chimp.ico') + ',0'
$catmemeShortcut.Description = 'Good cats. Questionable behavior. Your CATMEMECHIMP archive.'
$catmemeShortcut.Save()
Write-Output ('Desktop shortcut installed: ' + $catmemeShortcutPath)
