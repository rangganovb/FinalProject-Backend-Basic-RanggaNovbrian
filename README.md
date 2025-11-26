# Sistem Manajemen Perangkat Smart Home (Smart Home Device API)

Aplikasi ini adalah implementasi **Final Project Backend Development** yang dibangun menggunakan **Node.js** dan **Express.js**.

Fokus utama project ini adalah mensimulasikan sistem *Internet of Things* (IoT) sederhana di mana pengguna dapat mengelola perangkat elektronik rumah, memonitor statusnya, dan sistem akan **secara otomatis mencatat riwayat aktivitas** setiap kali perangkat dinyalakan atau dimatikan.

Semua data disimpan menggunakan struktur data **Array of Objects** (In-Memory) yang dimanipulasi menggunakan Javascript Array Methods.

---

## 1. Fitur Unggulan

Berikut adalah fitur-fitur kunci yang dikembangkan dalam arsitektur modular:

* **Smart Activity Logging:** Sistem otomatis mencatat riwayat (*History*) ketika status perangkat diubah (Update), tanpa perlu input manual ke log.
* **Modular Architecture:** Kode program terstruktur rapi dengan memisahkan *Data*, *Controllers*, *Routes*, dan *Middleware*.
* **Dynamic Routing & Filtering:** Mendukung pencarian perangkat spesifik berdasarkan ID (`/:id`) dan penyaringan berdasarkan ruangan (`?room=...`).
* **Middleware Implementation:** Menggunakan middleware kustom untuk validasi input data dan *Request Logger* untuk memantau aktivitas server di terminal.
* **Relasi Data Manual:** Mensimulasikan relasi antar tabel (User, Device, History) menggunakan logika pemrograman JavaScript.

### Teknologi yang Digunakan

| Kategori | Teknologi |
| :--- | :--- |
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Utilities** | Nodemon, Dotenv, CORS |
| **Data Store** | In-Memory (Array of Objects) |

---

## 2. Persyaratan Aplikasi

Sebelum menjalankan aplikasi, pastikan perangkat Anda sudah memiliki perangkat lunak berikut:

1.  **Node.js & npm:** Disarankan versi LTS (v18 atau lebih baru).
2.  **Git:** Untuk mengelola versi kode.
3.  **Postman:** Wajib digunakan untuk menguji Endpoint API (karena aplikasi ini murni Backend tanpa Frontend).

---

## 3. Instalasi dan Cara Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan server di komputer lokal Anda:

### A. Instalasi Dependencies
Buka terminal, masuk ke folder project, lalu install semua library yang dibutuhkan:

```bash
npm install
```
### B. Menjalankan Server

Untuk mode pengembangan (dengan fitur auto-restart), jalankan perintah berikut di terminal:

```bash
npm run dev
```
Jika berhasil, terminal akan menampilkan pesan:
```plaintext
Server is running at http://localhost:3000
```
## 4. Dokumentasi Endpoint API

Berikut adalah daftar lengkap Endpoint yang tersedia untuk diuji menggunakan **Postman**.

### 📂 Modul Users (Penghuni)

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| **GET** | `/api/users` | Menampilkan semua data penghuni rumah. |
| **GET** | `/api/users/:id` | Menampilkan detail penghuni berdasarkan ID. |

### 📂 Modul Devices (Perangkat)

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| **GET** | `/api/devices` | Menampilkan semua perangkat elektronik. |
| **GET** | `/api/devices?room=...` | Filter perangkat berdasarkan Ruangan (Contoh: `?room=Bedroom`). |
| **GET** | `/api/devices/:id` | Menampilkan detail satu perangkat. |
| **POST** | `/api/devices` | **[CREATE]** Menambahkan perangkat baru (Wajib JSON Body). |
| **PUT** | `/api/devices/:id` | **[UPDATE]** Mengubah status/info perangkat. **(Trigger History)** |
| **DELETE** | `/api/devices/:id` | **[DELETE]** Menghapus perangkat dari sistem. |

### 📂 Modul History (Log Aktivitas)

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| **GET** | `/api/history` | Melihat log aktivitas user (Siapa menyalakan apa & kapan). |

## 5. Struktur Project

Proyek ini menggunakan struktur **Modular** untuk memudahkan pengembangan dan pembacaan kode.

```text
fp_smart_home_device_api/
│
├── index.js                  # Entry point (Gerbang utama server)
├── package.json              # Daftar dependencies & scripts
├── .env                      # Konfigurasi Environment (Port)
├── .gitignore                # File yang diabaikan git
│
└── src/
    ├── controllers/          # Logika Bisnis (CRUD & Logika History)
    │   ├── deviceController.js
    │   ├── userController.js
    │   └── historyController.js
    │
    ├── data/                 # Penyimpanan Data (Array of Objects)
    │   ├── devicesData.js
    │   ├── usersData.js
    │   └── historyData.js
    │
    ├── middleware/           # Validasi & Logger
    │   ├── requestLogger.js
    │   └── validation.js
    │
    └── routes/               # Definisi Jalur URL API
        ├── deviceRoutes.js
        ├── userRoutes.js
        └── historyRoutes.js
```
## 6. Penyusun Project

- Penyusun: Rangga Novbrian Syawal Putra Ananto 
- Study Club Backend Basic - KSM Android
