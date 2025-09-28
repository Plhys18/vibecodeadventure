#!/bin/bash

# Deploy script pro vibecodeadventure GitHub Pages
# Tento script mergne main branch do gh-pages a spustí deploy

set -e  # Ukončit při chybě

echo "🚀 Spouštím deploy procesu..."

# Zkontrolovat, že jsme v git repozitáři
if [ ! -d ".git" ]; then
    echo "❌ Chyba: Nejste v git repozitáři!"
    exit 1
fi

# Uložit aktuální branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Aktuální branch: $CURRENT_BRANCH"

# Zkontrolovat, že main branch je čistý
echo "🔍 Kontroluji stav main branch..."
git checkout main
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Chyba: Main branch má necommitované změny!"
    echo "🔧 Prosím commitněte všechny změny před deployem."
    git status
    exit 1
fi

# Pull nejnovější změny z main
echo "⬇️ Stahuji nejnovější změny z origin/main..."
git pull origin main

# Přepnout na gh-pages branch
echo "🔄 Přepínám na gh-pages branch..."
git checkout gh-pages

# Merge main do gh-pages
echo "🔀 Merguji main branch do gh-pages..."
git merge main -m "Deploy: merge main branch $(date +%Y-%m-%d_%H:%M:%S)"

# Push na origin
echo "⬆️ Pushuju na origin/gh-pages..."
git push origin gh-pages

echo "✅ Deploy úspěšně dokončen!"
echo "🌐 Web bude dostupný za několik minut na: https://plhys18.github.io/vibecodeadventure/"
echo "📋 Můžete sledovat stav deploy na: https://github.com/Plhys18/vibecodeadventure/actions"

# Vrátit se na původní branch
if [ "$CURRENT_BRANCH" != "gh-pages" ]; then
    echo "🔙 Vracím se na původní branch: $CURRENT_BRANCH"
    git checkout "$CURRENT_BRANCH"
fi

echo "🎉 Hotovo!"