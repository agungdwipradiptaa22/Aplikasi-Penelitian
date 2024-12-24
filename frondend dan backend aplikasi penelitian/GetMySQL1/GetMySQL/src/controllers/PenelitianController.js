const dbConnection = require('../config/Database');
  
exports.getPenelitian = async (req, res) => {
   
    const query = 'SELECT * FROM penelitian '; 
    dbConnection.query(query, (err, results) => { 
      if (err) {
        console.error('Kesalahan query database:', err);
        return res.status(500).json({ message: 'Terjadi kesalahan server' });
      }
      res.json({penelitian:results});
    });
        
};

exports.putPenelitian = async (req, res) => {
    const { kd_penelitian } = req.params;
    const { judul, lokasi, thn_akademik, tanggal, status } = req.body;
    const query = `UPDATE penelitian SET judul = ?, lokasi = ?, thn_akademik = ?, tanggal = ?, status = ? WHERE kd_penelitian = ?`;
    dbConnection.query(query, [judul, lokasi, thn_akademik, tanggal, status, kd_penelitian], (err, results) => {
        if (err) {
            console.error('Kesalahan query database:', err);
            return res.status(500).json({ message: 'Terjadi kesalahan server' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Data penelitian tidak ditemukan' });
        }
        res.json({ message: 'Data penelitian berhasil diupdate' });
    });
};

exports.postPenelitian = async (req, res) => {
    try {
        const { kd_penelitian, judul, lokasi, thn_akademik, tanggal, status } = req.body;
        
        if (!kd_penelitian || !judul || !lokasi || !thn_akademik || !tanggal || !status) {
            return res.status(400).json({ message: 'Semua field harus diisi' });
        }

        const query = `INSERT INTO penelitian (kd_penelitian, judul, lokasi, thn_akademik, tanggal, status) 
                      VALUES (?, ?, ?, ?, ?, ?)`;
        
        dbConnection.query(query, [kd_penelitian, judul, lokasi, thn_akademik, tanggal, status], 
            (err, results) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        return res.status(400).json({ 
                            message: 'Kode penelitian sudah ada' 
                        });
                    }
                    throw err;
                }
                res.json({ message: 'Data penelitian berhasil ditambahkan' });
            });
    } catch (error) {
        console.error('Kesalahan query database:', error);
        return res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
};

exports.deletePenelitian = async (req, res) => {
    const { kd_penelitian } = req.params;
    const query = 'DELETE FROM penelitian WHERE kd_penelitian = ?';
    
    dbConnection.query(query, [kd_penelitian], (err, results) => {
        if (err) {
            console.error('Kesalahan query database:', err);
            return res.status(500).json({ message: 'Terjadi kesalahan server' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Data penelitian tidak ditemukan' });
        }
        res.json({ message: 'Data penelitian berhasil dihapus' });
    });
};
