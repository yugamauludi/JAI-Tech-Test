# Electronic Store

A web for electronic goods.

## Getting Started

Di dalam folder ini terdapat 2 folder backend dan frontend. Masing - masing harus dijalankan satu per satu, dimulai dari folder backend.

## Getting Started For Backend
### Prerequisites

Persiapkan software menejemen basis data

* DBeaver, 
* dbeaver.io,
* Navicat,
* dll

### Installation and Set-up data

Langkah - langkah untuk instalasi dan set up data. Pertama masuk ke folder backend

```
$ cd backend/
```
Kemudian jalankan perintah di bawah ini
```
$ npm i
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
```

### Run

Jika semua hal di atas sudah berhasil maka jalankan perintah

```
$ node app.js
```

## Getting Started For Frontend
### Installation

Langkah - langkah untuk instalasi dan set up data. Pertama masuk ke folder frontend

```
$ cd frontend/
```
Kemudian jalankan perintah di bawah ini
```
$ npm i
```

### Run

Jika hal di atas sudah berhasil di-install maka jalankan perintah

```
$ npm run dev
```# JAI-Tech-Test
