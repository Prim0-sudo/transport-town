# Transport Town — Codex Handoff

## Primary instruction

The `site/` folder contains the complete existing Transport Town game. **Do not redesign or recreate it from memory. Use these files as the authoritative visual and functional reference.** Preserve the current appearance, spacing, colors, typography, background artwork, animations, audio, controls, question logic, vocabulary, and assets unless explicitly instructed otherwise.

The current implementation is a static browser game made with plain HTML, CSS, and JavaScript:

- `site/dist/index.html`
- `site/dist/styles.css`
- `site/dist/app.js`
- `site/dist/images/` — 30 individual vehicle photographs plus the old unused sheet
- `site/dist/audio/` — the real transportation sound clips
- `site/dist/transport-town-bg.png` — illustrated town background
- `site/.openai/hosting.json` — existing ChatGPT Sites metadata

Open `site/dist/index.html` or serve `site/dist/` with a simple local static server. Do not introduce React, a framework, a build tool, a database, or a backend unless later requested.

## Product and classroom context

Transport Town is a teacher-controlled kindergarten transportation game designed for a laptop connected to a classroom television. The children call out answers while the teacher selects them using the mouse or keyboard. It targets K3 but must remain simple enough to use verbally with younger KG classes.

The interface must be large, colorful, friendly, readable from a television, and usable without scrolling during normal desktop play.

## Exact visual direction to preserve

- Full-screen illustrated transportation-town background with blue sky and a subtle dark/blue overlay for contrast.
- Rounded white translucent game card centered on the screen.
- Deep navy text, strong royal blue controls, bright yellow highlights, and green/red feedback colors.
- Rounded, chunky classroom-game styling with white borders and soft blue shadows.
- Typeface stack: Trebuchet MS, Arial Rounded MT Bold, then system sans-serif.
- Top-left white Transport Town logo button with a yellow icon tile.
- Top-right sound and fullscreen buttons in dark translucent navy squares.
- Home screen has the large heading “Where will we go today?” and five colored mode cards.
- Game screen has a visible “Back to Main Menu” button, round/level counter, yellow progress bar, and score pill.
- Answer buttons are large white rounded cards arranged in three columns on desktop and one column on narrow screens.
- Preserve the existing small arrival animation, hover movement, sound-ring animation, correct/wrong feedback, and confetti results animation.
- Do not replace the existing background, layout, or visual system with a generic dashboard or template.

## Five modes

### 1. Meet the Vehicles

- Contains all 30 vocabulary words in the supplied order.
- Shows the vehicle emoji and uppercase vehicle name.
- On entry, narration says only: “This is a [vehicle].”
- The definition must not play automatically.
- Buttons: “Say: [vehicle]”, “Hear the meaning”, and “Next vehicle”.
- “Hear the meaning” speaks the stored definition only when clicked.

### 2. Where Does It Go?

- Exactly 30 levels, using every vehicle once in randomized order.
- Player sorts each vehicle into Land, Water, or Air.
- Shows vehicle emoji and name.
- Three answer buttons use the zone names and icons.

### 3. Sound Detective

- Exactly 30 levels, using all 30 vocabulary items once.
- Uses the real MP3 sound files in `site/dist/audio/`.
- Related vehicles may share the closest sensible sound, but conflicting same-sound answers must never appear together.
- Examples: car/taxi/van are not competing answers; bus/minibus/school bus are not competing answers; boat/yacht are not competing answers; ship/ferry are not competing answers.
- Glider uses the real wind recording.

### 4. Which One Is It?

- Exactly 30 randomized levels, one for each vocabulary word.
- This is deliberately PPT-like: one large real vehicle photograph in a fixed central picture area, with three named answer choices underneath.
- The voice asks: “Is it a [choice one], a [choice two], or an [choice three]?” with grammatically correct articles.
- Choice distractors come from the other transportation categories where possible, avoiding three nearly identical vehicles.
- The large photo must use the matching individual WebP from `site/dist/images/`.
- Use `background-size: contain`; show the whole photograph without cropping.
- The picture has a fixed central slot and must never overlap the answer buttons.
- Do not show an emoji behind or over the central photograph.
- Answer buttons keep their normal icon-and-name presentation.
- Important correction already present in the source: for the **Jet Ski** answer, do not use the fake `🌊🏍️` combination. Use the actual `images/jet_ski.webp` thumbnail as the answer icon.
- After the correct answer, retain the photograph and reveal the uppercase vehicle name.

### 5. Safe Traveller

- Seven randomized road/travel-safety questions.
- Topics include seat belts, bicycle helmets, red traffic lights, crossing roads, life jackets, bus seating, reversing cars, and pedestrian crossings.

## Vocabulary bank

Land: Car, Bus, Bicycle, Motorcycle, Scooter, Train, Subway (Metro), Taxi, Truck, Van, Tram, Minibus, School Bus, Police Car, Ambulance, Fire Engine, Tractor, Tuk-tuk, Rickshaw, Skateboard.

Water: Boat, Ship, Ferry, Speedboat, Yacht, Jet Ski.

Air: Airplane, Helicopter, Hot Air Balloon, Glider.

The exact definitions, zones, sounds, and emoji mappings already exist in the `vehicles` array at the top of `site/dist/app.js`. Preserve them unless specifically asked to change one.

## Audio and controls

- Use the existing real MP3 vehicle recordings.
- Use browser speech synthesis for spoken prompts at approximately rate `0.82`, pitch `1.05`, language `en-GB`.
- Teacher controls:
  - `1`, `2`, `3`: choose answer
  - `Space`: repeat prompt/play sound
  - `Enter`: continue after a correct answer
  - `F`: fullscreen
  - `M`: mute/unmute
  - `Escape`: return to menu when not exiting fullscreen
- Keep visible sound, fullscreen, Listen, and Back to Main Menu controls.

## Scoring and feedback

- A correct first attempt adds one point.
- A wrong choice becomes disabled and the child may try again, but that level no longer earns a point.
- Correct feedback plays a rising three-note tone and enables a Next button.
- Wrong feedback plays a low tone and says “Not that one. Try again!”
- Results display score, one to three stars, a mode-specific message, confetti, Play Again, and Choose Another Game.

## Required first task for Codex

1. Inspect the supplied source; do not rebuild it from scratch.
2. Run it locally and verify all five modes open.
3. Confirm all 30 `Which One Is It?` photographs load from the individual WebP files.
4. Confirm the photo area never overlaps the answers at common laptop/TV resolutions.
5. Confirm Jet Ski uses its real photograph thumbnail in answer choices and never renders `🌊🏍️`.
6. Report any genuine defects found before changing unrelated behavior or styling.

## Deployment requirement

Keep the game as a self-contained static site so it can be hosted cheaply on Cloudflare Pages/Workers, GitHub Pages, Netlify, or another static host. Do not assume ChatGPT Sites must remain the deployment target. Preserve all assets locally so the classroom game does not depend on third-party image URLs.
