import { history } from "../data/historyData.js";
import { getUsersData } from "../data/usersData.js";
import { devices } from "../data/devicesData.js";

// GET ALL HISTORY
export const getAllHistory = (req, res) => {
  const users = getUsersData();

  // Mapping Data dengan Mengubah ID menjadi Nama
  const detailedHistory = history.map((log) => {
    const user = users.find((u) => u.id === log.userId);
    const device = devices.find((d) => d.id === log.deviceId);

    return {
      id: log.id,
      action: log.action,
      timestamp: log.timestamp,
      user: user ? user.name : "Unknown User",
      device: device ? device.name : "Unknown Device",
    };
  });

  res.status(200).json({
    message: "Log aktivitas berhasil diambil",
    total: detailedHistory.length,
    data: detailedHistory,
  });
};
