import React from 'react';
import useAPI from '../hooks/useAPI';
import endpoints from '../services/endpoints';

function Penelitian() {
  const { data: penelitian, loading, error, refetch } = useAPI(endpoints.penelitian.getAll);

  const [formData, setFormData] = React.useState({
    kd_penelitian: '',
    judul: '',
    lokasi: '',
    thn_akademik: '',
    tanggal: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.kd_penelitian) {
      handleUpdate(formData);
    } else {
      handlePost(formData);
    }
    setFormData({ kd_penelitian: '', judul: '', lokasi: '', thn_akademik: '', tanggal: '', status: '' });
  };

  const handlePost = async (newPenelitian) => {
    try {
      const response = await fetch(endpoints.penelitian.create, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPenelitian),
      });
      if (!response.ok) throw new Error('Failed to post data');
      refetch();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleUpdate = async (updatedPenelitian) => {
    try {
      const response = await fetch(`${endpoints.penelitian.update}/${updatedPenelitian.kd_penelitian}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPenelitian),
      });
      if (!response.ok) throw new Error('Failed to update data');
      refetch();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = (kd_penelitian) => {
    console.log('Delete:', kd_penelitian);
    // Tambahkan logika untuk DELETE data ke API
    refetch();
  };

  const penelitianList = Array.isArray(penelitian?.penelitian) 
    ? penelitian.penelitian 
    : Array.isArray(penelitian) 
      ? penelitian 
      : [];

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Data Penelitian</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    console.error('API Error:', error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Data Penelitian</h1>
        <p className="text-red-500">Error: {error.message || error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Penelitian</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="kd_penelitian"
            placeholder="Kode Penelitian"
            value={formData.kd_penelitian}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="judul"
            placeholder="Judul"
            value={formData.judul}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lokasi"
            placeholder="Lokasi"
            value={formData.lokasi}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="thn_akademik"
            placeholder="Tahun Akademik"
            value={formData.thn_akademik}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {formData.kd_penelitian ? 'Update Penelitian' : 'Tambah Penelitian'}
        </button>
      </form>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Kode</th>
              <th className="py-3 px-4 text-left">Judul</th>
              <th className="py-3 px-4 text-left">Lokasi</th>
              <th className="py-3 px-4 text-left">Tahun</th>
              <th className="py-3 px-4 text-left">Tanggal</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {penelitianList.length > 0 ? (
              penelitianList.map((penelitian) => (
                <tr key={penelitian.kd_penelitian} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{penelitian.kd_penelitian}</td>
                  <td className="py-3 px-4">{penelitian.judul}</td>
                  <td className="py-3 px-4">{penelitian.lokasi}</td>
                  <td className="py-3 px-4">{penelitian.thn_akademik}</td>
                  <td className="py-3 px-4">{penelitian.tanggal}</td>
                  <td className="py-3 px-4">{penelitian.status}</td>
                  <td className="py-3 px-4 text-center space-x-2">
                    <button 
                      onClick={() => setFormData(penelitian)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-200"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(penelitian.kd_penelitian)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-8 text-center text-gray-500">
                  Tidak ada data penelitian
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Penelitian;
