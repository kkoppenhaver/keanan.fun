# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static personal portfolio site at keanan.fun listing side projects. Three files do all the work: `index.html`, `styles.css`, `script.js`. No build step, no package manager, no framework — open `index.html` directly in a browser to develop.

## Architecture

- **Project cards are hand-authored in `index.html`.** Each `<a class="project-card">` contains an inline SVG "sketch preview" (hand-drawn mockup of the linked site) plus name/description/arrow. Adding a project means duplicating a card block and drawing a new SVG preview — there is no data file or templating.
- **Hand-drawn aesthetic is the point.** The visual language is dot-grid paper with Caveat/Patrick Hand fonts. SVG strokes use `class="sketch-line"` so `script.js` can apply a tiny random rotation/translation on load to simulate pencil wobble. Preserve this when adding new sketches — use `stroke="currentColor"` and tag strokes with `sketch-line`.
- **Card entrance animation** is driven imperatively in `script.js` by toggling inline styles with a staggered `setTimeout` (100ms per card). The transition property is swapped after entrance so hover transforms still work — don't move this into CSS without accounting for that.
- Color tokens live in `:root` CSS variables in `styles.css` (`--ink-color`, `--bg-color`, etc.). Use them instead of hardcoding colors.
