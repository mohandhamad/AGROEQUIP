# AGROEQUIP

Agricultural Equipment Company — a static website that showcases AGROEQUIP's product and company information. This repository contains a simple HTML/CSS/JavaScript site (index.html, about.html) plus static assets in the css/, js/, and img/ folders.

Live demo

- Open index.html locally in a browser, or serve the site with a local HTTP server (examples below).
- If GitHub Pages is enabled for this repository you can publish the site from the main branch and it will appear at: https://mohandhamad.github.io/AGROEQUIP/ (enable Pages in repository settings if needed).

Quick preview (development)

1. Clone the repository:

   git clone https://github.com/mohandhamad/AGROEQUIP.git
   cd AGROEQUIP

2. Preview one of these ways:

   - Open index.html in your browser (double-click the file).
   - Use Python's simple HTTP server (recommended for correct asset loading):

     python3 -m http.server 8000
     # then open http://localhost:8000 in your browser

   - Use Node (http-server):

     npm install -g http-server
     http-server -c-1

Project structure

- index.html        — Home / main page
- about.html        — About page
- css/              — Stylesheets and assets
- js/               — JavaScript files
- img/              — Images and media
- README.md         — This file

What this repo contains

This is a static site built with HTML, CSS and JavaScript. It's intended for presentation and documentation of AGROEQUIP, not a backend application. Use it as a starting point for a marketing site, documentation site, or single-page app.

How to contribute

Contributions are welcome.

1. Fork the repo.
2. Create a branch for your change: `git checkout -b feat/your-change`
3. Make changes and test locally.
4. Commit and push to your fork, then open a Pull Request.

Before submitting changes:

- Keep the site accessible and responsive.
- Optimize images placed in img/ to keep the repo size small.

Suggestions for improvements

- Add a LICENSE file (MIT or your preferred license) to make reuse policy clear.
- Add CI checks (link-checker, HTML validation) if this repo becomes a production site.
- Add a CONTRIBUTING.md with coding and commit conventions.

License

No license is specified in this repository. If you want others to reuse this project, add a LICENSE file (for example, the MIT license).

Contact

Maintainer: mohandhamad — https://github.com/mohandhamad

---