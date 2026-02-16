'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [messageText, setMessageText] = useState('');

  const openGmailCompose = () => {
    const to = 'farrelazhar1805@gmail.com';
    const subject = encodeURIComponent('Pesan dari situs CyberSecPro');
    const body = encodeURIComponent(messageText || '');
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen cyber-grid">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-cyber-blue/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-cyber-blue animate-glow">
                CyberSec<span className="text-cyber-green">Pro</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'layanan', 'ancaman', 'tips', 'kontak'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === tab
                        ? 'bg-cyber-blue text-black'
                        : 'text-cyber-blue hover:bg-cyber-blue/20'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Lindungi Aset Digital Anda
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 terminal-text">
              Solusi keamanan siber terdepan untuk bisnis modern
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveTab('layanan')}
                className="bg-cyber-blue text-black px-8 py-3 rounded-lg font-bold hover:bg-cyber-green transition-all transform hover:scale-105"
              >
                Mulai Sekarang
              </button>
              <button
              onClick={() => setActiveTab('tips')}
              className="border-2 border-cyber-blue text-cyber-blue px-8 py-3 rounded-lg font-bold hover:bg-cyber-blue hover:text-black transition-all">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { number: '99.9%', label: 'Uptime Terjamin' },
              { number: '24/7', label: 'Monitoring Aktif' },
              { number: '500+', label: 'Klien Terlindungi' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-cyber-blue/30 rounded-lg p-8 text-center card-hover"
              >
                <h3 className="text-4xl font-bold text-cyber-green mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '🛡️ Penetration Testing',
                desc: 'Uji keamanan sistem Anda dengan simulasi serangan nyata',
              },
              {
                title: '🔐 Enkripsi Data',
                desc: 'Lindungi data sensitif dengan enkripsi military-grade',
              },
              {
                title: '🚨 Threat Detection',
                desc: 'Deteksi ancaman real-time dengan AI dan machine learning',
              },
              {
                title: '📊 Security Audit',
                desc: 'Audit keamanan menyeluruh untuk identifikasi celah',
              },
              {
                title: '🔍 Vulnerability Scan',
                desc: 'Pemindaian otomatis untuk menemukan kerentanan',
              },
              {
                title: '👨‍💻 Security Training',
                desc: 'Pelatihan awareness untuk tim Anda',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-cyber-purple/30 rounded-lg p-6 card-hover"
              >
                <h3 className="text-xl font-bold mb-3 text-cyber-blue">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Layanan Section */}
      {activeTab === 'layanan' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center glow-text">Layanan Kami</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Security Assessment',
                price: 'Mulai dari Rp 15.000.000',
                features: [
                  'Vulnerability Assessment',
                  'Network Security Audit',
                  'Application Security Testing',
                  'Compliance Check',
                  'Laporan Komprehensif',
                ],
              },
              {
                title: 'Managed Security Services',
                price: 'Mulai dari Rp 25.000.000/bulan',
                features: [
                  '24/7 Security Monitoring',
                  'Incident Response',
                  'Threat Intelligence',
                  'Security Operations Center',
                  'Monthly Reports',
                ],
              },
              {
                title: 'Penetration Testing',
                price: 'Mulai dari Rp 30.000.000',
                features: [
                  'External Penetration Testing',
                  'Internal Network Testing',
                  'Web Application Testing',
                  'Social Engineering Test',
                  'Remediation Support',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border-l-4 border-cyber-green rounded-lg p-8 card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-cyber-blue">{service.title}</h3>
                  <span className="text-cyber-green font-bold">{service.price}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="text-cyber-green mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Ancaman Section */}
      {activeTab === 'ancaman' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center glow-text">
            Ancaman Cyber Terkini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Ransomware',
                severity: 'CRITICAL',
                desc: 'Malware yang mengenkripsi data dan meminta tebusan. Serangan ransomware meningkat 150% di tahun 2024.',
              },
              {
                title: 'Phishing',
                severity: 'HIGH',
                desc: 'Penipuan melalui email atau pesan untuk mencuri kredensial. 90% serangan siber dimulai dari phishing.',
              },
              {
                title: 'DDoS Attack',
                severity: 'HIGH',
                desc: 'Serangan yang membanjiri server dengan traffic untuk membuat layanan down.',
              },
              {
                title: 'SQL Injection',
                severity: 'CRITICAL',
                desc: 'Teknik injeksi kode untuk mengakses atau memanipulasi database.',
              },
              {
                title: 'Zero-Day Exploits',
                severity: 'CRITICAL',
                desc: 'Serangan yang memanfaatkan vulnerability yang belum diketahui vendor.',
              },
              {
                title: 'Social Engineering',
                severity: 'MEDIUM',
                desc: 'Manipulasi psikologis untuk mendapatkan informasi sensitif dari korban.',
              },
            ].map((threat, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 card-hover"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cyber-blue">{threat.title}</h3>
                  <span
                    className={`px-3 py-1 rounded text-xs font-bold ${
                      threat.severity === 'CRITICAL'
                        ? 'bg-red-500/20 text-red-400 border border-red-500'
                        : threat.severity === 'HIGH'
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500'
                    }`}
                  >
                    {threat.severity}
                  </span>
                </div>
                <p className="text-gray-400">{threat.desc}</p>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Tips Section */}
      {activeTab === 'tips' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center glow-text">
            Tips Keamanan Siber
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Gunakan Password yang Kuat',
                tips: [
                  'Minimal 12 karakter dengan kombinasi huruf besar, kecil, angka, dan simbol',
                  'Jangan gunakan informasi pribadi seperti tanggal lahir',
                  'Gunakan password manager untuk menyimpan password',
                  'Aktifkan two-factor authentication (2FA) di semua akun',
                ],
              },
              {
                title: 'Update Software Secara Berkala',
                tips: [
                  'Selalu install security patch dan update terbaru',
                  'Aktifkan automatic updates untuk OS dan aplikasi',
                  'Hapus software yang sudah tidak digunakan',
                  'Gunakan versi software yang masih mendapat support',
                ],
              },
              {
                title: 'Waspada Terhadap Phishing',
                tips: [
                  'Periksa alamat email pengirim dengan teliti',
                  'Jangan klik link atau download attachment dari sumber tidak dikenal',
                  'Verifikasi permintaan informasi sensitif melalui channel resmi',
                  'Gunakan email security tools untuk filter spam',
                ],
              },
              {
                title: 'Backup Data Secara Rutin',
                tips: [
                  'Lakukan backup data penting minimal seminggu sekali',
                  'Simpan backup di lokasi terpisah (cloud dan local)',
                  'Test restore process secara berkala',
                  'Enkripsi data backup untuk keamanan ekstra',
                ],
              },
              {
                title: 'Gunakan Network Security',
                tips: [
                  'Aktifkan firewall di semua device',
                  'Gunakan VPN saat mengakses network publik',
                  'Ganti password router default',
                  'Segmentasi network untuk isolasi sistem critical',
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-cyber-blue/30 rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold text-cyber-green mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-cyber-blue mr-3 mt-1">▸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Kontak Section */}
      {activeTab === 'kontak' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center glow-text">Hubungi Kami</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm border border-cyber-blue/30 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-cyber-blue mb-2 font-bold">Nama</label>
                  <input
                    type="text"
                    className="w-full bg-black/60 border border-cyber-blue/50 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-blue"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-cyber-blue mb-2 font-bold">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/60 border border-cyber-blue/50 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-blue"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-cyber-blue mb-2 font-bold">Perusahaan</label>
                  <input
                    type="text"
                    className="w-full bg-black/60 border border-cyber-blue/50 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-blue"
                    placeholder="Nama perusahaan"
                  />
                </div>
                <div>
                  <label className="block text-cyber-blue mb-2 font-bold">Layanan</label>
                  <select className="w-full bg-black/60 border border-cyber-blue/50 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-blue">
                    <option>Security Assessment</option>
                    <option>Managed Security Services</option>
                    <option>Penetration Testing</option>
                    <option>Security Training</option>
                    <option>Konsultasi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-cyber-blue mb-2 font-bold">Pesan</label>
                  <textarea
                    rows={5}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="w-full bg-black/60 border border-cyber-blue/50 rounded px-4 py-3 text-white focus:outline-none focus:border-cyber-blue"
                  placeholder="Ceritakan kebutuhan keamanan siber Anda..."
                ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyber-blue text-black px-8 py-3 rounded-lg font-bold hover:bg-cyber-green transition-all transform hover:scale-105"
                >
                  Kirim Pesan
                </button>
                <button
                  type="button"
                  onClick={openGmailCompose}
                  className="w-full mt-3 bg-transparent border-2 border-cyber-blue text-cyber-blue px-8 py-3 rounded-lg font-bold hover:bg-cyber-blue/10 transition-all"
                  aria-label="Kirim pesan lewat Gmail"
                >
                  Kirim lewat Gmail
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-cyber-blue/30">
                <h3 className="text-xl font-bold text-cyber-green mb-4">Informasi Kontak</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center">
                    <span className="text-cyber-blue mr-3">📧</span>
                    info@cybersecpro.id
                  </p>
                  <p className="flex items-center">
                    <span className="text-cyber-blue mr-3">📱</span>
                    +62 812-3456-7890
                  </p>
                  <p className="flex items-center">
                    <span className="text-cyber-blue mr-3">📍</span>
                    Jakarta, Indonesia
                  </p>
                  <p className="flex items-center">
                    <span className="text-cyber-blue mr-3">⏰</span>
                    24/7 Emergency Response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-black/80 border-t border-cyber-blue/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyber-blue mb-4">CyberSecPro</h3>
              <p className="text-gray-400">
                Melindungi aset digital Anda dengan teknologi keamanan siber terdepan.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-cyber-green mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/tentang-kami" className="hover:text-cyber-blue">Tentang Kami</Link></li>
                <li><Link href="/blog" className="hover:text-cyber-blue">Blog</Link></li>
                <li><Link href="/karir" className="hover:text-cyber-blue">Karir</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-cyber-blue">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-cyber-green mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/aelfaleryn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyber-blue/20 border border-cyber-blue rounded-full flex items-center justify-center hover:bg-cyber-blue/40 cursor-pointer transition-all"
                >
                  𝕏
                </a>
                <div className="w-10 h-10 bg-cyber-blue/20 border border-cyber-blue rounded-full flex items-center justify-center hover:bg-cyber-blue/40 cursor-pointer transition-all">
                <a
                  href="https://www.instagram.com/rel.notnt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyber-blue/20 border border-cyber-blue rounded-full flex items-center justify-center hover:bg-cyber-blue/40 cursor-pointer transition-all"
                >
                  in
                </a>
                </div>
                <div className="w-10 h-10 bg-cyber-blue/20 border border-cyber-blue rounded-full flex items-center justify-center hover:bg-cyber-blue/40 cursor-pointer transition-all">
                 <a
                  href="https://www.facebook.com/azhar.vahrezi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyber-blue/20 border border-cyber-blue rounded-full flex items-center justify-center hover:bg-cyber-blue/40 cursor-pointer transition-all"
                >
                  f
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cyber-blue/30 text-center text-gray-400">
            <p>&copy; 2024 CyberSecPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
