# Derma and VGUI

Derma code is client-side UI code. Keep it predictable, incremental, and cheap to repaint.

## Structure

- Create a top-level `DFrame` or root panel once per view.
- Split repeated UI rows/cards into small panel constructors or panel classes.
- Store current data on the panel and expose a `Refresh` or `SetData` method.
- Use `Dock`, `DockMargin`, `DockPadding`, and `PerformLayout` for layout.
- Use `Paint` only for drawing; avoid creating materials, fonts, panels, or network calls in `Paint`.

## Updating

- Rebuild only the panel subtree that changed.
- Cache expensive derived values outside render paths.
- Debounce search/filter inputs if they touch large lists.
- For DHTML, send compact JSON patches instead of rebuilding the whole document for small state changes.

## Visual Defaults

- Prefer clear focus states and hover states for clickable controls.
- Keep text inside fixed controls short enough to fit at common GMod resolutions.
- Avoid nested panel trees when a simple docked layout works.

## Reference Files

- Use `references/panels/DFrame.md`, `references/panels/DPanel.md`, `references/panels/DButton.md`, and `references/classes/Panel.md` for exact methods.
