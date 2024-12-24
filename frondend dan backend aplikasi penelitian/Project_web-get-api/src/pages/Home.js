import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Selamat Datang di Dashboard</h1>
          <p className="text-blue-100 text-lg">Halaman utama untuk mengelola fitur dan informasi.</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Statistik</h2>
            <p className="text-gray-600">Lihat ringkasan statistik dan analisis data terkini.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Manajemen Data</h2>
            <p className="text-gray-600">Kelola dan update data dengan mudah dan efisien.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Laporan</h2>
            <p className="text-gray-600">Akses dan unduh laporan secara real-time.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
