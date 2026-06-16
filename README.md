# Guided Growth with Binita — React Application

A production-ready React.js application replicating the design of [guidedgrowthwithbinita.lovable.app](https://guidedgrowthwithbinita.lovable.app), targeting the production domain **https://guidedgrowthwithbinita.com**.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| React Router 6 | Client-side routing |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations |
| React Hook Form + Zod | Forms & validation |
| Lucide React | Icons |
| React Icons | Social icons |
| React Helmet Async | SEO meta tags |

---

## Project Structure

```
guided-growth-with-binita/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── hooks/
│   │   │   └── useInView.js          # Intersection observer hook
│   │   ├── layout/
│   │   │   ├── Header.jsx            # Sticky responsive header + mobile menu
│   │   │   └── Footer.jsx            # Footer with social links
│   │   └── sections/
│   │       ├── Hero.jsx              # Hero with Binita's desk image
│   │       ├── ImagineForward.jsx    # "Imagine Moving Forward" section
│   │       ├── About.jsx             # Meet Binita + credentials
│   │       ├── WhoIHelp.jsx          # "This Work Is For You If..." grid
│   │       ├── Services.jsx          # 4 service cards
│   │       ├── Transformation.jsx    # Before / After dark section
│   │       ├── Testimonials.jsx      # 6 testimonial cards
│   │       ├── FAQ.jsx               # Accordion FAQ (8 items)
│   │       ├── SocialLinks.jsx       # Spotify, Instagram, LinkedIn, YouTube
│   │       ├── CTA.jsx               # Dark green CTA invitation
│   │       └── Contact.jsx           # Contact links grid
│   ├── pages/
│   │   └── Home.jsx                  # Assembles all sections + SEO meta
│   ├── App.jsx                       # Router setup
│   ├── main.jsx                      # React DOM entry
│   └── index.css                     # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── netlify.toml
├── .env.example
└── package.json
```

---

## Sitemap

| Section | Anchor | Component |
|---------|--------|-----------|
| Home | `#home` | `Hero` |
| Imagine Forward | — | `ImagineForward` |
| About | `#about` | `About` |
| Who I Help | — | `WhoIHelp` |
| Services | `#services` | `Services` |
| Transformation | — | `Transformation` |
| Testimonials | `#testimonials` | `Testimonials` |
| FAQ | `#faq` | `FAQ` |
| Social Links | — | `SocialLinks` |
| CTA | — | `CTA` |
| Contact | `#contact` | `Contact` |

---

## Step-by-Step Setup

### 1. Install Node.js

Download and install Node.js **v18 or later** from https://nodejs.org

Verify:
```bash
node -v   # should show v18+
npm -v    # should show 9+
```

### 2. Clone / Extract the Project

```bash
# If using git:
git clone https://github.com/your-org/guided-growth.git
cd guided-growth

# Or unzip downloaded archive:
unzip guided-growth.zip
cd guided-growth
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Environment Variables

```bash
cp .env.example .env
# Edit .env if needed — defaults work for production
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 6. Build Production Bundle

```bash
npm run build
```

Output is in the `dist/` folder.

### 7. Preview Production Build Locally

```bash
npm run preview
```

Open [http://localhost:4173](http://localhost:4173)

---

## Deployment

### Option A — Vercel (Recommended, Free)

1. Push project to GitHub
2. Visit [vercel.com](https://vercel.com) → Import project
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

The included `vercel.json` handles SPA routing automatically.

**Custom domain on Vercel:**
- Go to your project → Settings → Domains
- Add `guidedgrowthwithbinita.com`
- Vercel will show you the DNS records to configure (see GoDaddy section below)

---

### Option B — Netlify (Free)

1. Push to GitHub
2. Visit [netlify.com](https://netlify.com) → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

The included `netlify.toml` handles redirects for SPA routing.

**Custom domain on Netlify:**
- Site Settings → Domain Management → Add custom domain
- Add `guidedgrowthwithbinita.com`
- Follow the DNS instructions (see GoDaddy section below)

---

### Option C — Self-Hosting on VPS (Ubuntu/Debian)

**Prerequisites:** Ubuntu 20.04+, SSH access, domain pointed at server IP

#### Install Nginx and Node

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx certbot python3-certbot-nginx

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

#### Upload and Build

```bash
# Upload project to /var/www/guided-growth
cd /var/www/guided-growth
npm install
npm run build
```

#### Configure Nginx

```nginx
# /etc/nginx/sites-available/guidedgrowthwithbinita.com
server {
    listen 80;
    server_name guidedgrowthwithbinita.com www.guidedgrowthwithbinita.com;
    return 301 https://guidedgrowthwithbinita.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name guidedgrowthwithbinita.com;

    root /var/www/guided-growth/dist;
    index index.html;

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Asset caching
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    ssl_certificate     /etc/letsencrypt/live/guidedgrowthwithbinita.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/guidedgrowthwithbinita.com/privkey.pem;
}
```

```bash
sudo ln -s /etc/nginx/sites-available/guidedgrowthwithbinita.com \
           /etc/nginx/sites-enabled/

sudo certbot --nginx -d guidedgrowthwithbinita.com -d www.guidedgrowthwithbinita.com
sudo nginx -t && sudo systemctl reload nginx
```

---

## GoDaddy Domain Configuration

### A Record Setup (Vercel/Netlify)

Log in to GoDaddy → My Domains → guidedgrowthwithbinita.com → **DNS**

#### For Vercel:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 600 |
| CNAME | www | cname.vercel-dns.com | 600 |

> ⚠️ Get the exact IPs from your Vercel project → Settings → Domains. They may differ.

#### For Netlify:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 600 |
| CNAME | www | [your-site].netlify.app | 600 |

> Get your exact Netlify IP/CNAME from Site Settings → Domain Management.

#### For VPS (your server IP):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | YOUR_VPS_IP | 600 |
| A | www | YOUR_VPS_IP | 600 |

---

### WWW to Non-WWW Redirect

All deployment options above redirect `www.guidedgrowthwithbinita.com` → `guidedgrowthwithbinita.com`:

- **Vercel**: Add both domains in project settings; set `guidedgrowthwithbinita.com` as primary
- **Netlify**: Under Domain Management, set primary domain to non-www
- **VPS**: Handled in the Nginx config above with `return 301`

---

### SSL Configuration

| Platform | SSL | How |
|----------|-----|-----|
| Vercel | Automatic | Free Let's Encrypt via Vercel |
| Netlify | Automatic | Free Let's Encrypt via Netlify |
| VPS | Certbot | Run `certbot --nginx` as shown above |

SSL auto-renews on all platforms.

---

### Domain Verification

After updating DNS records, propagation takes **5 minutes to 48 hours**.

Check propagation:
```bash
# Check A record
dig guidedgrowthwithbinita.com A

# Check from multiple locations
https://dnschecker.org/#A/guidedgrowthwithbinita.com
```

---

### GoDaddy Forwarding (Alternative — Simpler)

If you only want to forward the domain without full DNS control:

1. GoDaddy → Manage Domain → Forwarding
2. Forward to: `https://your-deployment.vercel.app`
3. Type: **Permanent (301)**
4. Forward with masking: Off (for SEO)

> Not recommended for production — use A/CNAME records instead.

---

### Troubleshooting Guide

| Issue | Cause | Fix |
|-------|-------|-----|
| Site loads on IP but not domain | DNS not propagated | Wait up to 48h, check with `dig` |
| SSL certificate error | Cert not issued yet | Wait a few minutes after DNS propagates |
| 404 on page refresh | SPA routing not configured | `vercel.json` / `netlify.toml` / nginx `try_files` |
| www not redirecting | Missing CNAME or redirect rule | Add www CNAME pointing to platform |
| GoDaddy "CNAME already exists" | Default parked page records | Delete default @ A record before adding yours |
| Images not loading | CORS / path issue | Images are loaded from external URLs — check network tab |

---

## Image Assets

The following images are loaded from the original Lovable CDN:

| Image | URL |
|-------|-----|
| Binita at desk (hero) | `https://guidedgrowthwithbinita.lovable.app/__l5e/assets-v1/.../binita-desk.png` |
| Imagine Forward | `https://guidedgrowthwithbinita.lovable.app/__l5e/assets-v1/.../imagine-forward.png` |
| Binita headshot | `https://guidedgrowthwithbinita.lovable.app/__l5e/assets-v1/.../binita-headshot.png` |

**For production:** Download these images and place them in `public/images/` then update `src` attributes in `Hero.jsx`, `ImagineForward.jsx`, and `About.jsx`:

```jsx
// Change from:
src="https://guidedgrowthwithbinita.lovable.app/..."
// To:
src="/images/binita-desk.png"
```

---

## Performance

Production build output:
- `index.html`: ~1.3 kB gzipped
- `index.css`: ~4.5 kB gzipped  
- App JS: ~17.7 kB gzipped
- Framer Motion: ~38 kB gzipped
- React/Router: ~51 kB gzipped

**Total initial load: ~111 kB gzipped** ✅

---

## Accessibility

- All images have descriptive `alt` attributes
- Interactive elements have `aria-label` where needed
- Focus states visible via Tailwind ring utilities
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- Color contrast meets WCAG AA on all text

---

## License

© 2026 Guided Growth with Binita. All rights reserved.
