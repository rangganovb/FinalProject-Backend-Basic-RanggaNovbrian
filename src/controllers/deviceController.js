import { devices, nextDeviceId } from "../data/devicesData.js";
import { history, nextHistoryId } from "../data/historyData.js";

// 1. GET ALL DEVICES
export const getAllDevices = (req, res) => {
  const { room } = req.query;
  let result = devices;

  if (room) {
    result = devices.filter((d) => d.room.toLowerCase() === room.toLowerCase());
  }

  res.status(200).json({
    message: "Data perangkat berhasil diambil",
    total: result.length,
    data: result,
  });
};

// 2. GET DEVICE BY ID
export const getDeviceById = (req, res) => {
  const { id } = req.params;
  const device = devices.find((d) => d.id === parseInt(id));

  if (!device)
    return res.status(404).json({ message: "Perangkat tidak ditemukan" });

  res.status(200).json({ data: device });
};

// 3. CREATE NEW DEVICE
export const createDevice = (req, res) => {
  const { name, type, room, power } = req.body;

  const newDevice = {
    id: nextDeviceId++,
    name,
    type,
    room,
    power: power || 0,
    status: "Off",
  };

  devices.push(newDevice);
  res
    .status(201)
    .json({ message: "Perangkat baru berhasil dipasang", data: newDevice });
};

// 4. UPDATE DEVICE
export const updateDevice = (req, res) => {
  const { id } = req.params;
  const { status, userId } = req.body;

  const index = devices.findIndex((d) => d.id === parseInt(id));
  if (index === -1)
    return res.status(404).json({ message: "Perangkat tidak ditemukan" });

  // Cek apakah ada perubahan status
  if (status && devices[index].status !== status) {
    // Catat ke History
    const log = {
      id: nextHistoryId++,
      deviceId: parseInt(id),
      userId: userId || 0,
      action: `Mengubah status menjadi ${status}`,
      timestamp: new Date().toISOString(),
    };
    history.push(log);
  }

  // Update Data Device
  devices[index] = {
    ...devices[index],
    status: status || devices[index].status,
  };

  res.status(200).json({
    message: "Status perangkat berhasil diperbarui",
    data: devices[index],
  });
};

// 5. DELETE DEVICE
export const deleteDevice = (req, res) => {
  const { id } = req.params;
  const index = devices.findIndex((d) => d.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ message: "Perangkat tidak ditemukan" });

  devices.splice(index, 1);
  res.status(200).json({ message: "Perangkat berhasil dihapus" });
};
