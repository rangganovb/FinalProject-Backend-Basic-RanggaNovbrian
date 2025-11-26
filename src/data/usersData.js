// Data Dummy Devices
let devices = [
  {
    id: 101,
    name: "Lampu Teras",
    type: "Light",
    room: "Front Yard",
    status: "Off",
    power: 15,
  },
  {
    id: 102,
    name: "AC Kamar Utama",
    type: "AC",
    room: "Bedroom",
    status: "On",
    power: 550,
  },
  {
    id: 103,
    name: "Smart TV",
    type: "Electronics",
    room: "Living Room",
    status: "Off",
    power: 100,
  },
  {
    id: 104,
    name: "Kunci Pintu Depan",
    type: "Security",
    room: "Front Door",
    status: "Locked",
    power: 5,
  },
];

let nextDeviceId = 105;

export { devices, nextDeviceId };
