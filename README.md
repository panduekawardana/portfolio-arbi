# Portofolio Arbi Maulidi Anggito (React + Vite)

Versi React dari halaman portofolio HTML. Tampilan dibuat sama dengan file asli
(sudah dibandingkan piksel demi piksel di lebar 390, 768, 1024, dan 1440 px).

## Menjalankan

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev      # mode pengembangan, buka alamat yang tertera (biasanya http://localhost:5173)
npm run build    # build produksi ke folder dist/
npm run preview  # cek hasil build
```

## Struktur

```
src/
├── App.jsx                  # susunan seluruh section
├── main.jsx                 # titik masuk React
├── input.css                # sumber Tailwind v4 (@theme + aturan dasar)
├── output.css               # hasil build Tailwind (di-import main.jsx)
├── fonts.css                # @font-face (lisensi OFL disertakan di atas file)
├── data/portfolio.js        # SEMUA teks dan data (ubah konten di sini)
├── lib/
│   ├── styles.js            # class utility Tailwind yang dipakai bersama
│   └── utils.ts             # helper cn dari shadcn
├── components/              # satu komponen per section
│   ├── Hero.jsx             # navigasi, judul, statistik + ProfileCard
│   ├── ProfileCard.tsx      # komponen React Bits dari registry shadcn
│   ├── ui/button.tsx        # komponen shadcn bawaan
│   ├── About.jsx            # Tentang
│   ├── Photos.jsx           # dua foto
│   ├── Highlights.jsx       # Sorotan (tiga kartu)
│   ├── Experience.jsx       # Pengalaman + Pendidikan + Organisasi
│   ├── Skills.jsx           # Keahlian
│   ├── Certificates.jsx     # Sertifikat
│   ├── Contact.jsx          # Kontak + footer
│   └── SectionHead.jsx      # label kecil + judul section
└── assets/                  # foto dan font (sudah lokal, tidak memuat dari internet)
```

## Perbaikan dibanding file HTML asli

1. Ditambahkan `<meta name="viewport">`. Tanpa ini, halaman tampil seperti desktop yang diperkecil di HP.
2. Artefak bundler dihapus (tag `helmet`, `x-dc`, skrip pemuat, meta `hz:*`, dan referensi skrip yang tidak dapat dimuat di luar bundler).
3. Font dimuat dari folder lokal, bukan dari Google Fonts, sehingga halaman tetap rapi tanpa koneksi internet.
   Font Space Grotesk yang dipakai hanya subset Latin, dan itu mencakup seluruh teks halaman.
   Lisensi OFL dari komentar asli tetap disertakan di `src/fonts.css`.
4. Markup dibuat semantik (`header`, `nav`, `section`, `article`, `footer`, `h1`–`h3`) dengan label aria.
5. Fokus keyboard di latar gelap memakai warna terang (`#FF7A8A`), agar kontrasnya cukup.
6. Animasi scroll dimatikan untuk pengguna yang mengaktifkan `prefers-reduced-motion`.
7. Konten dipisah ke `src/data/portfolio.js`, sehingga tidak perlu menyentuh komponen untuk mengubah teks.
8. Seluruh gaya halaman memakai utility Tailwind CSS v4; `npm run dev` dan `npm run build` otomatis menyusun ulang `src/output.css` dari `src/input.css` (`npm run css:watch` untuk mode watch).
9. Hero memakai `ProfileCard` dari React Bits yang dipasang melalui `npx shadcn add @react-bits/ProfileCard-TS-TW`.

## Catatan konten (belum diubah, perlu dicek pemilik)

- Sorotan dan Keahlian memakai kata "manifestasi jamaah (Nusuk)". Kemungkinan yang dimaksud adalah "manifes" (daftar jamaah) atau "verifikasi". Mohon dicek.
- Pengalaman "Sales (Freelance)" (Feb 2021 – Mei 2022) tercantum di organisasi "Business, Lombok". Itu terdengar seperti placeholder, bukan nama usaha.
- Sertifikat "Sertifikat Guide" tidak menyebut nama lembaga penerbitnya.
