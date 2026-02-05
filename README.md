# 🖥️ Sentuh WebSocket - Realtime Digital Signage

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Reverb](https://img.shields.io/badge/WebSocket-Reverb-blueviolet)
![Inertia](https://img.shields.io/badge/Inertia.js-purple?logo=inertia)

**Sentuh WebSocket** adalah sistem Digital Signage (CMS & Player) yang memanfaatkan teknologi **WebSocket (Laravel Reverb)** untuk mengirimkan konten media (Video/Gambar) dari panel admin ke layar player secara **Real-time** tanpa perlu refresh halaman.

Aplikasi ini dirancang untuk meminimalkan latensi dan memberikan pengalaman pengguna yang mulus (Seamless Experience) menggunakan integrasi **Laravel Inertia** dan **React**.

---

## 📸 Demo Preview

*(Ganti link di bawah ini dengan link GIF atau Video YouTube demo aplikasi kamu. Contoh: Screenshot dashboard dan Player yang sedang berubah otomatis)*

![Dashboard Screenshot](https://via.placeholder.com/800x400?text=Dashboard+Preview+Image)
> *Sistem secara otomatis memicu pemutaran video di player detik itu juga setelah tombol "Play" ditekan di CMS.*

---

## ✨ Fitur Utama

* 🚀 **Real-time Broadcasting:** Menggunakan Laravel Reverb untuk komunikasi instan antara CMS dan Player.
* 📂 **Drag & Drop Upload:** Upload media (MP4, JPG, PNG) dengan mudah menggunakan Ant Design Dragger.
* 📺 **Smart Media Player:**
    * Auto-play & Loop.
    * Fallback support (Browser & Electron ready).
    * Indikator status "Now Playing" dan "Downloading".
* 🔔 **Live Notifications:** Notifikasi interaktif di layar player saat konten baru diterima.
* 🛠️ **CMS Management:**
    * Playlist Management (Edit, Delete).
    * Tombol "Push to Screen" untuk memutar ulang konten lama.
    * Status indikator aktif (Playing/Idle).

---

## 🛠️ Tech Stack

**Backend:**
* **Framework:** Laravel 11
* **Database:** MySQL
* **Broadcasting:** Laravel Reverb (WebSocket Server)

**Frontend:**
* **Framework:** React.js
* **Glue:** Inertia.js (Monolith feel, SPA experience)
* **UI Library:** Ant Design (AntD)
* **HTTP Client:** Axios

**DevOps & Tools:**
* **Bundler:** Vite
* **Package Manager:** Composer & NPM

---

## ⚙️ Persyaratan Sistem

Sebelum menjalankan, pastikan mesin kamu sudah terinstall:
* PHP >= 8.2
* Node.js & NPM
* MySQL
* Composer

---

## 🚀 Cara Install & Menjalankan (Step-by-Step)

Ikuti langkah ini untuk menjalankan proyek di komputer lokal (Localhost).

### 1. Clone Repositori
```bash
git clone
