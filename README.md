# Rajarshi Cinematic Portfolio

A ready-to-run Next.js portfolio using the supplied AI video and portrait image. The hero animation has no native video chrome and is surrounded by a soft CSS mask, vignette and matching colour gradients, so it feels like part of the page rather than an embedded player.

## 1. Requirements

- Node.js 20.9 or newer
- npm

## 2. Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 3. Personalise the content

Edit this file first:

```text
data/site.ts
```

Update your email, social links, experience, education, projects, live URLs and source-code URLs.

## 4. Replace project demo videos

Place your real MP4 files in:

```text
public/demos/
```

Keep the current filenames, or update `demoVideo` inside `data/site.ts`.

Recommended demo structure:

- 0–5 seconds: project and problem
- 5–20 seconds: interface
- 20–60 seconds: complete workflow
- final seconds: architecture, result and links

## 5. Why the hero does not loop

The supplied animation is about nine seconds long. Its ending does not naturally match its beginning, so a normal loop would visibly jump and immediately feel like a video. This build plays it once, keeps the final frame visible and offers a small replay button. Visitors may also restart it with sound.

The supplied video contains a PixVerse watermark near the top-right. The visual mask and crop make it less prominent, but the final public site should use a properly licensed unwatermarked export.

## 6. Contact form

The form opens the visitor's default email application using `mailto:`. Set your real address in `data/site.ts`:

```ts
email: "your-email@example.com"
```

## 7. Production build

```bash
npm run build
npm start
```

## 8. Deploy

Push the folder to GitHub and import it into Vercel, or deploy it as a Node.js Next.js application on another supported host.
