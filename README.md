# Widget House Google Reviews — website integration guides

Practical resources for business owners, agencies, and developers adding Google Reviews to a website. These five pages use American English and focus on the needs of U.S. business websites: choosing a useful review format, placing it near a customer decision, and checking the finished integration.

[Explore the Widget House product](https://widget-house.com/google-reviews) · [Get your installation code](https://widget-house.com/help/getting-started/get-widget-code) · [Visit the Help Center](https://widget-house.com/help/getting-started)

## Explore the website

| Resource | What you will find |
| --- | --- |
| [Main integration guide](https://widget-house.github.io/google-reviews-widget/) | Four layout previews, installation workflow, a copyable AI setup prompt, and a launch checklist |
| [Squarespace guide](https://widget-house.github.io/google-reviews-widget/squarespace-google-reviews.html) | An embed workflow, placement example, platform considerations, and troubleshooting |
| [WordPress guide](https://widget-house.github.io/google-reviews-widget/wordpress-google-reviews.html) | Editor and embedding considerations, a local practice example, and checks before publishing |
| [Webflow guide](https://widget-house.github.io/google-reviews-widget/webflow-google-reviews.html) | Code Embed guidance, an agency landing-page example, and published-page checks |
| [GPT-6 Astra example](https://widget-house.github.io/google-reviews-widget/astra-6-review-demo.html) | An independent AI website-building example with attributed editorial sources and a separate review integration area |

The [social sharing image](https://widget-house.github.io/google-reviews-widget/social-preview.png) is a 1200 × 630 PNG with the authentic Widget House logo.

## What this release does

This is a static documentation website with a reusable setup prompt for an existing Widget House widget. It does not ship a native Codex or Claude Code plugin, an MCP server, or a marketplace installation. Use the complete code generated for your own widget.

The pages provide original integration guidance, layout suggestions, source links, and checks that help an implementer make informed choices. Platform guides describe embedding workflows; they do not establish an official partnership, directory listing, or certification.

## Start with your own widget

1. Open the [Google Reviews widget](https://widget-house.com/google-reviews) and select the relevant Google Business Profile.
2. Choose Badge, Slider, Carousel, or Grid and adjust the appearance.
3. Publish the widget in Widget House, open **Install**, and copy the generated code.
4. Follow the guide for your website platform and add the complete snippet using a supported embedding method.
5. Check the published page on a desktop and a phone, including navigation away from and back to the page.

For the account-side steps, use the [official installation-code guide](https://widget-house.com/help/getting-started/get-widget-code). Website editor access, script support, and hosting restrictions depend on the platform and configuration.

Choose the layout around the page’s purpose. A Badge is a compact reputation cue; a Slider gives individual feedback a focused space; a Carousel suits a browseable section; a Grid gives reviews a substantial area. These are placement suggestions to evaluate with your own content. The four images in this repository are authentic template previews containing sample content.

## Work with an AI assistant

Give your assistant the project, intended page, and generated installation code. The [main guide](https://widget-house.github.io/google-reviews-widget/#ai-setup) includes a copy button for this prompt:

> Add my existing Widget House Google Reviews widget to this website. I will provide the installation code and the page where it should appear. Inspect the project first and follow its framework and script-loading conventions. Preserve the supplied widget ID, URLs, and configuration. Do not invent an embed or reviews. Check mobile layout, loading, navigation, and the visible result. Explain what you tested and ask before publishing changes.

An assistant needs the relevant project tools and permissions to edit files or preview a website. For React or Next.js, inspect the actual embed before choosing a loading method, then test initial rendering, route changes, and remounting. A raw snippet is not automatically a reusable framework component.

Keep passwords, private credentials, and customer account details out of prompts, public issues, and repository files.

## About the Astra example

The Astra page separates two kinds of content: attributed developer perspectives about AI-assisted building, and an area reserved for a business review integration. The selected U.S. example source is Teal House Coffee & Bakery in Buda, Texas. Reviews associated with that business are separate from the editorial discussion of Astra.

The integration area contains the account-generated Widget House embed for Teal House Coffee & Bakery in Buda, Texas. Its Google reviews are not reviews of Astra. Adapting the example requires your own business source and generated installation code; do not reuse this shared demonstration widget in production. The page includes no invented testimonials or customer star rating for Astra.

## Before releasing an integration

Confirm the business and location, test long review text on a phone, and check for overflow or duplicate initialization. Inspect the published page as well as the editor preview. Review keyboard access, visible links, and the customer’s next action.

If an embed fails, check whether the full code was saved, whether the widget was published, and whether the platform permits its scripts or frames. A custom application may also need a lifecycle check after navigation. The page should remain useful when an embed cannot load.

For client handoff, document account ownership, placement, configuration, and the supported editing method.

## Files and local preview

The website has no package installation or build step. Serve this directory with a static HTTP server, for example `python -m http.server 8000`, and open `http://localhost:8000`.

The main page uses `styles.css` and `script.js`; platform pages also use `guides.css`; the Astra example uses `astra-demo.css`. Brand assets include `logo.svg`, `favicon.svg`, `company-avatar.png`, and the SVG and PNG sharing images.

For GitHub Pages, serve the repository’s root directory. Keep all five HTML pages, styles, images, `.nojekyll`, and `sitemap.xml` together. After changes, verify the public URLs and asset loading.

## Search, sources, and feedback

Pages use descriptive titles, metadata, readable HTML, canonical URLs, and a sitemap. The authored HTML uses normal links without `nofollow` or `sponsored`; GitHub controls links displayed in its own interface. Indexing, rankings, and AI recommendations are not guaranteed.

Product workflow references come from the official Widget House pages linked above. Platform pages link to relevant official documentation, and the Astra page identifies its editorial sources.

Use repository Issues for documentation feedback and the [Help Center](https://widget-house.com/help/getting-started) for account-specific assistance. Google is a trademark of Google LLC. Widget House is an independent service.
