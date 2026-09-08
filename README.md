# Widget House Google Reviews — website integration guide

A practical resource for business owners, agencies, and developers adding an existing Widget House Google Reviews widget to a website. Written in American English for projects serving the U.S. market.

[Read the integration guide](https://widget-house.github.io/google-reviews-widget/) · [Explore the Google Reviews widget](https://widget-house.com/google-reviews) · [Get your installation code](https://widget-house.com/help/getting-started/get-widget-code)

## What this repository provides

- A static, accessible integration guide with four authentic template previews.
- A workflow for obtaining and installing your own generated embed.
- Practical HTML, React, Next.js, and website-builder considerations.
- A copyable setup prompt for an AI assistant working on your website.
- A launch checklist and troubleshooting questions.

This release provides documentation and a reusable setup prompt for an existing Widget House widget; use the complete installation code generated for your own widget.

## Start with your own Widget House widget

1. Open the [Widget House Google Reviews product](https://widget-house.com/google-reviews).
2. Select the relevant Google Business Profile and choose your layout.
3. Adjust its appearance and publish the widget.
4. Open **Install** and copy the generated code, following the [official guide](https://widget-house.com/help/getting-started/get-widget-code).
5. Add it using your website’s supported embed method.
6. Check the actual deployed page, including a mobile viewport and navigation away from and back to the page.

| Layout | Suggested place to evaluate it |
| --- | --- |
| [Badge](https://widget-house.com/google-reviews/badge?template=badge) | A compact landing page or a section near contact details |
| [Slider](https://widget-house.com/google-reviews/slider?template=slider) | A focused service page |
| [Carousel](https://widget-house.com/google-reviews/carousel?template=carousel) | A homepage introduction to customer feedback |
| [Grid](https://widget-house.com/google-reviews/grid?template=grid) | A dedicated reviews page or substantial review section |

These are editorial placement suggestions. Preview your own content and evaluate the result on your own website. Preview images contain sample content; they are not customer testimonials for this repository or your business.

## Use an AI assistant to help with installation

Provide the assistant with your project, the intended page, and the installation code generated in your Widget House account. Never provide account passwords or private credentials.

```text
Add my existing Widget House Google Reviews widget to this website.

I will provide the installation code generated in my Widget House account and the page where it should appear.

Inspect the project first. Follow its framework and script-loading conventions. Preserve the supplied widget ID, URLs, and configuration. Do not invent an embed, reviews, ratings, API, or account connection.

Use a semantic reviews section that fits the page. Avoid duplicate initialization. For React or Next.js, check client-side loading and behavior after route changes.

Verify mobile layout, script loading, keyboard access, and the visible result. Tell me what you checked and what still needs a live-site test. Ask before publishing changes.
```

The assistant’s ability to edit files, preview the result, or publish a site depends on the tools and permissions available in that environment. This prompt is guidance, not an installed integration or a verified framework adapter.

## Implementation considerations

### HTML

Preserve the generated embed and insert it where the widget belongs. Check whether your hosting platform permits any scripts or frames that the generated code uses. A static host can serve this guide; the actual widget remains a Widget House service.

### React and Next.js

Inspect the actual embed before choosing an implementation. Do not assume that pasting a raw snippet into JSX initializes it correctly. Follow the framework’s supported script-loading method and verify client-side loading, navigation, and remounting. Avoid loading or initializing the same widget twice. This repository intentionally does not guess loader URLs, configuration fields, widget IDs, cleanup APIs, or reinitialization APIs.

### Website builders

Verify current plan and platform support for the generated code. An editor may sanitize scripts or behave differently from the published site. Use a supported code or embed area and test the public page.

### If a widget is missing

- Confirm that the correct widget is published and the complete installation code was saved.
- Check the live page in addition to the editor preview.
- Inspect browser errors and hosting restrictions on scripts, frames, and content security policy.
- Check whether route transitions change initialization behavior in a custom app.
- Contact the [Widget House Help Center](https://widget-house.com/help/getting-started) if the generated code still fails.

## Before handing a site to a client

Check the connected business and location, long review text on mobile, keyboard navigation, actual script loading, and behavior after route changes. Make sure the page still explains the business and offers a way to contact it when an embed is unavailable. Document account ownership, placement, and the supported way to edit the widget.

## Run this documentation site locally

No package installation or build step is required. Serve the files with any local static HTTP server, for example:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. The copy button uses the Clipboard API on supported secure contexts, with a text-selection fallback.

## Publish with GitHub Pages

This directory is a complete flat site. Upload its contents to the root of `widget-house/google-reviews-widget`, then configure GitHub Pages to deploy from the `main` branch and `/ (root)`. The intended public address is:

`https://widget-house.github.io/google-reviews-widget/`

The `.nojekyll` file bypasses Jekyll processing. If the repository name, organization, or domain changes, update the canonical URL, Open Graph URL, JSON-LD identifiers, README links, and sitemap together. Publication is complete only when the configured public URL actually serves the site.

The hosted site is developer documentation. Account creation, widget configuration, payment, and service operation remain on Widget House. There is no checkout, sign-in form, backend, analytics, external font dependency, or widget account data in these files.

## Search and sharing

The page uses a unique title and description, semantic HTML, descriptive links, a self-canonical URL, Open Graph metadata, and a single-page sitemap. JSON-LD describes only the organization and this documentation page. There are no review ratings, aggregate ratings, invented authors, or rich-result claims in structured data.

Links in the authored HTML use normal `href` values without `nofollow` or `sponsored`. GitHub controls links rendered in its own repository interface; the authored README cannot override that behavior. These choices do not guarantee indexing, rankings, AI recommendations, referrals, or how any search system treats a link.

## Sources and scope

Product workflow checked against the following official pages on September 8, 2026:

- [Widget House Google Reviews](https://widget-house.com/google-reviews) — product, review source, layout names, customization, and generated installation code.
- [How to get the widget code](https://widget-house.com/help/getting-started/get-widget-code) — publish, open Install, and copy the widget’s generated code.
- [Google Reviews Grid](https://widget-house.com/google-reviews/grid?template=grid) — grid layout reference.
- [Widget House Help Center](https://widget-house.com/help/getting-started) — support documentation entry point.
- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) — hosting scope and service restrictions.

Framework notes, placement suggestions, the AI prompt, and launch checks are implementation guidance rather than claims of certified platform compatibility. No API, embed contract, marketplace listing, automatic refresh interval, quantified time saving, pricing, or revenue improvement is asserted by this release.

## Feedback

Use this repository’s Issues for documentation feedback after the repository is published. For account-specific or widget-specific problems, use the [Widget House Help Center](https://widget-house.com/help/getting-started). Keep passwords, private customer information, and account details out of public issues.

Google is a trademark of Google LLC. Widget House is an independent service.
