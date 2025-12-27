#!/bin/bash
# Replace hardcoded URLs with environment variable across key files

FILES=(
  "app/sitemap.ts"
  "app/[lang]/page.tsx"
  "app/[lang]/(tools)/[tool]/page.tsx"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    sed -i "s/const baseUrl = 'https:\/\/www\.pdfcanada\.ca'/const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https:\/\/www.pdfcanada.ca'/g" "$file"
    echo "Updated $file"
  fi
done
