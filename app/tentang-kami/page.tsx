import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyber-blue">Tentang Kami</h1>
      <p className="text-gray-300 mb-6">
        CyberSecPro berdedikasi membantu organisasi melindungi aset digital mereka melalui layanan assessment, monitoring 24/7, dan pelatihan keamanan.
      </p>
      <Link href="/" className="inline-block bg-cyber-blue text-black px-6 py-3 rounded-md font-bold hover:bg-cyber-green transition">
        Kembali ke Beranda
      </Link>
    </main>
  );
}
