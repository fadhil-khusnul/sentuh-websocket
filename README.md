# 🖥️ Websocket CMS Player

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Reverb](https://img.shields.io/badge/WebSocket-Reverb-blueviolet)
![Inertia](https://img.shields.io/badge/Inertia.js-purple?logo=inertia)

**Sistem ini** memanfaatkan teknologi **WebSocket menggunakan (Laravel Reverb)** untuk mengirimkan konten media (Video/Gambar) dari panel admin ke layar player secara **Real-time** tanpa perlu refresh page

---

## 📝 Tugas Rekrutmen

Project ini dibuat untuk memenuhi persyaratan teknis yang diberikan oleh tim rekrutmen [sentuh.id](https://sentuh.id) untuk saya (Fadhil Khusnul Hakim), berikut detail lainnya:


 
## 📸 Demo Preview

[![Tonton Demo Video](https://img.shields.io/badge/▶_Klik_Disini_Untuk_Menonton_Demo-000?style=for-the-badge&logo=youtube&logoColor=red)](https://drive.google.com/file/d/1lNwPQxeWP3EbI10YkjsBdzXDdc7eu3RC/view?usp=sharing)

> *Klik tombol di atas untuk melihat demo sistem


---

## Fitur

* 🚀 **Real-time Broadcasting:** Menggunakan Laravel Reverb untuk komunikasi instan antara CMS dan Player.
* 📂 **Drag & Drop Upload:** Upload media (MP4, JPG, PNG) dengan mudah menggunakan Ant Design Dragger.
* 📺 **Media Player:**
    * Auto-play & Loop.
    * Indikator status "Now Playing" dan "Downloading".
* 🔔 **Live Notifications:** Notifikasi interaktif di layar player saat konten baru diterima.
* 🛠️ **CMS Management:**
    * Playlist Management (Edit, Delete).
    * Tombol "Push to Screen" untuk memutar ulang konten lama.
    * Status indikator aktif (Playing/Idle).

---

## Tech Stack

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

## Persyaratan Sistem

Sebelum menjalankan, pastikan mesin kamu sudah terinstall:
* PHP >= 8.2
* Node.js & NPM
* MySQL
* Composer

---

## Cara Install & Menjalankan

```bash
git clone https://github.com/fadhil-khusnul/sentuh-websocket.git
cd sentuh-websocket

composer update

npm run install

composer run dev
