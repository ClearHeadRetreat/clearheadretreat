# Clear Head Retreat — website

Static site (pure HTML/CSS/JS). No build step, no frameworks. Ready for GitHub Pages.

## Pages
- `index.html` — Home
- `the-retreat.html` — The Retreat (experience, flow, accommodation, meals, what's included, location & privacy, what to bring, FAQ)
- `your-host.html` — Your Host
- `enquire.html` — Enquiry form

## Connect the enquiry form (5 minutes)
1. Sign up at https://formspree.io (free tier is fine).
2. Create a form; copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. In `enquire.html`, find `YOUR_FORMSPREE_ID` in the `<form action="...">` and replace it.
   Until you do, the form shows a "not connected yet" note instead of failing.

## Add your photos
Every grey hatched box is a placeholder. See `images/README.txt` for the shot list
and how to swap each one. Replace `<div class="ph ...">LABEL</div>` with
`<img src="images/your-photo.jpg" alt="...">`.

## Personalise the copy
- `your-host.html` — replace `[Your Name]` and the bracketed `[This is your space...]`
  paragraph with your own words.
- Search the site for the phone number `1737` (NZ crisis line) if you want to adjust
  wellbeing signposting for a different country.

## Publish on GitHub Pages
1. Push these files to a repo.
2. Settings → Pages → deploy from branch (`main`, `/root`).
3. Update the placeholder `https://example.com/` URLs in the `<meta>` tags,
   `sitemap.xml`, and `robots.txt` to your real domain (optional but good for SEO).

## Editing the look
All colours and fonts are tokens at the top of `css/style.css` under `:root`.
Change those to retune the whole site.
