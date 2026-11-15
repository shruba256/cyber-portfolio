# Shalom Rubaramira | Cybersecurity Portfolio

A cyber-focused portfolio showcasing secure network architecture, risk
assessment, technical delivery, professional experience, education and
credentials.

## Live sites

- [GitHub Pages](https://shruba256.github.io/cyber-portfolio/)
- [Sites deployment](https://shalom-rubaramira-cyber.shalommuhoozi.chatgpt.site)

## Highlights

- Secure multi-campus enterprise network project
- Security awareness analyst simulation
- Cybersecurity, networking, programming and strategy capabilities
- Downloadable résumé and direct contact details
- Responsive, keyboard-accessible design with reduced-motion support
- Original WebGL sculpture with Iris, Tide and Ember palettes, pointer response
  and a persistent motion toggle; static artwork when WebGL is unavailable
- Editorial typography, animated project diagrams and subtle section entrances
- Custom "Lost connection" 404 with an original isometric network illustration,
  an animated Reconnect link home, keyboard controls and reduced-motion support

## Visual direction

Inspired by [Lenin's portfolio](https://www.lenin.dev/),
[Shader Gradient](https://shadergradient.co/) and
[Unicorn Studio](https://www.unicorn.studio/). The effects are original local
implementations, with no third-party scene embed or account required.
The sculpture pauses outside the viewport and in hidden tabs, caps pixel density
and renders at 30 fps. Reduced-motion preferences disable animation by default.
The page content and contact links remain usable without JavaScript.

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS
- vinext for the Cloudflare-compatible Sites deployment
- Next.js static export for GitHub Pages
- Native Next.js hosting on Vercel

## Vercel hosting

The linked project is `ruba23/shalom-cyber-portfolio`. `vercel.json` selects
Next.js and runs `npm run build:pages`, keeping the Cloudflare-oriented default
build script available for Sites. Vercel supplies its production hostname for
canonical URLs, the favicon and social preview assets. GitHub Pages retains its
own export base path and canonical URL.

```bash
vercel link --scope ruba23 --project shalom-cyber-portfolio
vercel deploy --prod --scope ruba23
```

### Analytics and performance

The Vercel production deployment includes `@vercel/analytics` and
`@vercel/speed-insights`. Collection runs only when `VERCEL=1` and
`VERCEL_ENV=production`, so local development, previews, GitHub Pages and Sites
do not request Vercel collection endpoints.

The RUBA workspace is on Hobby. As verified on 15 November 2026, its included
allowances are 50,000 Web Analytics events per month and 10,000 free Speed
Insights events per rolling 30 days, shared across the team. Web Analytics has
a one-month reporting window. Free Speed Insights provides the Real Experience
Score and limited route breakdowns. Collection pauses at the applicable cap.
Custom analytics events, UTM reporting, Plus features and paid monitoring
add-ons are not configured. Basic runtime logs and the Usage dashboard are
available through Vercel.

See [Web Analytics pricing](https://vercel.com/docs/analytics/limits-and-pricing)
and [Speed Insights pricing](https://vercel.com/docs/speed-insights/limits-and-pricing)
for current limits. Upgrading the account can change product pricing.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

The GitHub Pages workflow builds the static export automatically whenever the
`main` branch changes.
