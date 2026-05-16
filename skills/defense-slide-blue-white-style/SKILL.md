---
name: defense-slide-blue-white-style
description: Apply the user's preferred blue-white academic defense slide style for the Graduation_Thesis HTML deck. Use when the user asks to follow image copy 2/3 or style examples, make pages visually unified, add semantic icons such as shields and microphones, fix bottom summary/footer layout, or restyle opening/summary/method slides.
---

# Defense Slide Blue-White Style

Use this skill when styling this user's thesis defense HTML slides.

## Source References

- Primary style references: `example/style/image copy 2.png` and `example/style/image copy 3.png`.
- Additional content references: `example/style/style1.png`, `style2.png`, `style3.png`.

## Visual Rules

- Use a clean blue-white academic defense style:
  - white page background
  - light blue section panels (`var(--blue-3)` or similar)
  - primary blue emphasis (`var(--blue)`)
  - thin pale-blue borders
  - dark navy body text
- Prefer large, clear headings with a blue accent divider.
- Use spacious cards and panels. Avoid cramped stacked text.
- Keep cards at modest radius around 8px.
- Use only one bottom summary bar per page: the built-in slide footer via `data-footer`.
- Do not add an extra internal bottom strip when the slide already has a footer.
- Ensure bottom content is fully visible above the footer.
- Treat user-provided slide images as content evidence, not decorative crops: scale images to fit their containers and keep them fully visible. Prefer `object-fit: contain`; do not crop with `object-fit: cover` unless the user explicitly asks for a cropped hero/background effect.
- When resizing images, align the image container with neighboring cards/tables/panels so the visual grid reads as one layout.
- For evidence pages, prioritize large readable figures over dense explanatory text. If the user asks to enlarge figures, reduce surrounding text density, move details into concise cards, and allocate more grid width/height to the figure area.
- Keep figure cards in the same blue-white system: white or pale-blue background, thin pale-blue border, modest 8px radius, short captions, and no decorative dark blocks unless already part of the reference style.
- When a page has multiple evidence images, use a stable grid or stacked cards with matched widths/heights. Avoid uneven image boxes that make one figure look accidental.
- Preserve image aspect ratio and all image content. If a container is larger than the image ratio, allow clean padding/background rather than cropping.

## Icon Rules

- Use semantic icons instead of letter placeholders.
- Typical mapping:
  - microphone for speech/audio
  - video camera for video
  - network/nodes for multimodal fusion
  - shield for security/protection
  - CPU/chip for hardware/system engineering
  - trophy/chart for results or performance
  - home/car/star for application scenarios
- If no icon library is loaded, use inline SVG symbols in `slides/index.html` and style them with `.deck-icon`, `.mini-icon`, or `.app-icon`.
- Icons should be blue/white and support the content meaning; they should not introduce new colors.

## Layout Patterns

- For opening/background slides, use left-right grids with:
  - left: stacked light-blue challenge cards
  - right: a white or light-blue panel summarizing challenges or value
- For technology route slides, use a horizontal strip of four steps with large blue circular icons.
- For innovation slides, use a 2x2 grid of rounded light-blue cards, each with icon, title, method, problem, and result.
- For application/value slides, use a two-column layout: contribution list plus application cards.

## Validation

- Check slide count after adding/removing pages.
- Confirm there is no duplicate footer/summary strip.
- Confirm no letter-only icon placeholders remain on newly styled pages.
- If `node` is unavailable, use static checks and report that script validation could not run.
