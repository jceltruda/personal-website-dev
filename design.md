# Design Reference

## Color Palette

| Role | Variable | Hex |
|---|---|---|
| Page background | `--bg-color` | `#1a1a1a` |
| Surface (cards, badges) | `--card-bg` | `#242424` |
| Border | `--border-color` | `#333333` |
| White / headings | `--primary-color` | `#ffffff` |
| Regular text | `--text-main` / `--secondary-color` | `#a0a0a0` |
| Muted text (dates, location) | `--text-muted` | `#909090` |
| Accent (name, roles, links, active nav) | `--accent-color` | `#38BDF8` |
| Primary brand (skill tags, icon hover fill) | `--brand-color` | `#1E5AA8` |

## Typography

| Role | Value |
|---|---|
| Primary font | Inter (Google Fonts), 400 / 500 / 600 / 700 |
| Fallback stack | `system-ui`, `-apple-system`, `sans-serif` |
| Monospace (roles, subtitle) | Browser default monospace |
| Base line-height | 1.6 |

## Blue Usage

Accent `#38BDF8` — high-visibility text elements:
- Hero name (`.header-name`)
- Experience role / job title lines (`.experience-role`)
- Link hover color
- Active navbar underline

Primary `#1E5AA8` — filled surfaces:
- Skill tags (`.skill-tag`)
- Social icon buttons on hover

## Social Icon Buttons

- Default: icon `#c8c8c8`, border `#4a4a4a`, bg transparent
- Hover: icon `#ffffff`, border + bg fill `#1E5AA8`

## Navbar

- Inactive links: `#909090`
- Active link: `#ffffff` text + `#38BDF8` bottom border
- Background: `rgba(26, 26, 26, 0.85)` with `backdrop-filter: blur(8px)`
