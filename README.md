# Transport Town

Transport Town is a teacher-controlled kindergarten transportation game for a classroom laptop and television. It is a self-contained static site with five game modes, 30 transportation words, local photographs, and local sound clips.

## Run locally

Serve `site/dist/` with any static HTTP server. For example:

```powershell
python -m http.server 4173 --directory site/dist
```

Then open `http://127.0.0.1:4173/`.

## Deploy on Cloudflare Pages

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `site/dist`

Cloudflare Pages can redeploy automatically whenever the connected GitHub repository is updated.

## Source of truth

Read `HANDOFF.md` before changing the game. The files in `site/dist/` are the authoritative implementation; preserve the existing appearance, assets, game logic, classroom flow, and controls unless a change is explicitly requested.
