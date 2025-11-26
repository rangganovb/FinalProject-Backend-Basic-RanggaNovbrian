import { getUsersData, findUserById } from "../data/usersData.js";

// 1. GET ALL USERS
export const getAllUsers = (req, res) => {
  const users = getUsersData();

  res.status(200).json({
    message: "Data users berhasil diambil",
    data: users,
  });
};

// 2. GET USER BY ID
export const getUserDetail = (req, res) => {
  const { id } = req.params;
  const user = findUserById(id);

  // Pesan validasi jika user tidak ditemukan & jika ditemukan
  if (!user) {
    return res.status(404).json({ message: "User tidak ditemukan" });
  }

  res.status(200).json({
    message: "Detail user ditemukan",
    data: user,
  });
};
