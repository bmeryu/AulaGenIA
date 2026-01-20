$path = "campus-curso-ia-v2.html"
$content = Get-Content $path -Encoding UTF8
$newContent = @()
# Add lines before the script
$newContent += $content[0..603]
# Add the new script tag
$newContent += '<script src="campus-curso-ia-v2.js" defer></script>'
# Add lines after the script (skipping the inline script block)
$newContent += $content[613..($content.Count - 1)]
$newContent | Set-Content $path -Encoding UTF8
Write-Host "Updated $path"
