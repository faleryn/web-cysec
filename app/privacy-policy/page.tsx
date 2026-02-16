import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyber-blue">Privacy Policy</h1>
      <p className="text-gray-300 mb-4">Kami menghargai privasi Anda. Halaman ini adalah placeholder untuk kebijakan privasi dan komitmen kami dalam menjaga keamanan data pengguna.</p>
      <Link href="/" className="inline-block bg-cyber-blue text-black px-6 py-3 rounded-md font-bold hover:bg-cyber-green transition">Kembali ke Beranda</Link>
    </main>
  );
}
