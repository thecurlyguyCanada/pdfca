#!/bin/bash

FILES=(
  "utils/haptics.ts"
  "utils/pdfUtils.ts"
  "utils/storageUtils.ts"
  "utils/errorLogger.ts"
  "components/PdfPageThumbnail.tsx"
  "components/SignPdfTool.tsx"
  "components/ToolInterface.tsx"
  "components/CropPdfTool.tsx"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    # Check if logger is already imported
    if ! grep -q "from.*logger" "$file"; then
      # Check if file starts with 'use client'
      if head -1 "$file" | grep -q "'use client'"; then
        # Add after 'use client' directive
        sed -i "2i\\import { logger } from '@/utils/logger';" "$file"
        echo "Added logger import to $file (after 'use client')"
      elif head -1 "$file" | grep -q "import"; then
        # Add at the top with other imports        sed -i "1i\\import { logger } from '@/utils/logger';" "$file"
        echo "Added logger import to $file (at top)"
      else
        # Add at the very beginning
        sed -i "1i\\import { logger } from '@/utils/logger';\n" "$file"
        echo "Added logger import to $file (beginning)"
      fi
    else
      echo "Logger already imported in $file"
    fi
  fi
done
