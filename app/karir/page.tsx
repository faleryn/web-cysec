import Link from 'next/link';

export default function CareersPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">Karir</h1>
      <p className="text-gray-400 mb-8">Bergabunglah dengan tim kami — posisi terbuka saat ini:</p>

      <ul className="space-y-4">
        <li className="bg-black/40 border border-cyber-blue/30 rounded-lg p-4">
          <h3 className="text-xl font-bold text-cyber-green">Security Analyst</h3>
          <p className="text-gray-300">Jakarta — Full-time</p>
          <Link href="#" className="mt-3 inline-block text-cyber-blue">Lamar sekarang</Link>
        </li>

        <li className="bg-black/40 border border-cyber-blue/30 rounded-lg p-4">
          <h3 className="text-xl font-bold text-cyber-green">Penetration Tester</h3>
          <p className="text-gray-300">Remote — Contract</p>
          <Link href="#" className="mt-3 inline-block text-cyber-blue">Lamar sekarang</Link>
        </li>
      </ul>
      <Link href="/" className="inline-block mt-8 bg-cyber-blue text-black px-6 py-3 rounded-md font-bold hover:bg-cyber-green transition">
        Kembali ke Beranda
      </Link>
    </main>
  );
}
