---
name: Joseph Celtruda — Portfolio
description: A dark, approachable portfolio workshop with a sky-blue signal accent and an AI assistant.
colors:
  sky-accent: "#38BDF8"
  brand-blue: "#1E5AA8"
  brand-blue-deep: "#17467F"
  workshop-ink: "#1A1A1A"
  workshop-surface: "#242424"
  hairline: "#333333"
  ink-white: "#FFFFFF"
  text-body: "#A0A0A0"
  text-muted: "#909090"
  status-green: "#22C55E"
  error-red: "#EF4444"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  gutter: "4rem"
components:
  button-skill:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.ink-white}"
    rounded: "{rounded.sm}"
    padding: "0.35rem 0.75rem"
  button-skill-hover:
    backgroundColor: "{colors.brand-blue-deep}"
    textColor: "{colors.ink-white}"
  chat-send:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.ink-white}"
    rounded: "0.6rem"
    padding: "0.7rem 1.1rem"
  badge:
    backgroundColor: "{colors.workshop-surface}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  project-card:
    backgroundColor: "{colors.workshop-ink}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.lg}"
    padding: "1.25rem"
  chat-bubble-user:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.ink-white}"
    rounded: "0.75rem"
    padding: "0.625rem 0.9rem"
  chat-bubble-assistant:
    backgroundColor: "{colors.workshop-surface}"
    textColor: "#E8E8E8"
    rounded: "0.75rem"
    padding: "0.625rem 0.9rem"
---

# Design System: Joseph Celtruda — Portfolio

## 1. Overview

**Creative North Star: "The Approachable Workshop"**

This is a dark, focused workspace that stays inviting rather than severe. The page is a near-black bench (`#1A1A1A`) where the work sits under good light; surfaces lift gently, corners are softened, and a single luminous sky-blue (`#38BDF8`) acts as the highlighter that marks what matters — the name, links, the active state, a role line. It reads as a working developer's space: precise and engineered underneath, but human and conversational on the surface, anchored by an AI assistant that lets a visitor simply *ask* about Joseph. Monospace is used sparingly as the workshop's labeling tape — dates, roles, locations — the field-notes layer over the humanist Inter body.

The system is deliberately content-first and quiet. It rejects the interchangeable developer-portfolio template (gradient hero, skill-percentage bars, an endless identical-card grid) and it rejects corporate-SaaS gloss (navy-and-gradient marketing, hero-metric blocks, stocky enterprise polish). Warmth here comes from rounded surfaces, soft press feedback, and the assistant's voice — never from noise, neon glow, or motion for its own sake. Confidence is expressed through restraint: one accent, one container width, a calm dark canvas.

Density is comfortable, not packed. A single 800px reading column governs the portfolio; everything breathes inside an `4rem`/`2rem` gutter. The viewer should grasp who Joseph is in seconds and always see one obvious next step.

**Key Characteristics:**
- Dark workshop canvas (`#1A1A1A`) with a slightly lifted surface (`#242424`).
- One luminous signal accent (sky-blue `#38BDF8`); a deeper brand-blue (`#1E5AA8`) for filled, weighty elements.
- Humanist sans (Inter) for substance, monospace for metadata labels only.
- Flat by default; soft elevation appears as a *response* to hover/press, never at rest.
- Comfortable single-column rhythm capped at an 800px reading width.

## 2. Colors

A restrained dark palette: one near-black canvas, one lifted surface, two blues that split the work between *signal* (bright) and *substance* (deep), and a disciplined neutral ink ramp for text.

### Primary
- **Sky Signal** (`#38BDF8`): The highlighter. Reserved for emphasis that must catch the eye on a dark field — the name, hyperlinks, hover and active states, the active nav underline, the monospace role line, the input focus border. It is the brand's voice; its scarcity is what makes it read as signal.

### Secondary
- **Workshop Blue** (`#1E5AA8`): The weight-bearing blue. Fills solid elements — skill tags, the chat send button, the user's chat bubble, social-icon hover. Where Sky Signal points, Workshop Blue *holds*.
- **Workshop Blue Deep** (`#17467F`): The pressed/hover state of Workshop Blue. Filled elements darken toward this on interaction.

### Tertiary
- **Active Green** (`#22C55E`): A 6px status dot only — the "active project" indicator. Never used for text or large fills.
- **Alert Red** (`#EF4444`): Inline chat error text only.

### Neutral
- **Workshop Ink** (`#1A1A1A`): The page bench. The dominant surface color and the background of cards (cards are defined by their hairline border, not a fill change).
- **Workshop Surface** (`#242424`): The lifted surface — badges, assistant chat bubbles, the chat input field. One step up from the bench.
- **Hairline** (`#333333`): Borders, dividers, the rule under each section heading.
- **Ink White** (`#FFFFFF`): Headings and high-emphasis text only.
- **Body Grey** (`#A0A0A0`): Default running text and descriptions.
- **Muted Grey** (`#909090`): Dimmer support text — dates, inactive nav, placeholders.

### Named Rules
**The One Highlighter Rule.** Sky Signal (`#38BDF8`) is the only color allowed to *attract* on a given screen. If two things glow blue-bright and compete, one of them is wrong — demote it to Body Grey or Workshop Blue. The accent earns its meaning by being rare.

**The Two-Blue Split.** Bright blue points (signal); deep blue holds (fills). Never fill a large solid element with Sky Signal, and never use Workshop Blue for a hyperlink. Mixing the two collapses the hierarchy.

## 3. Typography

**Display Font:** Inter (with system-ui, -apple-system, sans-serif)
**Body Font:** Inter (the same humanist sans, multiple weights)
**Label/Mono Font:** system monospace (ui-monospace, SFMono-Regular, Menlo)

**Character:** One humanist sans does almost all the work across four weights (400–700), so hierarchy comes from weight and size, never from a clashing second face. Monospace is the lone contrast axis — used only for the workshop's labeling tape (roles, dates, locations) where it signals "metadata," not prose.

### Hierarchy
- **Display** (700, 2.25rem, line-height 1.2, letter-spacing -0.025em): The name in the header. Rendered in Sky Signal — the single largest, brightest moment on the page.
- **Headline** (700, 1.5rem, line-height 1.2): Section titles (`Experience`, `Projects`), each with a Hairline rule beneath. Ink White.
- **Title** (600, 1.1rem, line-height 1.3): Company names, project titles, card headers. Ink White.
- **Body** (400, 1rem, line-height 1.6): Running prose and descriptions in Body Grey. Capped at 65ch for the about paragraph; keep prose to 65–75ch.
- **Label** (400, 0.9rem, monospace): Roles, dates, and location metadata. Roles use Sky Signal; dates/locations use Muted Grey. This is the field-notes layer.

### Named Rules
**The Single-Voice Rule.** Inter carries every non-label text role. Do not introduce a second display or body typeface; if a heading needs to feel different, change weight or size, not family. The only sanctioned second voice is monospace, and only for metadata labels.

**The Monospace-Is-Metadata Rule.** Monospace never sets prose. It appears exclusively on short labeling tape — roles, dates, locations — to mark them as data rather than narrative.

## 4. Elevation

Flat by default. Surfaces sit at rest with no shadow; depth is conveyed by the Hairline border and the one-step tonal lift from Workshop Ink to Workshop Surface, not by drop shadows. Shadows appear almost exclusively as a *response* to state — a card lifts `2px` with a soft shadow on hover, a pressable icon dips to `scale(0.95)` on press. The single at-rest exception is the headshot, which carries a small grounding shadow. The sticky navbar uses an 8px backdrop-blur over a translucent ink (`rgba(26,26,26,0.85)`) — the one sanctioned glass surface, justified because it must stay legible over scrolling content beneath it.

### Shadow Vocabulary
- **Lift-on-hover** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.025)`): Project cards, paired with `translateY(-2px)` on hover.
- **Grounding** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)`): The headshot image only.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat until touched. A shadow on a static, un-hovered element is a bug. Elevation is feedback, not decoration.

**The One Glass Rule.** Backdrop-blur is permitted on exactly one surface — the sticky navbar — because it must remain readable over moving content. Glassmorphism anywhere else is forbidden.

## 5. Components

### Buttons
- **Shape:** Softly rounded (`6px` for tags/send, `0.6rem` for the chat send button).
- **Skill tag / Send (filled):** Workshop Blue (`#1E5AA8`) fill, Ink White text. The weight-bearing action color.
- **Hover / Focus:** Filled buttons darken to Workshop Blue Deep (`#17467F`); transition `background-color 0.2s ease`. Disabled send drops to `opacity: 0.5` with `not-allowed` cursor.
- **Link button (ghost):** No fill — underlined Body Grey text with `4px` underline-offset that shifts to Sky Signal on hover. Used for "View my resume."

### Chips / Tags
- **Badge:** Pill-shaped (`9999px`), Workshop Surface fill, Hairline border, Body Grey text. Quiet, non-interactive metadata.
- **Skill tag:** Solid Workshop Blue rectangle (`6px`), Ink White text — these are bolder than badges because skills are a primary signal.

### Cards / Containers
- **Corner Style:** `12px` (project cards, headshot).
- **Background:** Workshop Ink (`#1A1A1A`) — the *same* as the page. Cards are defined by their Hairline border, not a fill change.
- **Shadow Strategy:** Flat at rest; Lift-on-hover shadow + `translateY(-2px)` on hover (see Elevation).
- **Border:** `1px solid` Hairline (`#333333`).
- **Internal Padding:** `1.25rem`.

### Inputs / Fields
- **Style:** Workshop Surface background, `1px solid` Hairline border, `0.6rem` radius, inherited font.
- **Focus:** No outline; border shifts to Sky Signal (`#38BDF8`). Placeholder text is Muted Grey.

### Navigation
- **Style:** Sticky top bar, translucent ink with 8px backdrop-blur, Hairline bottom border. Links are `0.875rem`/weight 500, Muted Grey at rest.
- **States:** Hover → Ink White. Active → Ink White text with a Sky Signal `2px` bottom border.
- **Mobile:** Same horizontal bar; the header stacks (`column-reverse`) below 640px so the headshot leads.

### Chat Assistant (signature component)
The "Ask about Joseph" assistant is the brand's most distinctive surface and the embodiment of "approachable."
- **User bubble:** Workshop Blue fill, Ink White text, right-aligned, `0.75rem` radius, max-width 85%.
- **Assistant bubble:** Workshop Surface fill, Hairline border, light grey text (`#E8E8E8`), left-aligned. Renders Markdown.
- **Typing state:** An assistant bubble at `opacity: 0.6` with an ellipsis.
- **Input row:** Sticky to the bottom, input + filled Send button side by side.

## 6. Do's and Don'ts

### Do:
- **Do** keep Sky Signal (`#38BDF8`) rare — reserve it for the name, links, active states, focus, and role labels. Its scarcity is the point.
- **Do** split the blues by job: bright Sky Signal to *point*, deep Workshop Blue (`#1E5AA8`) to *fill*.
- **Do** define cards by their `1px` Hairline border on the `#1A1A1A` bench, not by a background-color change.
- **Do** keep surfaces flat at rest; let shadow and `translateY` appear only on hover/press.
- **Do** restrict monospace to short metadata labels (roles, dates, locations).
- **Do** hold body prose to 65–75ch and the portfolio to its single 800px column.
- **Do** ship a `prefers-reduced-motion` alternative for every motion (the reveal keeps its fade but drops the slide; press feedback disables).

### Don't:
- **Don't** build the generic developer-portfolio template — no gradient hero, no skill-percentage bars, no endless identical-card grid.
- **Don't** drift into corporate / SaaS gloss — no navy-and-gradient marketing, no hero-metric blocks, no stocky enterprise polish.
- **Don't** go loud or over-animated — no neon glow, no gimmicky scroll effects, no motion competing with content.
- **Don't** clutter — protect the single-column rhythm and the comfortable spacing; never crowd the reading width.
- **Don't** use gradient text (`background-clip: text`) or side-stripe accent borders (`border-left` > 1px) anywhere.
- **Don't** use backdrop-blur outside the sticky navbar, or place a shadow on any element that isn't being hovered or pressed.
- **Don't** introduce a second display/body typeface or fill a large element with Sky Signal.
