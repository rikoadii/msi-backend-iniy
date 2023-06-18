-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Jun 2023 pada 16.06
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wtc-hotel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `level` enum('admin','manager','pemilik') NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `profil` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cio`
--

CREATE TABLE `cio` (
  `id_cio` int(11) NOT NULL,
  `id_tamu` int(11) NOT NULL,
  `nama_tamu` varchar(100) NOT NULL,
  `kamar_dipesan` varchar(30) NOT NULL,
  `kelas_kamar` varchar(30) NOT NULL,
  `jumlah_kamar` int(11) NOT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL,
  `total_pembayaran` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `cio`
--

INSERT INTO `cio` (`id_cio`, `id_tamu`, `nama_tamu`, `kamar_dipesan`, `kelas_kamar`, `jumlah_kamar`, `check_in`, `check_out`, `total_pembayaran`) VALUES
(2, 3, 'tamu01', 'AED44', 'STANDART', 1, '2023-06-17', '2023-06-18', 650000),
(3, 4, 'tamu 02', 'AED44', 'STANDART', 1, '2023-06-18', '2023-06-19', 650000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `restaurant`
--

CREATE TABLE `restaurant` (
  `id_menu` int(11) NOT NULL,
  `menu_type` varchar(30) NOT NULL,
  `menu_name` varchar(100) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `price` varchar(20) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `restaurant`
--

INSERT INTO `restaurant` (`id_menu`, `menu_type`, `menu_name`, `image`, `price`, `description`) VALUES
(1, 'makanan', 'sausage sphagetti', 'gambar1.png', '150000', 'Noodles - Onions - Sausage Tomato sauce - Broccoli - Pepper'),
(2, 'makanan', 'fried rice peas', 'gambar2.png', '100000', 'Beans - Corn - Carrots \r\nOnions - Egg - Shredded Chicken'),
(3, 'makanan', 'indomie', 'gambar3.png', '50000', 'Onions - Eggs\r\nChilies - Sesame Oil '),
(4, 'makanan', 'caramel burger', 'gambar4.png', '200000', 'Meat - Onions - Caramel Sauce \r\nPickles - Lettuce - Tomatoes'),
(5, 'makanan', 'potato steak', 'gambar5.png', '500000', 'Meat - Potatoes - Butter - Long beans - Pineapple'),
(6, 'makanan', 'yellow fish fresh', 'gambar6.png', '300000', 'Fish - Lemon - Turmeric - Basil leaves - Coconut milk'),
(7, 'minuman', 'fresh sour lime', 'gambar7.png', '50000', 'Fresh Lime is made with lemon and lime juice which makes you excited about your activities'),
(8, 'minuman', 'fresh pineapple', 'gambar8.png', '50000', 'Fresh iced pineapple drink which contains many benefits'),
(9, 'minuman', 'sour lime strawberry', 'gambar9.png', '50000', 'Provide benefits for you to do activities all day long'),
(10, 'minuman', 'orange juice', 'gambar10.png', '20000', 'fresh orange juice'),
(11, 'minuman', 'dragon fruit lime lychee', 'gambar11.png', '100000', 'Dragon Fruit Lime Lychee with many choices that will give you freshness'),
(12, 'minuman', 'fresh ice', 'gambar12.png', '15000', 'fresh ice drink');

-- --------------------------------------------------------

--
-- Struktur dari tabel `room`
--

CREATE TABLE `room` (
  `id_room` int(11) NOT NULL,
  `code_room` varchar(30) NOT NULL,
  `room_class` varchar(30) NOT NULL,
  `room_type` varchar(30) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `price` varchar(30) NOT NULL,
  `detail_room` text NOT NULL,
  `detail1` varchar(30) NOT NULL,
  `detail2` varchar(30) NOT NULL,
  `detail3` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `room`
--

INSERT INTO `room` (`id_room`, `code_room`, `room_class`, `room_type`, `image`, `price`, `detail_room`, `detail1`, `detail2`, `detail3`) VALUES
(1, 'AED44', 'STANDART', 'DOUBLE BED', 'gambar1.png', '650000', 'Double bed merujuk pada ukuran ranjang yang lebih besar. Kamar yang menyediakan tipe tempat tidur ini hanya menyediakan satu ranjang. Ukuran kasur yang cukup luas membuat tipe ranjang ini bisa ditempati dua orang. Satu double bed biasanya berukuran 160x200 cm. \r\n\r\nKamar tidur dengan double bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png'),
(2, 'AED45', 'STANDART', 'DOUBLE  BED', 'gambar8.png', '1000000', 'Double bed merujuk pada ukuran ranjang yang lebih besar. Kamar yang menyediakan tipe tempat tidur ini hanya menyediakan satu ranjang. Ukuran kasur yang cukup luas membuat tipe ranjang ini bisa ditempati dua orang. Satu double bed biasanya berukuran 160x200 cm. \r\n\r\nKamar tidur dengan double bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png'),
(3, 'AED46', 'STANDART', 'DOUBLE  BED', 'gambar4.png', '1500000', 'Double bed merujuk pada ukuran ranjang yang lebih besar. Kamar yang menyediakan tipe tempat tidur ini hanya menyediakan satu ranjang. Ukuran kasur yang cukup luas membuat tipe ranjang ini bisa ditempati dua orang. Satu double bed biasanya berukuran 160x200 cm. \r\n\r\nKamar tidur dengan double bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png'),
(4, 'AED55', 'MEDIUM', 'DOUBLE  BED', 'gambar5.png', '2000000', 'Double bed merujuk pada ukuran ranjang yang lebih besar. Kamar yang menyediakan tipe tempat tidur ini hanya menyediakan satu ranjang. Ukuran kasur yang cukup luas membuat tipe ranjang ini bisa ditempati dua orang. Satu double bed biasanya berukuran 160x200 cm. \r\n\r\nKamar tidur dengan double bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png'),
(5, 'AED56', 'MEDIUM', 'DOUBLE  BED', 'gambar6.png', '2500000', 'Double bed merujuk pada ukuran ranjang yang lebih besar. Kamar yang menyediakan tipe tempat tidur ini hanya menyediakan satu ranjang. Ukuran kasur yang cukup luas membuat tipe ranjang ini bisa ditempati dua orang. Satu double bed biasanya berukuran 160x200 cm. \r\n\r\nKamar tidur dengan double bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png'),
(6, 'AED57', 'MEDIUM', 'DOUBLE BED', 'gambar7.png', '2750000', 'Double bed merujuk pada ukuran ranjang yang lebih besar. Kamar yang menyediakan tipe tempat tidur ini hanya menyediakan satu ranjang. Ukuran kasur yang cukup luas membuat tipe ranjang ini bisa ditempati dua orang. Satu double bed biasanya berukuran 160x200 cm. \r\n\r\nKamar tidur dengan double bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png'),
(7, 'AED66', 'VIP', 'DOUBLE BED', 'gambar9.png', '10000000', 'Double bed merujuk pada ukuran ranjang yang lebih besar. Kamar yang menyediakan tipe tempat tidur ini hanya menyediakan satu ranjang. Ukuran kasur yang cukup luas membuat tipe ranjang ini bisa ditempati dua orang. Satu double bed biasanya berukuran 160x200 cm. \r\n\r\nKamar tidur dengan double bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png'),
(8, 'AED67', 'VIP', 'TWIN  BED', 'gambar2.png', '5000000', 'Ketika Anda memasuki kamar, Anda akan melihat dua tempat tidur yang ditempatkan di sisi berlawanan kamar. Tempat tidur tersebut biasanya memiliki ukuran yang sama, sering kali sekitar 90 cm hingga 110 cm lebar, yang memungkinkan setiap tamu memiliki ruang tidur yang nyaman.\r\n\r\nKamar tidur dengan twin bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png'),
(9, 'AED68', 'VIP', 'DOUBLE  BED', 'gambar3.png', '4000000', 'Double bed merujuk pada ukuran ranjang yang lebih besar. Kamar yang menyediakan tipe tempat tidur ini hanya menyediakan satu ranjang. Ukuran kasur yang cukup luas membuat tipe ranjang ini bisa ditempati dua orang. Satu double bed biasanya berukuran 160x200 cm. \r\n\r\nKamar tidur dengan double bed biasanya dilengkapi dengan:\r\n', 'detail1.png', 'detail2.png', 'detail3.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `stock_kamar`
--

CREATE TABLE `stock_kamar` (
  `id_stock` int(11) NOT NULL,
  `kode_kamar` varchar(30) NOT NULL,
  `jumlah_kamar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `stock_kamar`
--

INSERT INTO `stock_kamar` (`id_stock`, `kode_kamar`, `jumlah_kamar`) VALUES
(1, 'AED44', 10),
(2, 'AED45', 10),
(3, 'AED46', 10),
(4, 'AED55', 5),
(5, 'AED56', 5),
(6, 'AED57', 5),
(7, 'AED66', 3),
(8, 'AED67', 3),
(9, 'AED68', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tamu`
--

CREATE TABLE `tamu` (
  `id_tamu` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama_tamu` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nomor_wa` int(12) NOT NULL,
  `kamar_dipesan` varchar(30) NOT NULL,
  `kelas_kamar` varchar(30) NOT NULL,
  `jumlah_kamar` int(30) NOT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL,
  `total_pembayaran` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tamu`
--

INSERT INTO `tamu` (`id_tamu`, `id_user`, `nama_tamu`, `email`, `nomor_wa`, `kamar_dipesan`, `kelas_kamar`, `jumlah_kamar`, `check_in`, `check_out`, `total_pembayaran`) VALUES
(3, 1, 'tamu01', 'tamu01@gmail.com', 83, 'AED44', 'STANDART', 1, '2023-06-17', '2023-06-18', 650000),
(4, 2, 'tamu 02', 'tamu 02@gmail.com', 83, 'AED44', 'STANDART', 1, '2023-06-18', '2023-06-19', 650000);

--
-- Trigger `tamu`
--
DELIMITER $$
CREATE TRIGGER `ADD_CIO` AFTER INSERT ON `tamu` FOR EACH ROW BEGIN
	INSERT INTO cio SET
	id_tamu = new.id_tamu,
    nama_tamu = new.nama_tamu,
    kamar_dipesan = new.kamar_dipesan,
    kelas_kamar = new.kelas_kamar,
    jumlah_kamar = new.jumlah_kamar,
    check_in = new.check_in,
    check_out = new.check_out,
    total_pembayaran = new.total_pembayaran;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` int(11) NOT NULL,
  `email` int(11) NOT NULL,
  `no_wa` int(11) NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `wisata`
--

CREATE TABLE `wisata` (
  `id_wisata` int(11) NOT NULL,
  `nama_tempat` varchar(100) NOT NULL,
  `lokasi_tempat` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `biaya` varchar(30) NOT NULL,
  `detail_wisata` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `wisata`
--

INSERT INTO `wisata` (`id_wisata`, `nama_tempat`, `lokasi_tempat`, `image`, `biaya`, `detail_wisata`) VALUES
(1, 'Tiu Kelep Waterfall', 'MCV5+Q7, Bayan, Kec. Bayan, Kabupaten Lombok Utara, NTB', 'wisata1.png', '1.500.000', ''),
(2, 'Gili Air', 'Gili Indah, Kec. Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Barat.', 'wisata2.png', '2.100.000', ''),
(3, 'Air Terjun Sendang Gile', 'Jl. Pariwisata, Bayan, Kec. Bayan, Kabupaten Lombok Utara.', 'wisata3.png', '1.500.000', ''),
(4, 'Gili Trawangan', 'Gili Indah, Kec. Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Barat.', 'wisata4.png', '2.500.000', ''),
(5, 'Sembalun', 'Kabupaten Lombok Timur\r\nNusa Tenggara Barat.', 'wisata5.png', '1.800.000', ''),
(6, 'Gunung Rinjani', 'Sembalun Lawang, Kec. Sembalun, Kabupaten Lombok Timur, NTB', 'wisata6.png', '5.500.000', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cio`
--
ALTER TABLE `cio`
  ADD PRIMARY KEY (`id_cio`),
  ADD KEY `id_tamu` (`id_tamu`);

--
-- Indeks untuk tabel `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indeks untuk tabel `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id_room`);

--
-- Indeks untuk tabel `stock_kamar`
--
ALTER TABLE `stock_kamar`
  ADD PRIMARY KEY (`id_stock`);

--
-- Indeks untuk tabel `tamu`
--
ALTER TABLE `tamu`
  ADD PRIMARY KEY (`id_tamu`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `wisata`
--
ALTER TABLE `wisata`
  ADD PRIMARY KEY (`id_wisata`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `cio`
--
ALTER TABLE `cio`
  MODIFY `id_cio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `room`
--
ALTER TABLE `room`
  MODIFY `id_room` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `stock_kamar`
--
ALTER TABLE `stock_kamar`
  MODIFY `id_stock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `tamu`
--
ALTER TABLE `tamu`
  MODIFY `id_tamu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `wisata`
--
ALTER TABLE `wisata`
  MODIFY `id_wisata` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
