# CyberSecPro - Website Keamanan Siber

Website profesional tentang cyber security yang dibangun dengan Next.js 14 dan Tailwind CSS.

## Fitur

- ✨ Design modern dengan tema cyber security
- 🎨 Animasi dan efek visual menarik
- 📱 Responsive design (mobile-friendly)
- ⚡ Performance optimal dengan Next.js
- 🎯 Multi-section: Home, Layanan, Ancaman, Tips, Kontak

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Cara Menjalankan Lokal

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di `http://localhost:3000`

## Deploy ke Vercel

### Opsi 1: Deploy via GitHub (Recommended)

1. Push project ke GitHub repository Anda
2. Login ke [Vercel](https://vercel.com)
3. Klik "Add New Project"
4. Import repository GitHub Anda
5. Vercel akan otomatis detect Next.js dan configure build settings
6. Klik "Deploy"

### Opsi 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Untuk production deployment:
```bash
vercel --prod
```

## Build untuk Production

```bash
npm run build
```

Output akan ada di folder `out/` (static export)

## Struktur Project

```
cybersecurity-web/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Mengubah Warna

Edit file `tailwind.config.js`:
```javascript
colors: {
  cyber: {
    dark: '#0a0e27',
    blue: '#00d4ff',
    purple: '#9d4edd',
    green: '#00ff88',
  }
}
```

### Menambah Konten

Edit file `app/page.tsx` untuk mengubah atau menambah section baru.

## License

MIT License - bebas digunakan untuk project pribadi atau komersial.

## Support

Untuk pertanyaan atau bantuan, silakan buat issue di repository ini.
