# Task: Deep Codebase Bug Audit

## Objective
Conduct a comprehensive audit of the `pdfca` codebase to identify and resolve remaining bugs, inconsistencies, and potential runtime errors, with a strong focus on Internationalization (i18n), functionality, and code quality.

## Areas of Focus

### 1. Internationalization (i18n) Gaps
- **Missing Translations:** Compare `en` keys in `utils/i18n.ts` against `fr` and `pt` to ensure 100% coverage.
- **Hardcoded Strings:** Scan critical components (Layouts, Shared Components, Tools) for hardcoded text that should be localized.
- **Dynamic Routing:** Verify that all `Link` components correctly prepend the `/${lang}` segment.

### 2. Runtime Safety & Logic
- **Tool Configuration:** Ensure all tools used in pages have valid entries in `toolConfig.ts`.
- **Undefined Checks:** Review `getLocalizedToolConfig` and similar helper calls for safe handling of undefined returns.
- **Hydration Issues:** Check for patterns known to cause text content mismatches (e.g., direct use of `typeof window`, Date formatting).

### 3. Metadata & SEO
- **Title/Description:** Verify `generateMetadata` exists and returns localized values for all major pages.
- **Alternates/Canonicals:** Check that canonical tags appropriately reflect the current language URL.

### 4. Component Integrity
- **Prop Mismatches:** (Like the one just fixed with `ToolPromo`) - verification of other shared components.
- **Unused Code:** Identify dead files or unused exports that clutter the repo.

## Proposed Plan
1.  **Automated Scan:** functional check of `i18n` objects.
2.  **Manual Code Review:** Targeted read of `components/PageLayout.tsx`, `components/ToolPromo.tsx` (re-check), and `app/[lang]/page.tsx`.
3.  **Fix Implementation:** Create a batch of fixes for identified issues.
4.  **Building:** Run full build to ensure no regressions.
