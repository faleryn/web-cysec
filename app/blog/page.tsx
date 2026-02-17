import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">Blog</h1>
      <p className="text-gray-400 mb-8">Temukan artikel, analisis ancaman, dan panduan keamanan siber terbaru.</p>

      <div className="grid gap-6">
        <article className="bg-black/40 border border-cyber-blue/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyber-green">Mengenal Ransomware pada 2026</h2>
          <p className="text-gray-300 mt-2">Ringkasan: tren, mitigasi, dan rekomendasi praktis untuk organisasi.</p>
          <Link href="#" className="mt-4 inline-block text-cyber-blue">Baca selengkapnya →</Link>
        </article>

        <article className="bg-black/40 border border-cyber-blue/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-cyber-green">Checklist Keamanan untuk UKM</h2>
          <p className="text-gray-300 mt-2">Langkah-langkah sederhana yang bisa langsung diterapkan untuk meningkatkan postur keamanan.</p>
          <Link href="#" className="mt-4 inline-block text-cyber-blue">Baca selengkapnya →</Link>
        </article>
      </div>
      <Link href="/" className="inline-block mt-8 bg-cyber-blue text-black px-6 py-3 rounded-md font-bold hover:bg-cyber-green transition">
        Kembali ke Beranda
      </Link>

    </main>
  );
}
