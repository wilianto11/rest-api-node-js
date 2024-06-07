# Express API Server

Proyek ini adalah server API Express.js untuk mengelola pengguna dan produk. Termasuk rute untuk membuat, membaca, memperbarui, dan menghapus pengguna dan produk, dengan validasi token JWT untuk rute yang dilindungi.

## Memulai

### Prasyarat

- Node.js (v14 atau lebih tinggi)
- npm (v6 atau lebih tinggi)

### Instalasi

1. Kloning repositori:

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. Instal dependensi:

    ```bash
    npm install
    ```

### Konfigurasi

Buat file `.env` di direktori root dan konfigurasikan variabel lingkungan berikut:

```bash
PORT=8080
HOST=localhost
JWT_SECRET=your_jwt_secret
Menjalankan Server
Mulai server:

bash
Copy code
npm start
Server akan berjalan di http://localhost:8080.

Endpoint API
Endpoint Pengguna
Dapatkan Semua Pengguna

http
Copy code
GET /users
Membutuhkan validasi token JWT.

Buat Pengguna

http
Copy code
POST /users
Contoh Body Permintaan:

json
Copy code
{
  "username": "string",
  "password": "string"
}
Perbarui Pengguna

http
Copy code
PUT /users/:id
Membutuhkan validasi token JWT.

Contoh Body Permintaan:

json
Copy code
{
  "username": "string"
}
Hapus Pengguna

http
Copy code
DELETE /users/:id
Membutuhkan validasi token JWT.

Login Pengguna

http
Copy code
POST /login
Contoh Body Permintaan:

json
Copy code
{
  "username": "string",
  "password": "string"
}
Contoh Respon:

json
Copy code
{
  "token": "jwt_token"
}
Endpoint Produk
Dapatkan Semua Produk

http
Copy code
GET /product
Membutuhkan validasi token JWT.

Buat Produk

http
Copy code
POST /product
Membutuhkan validasi token JWT.

Contoh Body Permintaan:

json
Copy code
{
  "name": "string",
  "price": "number",
  "description": "string"
}
Perbarui Produk

http
Copy code
PUT /product/:id
Membutuhkan validasi token JWT.

Contoh Body Permintaan:

json
Copy code
{
  "name": "string",
  "price": "number",
  "description": "string"
}
Hapus Produk

http
Copy code
DELETE /product/:id
Membutuhkan validasi token JWT.

Middleware
Middleware Validasi Token: Digunakan untuk melindungi rute yang memerlukan autentikasi.

javascript
Copy code
app.use(ServiceUser.tokenValidation);
Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT - lihat file LICENSE untuk detailnya.

Penghargaan
Express.js
Node.js
JWT