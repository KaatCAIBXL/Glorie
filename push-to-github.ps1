# Eenmalig: inloggen op GitHub (volg de instructies in de terminal)
gh auth login

# Repository aanmaken en code uploaden
# Pas de naam aan indien gewenst (bijv. glorie-mariage)
gh repo create glorie-mariage --private --source=. --remote=origin --push --description "Invitation mariage Gloire et Annabelle"

Write-Host ""
Write-Host "Klaar! Open je repo op: https://github.com/KaatCAIBXL/glorie-mariage"
Write-Host "Activeer GitHub Pages: Settings -> Pages -> branch main, folder / (root)"
