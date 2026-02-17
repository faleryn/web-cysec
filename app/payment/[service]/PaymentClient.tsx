'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  service: string;
}

export default function PaymentClient({ service }: Props) {
  const raw = service || '';
  const serviceName = raw
    .split('-')
    .map((s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : ''))
    .join(' ');

  const [confirmed, setConfirmed] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen cyber-grid flex items-center justify-center py-20">
      <div className="max-w-md w-full bg-black/50 border border-cyber-blue/30 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-cyber-blue mb-4">Pembayaran — {serviceName}</h2>
        <p className="text-gray-400 mb-6">Scan QRIS di bawah untuk melakukan pembayaran.</p>

        <div className="mx-auto mb-6 w-56 h-56 bg-white/5 border border-gray-600 rounded-lg flex items-center justify-center">
          {/* QRIS image (user-provided) */}
          <img src="/qris-mock.jpeg" alt="QRIS" className="w-48 h-48 object-contain rounded-md" />
        </div>

        {!confirmed ? (
          <>
            <button
              onClick={() => setConfirmed(true)}
              className="w-full bg-cyber-blue text-black px-6 py-3 rounded-md font-bold hover:bg-cyber-green transition mb-3"
            >
              Konfirmasi Pembayaran
            </button>
            <button
              onClick={() => router.back()}
              className="w-full bg-transparent border border-cyber-blue text-cyber-blue px-6 py-3 rounded-md hover:bg-black/10 transition text-sm"
            >
              Batal / Kembali
            </button>
          </>
        ) : (
          <div>
            <p className="text-cyber-green font-bold mb-4">Pembayaran terkonfirmasi — terima kasih!</p>
            <Link href="/" className="inline-block bg-cyber-blue text-black px-6 py-3 rounded-md font-bold hover:bg-cyber-green transition">
              Kembali ke Beranda
            </Link>
          </div>
        )}

        <p className="mt-6 text-xs text-gray-500">Ini adalah mock QRIS. Integrasikan gateway untuk pembayaran nyata.</p>
      </div>
    </main>
  );
}
