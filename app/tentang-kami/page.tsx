import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
       <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Tentang kami
            </h2>
      <p className="text-gray-300 mb-6">
        CyberSecPro berdedikasi membantu organisasi melindungi aset digital mereka melalui layanan assessment, monitoring 24/7, dan pelatihan keamanan.
      </p>
      <Link href="/" className="inline-block bg-cyber-blue text-black px-6 py-3 rounded-md font-bold hover:bg-cyber-green transition">
        Kembali ke Beranda
      </Link>
    </main>
  );
}
