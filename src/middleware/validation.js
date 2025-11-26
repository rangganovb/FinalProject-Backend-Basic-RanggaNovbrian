// Middleware validasi input data Device
export const validateDeviceInput = (req, res, next) => {
  const { name, type, room } = req.body;

  // Cek apakah data wajib ada
  if (!name || !type || !room) {
    return res.status(400).json({
      message:
        "Validation Failed: Fields 'name', 'type', and 'room' are required.",
    });
  }

  // Jika aman, lanjut ke controller
  next();
};
