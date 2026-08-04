# Watch-and-Commit Script
# This PowerShell script monitors the portfolio-site directory for any file changes.
# When a change is detected, it automatically stages all changes and creates a git commit.
# Commit message: "new change"

# Ensure we are in the script's directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

# Initialize FileSystemWatcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $scriptDir
$watcher.IncludeSubdirectories = $true
$watcher.Filter = "*.*"
$watcher.EnableRaisingEvents = $true

# Define the action to take on change events
$action = {
    # Debounce rapid events by waiting a short time
    Start-Sleep -Milliseconds 500
    # Stage all changes
    git add -A
    # Commit with a generic message
    git commit -m "new change"
}

# Register events for change types
Register-ObjectEvent $watcher "Changed" -Action $action | Out-Null
Register-ObjectEvent $watcher "Created" -Action $action | Out-Null
Register-ObjectEvent $watcher "Deleted" -Action $action | Out-Null
Register-ObjectEvent $watcher "Renamed" -Action $action | Out-Null

Write-Host "Watching $scriptDir for changes. Press Ctrl+C to stop."
# Keep the script running
while ($true) {
    Start-Sleep -Seconds 1
}