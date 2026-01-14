$content = Get-Content './maestro-prompts-app.html' -Raw -Encoding UTF8
$content = $content -replace '"copiaron"', '"visitas"'
$content = $content -replace '"usando"', '"visitas"'
$content = $content -replace '"aplicaron"', '"visitas"'
$content = $content -replace '"compartieron"', '"visitas"'
$content | Set-Content './maestro-prompts-app.html' -NoNewline -Encoding UTF8
Write-Host "Replacements completed successfully"
