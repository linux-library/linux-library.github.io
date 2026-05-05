<div align="center">
  <img src="/icon.png" alt="Linux Library" width="120" />
  <h1>Linux Library</h1>
  <p><strong>Every major Linux distribution. Every architecture. One place.</strong></p>

  <a href="https://linux-library.github.io/">🌐 Visit the site</a> &nbsp;·&nbsp;
  <a href="https://github.com/linux-library/linux-library.github.io/issues">🐛 Report a bug</a> &nbsp;·&nbsp;
  <a href="https://github.com/linux-library/linux-library.github.io/issues">💡 Request a distro</a>

  <br /><br />

  ![GitHub deployments](https://img.shields.io/github/deployments/linux-library/linux-library.github.io/github-pages?label=GitHub%20Pages&style=flat-square)
  ![License](https://img.shields.io/github/license/linux-library/linux-library.github.io?style=flat-square)
  ![Last commit](https://img.shields.io/github/last-commit/linux-library/linux-library.github.io?style=flat-square)
</div>

---

## About

**Linux Library** is a clean, fast, single-page website that makes finding and downloading any major Linux distribution effortless. Instead of hunting across a dozen different sites, everything is in one place — with every link pointing to an **official distribution mirror**. No files are hosted here, ever.

Pick a distro, choose your architecture and edition through a guided download wizard, and you're taken straight to the official ISO.

---

## Features

- **33 distributions** — from everyday desktops to security-focused and enterprise distros
- **Guided download wizard** — step-by-step modal guides you through architecture, desktop environment, and edition
- **Multiple architectures** — x64, ARM64, and Raspberry Pi images where available
- **Official mirrors only** — every link goes directly to the distribution's own download servers
- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript; no frameworks, no build step
- **Fully responsive** — works on desktop, tablet, and mobile
- **Accessible** — semantic HTML, ARIA labels, and keyboard navigation (Escape to close modal)
- **SEO ready** — structured data (Schema.org), Open Graph, Twitter Card, sitemap, and canonical URLs

---

## Distributions

<details>
<summary>View all 33 distributions</summary>

| # | Distribution | Category |
|---|---|---|
| 1 | Ubuntu | General purpose |
| 2 | Linux Mint | Beginner-friendly |
| 3 | Debian | Stable / Base |
| 4 | Fedora | Cutting-edge |
| 5 | Pop!\_OS | Developer / Creator |
| 6 | Manjaro | Arch-based |
| 7 | Zorin OS | Windows switcher |
| 8 | Arch Linux | DIY / Advanced |
| 9 | Raspberry Pi OS | Single-board computing |
| 10 | Kubuntu | Ubuntu + KDE |
| 11 | Xubuntu | Ubuntu + Xfce |
| 12 | Lubuntu | Lightweight |
| 13 | EndeavourOS | Arch-based |
| 14 | Garuda Linux | Arch-based / Gaming |
| 15 | elementary OS | macOS-like |
| 16 | KDE neon | Latest KDE Plasma |
| 17 | MX Linux | Debian-based |
| 18 | openSUSE | Enterprise / Desktop |
| 19 | deepin | Stylish desktop |
| 20 | Red Hat Enterprise Linux | Enterprise |
| 21 | Rocky Linux | RHEL-compatible |
| 22 | AlmaLinux | RHEL-compatible |
| 23 | Oracle Linux | Enterprise |
| 24 | CentOS Stream | Enterprise upstream |
| 25 | Kali Linux | Security / Pentesting |
| 26 | Parrot OS | Security / Privacy |
| 27 | NixOS | Declarative / Reproducible |
| 28 | Tails | Privacy / Anonymity |
| 29 | Qubes OS | Security-focused |
| 30 | Alpine Linux | Minimal / Containers |
| 31 | Void Linux | Independent / Rolling |
| 32 | Gentoo | Source-based |
| 33 | CachyOS | Performance-optimised |

</details>

---

## Project Structure

```
linux-library.github.io/
├── icons/              # Distribution logo PNGs
├── LICENSE             # MIT license
├── README.md           # README
├── index.html          # Main page and all markup
├── style.css           # All styles (custom properties, grid, modal, animations)
├── script.js           # Distro data + download wizard logic
├── icon.png            # Site icon (OG image)
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── site.webmanifest    # PWA manifest
├── sitemap.xml
└── robots.txt
```

---

## Running Locally

No build tools required. Just open the project in your browser:

```bash
git clone https://github.com/linux-library/linux-library.github.io.git
cd linux-library.github.io
```

Then open `index.html` directly, or use a simple local server to avoid any path issues:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Contributing

Contributions are welcome! Here's how you can help:

### Adding or updating a distribution

All distro data lives in the `DISTROS` array at the top of `script.js`. Each entry follows this structure:

```js
{
  name: 'Example OS',
  website: 'https://example.com/',
  img: '/icons/exampleos.png',
  about: 'A short paragraph describing the distro...',
  links: [
    { url: 'https://example.com/example.iso', architecture: 'x64 (recommended)', desktop: 'GNOME (recommended)' },
    { url: 'https://example.com/example-arm.iso', architecture: 'ARM64', desktop: 'GNOME' },
  ],
}
```

Link objects can use any combination of the following optional keys alongside `url`:

| Key | Example values |
|---|---|
| `architecture` | `'x64 (recommended)'`, `'ARM64'`, `'Raspberry Pi'` |
| `desktop` | `'GNOME (recommended)'`, `'KDE Plasma'`, `'Xfce'` |
| `type` | `'Desktop'`, `'Server'`, `'Lite'`, `'Full'` |

The download wizard automatically detects which keys are present and builds the selection steps accordingly.

### Adding an icon

Place a square PNG (ideally 128×128 or larger) in the `/icons/` directory, named in lowercase with no spaces (e.g. `exampleos.png`), and reference it in the `img` field of the distro entry.

### Reporting outdated links

If a download URL has changed or a new version has been released, please [open an issue](https://github.com/linux-library/linux-library.github.io/issues) or submit a pull request updating the relevant URL in `script.js`.

---

## Deployment

The site is deployed automatically via **GitHub Pages** from the `main` branch. No CI configuration is required — simply push to `main` and GitHub Pages will serve the updated site within a minute or two.

---

## Licence

This project is open source and available under the [MIT Licence](LICENSE).

---

<div align="center">
  <sub>Built by <a href="https://github.com/ferranox">Alex Bowles</a> and contributors.</sub>
</div>
