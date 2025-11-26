// Data Dummy Users
let users = [
  { id: 1, name: "Rangga", role: "Admin" },
  { id: 2, name: "Ayah", role: "Parent" },
  { id: 3, name: "Mamah", role: "Parent" },
  { id: 4, name: "Adik", role: "Child" },
];

export const getUsersData = () => users;
export const findUserById = (id) => users.find((u) => u.id === parseInt(id));
