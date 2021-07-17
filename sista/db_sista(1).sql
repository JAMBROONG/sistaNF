-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 17 Jul 2021 pada 08.42
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sista`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `dosen`
--

CREATE TABLE `dosen` (
  `id` int(11) NOT NULL,
  `nidn` varchar(10) DEFAULT NULL,
  `nama` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `dosen`
--

INSERT INTO `dosen` (`id`, `nidn`, `nama`) VALUES
(1, '084020211', 'AMALIA RAHMAH, S.T, S.T, M.T'),
(2, '084040200', 'BACHTIAR FIRDAUS, S.T, M.P'),
(3, '084151108', 'KURNIAWAN DWI PRASETYO, S.T, M.T'),
(4, '084201001', 'MUHAMMAD BINTANG, S.Kom'),
(5, '084310911', 'NUGROHO DWI SAPUTRA, S.Kom, M.Ti'),
(6, '084290607', 'REZA ALDIANSYAH, S.T, M.Ti'),
(7, '084230787', 'RUSMANTO, M.M., Drs'),
(8, '084260989', 'SAPTO WALUYO, S.Sos, M.Sc.'),
(9, '0860696', 'SUHENDI, M.M.S.I, S.T'),
(10, '084010195', 'WARSONO, S.Kom, M.Ti'),
(11, '084241010', 'YEKTI WIRANI, S.T, M.Ti'),
(12, '084080200', 'DEDY ACHMADI, S.T, M.T'),
(13, '084071314', 'MISNA ASQIA, S.Kom, M.Kom'),
(14, '084050315', 'NURUL JANAH, S.IIP, M.HUM'),
(15, '084300500', 'EDI WIBOWO, S.E, M.M'),
(16, '084131310', 'AHMAD RIO ADRIANSYAH, S.Si, M.Si'),
(17, '084260511', 'APRIL RUSTIANTO, S.Kom, M.T'),
(18, '084070998', 'HENRY SAPTONO, S.Si, M.Kom'),
(19, '084111208', 'HILMY ABIDZAR TAWAKAL, S.T, M.Kom'),
(20, '084211202', 'LUKMAN ROSYIDI, S.T, M.M., M.T'),
(21, '084270601', 'REZA PRIMARDIANSYAH, S.T, M.Kom'),
(22, '084240913', 'SALMAN EL FARISI, S.Kom, M.Kom'),
(23, '084290398', 'SIGIT PUSPITO WIGATI JAROT,PhD'),
(24, '084140495', 'SIROJUL MUNIR, S.Si, M.Kom'),
(25, '084100915', 'TUBAGUS RIZKY DHARMAWAN, S.T, M.Sc.'),
(26, '084260907', 'ZAKI IMADUDDIN, S.T, M.Kom'),
(27, '084281214', 'ADITYA PUTRA, S.T, M.T'),
(28, '084101104', 'NASRUL, S.Kom, M.Kom'),
(29, '084200914', 'TIFANI NABARIAN, S.Kom, M.T.I'),
(30, '084301213', 'PUDY PRIMA, S.T, M.Kom'),
(31, '084240795', 'EFRIZAL ZAIDA, S.KOM, M.M, M.KOM'),
(32, '0899902010', 'TEGUH RAHARJO, S.Kom, M.Kom'),
(33, '084290906', 'ISHOM MUHAMMAD DREHEM,S.Kom, M.Kom'),
(34, '084141310', 'IMAM HAROMAIN, S.Si, M.Kom');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori_seminar`
--

CREATE TABLE `kategori_seminar` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `kategori_seminar`
--

INSERT INTO `kategori_seminar` (`id`, `nama`) VALUES
(1, 'Seminar Proposal'),
(2, 'Seminar Hasil'),
(3, 'Sidang Skripsi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `penilaian`
--

CREATE TABLE `penilaian` (
  `id` int(11) NOT NULL,
  `dosen_id` int(11) NOT NULL,
  `seminar_id` int(11) DEFAULT NULL,
  `penilaian_tentang` varchar(50) CHARACTER SET utf8 NOT NULL,
  `keterangan` text CHARACTER SET utf8 NOT NULL,
  `nilai` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `penilaian`
--

INSERT INTO `penilaian` (`id`, `dosen_id`, `seminar_id`, `penilaian_tentang`, `keterangan`, `nilai`) VALUES
(7, 19, 16, 'Presentasi', 'bagus', 10),
(8, 19, 16, 'Penguasaan Materi', 'bagus', 10),
(9, 19, 16, 'Penulisan Dokumen', 'bagus', 10),
(10, 18, 16, 'Presentasi', 'lumayan', 7),
(11, 18, 16, 'Penguasaan Materi', 'lumayan', 7),
(12, 18, 16, 'Penulisan Dokumen', 'lumayan', 7),
(13, 10, 16, 'Presentasi', 'kurang', 5),
(14, 10, 16, 'Penguasaan Materi', 'kurang', 5),
(15, 10, 16, 'Penulisan Dokumen', 'kurang', 5),
(16, 33, 14, 'Presentasi', 'jelek', 3),
(17, 33, 14, 'Penguasaan Materi', 'parah banget', 2),
(18, 33, 14, 'Penulisan Dokumen', 'ancur', 1),
(19, 4, 14, 'Presentasi', 'bagus banget', 10),
(20, 4, 14, 'Penguasaan Materi', 'nice', 9),
(21, 4, 14, 'Penulisan Dokumen', 'good', 8),
(22, 1, 14, 'Presentasi', 'lumayan', 6),
(23, 1, 14, 'Penguasaan Materi', 'lumayan', 7),
(24, 1, 14, 'Penulisan Dokumen', 'lumayan', 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `peserta_seminar`
--

CREATE TABLE `peserta_seminar` (
  `id` int(11) NOT NULL,
  `nim` varchar(10) DEFAULT NULL,
  `nama` varchar(45) DEFAULT NULL,
  `prodi_id` int(11) NOT NULL,
  `jenjang` varchar(20) NOT NULL,
  `seminar_id` int(11) NOT NULL,
  `status` enum('Disetujui','Ditolak','Menunggu Persetujuan') DEFAULT 'Menunggu Persetujuan',
  `kehadiran` enum('Hadir','Tidak Hadir') DEFAULT 'Tidak Hadir',
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `peserta_seminar`
--

INSERT INTO `peserta_seminar` (`id`, `nim`, `nama`, `prodi_id`, `jenjang`, `seminar_id`, `status`, `kehadiran`, `user_id`) VALUES
(6, '0000', 'lana aja', 2, 's1reg', 14, 'Menunggu Persetujuan', 'Tidak Hadir', 2),
(7, '1234', 'gua lagi', 2, 's1reg', 14, 'Menunggu Persetujuan', 'Tidak Hadir', 2),
(8, '0110220339', 'adul', 1, 's1reg', 14, 'Menunggu Persetujuan', 'Tidak Hadir', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `prodi`
--

CREATE TABLE `prodi` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `prodi`
--

INSERT INTO `prodi` (`id`, `nama`) VALUES
(1, 'Teknik Informatika'),
(2, 'Sistem Informasi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `seminar_ta`
--

CREATE TABLE `seminar_ta` (
  `id` int(11) NOT NULL,
  `semester` int(11) DEFAULT NULL,
  `tanggal` datetime DEFAULT NULL,
  `kategori_seminar_id` int(11) NOT NULL,
  `nim` varchar(12) DEFAULT NULL,
  `nama_mahasiswa` varchar(45) DEFAULT NULL,
  `prodi_id` int(11) DEFAULT NULL,
  `judul` text DEFAULT NULL,
  `pembimbing_id` int(11) NOT NULL,
  `penguji1_id` int(11) DEFAULT NULL,
  `penguji2_id` int(11) DEFAULT NULL,
  `nilai_pembimbing` double(8,2) DEFAULT NULL,
  `nilai_penguji1` double(8,2) DEFAULT NULL,
  `nilai_penguji2` double(8,2) DEFAULT NULL,
  `lokasi` varchar(40) DEFAULT NULL,
  `nilai_akhir` double(8,2) DEFAULT NULL,
  `status` enum('Menunggu Persetujuan','Disetujui','Ditolak') DEFAULT 'Menunggu Persetujuan',
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `seminar_ta`
--

INSERT INTO `seminar_ta` (`id`, `semester`, `tanggal`, `kategori_seminar_id`, `nim`, `nama_mahasiswa`, `prodi_id`, `judul`, `pembimbing_id`, `penguji1_id`, `penguji2_id`, `nilai_pembimbing`, `nilai_penguji1`, `nilai_penguji2`, `lokasi`, `nilai_akhir`, `status`, `user_id`) VALUES
(14, 4, '2021-07-25 16:32:00', 1, '0110220182', 'Akhmad Lylana', 1, 'Menjadi Badut 100% NO ROOT', 33, 4, 1, 2.00, 9.00, 6.00, 'Google Meet', 5.67, 'Disetujui', 2),
(15, 2, '2021-07-23 00:39:00', 2, '0110220185', 'Budi Sudarsono', 1, 'Gatau Apaan', 18, 6, 3, NULL, NULL, NULL, 'Online Zoom', NULL, 'Disetujui', 2),
(16, 4, '2021-07-30 16:36:00', 2, '0110220189', 'Tono', 1, 'ggg', 19, 18, 10, 10.00, 7.00, 5.00, 'Online Zoom', NULL, 'Disetujui', 2),
(17, NULL, NULL, 1, '0110220183', 'supri', 1, 'ini judul', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Menunggu Persetujuan', 7);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `role` varchar(12) NOT NULL,
  `foto` varchar(100) DEFAULT '1.jpeg',
  `created_at` datetime NOT NULL,
  `last_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama`, `username`, `password`, `email`, `role`, `foto`, `created_at`, `last_login`) VALUES
(2, 'Akhmad Lylana', 'lana1909', '$2y$10$yfnlrtSG0zO9N.8tyh9LXuhvFdD.UEt9CaRE707NNeIE/as4nP27G', 'lanaemel19@gmail.com', 'Admin', '1.jpeg', '2021-07-03 12:49:04', '2021-07-17 00:37:27'),
(5, 'lanalana', 'lana1234', '$2y$10$VwG06Z2OtG3iF8Gu14/xgu4RDyrEVXkvH2vLjJdLneyDpCDr91OXu', 'lananaa@gmail.com', 'Member', '1.jpeg', '2021-07-03 14:35:12', '2021-07-04 22:05:45'),
(6, 'purno sukonto legowo', 'member01', '$2y$10$UpLL6bE/YYFlJVQwGMwJ5.pE5Ptgrafuw7iHs2x7kJR41jEDsZKGi', 'lanalana@gmail.com', 'member', '1.jpeg', '2021-07-16 23:15:06', '2021-07-16 23:15:20'),
(7, 'budi', 'budi123', '$2y$10$hJqlFx2gjNEske5/kowSH.BGMrbCvHvFU67RNzcsOjPQovUNiBDkW', 'budi@gmail.com', 'member', '1.jpeg', '2021-07-17 00:33:10', '2021-07-17 00:33:28');

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `v_pembimbing`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `v_pembimbing` (
`id` int(11)
,`pembimbing` varchar(45)
);

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `v_penguji1`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `v_penguji1` (
`id` int(11)
,`penguji1` varchar(45)
);

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `v_penguji2`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `v_penguji2` (
`id` int(11)
,`penguji2` varchar(45)
);

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `v_seminar`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `v_seminar` (
`id` int(11)
,`semester` int(11)
,`tanggal` datetime
,`kategori` varchar(45)
,`nim` varchar(12)
,`nama` varchar(45)
,`prodi` varchar(45)
,`judul` text
,`pembimbing` varchar(45)
,`penguji1` varchar(45)
,`penguji2` varchar(45)
,`id_pembimbing` int(11)
,`id_penguji1` int(11)
,`id_penguji2` int(11)
,`lokasi` varchar(40)
,`status` enum('Menunggu Persetujuan','Disetujui','Ditolak')
,`user` int(11)
,`nilai` double(8,2)
);

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `v_seminar_pengajuan`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `v_seminar_pengajuan` (
`id` int(11)
,`nim` varchar(12)
,`nama` varchar(45)
,`prodi` varchar(45)
,`kategori` varchar(45)
,`judul` text
,`status` enum('Menunggu Persetujuan','Disetujui','Ditolak')
);

-- --------------------------------------------------------

--
-- Struktur untuk view `v_pembimbing`
--
DROP TABLE IF EXISTS `v_pembimbing`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_pembimbing`  AS SELECT `dosen`.`id` AS `id`, `dosen`.`nama` AS `pembimbing` FROM (`seminar_ta` join `dosen` on(`seminar_ta`.`pembimbing_id` = `dosen`.`id`)) ;

-- --------------------------------------------------------

--
-- Struktur untuk view `v_penguji1`
--
DROP TABLE IF EXISTS `v_penguji1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_penguji1`  AS SELECT `dosen`.`id` AS `id`, `dosen`.`nama` AS `penguji1` FROM (`seminar_ta` join `dosen` on(`seminar_ta`.`penguji1_id` = `dosen`.`id`)) ;

-- --------------------------------------------------------

--
-- Struktur untuk view `v_penguji2`
--
DROP TABLE IF EXISTS `v_penguji2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_penguji2`  AS SELECT `dosen`.`id` AS `id`, `dosen`.`nama` AS `penguji2` FROM (`seminar_ta` join `dosen` on(`seminar_ta`.`penguji2_id` = `dosen`.`id`)) ;

-- --------------------------------------------------------

--
-- Struktur untuk view `v_seminar`
--
DROP TABLE IF EXISTS `v_seminar`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_seminar`  AS SELECT `seminar_ta`.`id` AS `id`, `seminar_ta`.`semester` AS `semester`, `seminar_ta`.`tanggal` AS `tanggal`, `kategori_seminar`.`nama` AS `kategori`, `seminar_ta`.`nim` AS `nim`, `seminar_ta`.`nama_mahasiswa` AS `nama`, `prodi`.`nama` AS `prodi`, `seminar_ta`.`judul` AS `judul`, `v_pembimbing`.`pembimbing` AS `pembimbing`, `v_penguji1`.`penguji1` AS `penguji1`, `v_penguji2`.`penguji2` AS `penguji2`, `v_pembimbing`.`id` AS `id_pembimbing`, `v_penguji1`.`id` AS `id_penguji1`, `v_penguji2`.`id` AS `id_penguji2`, `seminar_ta`.`lokasi` AS `lokasi`, `seminar_ta`.`status` AS `status`, `seminar_ta`.`user_id` AS `user`, `seminar_ta`.`nilai_akhir` AS `nilai` FROM (((((`seminar_ta` join `kategori_seminar` on(`seminar_ta`.`kategori_seminar_id` = `kategori_seminar`.`id`)) join `prodi` on(`seminar_ta`.`prodi_id` = `prodi`.`id`)) join `v_pembimbing` on(`seminar_ta`.`pembimbing_id` = `v_pembimbing`.`id`)) join `v_penguji1` on(`seminar_ta`.`penguji1_id` = `v_penguji1`.`id`)) join `v_penguji2` on(`seminar_ta`.`penguji2_id` = `v_penguji2`.`id`)) ;

-- --------------------------------------------------------

--
-- Struktur untuk view `v_seminar_pengajuan`
--
DROP TABLE IF EXISTS `v_seminar_pengajuan`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_seminar_pengajuan`  AS SELECT `seminar_ta`.`id` AS `id`, `seminar_ta`.`nim` AS `nim`, `seminar_ta`.`nama_mahasiswa` AS `nama`, `prodi`.`nama` AS `prodi`, `kategori_seminar`.`nama` AS `kategori`, `seminar_ta`.`judul` AS `judul`, `seminar_ta`.`status` AS `status` FROM ((`seminar_ta` join `prodi` on(`seminar_ta`.`prodi_id` = `prodi`.`id`)) join `kategori_seminar` on(`seminar_ta`.`kategori_seminar_id` = `kategori_seminar`.`id`)) ;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kategori_seminar`
--
ALTER TABLE `kategori_seminar`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `penilaian`
--
ALTER TABLE `penilaian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_detail_penilaian_dosen1_idx` (`dosen_id`),
  ADD KEY `seminar_id` (`seminar_id`);

--
-- Indeks untuk tabel `peserta_seminar`
--
ALTER TABLE `peserta_seminar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_peserta_seminar_mahasiswa_seminar1_idx` (`seminar_id`),
  ADD KEY `prodi_id` (`prodi_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `prodi`
--
ALTER TABLE `prodi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `seminar_ta`
--
ALTER TABLE `seminar_ta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_mahasiswa_seminar_kategori_seminar_idx` (`kategori_seminar_id`),
  ADD KEY `fk_mahasiswa_seminar_dosen1_idx` (`pembimbing_id`),
  ADD KEY `prodi_id` (`prodi_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `penguji1_id` (`penguji1_id`),
  ADD KEY `penguji2_id` (`penguji2_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `dosen`
--
ALTER TABLE `dosen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `kategori_seminar`
--
ALTER TABLE `kategori_seminar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `penilaian`
--
ALTER TABLE `penilaian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT untuk tabel `peserta_seminar`
--
ALTER TABLE `peserta_seminar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `prodi`
--
ALTER TABLE `prodi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `seminar_ta`
--
ALTER TABLE `seminar_ta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `penilaian`
--
ALTER TABLE `penilaian`
  ADD CONSTRAINT `fk_detail_penilaian_dosen1` FOREIGN KEY (`dosen_id`) REFERENCES `dosen` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `penilaian_ibfk_1` FOREIGN KEY (`seminar_id`) REFERENCES `seminar_ta` (`id`);

--
-- Ketidakleluasaan untuk tabel `peserta_seminar`
--
ALTER TABLE `peserta_seminar`
  ADD CONSTRAINT `fk_peserta_seminar_mahasiswa_seminar1` FOREIGN KEY (`seminar_id`) REFERENCES `seminar_ta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `peserta_seminar_ibfk_1` FOREIGN KEY (`prodi_id`) REFERENCES `prodi` (`id`),
  ADD CONSTRAINT `peserta_seminar_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ketidakleluasaan untuk tabel `seminar_ta`
--
ALTER TABLE `seminar_ta`
  ADD CONSTRAINT `fk_mahasiswa_seminar_dosen1` FOREIGN KEY (`pembimbing_id`) REFERENCES `dosen` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_mahasiswa_seminar_kategori_seminar` FOREIGN KEY (`kategori_seminar_id`) REFERENCES `kategori_seminar` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `seminar_ta_ibfk_3` FOREIGN KEY (`prodi_id`) REFERENCES `prodi` (`id`),
  ADD CONSTRAINT `seminar_ta_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `seminar_ta_ibfk_5` FOREIGN KEY (`penguji1_id`) REFERENCES `dosen` (`id`),
  ADD CONSTRAINT `seminar_ta_ibfk_6` FOREIGN KEY (`penguji2_id`) REFERENCES `dosen` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
