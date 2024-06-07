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
 ```

### Menjalankan Server
Mulai server:

```bash
node index.js
```
Server akan berjalan di http://localhost:8080.

## Endpoint API
### Endpoint Pengguna
- Dapatkan Semua Pengguna

```bash
GET /users
```
Membutuhkan validasi token JWT.

- Buat Pengguna

```bash
POST /users
```
Contoh Body Permintaan:

```bash
{
  "username": "string",
  "password": "string"
}
```

- Perbarui Pengguna

```bash
PUT /users/:id
```
Membutuhkan validasi token JWT.

Contoh Body Permintaan:

```bash
{
  "username": "string"
}
```
- Hapus Pengguna

```bash
DELETE /users/:id
```
Membutuhkan validasi token JWT.

- Login Pengguna

```bash
POST /login
```
Contoh Body Permintaan:

```bash
{
  "username": "string",
  "password": "string"
}
```
Contoh Respon:


```bash
{
  "token": "jwt_token"
}
```

### Endpoint Produk
- Dapatkan Semua Produk

```bash
GET /product
```
Membutuhkan validasi token JWT.

- Buat Produk

```bash
POST /product
```
Membutuhkan validasi token JWT.

Contoh Body Permintaan:

```bash
{
  "name": "string",
  "price": "number",
  "description": "string"
}
```
- Perbarui Produk

```bash
PUT /product/:id
```
Membutuhkan validasi token JWT.

Contoh Body Permintaan:

```bash
{
  "name": "string",
  "price": "number",
  "description": "string"
}
```
- Hapus Produk

```bash
DELETE /product/:id
```
Membutuhkan validasi token JWT.

## Middleware
Middleware Validasi Token: Digunakan untuk melindungi rute yang memerlukan autentikasi.

```bash
app.use(ServiceUser.tokenValidation);
```


## Acknowledgements
- [Express.js](https://expressjs.com/): Framework web Node.js yang minimalis dan fleksibel.
- [Node.js](https://nodejs.org/): Runtime JavaScript yang dibangun di atas Chrome's V8 JavaScript engine.
- [JWT](https://jwt.io/): JSON Web Token, standar industri untuk mentransfer klaim antara pihak yang terpercaya.