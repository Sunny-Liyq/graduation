---
name: defense-slide-table-redraw
description: Redraw image-based tables in this graduation thesis defense HTML slide deck as readable HTML tables. Use when the user asks to replace table screenshots/images, keep table style consistent with pages 29/30, adjust slide table width/height/font size, prevent overlapping table text, or optimize dense evidence-table slides.
---

# Defense Slide Table Redraw

Use this skill for the user's thesis defense deck when tables appear as screenshots or extracted images and should be rebuilt as HTML/CSS tables.

## Core Rules

- Replace table images with semantic HTML: `.table-card` wrapping `table.generated-table`.
- Keep the visual language consistent with the existing pages 29/30 table style: light card, blue header row, thin borders, emphasized result row via `.emphasis`.
- Preserve all numeric values exactly from the source image, thesis PDF, or existing slide text. Do not infer missing values.
- Keep table edits slide-scoped with selectors such as `#slide-18 .specific-table` so other pages are not disturbed.
- If the table is dense, prefer a dedicated lower full-width table area instead of squeezing it into a side column.

## Layout Preferences Captured

- For evidence-heavy slides, use a compact upper summary and a large lower table.
- Tables may be anchored near the bottom of the white slide area when requested; keep clear of the blue footer.
- Width should usually remain aligned to the slide content margins (`left/right: 0.58in` in this deck).
- If the user asks for larger table height or font, adjust both the table area and the upper summary area so the page does not overlap.
- Never allow table text to visually overlap. If a requested font size causes overlap, reduce the font enough to avoid collision and explain that choice.
- For long method names, widen the text columns first, narrow numeric columns second, and enable wrapping with `overflow-wrap: anywhere`.
- Prefer readable column widths over mechanically preserving equal-width columns.

## Practical Workflow

1. Inspect the target slide HTML and existing CSS.
2. View the source table image when needed and transcribe values carefully.
3. Replace the image with a `.table-card` and `table.generated-table`.
4. Add slide-local CSS for:
   - table area size and placement
   - font size and line height
   - column widths
   - cell padding
   - caption size
   - text wrapping
5. Run static checks:
   - slide count remains unchanged
   - old image path is no longer referenced
   - key values and emphasized row are present
6. If `node`/`npm` are unavailable, report that only static checks were run.

## Anti-Patterns

- Do not leave table screenshots when the user asked for redrawing.
- Do not let enlarged fonts overlap across columns.
- Do not use global `.generated-table` overrides for one slide's problem.
- Do not make the upper summary so compressed that it looks like a thin strip unless the user explicitly prioritizes table space.
