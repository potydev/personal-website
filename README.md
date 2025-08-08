# Personal Website

Website personal yang unik dengan tema dark mode, animasi GSAP, dan menampilkan informasi profil, skill, project, serta pengalaman.

## Fitur Utama

- Desain Dark Mode yang Unik
- Animasi GSAP yang Menawan
- Responsive Design
- Integrasi Media Sosial (Instagram, GitHub, Email)
- Custom Cursor
- Scroll Progress Bar
- Navigation Menu Interaktif
- Section Skills & Expertise
- Section Featured Projects
- Section Journey & Experience (Timeline)

## Instalasi dan Menjalankan Project

Untuk menjalankan project ini secara lokal, ikuti langkah-langkah berikut:

### 1. Clone Repository

```bash
git clone https://github.com/potydev/personal-website.git # (Jika Anda mengunggah ke GitHub)
cd personal-website
```

Jika Anda mendapatkan file ZIP, ekstrak file tersebut dan navigasikan ke direktori `personal-website`.

### 2. Instal Dependencies

Project ini menggunakan `pnpm` sebagai package manager. Pastikan Anda sudah menginstalnya. Jika belum, Anda bisa menginstalnya dengan npm:

```bash
npm install -g pnpm
```

Setelah itu, instal semua dependencies project:

```bash
pnpm install
```

### 3. Jalankan Development Server

Untuk menjalankan website dalam mode pengembangan:

```bash
pnpm run dev
```

Website akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sudah digunakan). Anda bisa membukanya di browser Anda.

### 4. Build untuk Produksi

Untuk membuat versi produksi dari website (file statis yang siap di-deploy):

```bash
pnpm run build
```

Hasil build akan berada di direktori `dist/`.

## Struktur Project

```
personal-website/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Skills.jsx
│   │   ├── Timeline.jsx
│   │   └── ui/ (komponen UI dari shadcn/ui)
│   ├── hooks/
│   │   └── use-mobile.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Teknologi yang Digunakan

- **React.js**: Library JavaScript untuk membangun antarmuka pengguna.
- **Vite**: Build tool yang cepat untuk project frontend.
- **Tailwind CSS**: Framework CSS utility-first untuk styling yang cepat dan responsif.
- **GSAP (GreenSock Animation Platform)**: Library animasi JavaScript yang powerful untuk animasi berkualitas tinggi.
- **Lenis**: Library untuk smooth scrolling.
- **Lucide React**: Icon library.
- **Shadcn/ui**: Komponen UI yang dapat dikustomisasi.

## Kontak

- **Instagram**: @potyhi
- **GitHub**: @potydev
- **Email**: dapotmatthew02@gmail.com

---

