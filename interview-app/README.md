# Character Tracker

React + TypeScript + Vite implementation of the exercise described in the [root README](../README.md).

## Requirements

- Node.js `^20.19.0 || >=22.12.0` (required by Vite 8; developed on v24.16.0)
- npm

## Running

```bash
cd interview-app
npm install
npm run dev
```

Open the URL printed in the terminal (http://localhost:5173 by default).

## Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Type-checks (`tsc -b`) and builds to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
src/
  App.tsx      Character list, global actions, state
  Card.tsx     Single character card with +/- controls
  images.ts    Character images and shared types
  App.css      Layout and card styles
  index.css    Global styles from the exercise
```
