// Konten portofolio disimpan di satu tempat agar mudah diperbarui tanpa menyentuh komponen.
const pts = (a) => a.map((text) => ({ text }));

export const profile = {
  initials: 'AMA',
  name: 'Arbi Maulidi Anggito',
  location: 'Portofolio · Lombok Timur, NTB',
  tagline:
    'Sarjana Pariwisata Syariah yang bekerja di bidang administrasi, layanan pelanggan, dan hospitality, dengan bantuan AI untuk mempercepat pekerjaan.',
  heroPhotoAlt: 'Foto Arbi Maulidi Anggito mengenakan jas hitam dan dasi',
  copyright: '© 2026 Arbi Maulidi Anggito',
};

export const navItems = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Sorotan', href: '#sorotan' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Sertifikat', href: '#/sertifikat' },
  { label: 'Kontak', href: '#kontak' },
];

export const heroStats = [
  { value: '3,77', label: 'IPK S1 Pariwisata Syariah, lulusan terbaik ke-4 di jurusan' },
  { value: '5.798', label: 'kartu Nusuk jamaah haji 2026 embarkasi Lombok yang saya input' },
  { value: '99%', label: 'pelayanan pemasangan atribut haji, termasuk seluruh gelang jamaah' },
];

export const about = {
  eyebrow: 'Tentang',
  title: 'Melayani dengan rapi dan cepat',
  paragraphs: [
    'Saya lulusan S1 Pariwisata Syariah Universitas Islam Negeri Mataram dengan IPK 3,77 dan peringkat ke-4 terbaik di jurusan. Pengalaman saya ada di tiga area: administrasi dan data, layanan tamu serta pelanggan, dan pemanfaatan AI.',
    'Saya terbiasa memakai Microsoft Office dan spreadsheet. Saya juga menyusun prompt AI untuk pekerjaan administrasi, layanan, dan karya ilmiah, dengan dasar pemahaman bidangnya. Pada musim haji 2026 saya menjadi data entry kartu Nusuk bagi 5.798 jamaah haji embarkasi Lombok.',
  ],
};

export const highlights = {
  eyebrow: 'Sorotan',
  title: 'Tiga pekerjaan yang paling menggambarkan saya',
  items: [
    {
      period: 'Februari – Agustus 2026',
      title: 'Penyelenggaraan Haji 2026',
      org: 'Kementerian Haji dan Umrah, Nusa Tenggara Barat',
      points: [
        'Data entry kartu Nusuk untuk 5.798 jamaah haji embarkasi Lombok.',
        '70% manifestasi jamaah (Nusuk) dan 99% pelayanan pemasangan atribut haji, termasuk seluruh gelang jamaah.',
        'Sebagai administrator helper magang, memegang 80% administrasi kantor wilayah dan 85% pelayanan jamaah di kantor.',
      ],
      foot: 'Salah satu kandidat peserta magang terbaik sejak Kementerian Haji dan Umrah berdiri.',
    },
    {
      period: 'Agustus 2023 – Mei 2025',
      title: 'AI Prompt Engineer',
      org: 'PT Shafira Nurul Sejahtera, Jakarta',
      points: [
        'Menangani 80% prompting untuk pekerjaan karya ilmiah (publisher).',
        'Menyusun strategi pemasaran dan jadwal pengerjaan pesanan pelanggan.',
        'Membuat rincian gaji para pekerja di bidang karya ilmiah.',
      ],
      foot: 'Freelance selama 21 bulan.',
    },
    {
      period: '2024 – sekarang',
      title: 'Event dan hospitality',
      org: 'MotoGP 2024 dan MGPA Mandalika Sirkuit',
      points: [
        'Volunteer hospitality MotoGP 2024 (25 September – 1 Oktober): melayani tamu dan menangani keluhan.',
        'Divisi merchandise MGPA sejak Oktober 2026: penjualan di toko dan lapak event.',
        'Layanan ekstra untuk pelanggan dan stock opname di akhir musim.',
      ],
      foot: 'Sirkuit Mandalika, Lombok.',
    },
  ],
};

export const experienceCopy = {
  eyebrow: 'Pengalaman',
  title: 'Riwayat kerja, terbaru di atas',
};

export const education = [
  {
    label: 'Pendidikan',
    title: 'Universitas Islam Negeri Mataram',
    line: 'S1 Pariwisata Syariah · IPK 3,77/4,00',
    meta: 'Juli 2022 – Agustus 2026 · Lulusan terbaik ke-4 di jurusan',
  },
  {
    label: 'Organisasi',
    title: 'Asian Youth International Model United Nations',
    line: 'Anggota · Malaysia',
    meta: 'September – Oktober 2022 · Kegiatan internasional daring dan luring',
  },
];

export const skillsCopy = {
  eyebrow: 'Keahlian',
  title: 'Yang bisa saya kerjakan',
};

export const certificatesCopy = {
  eyebrow: 'Sertifikat',
  title: 'Pelatihan yang saya selesaikan',
};

export const contactCopy = {
  eyebrow: 'Kontak',
  title: 'Mari bekerja sama',
  text: 'Untuk peran administrasi, layanan pelanggan, hospitality, atau pekerjaan berbasis data dan AI, hubungi saya lewat kontak berikut.',
};

export const contacts = [
  { label: 'Email', value: 'hazamikhairul39@gmail.com', href: 'mailto:hazamikhairul39@gmail.com', wrap: true },
  { label: 'Telepon', value: '+62 896-8664-9241', href: 'tel:+6289686649241', numeric: true },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/arbi-anggito-b3a90b268',
    href: 'https://www.linkedin.com/in/arbi-anggito-b3a90b268',
    wrap: true,
  },
  { label: 'Alamat', value: 'Desa Jenggik, Kec. Terara, Kab. Lombok Timur, NTB' },
];

// Pengalaman, keahlian, dan sertifikat (data sumber dari versi asli)
const experienceList = [
      { period: 'Okt 2026 – sekarang', role: 'Freelance, Divisi Merchandise', org: 'MGPA Mandalika Sirkuit', points: pts([
        'Bertanggung jawab atas penjualan di toko merchandise dan lapak pada event tertentu.',
        'Memberikan pelayanan ekstra kepada pelanggan.',
        'Stock opname setiap akhir musim.']) },
      { period: 'Mei – Jul 2026', role: 'Petugas Haji (Freelance)', org: 'Kementerian Haji dan Umrah, Nusa Tenggara Barat', points: pts([
        '70% manifestasi jamaah haji (Nusuk) dan 99% pelayanan pemasangan atribut haji.',
        'Memasang seluruh gelang jamaah haji.',
        'Melayani jamaah sebelum dan sesudah keberangkatan.']) },
      { period: 'Feb – Agu 2026', role: 'Administrator Helper (Magang)', org: 'Kementerian Haji dan Umrah, Nusa Tenggara Barat', points: pts([
        'Mendukung keberhasilan penyelenggaraan haji 2026.',
        '80% bertanggung jawab atas administrasi di kantor wilayah, dan 85% atas pelayanan jamaah di kantor.',
        'Salah satu kandidat peserta magang terbaik sejak Kementerian Haji dan Umrah berdiri.']) },
      { period: '25 Sep – 1 Okt 2024', role: 'Volunteer Hospitality, MotoGP 2024', org: 'Nusa Tenggara Barat', points: pts([
        'Mendukung keberhasilan penyelenggaraan MotoGP 2024.',
        'Melayani tamu dan menangani keluhan tamu.']) },
      { period: 'Agu 2023 – Mei 2025', role: 'AI Prompt Engineer (Freelance)', org: 'PT Shafira Nurul Sejahtera, Jakarta', points: pts([
        'Menangani 80% prompting pekerjaan karya ilmiah (publisher).',
        'Menyusun strategi pemasaran dan jadwal pengerjaan pelanggan.',
        'Membuat rincian gaji para pekerja di bidang karya ilmiah.']) },
      { period: 'Apr 2023 – Sep 2024', role: 'Administrasi (Magang)', org: 'Junna Bakkery, Lombok Barat', points: pts([
        'Mendata penjualan harian, persediaan roti dan display, serta stok barang di gudang.',
        'Bertanggung jawab atas 60% kelancaran pemesanan dan layanan di toko kue.',
        'Menerima keluhan pelanggan dan mempromosikan produk roti.']) },
      { period: 'Feb 2021 – Apr 2023', role: 'Sales (Pegawai Kontrak)', org: 'Korudo, Lombok Timur', points: pts([
        'Menjual es krim Korudo di wilayah Kecamatan Terara.']) },
      { period: 'Feb 2021 – Mei 2022', role: 'Sales (Freelance)', org: 'Business, Lombok', points: pts([
        'Menjual onderdil motor.']) }
    ];
    const skillList = [
      { title: 'Layanan dan komunikasi', items: pts([
        'Marketing communication: pesan yang jelas, ramah, dan sesuai brand voice',
        'Menyederhanakan informasi produk agar mudah dipahami',
        'Memahami customer journey dan empati dalam komunikasi',
        'Customer support, daring maupun tatap muka',
        'Hospitality untuk tamu perorangan dan kelompok']) },
      { title: 'Administrasi', items: pts([
        'Admin HR: rekap absensi, lembur, bonus, dan THR',
        'Admin penjualan: total penjualan, penjualan per produk, penentuan diskon',
        'Admin umum: mencari, menghitung, dan menggabungkan data',
        'Data entry']) },
      { title: 'Microsoft Office', items: pts([
        'Word: formatting, header dan footer, mail merge, template, style, track changes',
        'Excel: input data, tabel, rumus dasar (SUM, AVERAGE, COUNT), sort dan filter',
        'PowerPoint: template, desain slide konsisten, animasi, storytelling, visualisasi data']) },
      { title: 'AI untuk pekerjaan', items: pts([
        'Prompt engineering untuk administrasi, layanan, dan karya ilmiah',
        'Memakai AI untuk mengoptimalkan pekerjaan dengan tetap berpegang pada pemahaman bidangnya',
        'Sertifikat AI Fluency: Framework & Foundations']) }
    ];
    const certList = [
      { date: '19 Agustus 2026', name: 'Pelatihan Dasar Admin HR' },
      { date: '8 Agustus 2026', name: 'AI Fluency: Framework & Foundations' },
      { date: '5 Februari 2026', name: 'Marketing Communication Specialist' },
      { date: '15 Agustus 2023', name: 'Sertifikat Guide' },
      { date: '27–30 Oktober 2022', name: 'Menerapkan Prinsip Dasar Agile Management untuk Manajer Produksi' },
      { date: '1–8 September 2022', name: 'Menyusun Strategi Negosiasi bagi Manajer Pemasaran' }
    ];

export const experience = experienceList;
export const skills = skillList;
export const certificates = certList;

const certificateModules = import.meta.glob('../assets/images/sertivicate/*.jpeg', {
  eager: true,
  import: 'default',
});
const certificateImages = Object.keys(certificateModules)
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
  .map((file) => certificateModules[file]);

export const certificateGallery = certificateImages.map((image, index) => ({
  ...(certList[index] ?? { date: '', name: `Sertifikat ${index + 1}` }),
  image,
}));
