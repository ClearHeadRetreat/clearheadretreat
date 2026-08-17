# Clear Head Retreat — website

Static site (pure HTML/CSS/JS). No build step, no frameworks. Deployed on GitHub Pages
at **clearheadretreat.com**.

## Pages
- `index.html` — Home (hero, what it is, fit, **Meet Wade**, activities, whole-house groups, CTA)
- `the-retreat.html` — The Retreat (experience, flow, **the house + gallery**, **food & meals**, **groups**, location, what to bring, FAQ)
- `your-host.html` — Your Host (background, career, what the work cost, the turning point, character, the team)
- `enquire.html` — Enquiry form (Formspree)
- `404.html` — Not-found page

## !! BEFORE THIS GOES LIVE — fill in the highlighted copy

Anything wrapped in `<span class="tofill">[EDIT: ...]</span>` renders with a **bright amber
highlight** on the live page. That is deliberate — you cannot miss it.

To finish a placeholder: replace the bracketed text with the real words **and delete the
surrounding `<span class="tofill">…</span>` tags**.

Find them all with:

```
grep -n "tofill" *.html
```

There are 18 in total: 4 on `index.html` and 14 on `your-host.html`.
They cover: Wade's age, heritage, where he grew up, cities/countries lived in, the trades
and businesses, the physical toll, the turning-point moment, the UK commendation,
helping family and friends, Celeste's role, and the local operators used.

If you need to ship before they are all filled, set `.tofill { background: none; }`
in `css/style.css` — but the bracketed text will still be visible, so it is better to finish them.

## Voice

The whole site is written in **third person / "we"** on purpose: it reads like a small
business with people behind it, not one bloke. Wade is referred to by name; Celeste is
named on the homepage and on the host page. The only remaining "I" on the site is the
*guest* speaking (FAQ question headings, and the consent checkbox on the enquiry form).
Keep it that way when you edit.

## Adding the bedroom / shared-space photos

`the-retreat.html` has a gallery under **A look around** (`#gallery`). Five extra figures
are pre-written and sitting inside an HTML comment. To switch them on:

1. Add the photos to `/images` with these exact lowercase filenames:
   `bedroom-1.jpg`, `bedroom-2.jpg`, `living.jpg`, `kitchen.jpg`, `bathroom.jpg`
2. Delete the `<!--` line above the block and the `-->` line below it.
3. Delete any figure you do not have a photo for.

Landscape 4:3, around 1600×1200, curtains open, lights on. Filenames are **case sensitive**
on GitHub Pages.

## Enquiry form

Live Formspree endpoint is on the `<form>` tag in `enquire.html`:
`https://formspree.io/f/mrewwyrg` — **do not overwrite it.**

## SEO — what's in place

- Unique keyword-led `<title>` and meta description per page
- Canonical URLs, `robots` meta, Open Graph + Twitter card on every page
- `images/og-cover.jpg` (1200×630) for social shares
- JSON-LD: `WebSite` + `LodgingBusiness` (with geo, capacity, amenities) on home,
  `FAQPage` + `BreadcrumbList` on the retreat page, `ProfilePage`/`Person` +
  `BreadcrumbList` on the host page, `ContactPage` on enquire
- `sitemap.xml` with `lastmod` and image entries; `robots.txt` points to it
- Every `<img>` has descriptive alt text and explicit `width`/`height` (prevents layout shift)
- Hero image preloaded with `fetchpriority="high"`; everything else lazy-loaded
- All photos re-compressed (site images went from ~5.1 MB to ~4.0 MB)

**Still worth doing:** submit the sitemap in Google Search Console, and create a Google
Business Profile for Turangi — for a location business that moves the needle more than
anything on-page.

## Editing the look

All colours and fonts are tokens at the top of `css/style.css` under `:root`.
Change those to retune the whole site.

## Publish

Push to the repo. Settings → Pages → deploy from `main` / root. `CNAME` must stay in the root.
