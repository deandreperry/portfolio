# NeuroMode — Figma build specification

Reconstructed from `ba80bcf`, September 25, 2026. This is a build-ready specification, not an existing Figma file. Proposed Figma names do not imply historical use. Source truth: view inventory and state matrix (source repository: NEUROMODE_UX_REVERSE_ENGINEERING.md), SwiftUI code and retained screenshots.

## File architecture

| Page | Contents / required frame names |
|---|---|
| 00 — Cover | Product hook, role, evidence date, status legend, links |
| 01 — Research | Source ledger, comparative interaction matrix, study limitations |
| 02 — Synthesis | Signal → insight → implication → decision; analyst affinity clusters |
| 03 — Behavioral Needs | Four conceptual lenses; JTBD; no fictional headshots |
| 04 — Journey | Begin / adjust / focus / leave / return / stop scenario |
| 05 — Information Architecture | Tab hierarchy; shared destinations; contextual/system overlays |
| 06 — User Flows | Start, focus recovery, comfort, backup, sharing, permission denial |
| 07 — Low-Fi Wireframes | Structural reconstruction; neutral outlines, no branding |
| 08 — Mid-Fi Wireframes | Actual labels, disclosure, validation and navigation annotations |
| 09 — Explorations | A/B/C retrospective hypotheses; evaluation criteria and costs |
| 10 — Final UI | All screen families, light/dark, empty/populated; evidence date on screenshots |
| 11 — Components | Native primitives plus app-specific components and variants |
| 12 — Design Tokens | Semantic appearance variables, spacing, radius, typography mappings |
| 13 — Accessibility | Large text, contrast, motion, focus order, alternate input and outstanding checks |
| 14 — Prototype | Start-and-return scenario; independent comfort and recovery flows |
| 15 — Developer Handoff | Source links, state contracts, persistence boundaries, acceptance checks |
| 16 — Archive | Historical Today light, superseded analysis, dated rationale; no invented history |

Naming: `Screen/{Area}/{Screen}/{State}/{Appearance}/{TextSize}`. Example: `Screen/Focus/Session/Paused/Dark/AX5`. Components use `Button/Primary`, `Card/NextStep`, `Preview/Comfort`, `Navigation/Tab`, `Session/Focus`. Variant properties provide state; do not make unrelated, manually duplicated masters. Prototype flow names: `Flow/01-Start-and-return`, `Flow/02-Comfort-control`, `Flow/03-Data-recovery`.

## Canvas and native chrome

Use **402 × 874 pt** as the primary reconstruction canvas for 1206 × 2622 px retained screenshots at 3×. Confirm each screenshot's dimensions independently; never force iPad or smaller-phone captures into this ratio. Additional *proposed stress-test canvases*: 375 × 812 pt phone, 320 pt content width, 1024 × 768 pt tablet landscape and a narrow split-view width. These are design test sizes, not claims about a specific device's current hardware dimensions.

Create Root / System top area / Navigation / Scroll content / Bottom chrome layers. Safe areas and toolbar/tab dimensions are system-owned and OS-dependent: use the Apple resource for the target runtime or measured simulator geometry. Do not hardcode screenshot bar height as a universal token. Clip scroll content at the viewport; keep full content in Auto Layout for review. Record runtime and scale on each screenshot reference.

Grid: no fixed multicolumn grid in the phone application. Main scroll content fills available width up to the source cap. For annotation boards only, use a 12-column editorial grid, 64 margins and 24 gutters at 1440 width. This board grid is not an app implementation claim.

## Layout recipes from code

| Frame family | Content construction | Outer padding / internal spacing / max width |
|---|---|---|
| Today | Vertical scrolling; header, greeting, support stack, conditional pin/recovery, recommendation, secondary content | 20 / 24; support stack 8; max 700 |
| Onboarding | Vertical scroll, title and choice list, Continue, count | 28 / 28; max 620 |
| Next Step | Task title, ModeCard, focus/save links, move/completion | 20 / 24; max 700 |
| Active Focus | Session ModeCard, optional transition card, end button | 20 / 24; max 700 |
| Overwhelm | Own stack, sparse vertical content, return action | 32 / 36; max 620; top spacer min 50, lower min 30 |
| Reset | Brand, headline, pause card, optional suggestions | 24 / 28; no explicit width cap |
| Quiet Room | Quiet headline, guide if chosen, disclosure; toolbar finish | 28 / 32; max 640; disclosure stack 20 |
| Reading | Heading and wrapping text, separate bottom control inset | 28 / 28; max 620, explicitly centered; bottom VStack gap 12 |
| Form/List families | Native grouped/inset layout, system section headers and rows | Use system resource metrics; source row padding where explicit, not a global 20 |
| ModeCard | Fill width, hug height, leading vertical content | Padding 22; gap 16 standard / 24 simple; radius 24 |

Hug text height; fill available width; do not clamp body text to fixed lines unless source does. Horizontal layouts must be checked at large text. Most max-width views do not have an explicit outer centering modifier: inspect rendering before normalizing alignment in Figma. Reading does explicitly center its capped content.

## Semantic color variables

Store original floating-point sRGB values as reference metadata; hex values below are rounded approximations for Figma. `System` values must reference native semantic variables, not frozen RGB. Collection `Appearance` modes: Light, Dark, Light Increased Contrast, Dark Increased Contrast.

| Figma variable | SwiftUI source | Light | Dark | Increased contrast |
|---|---|---|---|---|
| Background/Primary | ModePalette.background | RGB .97,.96,.93 ≈ #F7F5ED | .07,.08,.075 ≈ #121413 | systemGroupedBackground |
| Background/Secondary | ModePalette.surface | .995,.985,.965 ≈ #FEFBF6 | .105,.12,.11 ≈ #1B1F1C | secondarySystemGroupedBackground |
| Text/Primary | Color.primary | System primary | System primary | System primary |
| Text/Secondary | ModePalette.secondary | white .34 ≈ #575757 | white .78 ≈ #C7C7C7 | Light .18 ≈ #2E2E2E / dark .95 ≈ #F2F2F2 |
| Action/Primary | AccentColor asset | .19,.36,.32 ≈ #305C52 | .62,.82,.74 ≈ #9ED1BD | Same asset; no additional high-contrast asset |
| Text/OnAction | ModePalette.onAccent | #FFFFFF | white .08 ≈ #141414 | Appearance-based; no separate override |
| Status/Success | systemGreen | System | System | System |
| Status/Warning | systemOrange | System | System | System |
| Border/Default | Proposed Figma alias for native separators | System separator | System separator | System separator; not a custom ModePalette token |

The Overwhelm background uses `systemBackground` directly. Do not recolor it to the warm custom background in an “exact reconstruction.” Cards are flat surfaces; there is no shared custom elevation/shadow token. Accent opacity .10 is used behind BrandMark; breathing circle uses .18. Those decorative opacities are not text tokens.

## Typography and geometry

| Semantic style | Application use | Figma guidance |
|---|---|---|
| largeTitle bold / semibold | Greeting, onboarding, Quiet Room | SF Pro system style; use Apple's Dynamic Type tables |
| title bold | Recommendation, current step, active session | Wrap; no fixed text-height component |
| title2 / title2 semibold | Section statements, reading heading context | Preserve per-view weight |
| title3 | Supporting headline/first step | Scale with Dynamic Type |
| headline | Primary button, important row | Native semantic size/weight |
| body | Form and long text | System style; no custom font |
| subheadline / footnote | Explanations and privacy/help copy | Distinguish semantic secondary color from opacity |
| caption semibold, tracking 2 | Eyebrow | Uppercase; heading semantics |

Figma baseline point sizes are visual samples, never replacements for semantic SwiftUI styles. Build Default and AX5 text-size reference frames; native scaling is not linear zoom. Spacing primitives observed: 4, 8, 10, 12, 16, 20, 22, 24, 28, 32, 36. Do not round 22 to a fictitious 8-point system. Radius: primary button 16; card 24; BrandMark 26. PrimaryButton label minHeight 44, then vertical padding 4; actual native hit regions must be measured. Today action labels have minHeight 44; recommendation action can use 48.

## Components, properties and states

Native controls inherit platform pressed, disabled and focus visuals. The app does not implement a bespoke pressed/focused visual language. Represent platform states using the corresponding native library. Screen-reader focus is an annotation/prototype accessibility concern, not a green border baked into the UI.

| Component | Properties / variants | Content, layout and interaction | State contract |
|---|---|---|---|
| Button/Primary | label, symbol, enabled | Full width, headline, semantic foreground; activate caller action | Default / pressed / disabled / system focus; no universal loading |
| Button/SupportAction | label, symbol, action | Leading label; bordered native style; min 44 | Default / pressed / focused |
| Card/Recommendation | title, detail, reason, action | ModeCard; Why this? expands; Not now dismisses | Default / reason expanded / dismissed |
| Card/NextStep | task, step, started, smallerAvailable, undoAvailable | Current action; primary Start or done; alternates; plan disclosure | Unstarted / started / smallest / custom / complete; error is global |
| Session/Focus | title, step, openEnded, hideTime, paused | ModeCard; pause/resume, extend, save; source timer refresh cadence | Active / paused / overtime / untimed / ended |
| Preview/Comfort | simple, prompts, sound | Noninteractive sample; padding vertical 12; gap 12 or 24 | Draft only; applied confirmation outside preview |
| Control/ComfortForm | name and five booleans | Native field/toggles; explicit Apply | Draft / applied / undo available / disabled preset |
| Navigation/Tab | title, symbol, selected | Native five-tab shell, each stack independent | Selected / unselected; absent in Overwhelm and hidden in Quiet Room |
| Row/Activity | title, nextStep, lane, status | NavigationLink; menu and accessibility move actions | Default / done / search match; no custom drag-only state |
| Row/LibraryItem | title, category, state | Leading stack; visible archive/delete/restore controls | Saved / archived / deleted / restored; confirmation for permanent delete |
| Input/Multiline | label, value, enabled | Native text field; lines as declared in each view | Empty / entered / focused / disabled; no universal inline error |
| Disclosure/OptionalComforts | expanded, guide, motion, audio | Native disclosure; nested toggles/stepper/slider | Closed / expanded; audio error text |
| Feedback/Helpfulness | activity, response, saved, skipped | Optional response, optional strategy note | Unanswered / answered / saved / removed / absent |
| State/Empty | title, detail, symbol | ContentUnavailableView or source-specific plain text | Empty only; choose actual implementation per screen |
| State/GlobalError | message | Native alert, OK | Save failure / lane capacity / other operation failure |
| State/TransitionSave | working, status | Button changes to Saving… and disables | Default / loading / success / notification denial |
| Sheet/SavePlace | title, thinking, next | Native NavigationStack/Form; Cancel; Save and pause | Blank next disabled / valid / failed save retained |
| Sheet/BackupPreview | date, counts, effects | Native file picker precedes preview; destructive confirm follows | Valid / invalid / oversize / canceled / restored |
| Card/SupportPreview | selected statements, custom text | Exact share content, native share action | Empty / preview / saved / share presented |

Do not add loading skeletons to synchronous local tools. Show loading only where the implementation exposes it. State/Success is descriptive feedback, not an invented green success screen. Native selection marks and visible text accompany state; do not encode it only in color.

## Every-screen construction contract

Use the complete “Screen families and required states” table in the reverse-engineering report (source repository: NEUROMODE_UX_REVERSE_ENGINEERING.md) as the frame manifest. Each named view has a source locator in `Documentation/UX/content-index.json`. For every family:

1. Create Default and the listed critical states as sibling frames; identify embedded components rather than turning every SwiftUI struct into a screen.
2. Read that source's order of children; use literal visible labels and symbols. Do not rename a destination for visual consistency.
3. Copy each conditional branch into a variant or annotated conditional zone. Record whether it depends on persisted data, system settings or temporary view state.
4. Apply the family layout recipe, native chrome and semantic variables. Keep content behind scroll regions with realistic overflow.
5. Add light/dark and large-text frames for core routes; use a compact state matrix for remaining families until they are drawn.
6. Place source/evidence/proposed annotations outside the screen bounds; annotations must never appear as app UI.

Additional exact frame requirements: onboarding has five distinct pages, not a carousel invented from one welcome screen. Check-in includes all Feeling choices plus own words. Completed is an inline List destination. FeedbackHistory, ManualEditor, SensoryRow and library field subviews are not independent top-level tabs. Include the root store-failure state even though no happy-path navigation leads to it. Include Share extension, widget and Live Activity on separate system-surface boards.

## Prototype edges and state boundaries

| Trigger | Destination / change | Back, cancel or error |
|---|---|---|
| Skip setup / final Continue | Today | Earlier onboarding pages use Back |
| Help me start | Existing Next Step or new activity form | Native Back; blank title disables submission |
| Make it smaller | Next smaller variant, then smallest-boundary explanation | Write my own; pause |
| Start → step done | Started state → next available step | Undo last completion while available |
| Focus on this step | Focus setup, or existing unfinished session if present | Back; preserve actual existing-session behavior |
| Save my place | Save sheet prefilled from session | Cancel; failed save keeps sheet |
| Save and pause | Persist cue and paused session | Reopen Focus → Resume session |
| Less stimulation | Root Overwhelm | Return when ready restores tab shell |
| Quiet Room Finish | Finished/reflection state | Leave room dismisses; native Back also works |
| Apply preset | Persist draft, show confirmation | Undo local previous snapshot; off switch retains saved choices |
| Library delete | Recently Deleted | Undo or restore; permanent delete needs confirmation |
| Choose backup | System file picker → validation → preview | Invalid remains unchanged; Cancel import |
| Restore confirmed | Replace model data and refresh root | No merge; warn that reminders need scheduling again |
| Share support card | System share sheet | Cancel; external copies beyond app control |

Use instant transitions for reduced-motion prototype mode. Any optional breathing animation is disabled when either system or app Reduce Motion is true. Do not simulate permission grant by default. Prototype variables can model states, but cannot prove persistence, audio interruption, notifications, screen-reader compatibility or file safety.

## Accessibility and handoff annotations

Specify reading order top to bottom, visible label → accessible name, selected/checked value, minimum target and return-focus expectation for every interactive component. Mark expected focus after save/delete/restore as PROPOSED acceptance behavior when source does not explicitly manage it. Document long names, multiline user text and maximum accessibility sizes. Keep optional speech independent of VoiceOver and include the overlap notice.

Developer handoff includes source type/line, state owner, persistence boundary, input validation, error copy, navigation type, dynamic-text behavior and measured screenshot runtime. Tokens remain semantic across SwiftUI and Figma. A design change that moves content, alters limits or changes save semantics requires a separate implementation decision, not an unnoticed “cleanup” during reconstruction.

## Acceptance gates for a completed Figma build

All destinations and inline/system states indexed; labels and source order matched; every prototype has an exit and failure route; no claimed participant results; colors checked in each appearance; long text grows; native chrome version labeled; component variants match source; annotations distinguish actual from proposed focus behavior. Review the result with engineering and assistive-technology users. No Figma file or interactive Figma prototype has been created by this documentation task.
