# 🖥️ Websocket CMS Laravel (Sentuh.id Test)
![Laravel12](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Reverb](https://img.shields.io/badge/WebSocket-Reverb-blueviolet)
![Inertia](https://img.shields.io/badge/Inertia.js-purple?logo=inertia)

**Sistem ini** memanfaatkan teknologi **WebSocket menggunakan (Laravel Reverb)** untuk mengirimkan konten media (Video/Gambar Slider) dan Running Text dari cms panel ke layar player secara **Real-time** tanpa perlu refresh page

---

## 📝 Tugas Rekrutmen

Project ini dibuat untuk memenuhi persyaratan teknis yang diberikan oleh tim rekrutmen [sentuh.id](https://sentuh.id) untuk saya (Fadhil Khusnul Hakim), berikut detail lainnya:


 
## 📸 Demo Preview
<img width="50%" height="50%" alt="image" src="https://github.com/user-attachments/assets/109c3dee-f347-4981-8724-c2c451b5327c" /> <img width="48%" height="48%" alt="image" src="https://github.com/user-attachments/assets/8710065f-8bd2-426a-b458-e2e346340da9" />

[![Tonton Demo Video](https://img.shields.io/badge/▶_Klik_Disini_Untuk_Menonton_Demo-000?style=for-the-badge&logo=youtube&logoColor=red)](https://drive.google.com/file/d/1QVydlsqsf_Gfbl9CcZzjFc1W0u5faO4_/view?usp=sharing)

> *Klik tombol di atas untuk melihat demo sistem


---

## Fitur

* 🚀 **Real-time Broadcasting:** Menggunakan Laravel Reverb untuk komunikasi instan antara CMS dan Player.
* 📂 **Drag & Drop Upload:** Upload media (MP4, JPG, PNG) dengan mudah menggunakan Ant Design Dragger.
* 📺 **Media Player:**
    * Realtime Notifaction.
    * Video Auto-play & Loop.
    * Image Slider
    * Running Text
* 🔔 **Live Notifications:** Notifikasi interaktif di layar player saat konten baru dibuat/diapprove/delete/update/reject.
* 🛠️ **CMS Management:**
    * Fitur Aksi Approve/Rejected/Preview/Play/Edit/Delete
    * Status indikator aktif (Playing/Idle dan Approve/Reject/Pending).

---

## Tech Stack

**Backend:**
* **Framework:** Laravel 12
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
