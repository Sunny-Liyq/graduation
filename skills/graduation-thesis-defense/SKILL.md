---
name: graduation-thesis-defense
description: Create or update a graduation thesis defense slide deck from a thesis PDF, especially HTML/CSS slides that can later export to PDF. Use when the user asks for thesis defense PPT/PDF/slides, wants content strictly grounded in their thesis, wants speaker notes, wants the paper's original figures/tables extracted and placed into slides, or references the Graduation_Thesis workflow with example assets and a Fudan logo.
---

# Graduation Thesis Defense Slides

Use this skill when preparing this user's graduation defense presentation from a thesis PDF.

## Core Contract

- Ground every claim, metric, method name, dataset, figure, table, and conclusion in the thesis PDF or user-provided materials.
- Do not invent data, experimental results, external comparisons, citations, or conclusions.
- Prefer explicit uncertainty notes over filling gaps. If the thesis contains inconsistent numbers, preserve the source and flag the inconsistency.
- Build the actual slide deck, not a landing page or a generic outline, when the user asks for implementation.
- Use HTML/CSS as the primary slide format unless the user asks for another format. PDF export is optional and should only run when requested.
- Treat `example/` as visual inspiration, not a rigid template. Do not mechanically copy its structure if a clearer, more elegant, or more content-appropriate layout is possible.

## Expected Inputs

Look first in the current project for:

- Thesis PDF, often named like `23210720201+*.pdf`.
- Visual references under `example/`.
- Logo asset such as `example/fudan_logo.png`.
- Existing output under `slides/`, `slides/assets/thesis/`, `speaker-notes.md`, and `package.json`.

If multiple thesis PDFs or logos are plausible and the choice matters, ask briefly. Otherwise use the obvious local file.

## Workflow

1. Inspect the thesis and examples before designing.
   - Use `pdfinfo` for page count and metadata.
   - Use `pdftotext -layout` to extract text and table captions.
   - Inspect example images to understand the user's taste and academic defense tone, but make independent layout decisions based on each slide's content.
2. Build a defense narrative from the thesis:
   - background and motivation
   - core challenges
   - method contributions
   - experimental evidence
   - system implementation, if present
   - summary, limitations, and future work
3. For a 20+ minute defense, default to roughly 30-40 slides unless the user specifies a different length.
4. Keep `speaker-notes.md` separate from slide pages. Slides should be concise; notes can carry the speaking script and source reminders.
5. Add the user's logo globally through CSS when possible, rather than editing every slide by hand.
6. Extract every thesis figure and table as image assets and place them at the exact slide position where that content is being explained.
   - Store extracted assets under `slides/assets/thesis/`.
   - Preserve captions or source labels so the slide remains traceable to the paper.
   - If a table spans pages, crop or stitch it into a readable image.
   - Understand what each figure/table means before placing it. Map it to the slide's topic, claim, method step, experiment, or conclusion.
   - Do not dump all figures/tables onto one slide or into a disconnected appendix. Each visual must support the specific explanation on that page or a clearly related backup/evidence page.
   - Use extracted originals as evidence panels integrated with the narrative. Redrawn charts may supplement them but must not replace the requirement to include all original figures/tables.
7. Validate the output locally:
   - slide count and expected section titles
   - no text overflow on 16:9 pages
   - all referenced images exist
   - all thesis figures/tables are represented
   - no PDF export unless the user asked for it

## HTML Slide Conventions

- Use a `slides/index.html` deck with one `.slide` per page.
- Use `slides/styles.css` for layout, print sizing, and global logo placement.
- Use 16:9 pages suitable for browser playback and PDF export.
- Keep the visual tone academic and defense-focused: white or light backgrounds, restrained blue accents, clear section structure, compact evidence cards, and readable charts/tables.
- Avoid long copied paragraphs from the thesis. Convert prose into thesis-supported bullets, diagrams, comparison blocks, and evidence summaries.
- For every slide, plan the figure position, text amount, hierarchy, and whitespace according to clarity, aesthetics, and narrative logic. The example deck may inform style, but the actual slide composition should be optimized for the specific figure/table and what the speaker needs to explain.
- Design each slide as a complete explanation unit: the title states the point, the figure/table provides evidence, and nearby bullets explain how to read it.
- Place visuals close to the text that discusses them. Use split layouts, annotated figure callouts, side-by-side comparisons, or compact grids when appropriate.
- Avoid excessive blank space. Rebalance the slide with larger visuals, denser but readable evidence panels, or concise explanatory notes when a page feels empty.
- Do not overcrowd. If a figure/table needs space to be readable, create a dedicated slide for that specific visual and its explanation instead of shrinking it into illegibility.

## Data Integrity Checklist

Before finalizing, verify:

- Method names match the thesis exactly.
- Datasets and metrics are copied from the thesis, not inferred.
- Figure/table numbering is complete.
- Any discrepancy between chapter tables and summary text is called out in notes or a checklist.
- Speaker notes do not introduce unsupported claims.

## User Preferences Captured From Prior Work

- The deck is for a graduate thesis defense.
- The user wants HTML styling first, with PDF conversion handled later unless explicitly requested.
- The content must come from the thesis PDF and must not be fabricated.
- The user provided examples for reference only. Follow their general taste when helpful, but do not force the PPT to match the example structure. Prefer clear, elegant, reasonable slide planning.
- The Fudan logo should appear at the top-right of every page when available.
- All figures and tables from the thesis should be extracted and placed in context, not ignored.
- Figures and tables must be semantically matched to the exact slide content and explanation. The user does not want a simple image gallery or a slide that piles all visuals together.
- Every visual-heavy slide should be carefully typeset: good alignment, minimal wasted whitespace, readable captions, and enough explanatory text for defense speaking.
