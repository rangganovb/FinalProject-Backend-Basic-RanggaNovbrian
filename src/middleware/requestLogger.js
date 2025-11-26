// Middleware untuk mencatat log aktivitas server
const requestLogger = (req, res, next) => {
  // Menampilkan Method dan URL yang diakses ke console
  console.log(
    `[LOG] ${new Date().toLocaleTimeString()} => ${req.method} ${req.url}`
  );

  // Dipanggil agar request lanjut ke Controller
  next();
};

export default requestLogger;
