# Gebruik het volledige pad naar gh (werkt ook als gh niet in PATH staat)
$gh = "C:\Program Files\GitHub CLI\gh.exe"

& $gh auth login
& $gh repo create glorie-mariage --private --source=. --remote=origin --push --description "Invitation mariage Gloire et Annabelle"

Write-Host "Klaar: https://github.com/KaatCAIBXL/glorie-mariage"
Write-Host "Site: https://kaatcaibxl.github.io/glorie-mariage/"
