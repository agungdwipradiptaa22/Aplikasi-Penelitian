const endpoints = {
  penelitian: {
    getAll: '/api/penelitian',
    getById: (kd_penelitian) => `/api/penelitian/${kd_penelitian}`,
    create: '/api/penelitian',
    update: (kd_penelitian) => `/api/penelitian/${kd_penelitian}`,
    delete: (kd_penelitian) => `/api/penelitian/${kd_penelitian}`,
  },
};

export default endpoints;
