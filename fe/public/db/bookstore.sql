-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2023 at 04:51 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `chi_tiet_don_hangs`
--

CREATE TABLE `chi_tiet_don_hangs` (
  `id` int(10) NOT NULL,
  `Ma_SP` int(10) NOT NULL,
  `So_Luong` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chi_tiet_don_hangs`
--

INSERT INTO `chi_tiet_don_hangs` (`id`, `Ma_SP`, `So_Luong`, `created_at`, `updated_at`) VALUES
(2, 1, 1, '2023-01-17 17:00:00', '2022-11-17 17:00:00'),
(2, 2, 1, '2023-01-17 17:00:00', '2022-11-17 17:00:00'),
(2, 4, 3, '2023-01-17 17:00:00', NULL),
(2, 1, 5, '2023-01-17 17:00:00', NULL),
(3, 2, 1, '2022-11-19 15:37:49', '2022-11-19 15:37:22'),
(3, 7, 1, '2022-11-19 15:38:18', '2022-11-19 15:38:00'),
(3, 11, 1, '2022-11-19 15:38:36', '2022-11-19 15:38:20'),
(4, 8, 1, '2022-11-19 15:41:37', '2022-11-19 15:41:20');

-- --------------------------------------------------------

--
-- Table structure for table `chi_tiet_nhap_hangs`
--

CREATE TABLE `chi_tiet_nhap_hangs` (
  `Ma_NH` int(11) NOT NULL,
  `Ma_SP` int(10) NOT NULL,
  `So_Luong` int(10) NOT NULL,
  `Don_Gia` varchar(50) NOT NULL,
  `Tong_Tien` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `danh_muc`
--

CREATE TABLE `danh_muc` (
  `Ma_DM` int(10) UNSIGNED NOT NULL,
  `Ten_DM` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `danh_mucs`
--

CREATE TABLE `danh_mucs` (
  `id` int(11) NOT NULL,
  `Ten_DM` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `danh_mucs`
--

INSERT INTO `danh_mucs` (`id`, `Ten_DM`, `created_at`, `updated_at`) VALUES
(1, 'Tiểu thuyết', '2022-10-21 14:49:59', '2022-11-22 09:41:03'),
(2, 'Sách tiếng anh', '2022-10-22 17:23:30', '2022-11-22 17:23:30'),
(3, 'Sách văn học', '2022-10-22 17:23:47', '2022-10-22 17:23:47'),
(4, 'Truyện tranh', '2022-11-11 16:43:21', '2022-11-11 16:43:21'),
(5, 'Sách kỹ năng sống', '2022-11-13 17:44:57', '2022-11-19 14:15:52'),
(6, 'Sách kinh tế', '2022-11-15 08:30:21', '2022-11-15 08:30:21');

-- --------------------------------------------------------

--
-- Table structure for table `don_hangs`
--

CREATE TABLE `don_hangs` (
  `id` int(11) NOT NULL,
  `Ma_KH` int(10) NOT NULL,
  `Ma_NV` int(10) DEFAULT NULL,
  `Ho_Ten_KH` varchar(50) NOT NULL,
  `Dia_Chi` varchar(50) NOT NULL,
  `SDT` varchar(50) NOT NULL,
  `Tong_Tien` varchar(50) NOT NULL,
  `Ma_KM` int(10) DEFAULT NULL,
  `Tien_KM` int(11) DEFAULT NULL,
  `Thanh_Tien` varchar(50) NOT NULL,
  `Trang_Thai` varchar(50) NOT NULL,
  `Ngay_Tao` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `don_hangs`
--

INSERT INTO `don_hangs` (`id`, `Ma_KH`, `Ma_NV`, `Ho_Ten_KH`, `Dia_Chi`, `SDT`, `Tong_Tien`, `Ma_KM`, `Tien_KM`, `Thanh_Tien`, `Trang_Thai`, `Ngay_Tao`, `created_at`, `updated_at`) VALUES
(2, 1, NULL, 'Phạm Trần Khôi', '03 Lô G6 phường Tân Hưng Thuận Quận 12', '0794667091', '235000', NULL, NULL, '235000', 'Giao thành công', '2023-01-10', '2023-01-24 02:30:36', '2022-11-22 09:46:31'),
(3, 2, NULL, 'Phạm Thu Hương', '33/1 Hoàng Diệu Phường 10 Quận Phú Nhuận TPHCM', '0906580335', '269000', NULL, 0, '269000', 'Bị hủy', '2023-11-10', '2023-01-24 02:16:35', '2022-11-22 10:55:09'),
(4, 1, NULL, 'Phạm Trần Khôi', '03 Lô G6 phường Tân Hưng Thuận Quận 12', '0794667091', '57000', NULL, NULL, '57000', 'Đang giao hàng', '2023-11-13', '2023-01-24 02:16:48', '2022-11-22 09:47:38');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `khach_hangs`
--

CREATE TABLE `khach_hangs` (
  `id` int(11) NOT NULL,
  `Ho_KH` varchar(50) NOT NULL,
  `Ten_KH` varchar(50) NOT NULL,
  `Dia_Chi` varchar(50) NOT NULL,
  `SDT` text NOT NULL,
  `Gioi_Tinh` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `Avatar` varchar(50) NOT NULL,
  `Tinh_Trang` int(11) NOT NULL,
  `Ngay_Tao` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `khach_hangs`
--

INSERT INTO `khach_hangs` (`id`, `Ho_KH`, `Ten_KH`, `Dia_Chi`, `SDT`, `Gioi_Tinh`, `email`, `password`, `Avatar`, `Tinh_Trang`, `Ngay_Tao`, `created_at`, `updated_at`) VALUES
(1, 'Phạm Trần', 'Khôi', '03 Lô G6 phường Tân Hưng Thuận Quận 12 TPHCM', '0794667091', 'Nam', 'khoipham160701@gmail.com', '$2y$10$cgwmU5CdpzG5hVuLhSw6OuUC14vNn5Fdks1Yd/ZUgw2yGmhpXNTKW', 'no_avatar', 0, '2022-10-21', '2022-11-22 18:01:00', '2022-11-22 09:46:04'),
(2, 'Phạm Thu', 'Hương', '33/1 Hoàng Diệu Phường 10 Quận Phú Nhuận TPHCM', '0906580335', 'Nữ', 'huongpham291196@gmail.com', '$2y$10$cgwmU5CdpzG5hVuLhSw6OuUC14vNn5Fdks1Yd/ZUgw2yGmhpXNTKW', 'no_avatar', 0, '2022-11-09', '2022-11-23 00:23:14', '2022-11-19 14:54:18'),
(3, 'Phan Văn', 'Thanh', '275 An Dương Phương Phường 3 Quận 5', '0794582335', 'Nam', 'phanvanthanh1207@gmail.com', '$2y$10$j8hi33P/OyHOwt4Y1/csGu0aceZesb06qcxcIx3hQ.jAH65C1ALYa', 'noavatar', 1, '2022-11-22', '2022-11-22 16:42:39', '2022-11-22 09:42:39');

-- --------------------------------------------------------

--
-- Table structure for table `khuyen_mais`
--

CREATE TABLE `khuyen_mais` (
  `id` int(11) NOT NULL,
  `Ma_KM` varchar(50) NOT NULL,
  `Ten_KM` varchar(255) NOT NULL,
  `Mo_Ta` text NOT NULL,
  `Phan_Tram_KM` int(50) DEFAULT NULL,
  `Tien_KM` int(50) DEFAULT NULL,
  `Ngay_Bat_Dau` date NOT NULL,
  `Ngay_Ket_Thuc` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `khuyen_mais`
--

INSERT INTO `khuyen_mais` (`id`, `Ma_KM`, `Ten_KM`, `Mo_Ta`, `Phan_Tram_KM`, `Tien_KM`, `Ngay_Bat_Dau`, `Ngay_Ket_Thuc`, `created_at`, `updated_at`) VALUES
(1, 'KMDT', 'Khuyến mãi 10-10', 'Giảm giá nhân dịp ngày 10-10. Giảm giá tất cả các mặt hàng 50.000đ khi áp dụng mã khuyến mãi này.', NULL, 50000, '2022-10-10', '2022-10-11', '2022-11-10 15:05:45', '2022-11-10 08:05:45');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_11_08_140938_create_danh_muc_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nhan_viens`
--

CREATE TABLE `nhan_viens` (
  `id` int(11) NOT NULL,
  `Ho_NV` varchar(50) NOT NULL,
  `Ten_NV` varchar(50) NOT NULL,
  `Ngay_Sinh` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Gioi_Tinh` varchar(50) NOT NULL,
  `Dia_Chi` varchar(50) NOT NULL,
  `SDT` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `Tinh_Trang` int(10) NOT NULL,
  `Quyen` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nhan_viens`
--

INSERT INTO `nhan_viens` (`id`, `Ho_NV`, `Ten_NV`, `Ngay_Sinh`, `Gioi_Tinh`, `Dia_Chi`, `SDT`, `email`, `password`, `Tinh_Trang`, `Quyen`, `created_at`, `updated_at`) VALUES
(1, 'Phạm Trần', 'Khôi', '2022-11-19 21:56:43', 'Nam', '03 Lô G6 Phường Tân Hưng Thuận Quận 12 TPHCM', '0794667091', 'admin@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1, 1, '2022-11-19 21:56:43', '2022-11-19 14:56:43');

-- --------------------------------------------------------

--
-- Table structure for table `nhap_hangs`
--

CREATE TABLE `nhap_hangs` (
  `id` int(11) NOT NULL,
  `Ma_NV` int(10) NOT NULL,
  `Tong_Tien` varchar(50) NOT NULL,
  `Nguon_Nhap` varchar(50) NOT NULL,
  `Ngay_Nhap` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `phan_hois`
--

CREATE TABLE `phan_hois` (
  `id` int(11) NOT NULL,
  `Ma_KH` int(11) NOT NULL,
  `Noi_Dung` text NOT NULL,
  `Email` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `phan_hois`
--

INSERT INTO `phan_hois` (`id`, `Ma_KH`, `Noi_Dung`, `Email`, `created_at`, `updated_at`) VALUES
(1, 2, 'Chưa tích hợp API, giao diện còn hơi xấu.', 'huongpham291196@gmail.com', '2022-11-18 17:01:11', '2022-11-18 17:01:11');

-- --------------------------------------------------------

--
-- Table structure for table `phan_quyens`
--

CREATE TABLE `phan_quyens` (
  `id` int(11) NOT NULL,
  `Ten_Quyen` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `phan_quyens`
--

INSERT INTO `phan_quyens` (`id`, `Ten_Quyen`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '2022-11-10 08:24:21', '2022-11-09 14:47:03'),
(2, 'Quản lý', '2022-11-10 08:24:27', '2022-11-09 14:47:03'),
(3, 'Nhân viên', '2022-11-10 08:24:40', '2022-11-09 14:47:03');

-- --------------------------------------------------------

--
-- Table structure for table `san_phams`
--

CREATE TABLE `san_phams` (
  `id` int(11) NOT NULL,
  `Ten_SP` varchar(255) NOT NULL,
  `NXB` varchar(50) NOT NULL,
  `Tac_Gia` varchar(50) NOT NULL,
  `Don_Gia` varchar(20) NOT NULL,
  `So_Luong` int(50) NOT NULL,
  `Giam_Gia` int(10) NOT NULL,
  `Mo_Ta` text NOT NULL,
  `Danh_Muc` int(10) NOT NULL,
  `Tinh_Trang` int(10) NOT NULL,
  `Hinh_Anh` text NOT NULL,
  `Ngay_Tao` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `san_phams`
--

INSERT INTO `san_phams` (`id`, `Ten_SP`, `NXB`, `Tac_Gia`, `Don_Gia`, `So_Luong`, `Giam_Gia`, `Mo_Ta`, `Danh_Muc`, `Tinh_Trang`, `Hinh_Anh`, `Ngay_Tao`, `created_at`, `updated_at`) VALUES
(1, 'Tiếng Anh Cho Người Mới Bắt Đầu', 'NXB Hồng Đức', 'Trang Anh, Minh Trang', '200000', 0, 0, 'Toàn cầu hóa đang là xu hướng tất yếu và ngày càng được mở rộng, tác động sâu sắc tới từng Quốc gia và mỗi cá nhân, đem lại cơ hội lớn để học hỏi nguồn tri thức khổng lồ trên internet và cơ hội việc làm đa quốc gia. Chính vì thế mà ngày càng có nhiều người coi tiếng Anh là ngôn ngữ bắt buộc phải thông thạo. Tuy nhiên, đại đa số người bắt đầu học tiếng Anh đều gặp khó khăn trong việc xác định nội dung và phương pháp học tập hiệu quả. Có rất nhiều người không biết nên bắt đầu học từ đâu, nên học những nội dung gì, nên học phần gì trước phần gì sau. Đó là còn chưa kể đến chương trình học trong nhà trường phổ thông vẫn nặng về lí thuyết và thi cử nên có rất nhiều bạn học sinh không thể tự tin sử dụng tiếng Anh trong giao tiếp hàng ngày.\r\n\r\nXuất phát từ thực tế đó, nhóm tác giả đã dành nhiều thời gian và tâm huyết để biên soạn cuốn TIẾNG ANH CHO NGƯỜI BẮT ĐẦU. Cuốn sách gồm có 30 bài, trong đó mỗi bài lại được chia thành các phần: nghe - nói - đọc - viết và Ngữ pháp. Điểm đặc biệt của cuốn sách này là tập trung khai thác ý nghĩa và cách dùng của ngữ pháp tiếng Anh, rồi từ chính việc nắm được ngữ pháp tiếng Anh sẽ giúp người học vận dụng để nói đúng trong giao tiếp. Các tình huống giao tiếp được xây dựng dựa trên các cách dùng của các hiện tượng ngữ pháp và từ các chủ đề giao tiếp sẽ phát triển vốn từ vựng theo chủ đề. Khi đã có vốn từ vựng và ngữ pháp thì người học sẽ được đi vào rèn luyện các kĩ năng nghe - nói - đọc - viết. Tất cả những điều đó được tích hợp trong từng đơn vị bài học (unit) của cuốn sách. Bên cạnh một hệ thống bài học được xây dựng logic, khoa học và dễ hiểu, cuốn sách còn có lời giải chi tiết cho từng câu bài tập và có file nghe được thu âm bởi chính giáo viên bản xứ. Cuốn sách nhằm giúp khắc phục nhược điểm trong thói quen học ngoại ngữ của người học – đó là sợ nói sai, dùng sai ngữ pháp và cũng chính vì nỗi sợ đó mà cản trở sự tự tin trong việc sử dụng ngôn ngữ. Cuốn sách bắt đầu đi từ ngữ pháp, những từ ngữ pháp hướng tới việc phát triển đầy đủ các kĩ năng ngôn ngữ cho người học và giúp người học tự tin sử dụng tiếng Anh trong công việc cũng như trong cuộc sống hàng ngày.\r\n\r\nMã hàng	9786043805246\r\nNhà Cung Cấp	Công Ty Cổ Phần Công Nghệ Giáo Dục Trực Tuyến Aladanh\r\nTác giả	Trang Anh, Minh Trang\r\nNXB	Hồng Đức\r\nNăm XB	2022\r\nTrọng lượng (gr)	820\r\nKích Thước Bao Bì	27 x 19 x 2.2 cm\r\nSố trang	467\r\nHình thức	Bìa Mềm\r\nSản phẩm bán chạy nhất	Top 100 sản phẩm Ngữ Pháp bán chạy của tháng\r\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\r\nTiếng Anh Cho Người Bắt Đầu\r\n\r\nToàn cầu hóa đang là xu hướng tất yếu và ngày càng được mở rộng, tác động sâu sắc tới từng Quốc gia và mỗi cá nhân, đem lại cơ hội lớn để học hỏi nguồn tri thức khổng lồ trên internet và cơ hội việc làm đa quốc gia. Chính vì thế mà ngày càng có nhiều người coi tiếng Anh là ngôn ngữ bắt buộc phải thông thạo. Tuy nhiên, đại đa số người bắt đầu học tiếng Anh đều gặp khó khăn trong việc xác định nội dung và phương pháp học tập hiệu quả. Có rất nhiều người không biết nên bắt đầu học từ đâu, nên học những nội dung gì, nên học phần gì trước phần gì sau. Đó là còn chưa kể đến chương trình học trong nhà trường phổ thông vẫn nặng về lí thuyết và thi cử nên có rất nhiều bạn học sinh không thể tự tin sử dụng tiếng Anh trong giao tiếp hàng ngày.\r\n\r\nXuất phát từ thực tế đó, nhóm tác giả đã dành nhiều thời gian và tâm huyết để biên soạn cuốn TIẾNG ANH CHO NGƯỜI BẮT ĐẦU. Cuốn sách gồm có 30 bài, trong đó mỗi bài lại được chia thành các phần: nghe - nói - đọc - viết và Ngữ pháp. Điểm đặc biệt của cuốn sách này là tập trung khai thác ý nghĩa và cách dùng của ngữ pháp tiếng Anh, rồi từ chính việc nắm được ngữ pháp tiếng Anh sẽ giúp người học vận dụng để nói đúng trong giao tiếp. Các tình huống giao tiếp được xây dựng dựa trên các cách dùng của các hiện tượng ngữ pháp và từ các chủ đề giao tiếp sẽ phát triển vốn từ vựng theo chủ đề. Khi đã có vốn từ vựng và ngữ pháp thì người học sẽ được đi vào rèn luyện các kĩ năng nghe - nói - đọc - viết. Tất cả những điều đó được tích hợp trong từng đơn vị bài học (unit) của cuốn sách. Bên cạnh một hệ thống bài học được xây dựng logic, khoa học và dễ hiểu, cuốn sách còn có lời giải chi tiết cho từng câu bài tập và có file nghe được thu âm bởi chính giáo viên bản xứ. Cuốn sách nhằm giúp khắc phục nhược điểm trong thói quen học ngoại ngữ của người học – đó là sợ nói sai, dùng sai ngữ pháp và cũng chính vì nỗi sợ đó mà cản trở sự tự tin trong việc sử dụng ngôn ngữ. Cuốn sách bắt đầu đi từ ngữ pháp, những từ ngữ pháp hướng tới việc phát triển đầy đủ các kĩ năng ngôn ngữ cho người học và giúp người học tự tin sử dụng tiếng Anh trong công việc cũng như trong cuộc sống hàng ngày.', 2, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669137951/imagesbookstore/antjn9pywl62hmg0eaee.jpg', '2022-11-10', '2022-11-23 06:07:48', '2022-11-22 23:07:48'),
(2, '600 Động Từ Bất Quy Tắc Và Cách Dùng Các Thì Trong Tiếng Anh', 'NXB Đại học Sư phạm', 'Trang Anh', '35000', 0, 0, 'Cuốn sách giúp người đọc ghi nhớ và biết cách sử dụng chính xác các động từ bất quy tắc cũng như cách dùng các thì trong tiếng Anh. \r\nNội dung sách bao gồm 2 phần cụ thể: Phần 1 giới thiệu bảng 600 động từ bất quy tắc trong tiếng Anh kèm phiên âm và dịch nghĩa được trình bày cụ thể và khoa học, giúp người học dễ dàng nắm bắt và sử dụng; Phần 2 giới thiệu cách sử dụng các thì trong tiếng Anh kèm bài tập vận dụng.\r\nCó thể nói, đây là cuốn sách hữu ích, giúp người học tiếng Anh bước qua trở ngại về ngữ pháp, trong đó có vấn đề ghi nhớ các động từ bất quy tắc và cách ứng dụng các thì trong tiếng Anh, nhằm từng bước nâng cao khả năng tiếng Anh của mình.', 2, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669009216/imagesbookstore/gshmukccgajcnygnc9dr.jpg', '2022-11-10', '2022-11-21 07:24:48', '2022-11-20 22:40:17'),
(3, 'Văn Học Hậu Hiện Đại', 'NXB Tổng Hợp TPHCM', 'Lê Huy Bắc', '155000', 0, 0, 'Chủ nghĩa hậu hiện đại trong văn học bắt đầu từ cuối thập niên 1910 với thơ Đa đa (1916) , Văn xuôi của Franz Kafka (Biến dạng, 1915) và kịch của Samuel Beckett (Chờ đợi Godot, 1952), Chủ nghĩa hậu hiện đại tồn tại song song với chủ nghĩa hiện đại cho đến đâu thập niên 1950 và thực sự phát triển mạnh từ 1960 trở đi. Đây là khuynh hướng đối nghịch với chủ nghĩa hiện đại về bản chất, ở chỗ nó chấp nhận tình hư vô (nothing), hỗn độn (chaos) , trò chơi (game), trị biệt (différance) và liên văn bản (intertextuality)... của tồn tại, hòng giải quyết những bất cập của chủ nghĩa hiện đại với tham vọng dùng khoa học và tư tưởng nhân văn đích thực để giải phóng tối đa con người thoát khỏi cuộc sống tù túng và những tín điều tăm tối.', 3, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669009239/imagesbookstore/um4vkdb6dbksl62betha.jpg', '2022-11-11', '2022-11-21 07:25:21', '2022-11-20 22:40:40'),
(4, 'Văn Học Cổ Việt Nam Và Trung Hoa - Những Hướng Tiếp Cận', 'NXB Tổng Hợp TPHCM', 'Nguyễn Kim Châu', '99000', 0, 0, 'Cuốn sách này tập hợp một số bài báo và tham luận đã đăng trên các tạp chí khoa học chuyên ngành hoặc các kỷ yếu hội thảo khoa học, được người viết thực hiện trong 10 năm gần đây. Điểm chung của các bài viết là đều hướng tới mục đích tìm hiểu, khảo sát một số hiện tượng văn học nhằm chứng minh mức độ tương thích, hiệu quả cũng như khả năng tới hạn của các lý thuyết nghiên cứu phê bình văn học phương Tây khi được vận dụng vào nghiên cứu văn học cổ Việt Nam và Trung Hoa.\r\n\r\nSách được chia thành 3 phần:\r\n\r\n- Phần 1: tập trung vào định hướng tiếp cận tư duy và hình tượng nghệ thuật trong văn học cổ Việt Nam và Trung Hoa.\r\n\r\n- Phần 2: tập trung vào định hướng tiếp cận thể loại và ngôn từ nghệ thuật trong văn học cổ Việt Nam và Trung Hoa với các bài viết tìm hiểu về phép đối ngẫu và điển cố, những thủ pháp sử dụng ngôn từ đặc trưng của một nền văn học đậm chất cao nhã, quy phạm...\r\n\r\n- Phần 3: tập trung vào định hướng tiếp cận đặc điểm của văn học cổ Việt Nam và Trung Hoa ở lĩnh vực phê bình văn học, gồm các bài viết khảo sát vai trò, đặc điểm của các văn bản tựa, bạt, lời dẫn, đề từ,...\r\n\r\nNhững con đường, cách thức, phương tiện hay những góc độ tiếp cận khác nhau chẳng qua cũng chỉ nhằm phục vụ cho mục đích hướng tâm, đó là tiếp tục khám phá, khẳng định giá trị của tinh hoa văn học dân tộc trong bối cảnh giao lưu, tiếp biến giữa văn học Việt Nam với các nền văn học trong khu vực và trên thế giới.\r\n\r\nMã hàng	9786045859001\r\nNhà Cung Cấp	NXB Tổng Hợp TPHCM\r\nTác giả	Nguyễn Kim Châu\r\nNXB	NXB Tổng Hợp TPHCM\r\nNăm XB	2020\r\nTrọng lượng (gr)	350\r\nKích Thước Bao Bì	24 x 16 cm\r\nSố trang	236\r\nHình thức	Bìa Mềm\r\nSản phẩm bán chạy nhất	Top 100 sản phẩm Phóng Sự - Ký Sự - Phê Bình Văn Học bán chạy của tháng\r\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\r\nCuốn sách này tập hợp một số bài báo và tham luận đã đăng trên các tạp chí khoa học chuyên ngành hoặc các kỷ yếu hội thảo khoa học, được người viết thực hiện trong 10 năm gần đây. Điểm chung của các bài viết là đều hướng tới mục đích tìm hiểu, khảo sát một số hiện tượng văn học nhằm chứng minh mức độ tương thích, hiệu quả cũng như khả năng tới hạn của các lý thuyết nghiên cứu phê bình văn học phương Tây khi được vận dụng vào nghiên cứu văn học cổ Việt Nam và Trung Hoa.\r\n\r\nSách được chia thành 3 phần:\r\n\r\n- Phần 1: tập trung vào định hướng tiếp cận tư duy và hình tượng nghệ thuật trong văn học cổ Việt Nam và Trung Hoa.\r\n\r\n- Phần 2: tập trung vào định hướng tiếp cận thể loại và ngôn từ nghệ thuật trong văn học cổ Việt Nam và Trung Hoa với các bài viết tìm hiểu về phép đối ngẫu và điển cố, những thủ pháp sử dụng ngôn từ đặc trưng của một nền văn học đậm chất cao nhã, quy phạm...\r\n\r\n- Phần 3: tập trung vào định hướng tiếp cận đặc điểm của văn học cổ Việt Nam và Trung Hoa ở lĩnh vực phê bình văn học, gồm các bài viết khảo sát vai trò, đặc điểm của các văn bản tựa, bạt, lời dẫn, đề từ,...\r\n\r\nNhững con đường, cách thức, phương tiện hay những góc độ tiếp cận khác nhau chẳng qua cũng chỉ nhằm phục vụ cho mục đích hướng tâm, đó là tiếp tục khám phá, khẳng định giá trị của tinh hoa văn học dân tộc trong bối cảnh giao lưu, tiếp biến giữa văn học Việt Nam với các nền văn học trong khu vực và trên thế giới.', 3, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669009259/imagesbookstore/fkta0jdzihvuqifyujor.jpg', '2022-11-11', '2022-11-21 07:25:35', '2022-11-20 22:41:00'),
(5, 'Tiểu Thuyết Việt Nam 1945 -1975', 'NXB Văn Hóa Văn Nghệ', 'Phạm Ngọc Hiền', '115000', 0, 0, 'Mỗi tác phẩm đều có ưu và nhược, không nên coi nặng một vài khuyết điểm mà bỏ qua ưu điểm. Người thẩm định cũng cần có nhãn quan tiến bộ, khách quan và có bản lĩnh… Dễ nhận thấy rằng, độ lùi tiếp nhận càng xa thì tính khách quan càng cao, những thiên kiến xã hội sẽ giảm bớt, quá khứ sẽ được đề cao.(…) “ Không thể vĩ đại trong thời đại mình, sự vĩ đại bao giờ cũng trông hòng ở con cháu”. Càng lùi về phía sau người ta càng thấy rõ hơn đỉnh núi nào cao thấp. Như vậy, công việc đánh giá những thành tựu của tiểu thuyết cách mạng Việt Nam thời chiến tranh sẽ còn tiếp tục đế mai sau.\r\nĐây là một tác phẩm thực sự có đóng góp vào việc nghiên cứu tiến trình văn học hiện đại Việt Nam thông qua việc nghiên cứu hệ thống các thể loại văn học. Tác phẩm được viết một văn phong khách quan, theo tinh thần đổi mới, khẳng định lại giá trị nghệt thuật của nhiều tiểu thuyết lâu nay ít được nhắc tới hoặc từng bị đánh giá chưa công bằng. Ngoài tác phẩm chuyên luận, còn có thêm phần tóm tắt hầu hết các tiểu thuyết giai đoạn này… Điều đó cho thấy tác giả có sự dày công nghiên cứu về lĩnh vực văn xuôi Việt Nam thời chiến tranh…', 1, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669107427/imagesbookstore/vvlwz9xuiibazph5bpmh.jpg', '2022-11-13', '2022-11-22 08:57:07', '2022-11-22 01:57:07'),
(6, 'Văn Học Nhật Bản - Vẻ Đẹp Mong Manh Và Bất Tận', 'NXB Tổng Hợp TPHCM', 'Lam Anh', '152000', 0, 0, 'Từ rất xa xưa, từ khởi nguyên của văn chương với waka và thần thoại, người Nhật Bản đã ký thác vào nghệ thuật ngôn từ tư tưởng về cái vẻ đẹp và bản chất vô thường của thế giới. Cho nên văn chương Nhật Bản từ khởi thủy đã nói lên vấn đề cốt lõi về thân phận con người, đã có tính hiện thực ở tầm vóc nhân loại và đặc biệt là có giá trị thẩm mỹ cao. Bên cạnh đó, vì cái đẹp trong văn chương Nhật Bản gắn với sự vô thường của thế giới, sự mong manh của kiếp người nên thường phảng phất nét buồn và tâm thái trầm tư. Đó là một đặc trưng quan trọng tồn tại xuyên suốt tiến trình lâu dài của lịch sử văn học Nhật Bản. Đặc trưng này biểu hiện ở nhiều sắc độ khác nhau trong nhiều giai đoạn, nhiều loại hình văn chương từ waka truyền thống, truyện Genji đến những sáng tác của nhiều nhà văn hiện đại và đương đại.', 3, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669009288/imagesbookstore/d5wxthavx4fbnoig5vnk.jpg', '2022-11-14', '2022-11-21 07:25:58', '2022-11-20 22:41:29'),
(7, 'Cuộc Đời Là Một Tiểu Thuyết', 'NXB Hội Nhà Văn', 'Guillaume Musso', '130000', 0, 0, '“Sáu tháng trước, ngày 12 tháng Tư năm 2010, con gái ba tuổi của tôi, Carrie Conway, đã bị bắt cóc trong lúc hai mẹ con đang chơi trốn tìm trong căn hộ nhà mình ở Williamsburg.”\n\nCâu chuyện của Flora Conway, nữ tiểu thuyết gia nổi tiếng sống kín đáo, đã bắt đầu như thế. Carrie đột ngột mất tích, không cách nào lý giải được. Cửa chính và các cửa sổ đều đóng kín, các camera giám sát trong tòa nhà không phát hiện điều khả nghi nào. Cuộc điều tra của cảnh sát không mang lại kết quả gì.\nCùng thời điểm ấy, ở bờ kia Đại Tây Dương, một nhà văn với trái tim tan nát trốn tránh xã hội trong một ngôi nhà xập xệ, bế tắc với tiểu thuyết đang viết dở.\nAnh là người duy nhất nắm giữ chìa khóa của bí ẩn.\n\nVà Flora sẽ đánh bật anh.\n\nVới Cuộc đời là một tiểu thuyết, bạn sẽ bắt gặp một Guillaume Musso hoàn toàn mới, người dẫn bạn bước vào mê cung, dắt bạn đi theo mạch truyện ly kỳ bằng nguồn sức mạnh rút từ quyền năng của những cuốn sách và khát khao mãnh liệt sống cuộc đời của các nhân vật.\n\n“Guillaume Musso là một cao thủ phù phép, luôn biến hóa ra điều bất khả trong cuộc đời các nhân vật giữa lúc ta không ngờ tới.” - Anne Michelet, Version Femina\n\n“Một câu chuyện tuyệt vời làm hài lòng cả độc giả sách trinh thám lẫn tín đồ văn chương. (…) Guillaume Musso, chắc chắn là nhà văn lớn và độc giả phi thường, trở lại với chủ đề nghề viết, nguồn cảm hứng, cuộc đời thực và tưởng tượng… một cách thật điêu luyện (…) Cuộc đời là một tiểu thuyết không khỏi khiến ta nghĩ tới Romain Gary.” - Alain-Jean Robert, AFP\n\nTÁC GIẢ:\n\nGuillaume Musso sinh năm 1974 tại Antibes, thị trấn nhỏ bên bờ Địa Trung Hải. Ngay từ năm mười tuổi, cậu bé Guillaume đã phải lòng văn chương và tuyên bố một ngày nào đó sẽ viết tiểu thuyết. Lớn lên, anh theo học ngành kinh tế rồi trở thành giáo viên sau khi tốt nghiệp, nhưng niềm đam mê thuở ban đầu vẫn tràn đầy. Năm 2001, tiểu thuyết đầu tay của anh ra đời và nhận được tín hiệu tốt từ giới phê bình. Tác phẩm thứ hai, Rồi sau đó, xuất bản năm 2004, đã gây ấn tượng mạnh và đưa tên tuổi Guillaume Musso đến với công chúng. Từ đó đến nay, anh đều đặn cho ra đời các tiểu thuyết mới và giành được thành công vang dội không chỉ tại Pháp mà còn trên khắp thế giới. Các tác phẩm của Guillaume Musso đã được dịch ra nhiều thứ tiếng và được chuyển thể thành phim.\n\nCác tác phẩm của Guillaume Musso đã được Nhã Nam xuất bản:\n- Rồi sau đó\n- Hãy cứu em\n- Hẹn em ngày đó\n- Bởi vì yêu\n- Trở lại tìm nhau\n- Nếu đời anh vắng em\n- Cô gái trong trang sách\n- Cuộc gọi từ thiên thần\n- Bảy năm sau\n- Ngày mai\n- Central Park\n- Giây phút này\n- Cô gái Brooklyn\n- Dưới một mái nhà ở Paris\n- Cô gái và màn đêm\n- Cuộc đời bí mật của các nhà văn\n\nMã hàng	8935235229129\nTên Nhà Cung Cấp	Nhã Nam\nTác giả	Guillaume Musso\nNgười Dịch	Danh Việt\nNXB	NXB Hội Nhà Văn\nNăm XB	2020\nTrọng lượng (gr)	300\nKích Thước Bao Bì	20.5 x 14 cm\nSố trang	268\nHình thức	Bìa Mềm\nSản phẩm bán chạy nhất	Top 100 sản phẩm Tiểu thuyết bán chạy của tháng\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\nVới anh, mọi thứ đã được viết sẵn\nVới cô, mọi thứ đang đợi viết tiếp\n\n“Sáu tháng trước, ngày 12 tháng Tư năm 2010, con gái ba tuổi của tôi, Carrie Conway, đã bị bắt cóc trong lúc hai mẹ con đang chơi trốn tìm trong căn hộ nhà mình ở Williamsburg.”\n\nCâu chuyện của Flora Conway, nữ tiểu thuyết gia nổi tiếng sống kín đáo, đã bắt đầu như thế. Carrie đột ngột mất tích, không cách nào lý giải được. Cửa chính và các cửa sổ đều đóng kín, các camera giám sát trong tòa nhà không phát hiện điều khả nghi nào. Cuộc điều tra của cảnh sát không mang lại kết quả gì.\nCùng thời điểm ấy, ở bờ kia Đại Tây Dương, một nhà văn với trái tim tan nát trốn tránh xã hội trong một ngôi nhà xập xệ, bế tắc với tiểu thuyết đang viết dở.\nAnh là người duy nhất nắm giữ chìa khóa của bí ẩn.\n\nVà Flora sẽ đánh bật anh.\n\nVới Cuộc đời là một tiểu thuyết, bạn sẽ bắt gặp một Guillaume Musso hoàn toàn mới, người dẫn bạn bước vào mê cung, dắt bạn đi theo mạch truyện ly kỳ bằng nguồn sức mạnh rút từ quyền năng của những cuốn sách và khát khao mãnh liệt sống cuộc đời của các nhân vật.\n\n“Guillaume Musso là một cao thủ phù phép, luôn biến hóa ra điều bất khả trong cuộc đời các nhân vật giữa lúc ta không ngờ tới.” - Anne Michelet, Version Femina\n\n“Một câu chuyện tuyệt vời làm hài lòng cả độc giả sách trinh thám lẫn tín đồ văn chương. (…) Guillaume Musso, chắc chắn là nhà văn lớn và độc giả phi thường, trở lại với chủ đề nghề viết, nguồn cảm hứng, cuộc đời thực và tưởng tượng… một cách thật điêu luyện (…) Cuộc đời là một tiểu thuyết không khỏi khiến ta nghĩ tới Romain Gary.” - Alain-Jean Robert, AFP', 1, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669009339/imagesbookstore/g0lj4x84r19jfdofbbvf.jpg', '2022-11-14', '2022-11-21 07:26:19', '2022-11-20 22:42:21'),
(8, 'Tranh Truyện Ghép - Chú Mèo Đi Hia', 'NXB Hội Nhà Văn', 'Nhiều Tác Giả', '57000', 0, 0, 'Trẻ nhỏ thường thích chơi đùa với sách vở. Bộ tranh ghép hình kỳ diệu này đáp ứng cả nhu cầu được đọc và được chơi của trẻ. Tranh in bằng mực tốt trên giấy cứng, cán bóng, để trẻ khó lòng cắn xé và làm rách. Bố mẹ ngồi đối mặt với trẻ, quay mặt tranh về phía trẻ, đọc nội dung từng tờ, rồi hướng dẫn trẻ để xuống mặt sàn theo thứ tự. Câu chuyện hoàn tất cũng là lúc bức tranh lớn thành hình. Trẻ được cảm nhận đa giác quan: chạm vào, sắp xếp, nhìn, lắng nghe, tham gia vào câu chuyện từ đầu đến cuối, và có cảm giác thành công khi ghép được bức tranh lớn rất đẹp.\n\nChú mèo đi hia\n\nBác thợ xay già qua đời, để lại cho anh con út duy nhất một chú mèo. May sao, chú mèo thông thái biết cách đem lại vận may cho cậu chủ. Cuối cùng, cậu chủ trẻ còn trở thành phò mã của nhà vua cơ đấy!\n\nMã hàng	8935235214385\nTên Nhà Cung Cấp	Nhã Nam\nTác giả	Nhiều Tác Giả\nNgười Dịch	Bồ Câu\nNXB	NXB Hội Nhà Văn\nNăm XB	2017\nTrọng lượng (gr)	264\nKích Thước Bao Bì	17 x 16.2\nSố trang	21\nHình thức	Bìa Mềm\nSản phẩm bán chạy nhất	Top 100 sản phẩm Truyện Tranh Thiếu Nhi bán chạy của tháng\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\nTranh Truyện Ghép - Chú Mèo Đi Hia\n\nTranh ghép hình được ưa chuộng nhất nước Ý\n\nCho trẻ 1-6 tuổi\n\nTrẻ nhỏ thường thích chơi đùa với sách vở. Bộ tranh ghép hình kỳ diệu này đáp ứng cả nhu cầu được đọc và được chơi của trẻ. Tranh in bằng mực tốt trên giấy cứng, cán bóng, để trẻ khó lòng cắn xé và làm rách. Bố mẹ ngồi đối mặt với trẻ, quay mặt tranh về phía trẻ, đọc nội dung từng tờ, rồi hướng dẫn trẻ để xuống mặt sàn theo thứ tự. Câu chuyện hoàn tất cũng là lúc bức tranh lớn thành hình. Trẻ được cảm nhận đa giác quan: chạm vào, sắp xếp, nhìn, lắng nghe, tham gia vào câu chuyện từ đầu đến cuối, và có cảm giác thành công khi ghép được bức tranh lớn rất đẹp.', 4, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669009357/imagesbookstore/zfmsrndtwady3qalbrwr.jpg', '2022-11-15', '2022-11-21 07:26:29', '2022-11-20 22:42:38'),
(9, 'Thị Dân Tiểu Thuyết', 'NXB Trẻ', 'Nguyễn Việt Hà', '109000', 0, 0, 'Thị dân tiểu thuyết là cuốn tiểu thuyết thứ 4 của Nguyễn Việt Hà. Vẫn là không gian phố - ngõ - phố trở đi trở lại trong các tác phẩm của anh, Nguyễn Việt Hà không chỉ đi dọc phố trong không gian đương thời mà còn đi dọc suốt con lộ lịch sử của nó, để tìm ra nguyên ủy hồn phố.\nVà để hiện thực hóa một công việc lớn lao viết sử phố.', 1, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669009378/imagesbookstore/j72h5ennmqbsi4w0wwa7.jpg', '2022-11-15', '2022-11-21 07:26:39', '2022-11-20 22:42:59'),
(10, 'Đêm Trước Bình Minh', 'NXB Phụ Nữ', 'Lư Tư Hạo', '119000', 0, 0, 'Đêm trước bình minh – Chỉ khi vượt qua được buổi đêm tối tăm nhất, cuộc sống của bạn mới trở nên rực rỡ sắc màu.\n\nTỉnh dậy vào buổi sáng sau đêm nhà cửa hỗn loạn vì bị khói thuốc hun đầy, Trương Vũ Ngang – một thanh niên công sở vừa bước sang tuổi ba mươi đột nhiên bị mất ngủ triền miên vì một giấc mơ kỳ lạ - nhận ra mình đang nằm ở một trung tâm trị liệu, bác sĩ xa lạ trước mắt chẩn đoán anh mắc chứng rối loạn cảm xúc giai đoạn hưng cảm.\n\nTrong thời gian sinh sống tại trung tâm điều trị, một người luôn sống lầm lũi, cô độc như Trương Vũ Ngang đã quen được vài người bạn mới: một thanh niên luôn theo đuổi chủ nghĩa lý tưởng nhưng bị hiện thực tàn khốc đánh bại, một đứa trẻ bị trói buộc bởi định kiến của gia đình và trường học, còn cả một cô gái từng mắc chứng rối loạn cuồng ăn.\n\nKể từ ngày đặt chân tới nơi đây, Trương Vũ Ngang buộc phải đối diện với “căn bệnh rối loạn cảm xúc” và những ký ức đã qua, dần mở rộng trái tim khắc đầy những vết sẹo của bản thân, từ đó tìm ra cách thức để cuộc sống trở nên có ý nghĩa hơn. Cùng lúc ấy, tất cả những người mà anh gặp được cũng đang đứng trước sự lựa chọn của chính mình.\n\n“Từ tận đáy lòng có một giọng nói cứ mãi chất vấn sự lựa chọn của tôi, trước kia tôi luôn phớt lờ, nhưng bây giờ quyết định đón nhận nó.”\n\nVới cách kể chuyện chậm rãi mà dịu dàng, Lư Tư Hạo đã viết nên cuốn tiểu thuyết “Đêm trước bình minh” – một cuốn sách tâm lý nhưng nhẹ nhàng, đưa lối bạn thoát khỏi những trầm luân mỏi mệt. Chỉ khi vượt qua được buổi đêm tối tăm nhất, cuộc sống của bạn mới trở nên rực rỡ sắc màu.\n\nCó lẽ ngay lúc này bạn đang phải đối mặt với màn đêm tăm tối nhất, nhưng điều đó cũng đồng nghĩa rằng quãng đường về sau sẽ không còn tối tăm đến vậy nữa, mỗi phút mỗi giây kể từ giờ phút này trở đi chính là thời gian đếm ngược chờ bình minh tới. Hi vọng ánh ban mai sẽ chiếu rọi chặng hành trình tiếp theo của mỗi chúng ta.', 1, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669014205/imagesbookstore/poiytpsu3z6jj1re2huw.jpg', '2022-11-15', '2022-11-21 07:26:49', '2022-11-21 00:03:26'),
(11, 'Kỹ Năng Bán Hàng', 'NXB Tổng Hợp', 'Grant Cardone', '104000', 0, 0, 'Trong từng trang sách, tác giả Cardone giới thiệu và phân tích kỹ lưỡng những kỹ thuật và bước tiếp cận thiết yếu để bạn có thể làm chủ nghệ thuật bán hàng trong mọi tình huống. Bạn sẽ học được cách xử trí khi bị khách hàng từ chối, cách lật ngược tình thế, rút ngắn quy trình bán hàng và làm sao để bản thân ngày càng chuyên nghiệp hơn. Cardone cũng sẽ chỉ cho bạn thấy đâu là những yếu tố quyết định thành công.', 5, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669014223/imagesbookstore/wtcnt4rfloryjtcf09kb.jpg', '2022-11-16', '2022-11-21 07:26:58', '2022-11-21 00:03:44'),
(12, 'Quốc Gia Khởi Nghiệp - Câu Chuyện Về Nền Kinh Tế Thần Kỳ Của Israel (Tái Bản 2022)', 'NXB Trẻ', 'Saul Singer, Dan Senor', '178000', 0, 0, 'Là câu chuyện viết về sự phát triển thần kỳ của nền kinh tế Israel từ lúc lập quốc cho đến khi trở thành quốc gia có nền công nghệ hàng đầu thế giới. Quyển sách này có thể trả lời cho những thắc mắc làm thế nào một đất nước nhỏ bé lại có thể tồn tại giữa sự thù địch của các quốc gia lân cận, đối phó với những cuộc chiến giữ vững bờ cõi mà vẫn tạo ra sự sáng tạo vượt bậc trong các lĩnh vực công nghệ, quân sự và dân sự.\n\nVới ngòi bút sắc sảo, phong phú và tập trung những lời nhận xét thực tế từ những doanh nhân thành công hàng đầu, Quốc gia khởi nghiệp đã đem đến những cái nhìn mới mẻ về con người và đất nước Israel, làm sáng tỏ phần nào những thành công tưởng chừng như không tưởng của đất nước nhỏ bé này. Cá tính quyết liệt, dám thách thức và sáng tạo không ngừng của những con người Do Thái lưu vong, chạy trốn và sống sót sau những cuộc thảm sát trong Chiến tranh thế giới thứ II, không cam chịu cuộc sống nghèo khó, họ đã cùng với những người theo Chủ nghĩa Phục quốc Do Thái gây dựng và bảo vệ đất nước Israel bằng chính sức lực của mình và khiến cả thế giới phải kinh ngạc.\n\nNgày nay, Israel là một trong những quốc gia có nền kinh tế phát triển nhất thế giới và có lĩnh vực công nghệphát triển không hề thua kém Thung lũng Silicon của Hoa Kỳ. Quốc gia khởi nghiệp được xuất bản với hy vọng sẽ đem đến cho độc giả những bài học về khởi nghiệp của một quốc gia luôn có nền kinh tế phát triển sôi động, con người thì luôn hướng đến sự cách tân và hướng đến một tương lai tươi sáng hơn', 5, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669017165/imagesbookstore/afls6zoga0h8rhxbkxc1.jpg', '2022-11-16', '2022-11-21 07:52:46', '2022-11-21 00:52:46'),
(13, 'Thay Đổi Cuộc Sống Với Nhân Số Học', 'NXB Tổng Hợp TPHCM', 'Lê Đỗ Quỳnh Hương', '175000', 0, 0, 'Đầu năm 2020, chuỗi chương trình “Thay đổi cuộc sống với Nhân số học” của  biên tập viên, người dẫn chương trình quen thuộc tại Việt Nam Lê Đỗ Quỳnh Hương ra đời trên Youtube, với mục đích chia sẻ kiến thức, giúp mọi người tìm hiểu và phát triển, hoàn thiện bản thân, các mối quan hệ xã hội thông qua bộ môn Nhân số học. Chương trình đã nhận được sự yêu mến và phản hồi tích cực của rất nhiều khán giả và độc giả sau mỗi tập phát sóng.\n\nNhân số học là một môn nghiên cứu sự tương quan giữa những con số trong ngày sinh, cái tên với cuộc sống, vận mệnh, đường đời và tính cách của mỗi người. Bộ môn này đã được nhà toán học Pythagoras khởi xướng cách đây 2.600 năm và sau này được nhiều thế hệ học trò liên tục kế thừa, phát triển.  \n\n Có thể xem, Nhân số học là một bộ môn Khám phá Bản thân (Self-Discovery), đọc vị về số. Bộ môn này giúp giải mã những tín hiệu mà cuộc sống đã gửi đến từng cá thể con người trong đời sống, tương tự như Nhân tướng học hay Nhân trắc học…Khi nghiêm túc nghiên cứu sự tồn tại và mối tương quan giữa các con số xuất hiện trong ngày, tháng, năm sinh của mỗi người qua Nhân số học, ta có thể hiểu được khá nhiều về bản thân mình, cũng như mối quan hệ của mình với người khác. Nếu hiểu những \"mật mã\" nằm ẩn dưới những con số, chúng ta có thể kiểm soát cuộc sống của mình, điều chỉnh chúng theo hướng ngày càng tốt đẹp hơn, phù hợp với năng lực, tính cách của mình hơn.', 5, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669014375/imagesbookstore/oofnipv3dzqyajjaiq2z.jpg', '2022-11-17', '2022-11-21 07:27:31', '2022-11-21 00:06:16'),
(14, 'Bí Mật Tư Duy Triệu Phú (Tái Bản 2021)', 'NXB Tổng Hợp TPHCM', 'T Harv Eker', '79000', 0, 0, 'Trong cuốn sách này T. Harv Eker sẽ tiết lộ những bí mật tại sao một số người lại đạt được những thành công vượt bậc, được số phận ban cho cuộc sống sung túc, giàu có, trong khi một số người khác phải chật vật, vất vả mới có một cuộc sống qua ngày. Bạn sẽ hiểu được nguồn gốc sự thật và những yếu tố quyết định thành công, thất bại để rồi áp dụng, thay đổi cách suy nghĩ, lên kế hoạch rồi tìm ra cách làm việc, đầu tư, sử dụng nguồn tài chính của bạn theo hướng hiệu quả nhất.\n\nCuốn sách dành cho những ai còn loay hoay muốn tìm đường đến sự giàu có và thành công. “Bí mật tự duy triệu phú” mang đến nhiều tư duy mới cho người đọc về cách suy nghĩ của người giàu hay cách suy nghĩ để trở nên giàu có.\n\nTrong cuốn sách, Eker liệt kê 17 cách thức mà các kế hoạch chi tiết tài chính của những người giàu khác với người nghèo và tầng lớp trung lưu. Một chủ đề được xác định trong sách này là loại bỏ các suy nghĩ đổ lỗi cho sự thất bại. Eker lập luận rằng: Người giàu tin \"Tôi tạo ra cuộc sống của tôi\", còn những người nghèo cho rằng \"Cuộc sống sẽ tự nhiên đến với tôi\"; người giàu tập trung vào các cơ hội trong khi người nghèo tập trung vào những trở ngại; và những người giàu ngưỡng mộ những người giàu có và thành công khác trong khi người dân nghèo ghen tị, bực tức trước những người thành công và giàu có.\n\nBí mật tư duy triệu phú là tác phẩm nổi tiếng thế giới được thời báo New York Times, Wall Street Journal và USB Today bình chọn là cuốn sách hay nhất, bán chạy nhất trong nhiều năm.\n\nNgười nổi tiếng nói về “Bí mật tư duy triệu phú”:\n\n· \"Ai cũng có một cuộc sống, ai cũng làm việc cần cù, ai cũng ước mơ được thành công, nhưng không mấy ai may mắn học được cách tư duy độc đáo và tầm nhìn của những tỷ phú lừng danh đã tiết lộ trong cuốn sách giá trị này...\" - Wall Street Journal\n\n· “Đây chính là một trong những cuốn sách giàu ảnh hưởng, rất thuyết phục và thực tế nhất về cách trở nên giàu có mà các bạn từng đọc được” – Brian Tracy (Tác giả cuốn sách Làm giàu theo cách của bạn)\n\n· “Hãy nghiền ngẫm cuốn sách này như thể cuộc đời rồi sẽ phụ thuộc vào nó… về phương diện tài chính thì khả dĩ lắm đấy” – Anthony Robbins (Nhà diễn thuyết, tác giả cuốn sách nổi tiếng Đánh thức con người phi thường trong bạn)\n\n· “Bạn cần được TÁI - GIÁO DỤC nếu bạn muốn TÁI ĐỊNH NGHĨA số mệnh tài chính của mình.  Đó cũng chính là những thứ bạn sẽ được học tại : BÍ MẬT TƯ DUY TRIỆU PHÚ - MILLIONAIRE MIND INTENSIVE (NWA)” -  Phạm Tuấn Sơn: Doanh Nhân tiêu biểu Việt Nam - Tác giả cuốn Dám làm giàu - Chủ tịch HĐQT công ty CP Babylons \n\nBáo chí nói gì về “Bí mật tư duy triệu phú”:\n\n·“Những tiết lộ cách tư duy độc đáo và tầm nhìn về phương pháp quản lí tiền bạc của triệu phú T. Harv Eker sẽ giúp các bạn thành công hơn trong việc quản lí tài chính hiện tại, tích lũy cho tương lai.” – dantri.com\n\n·“Bí mật tư duy triệu phú của tác giả T.Harv Eker là cuốn cẩm nang sẽ hướng dẫn bạn cách tư duy cũng như thách thức những mặt còn hạn chế của con người trong đó có các suy nghĩ, thói quen, hành động không tích cực liên quan đến tiền bạc.” – doanhnhansaigon.vn\n\n\"Bí mật tư duy triệu phú\" giúp khám phá ra bản kế hoạch tài chính trong tâm thức của mình, phát hiện những niềm tin, suy nghĩ tiêu cực, hạn chế về đồng tiền đã khiến cho họ chưa thành công về tài chính như mong muốn, giúp xóa bỏ ngay những niềm tin, suy nghĩ tiêu cực. – vnexpress.vn\n\n“Sự khác biệt giữa người giàu và người nghèo: Tác giả người Canada T. Harv Eker sẽ giúp bạn trả lời cho câu hỏi điều gì làm nên sự khác nhau đó thông qua cuốn sách \"Bí mật tư duy triệu phú\" – zing.vn\n\n“Bạn có biết 95% triệu phú trên thế giới đều tay trắng làm nên, và 50% trong số họ đều đã từng trắng tay và làm lại từ đầu. Vậy tại sao xuất phát điểm giữa họ và người nghèo đều như nhau mà lại có sự khác biệt như vậy. Một ngày tình cờ tôi được một người bạn giới thiệu “Bí mật tư duy triệu phú” của T.Harv Eker một cuốn sách đã giúp tôi thay đổi hoàn toàn tư duy về sự giàu có” – daututhanhcong.com\n\n“Chương trình \"Tư duy triệu phú\" (Millionaire Mind Intensive - MMI) đã được tổ chức tại hơn 80 nước trên khắp các châu lục, giúp thay đổi cuộc sống của hàng triệu người tham gia. Và Tharv Eker - triệu phú người Mỹ, doanh nhân, diễn giả nổi tiếng, người bán hàng bậc thầy thế giới cũng chính là tác giả cuốn sách nổi tiếng bán chạy nhất \"Bí mật tư duy triệu phú\" (The Secret Of Millionaire Mind)” – ndh.vn \n\nVề tác giả:\n\nT. Harv Eker lớn lên ở Toronto. Bố mẹ ông là người châu Âu nhập cư, họ đến Bắc Mỹ sau chiến tranh thế giới lần thứ hai với toàn bộ tài sản với chỉ vỏn vẹn 30 đô la. Tuổi thơ nghèo khổ, Eker đã phải kiếm sống bằng nhiều việc như đi giao báo, bán kem, bán hàng ở các hội chợ, bán kem chống nắng ở bãi biển khi mới 13 tuổi. Đôi khi, ông hỏi xin tiền bố nhưng chẳng bao giờ nhận được. Sau khi tốt nghiệp trung học ông học 1 năm tại Đại học New York sau đó bỏ giữa chừng.\n\nNhững năm đầu thời thanh niên, Eker sống ở 5 thành phố khác nhau, trong đó có Lake Tahoe và Ft. Lauderdale. Ông làm rất nhiều công việc khác nhau với hơn mười hai ngành nghề. Là một người thông minh và đầy tham vọng, mục tiêu của Eker là thành công với chính công ty mình lập ra và trở thành triệu phú. Nhưng cuối cùng dù có làm gì, làm việc chăm chỉ đến đâu, ông vẫn không thành công.\n\nSau những thất bại đầu tiên, T Harv Eker trở về sống bên cha mẹ. Vào một ngày, khi đang ở trong phòng hầm của nhà mình, người bạn giàu có của cha mình đi xuống gặp ông. Người đàn ông này cảm thấy tiếc cho Eker và ông nói với Eker về bí mật của những người giàu có: \"Eker, khi bằng tuổi cháu, bác còn không làm được nhiều thứ như cháu. Tuy nhiên, mọi thứ đã thay đổi kể từ khi bác biết về những bí mật của người giàu. Và bây giờ, bác muốn kể lại cho cháu\".\n\nChính câu chuyện của người bạn cha mình đã thay đổi cả cuộc đời của Eker sau này. Ông học được sự khác biệt trong suy nghĩ và cách cư xử của người giàu và người nghèo. Kể từ đó, ông bắt đầu suy nghĩ và nghiên cứu về hành vi của người giàu. Ông đã nhận ra lý do vì sao doanh nghiệp của ông lại thất bại. Thất bại của ông không phải là do lỗi của một đối tác vô trách nhiệm hay là sự thiếu may mắn trong kinh doanh mà thất bại đến từ chính cách nghĩ trước đây của ông. Ông đã luôn luôn lo lắng về tiền bạc. Đây là sai lầm phổ biến trong suy nghĩ của những người không có kế hoạch giữ tiền khôn ngoan.\n\nSau khi nhận ra vấn đề của mình, Eker luôn cố gắng suy nghĩ và làm theo cách của người giàu. Khi cảm thấy đã thực sự thấm nhuần được tư tưởng trên, ông bắt tay vào làm kinh doanh. Không có vốn, ông quyết định vay 2.000 đôla và mở một cửa hàng bán đồ thể thao. Thời gian này, ông quản lý cửa hàng theo cách của người giàu, cả trong nguyên tắc kinh doanh và trong suy nghĩ chiến lược.\n\nCuối cùng, ông đã đạt được thành công nhờ nguyên tắc trên. Chỉ trong vòng hai năm chuỗi cửa hàng của ông đã mở rộng thêm 10 chi nhánh. Sau đấy, ông đã bán 1 nửa cổ phần của mình cho Tập đoàn H. J. Heinz với giá 1,6 triệu đô và trở thành triệu phú như mong ước.\n\nTuy nhiên, chỉ không đầy 2 năm sau, toàn bộ số tiền của ông đã ra đi. Nguyên nhân do những khoản đầu tư sai lầm và chi tiêu không kiểm soát. Eker lại một lần nữa trở lại vạch xuất phát. Và chính tại thời điểm đó T. Harv Eker bắt đầu phát triển học thuyết về mối liên hệ giữa tinh thần và cảm xúc của con người với tiền bạc. Ông nhận ra rằng \"nhiệt kế tài chính\" - thước đo mức độ thành công tài chính, được cài đặt ở một con số nhất định trong mỗi người.\n\nKhám phá sâu sắc của ông đó là bản kế hoạch tài chính trong tâm thức của mỗi người có thể được thay đổi được. Eker đã thiết lập lại bản kế hoạch tài chính của mình, nó giúp ông không chỉ đạt thành công mà còn tiếp tục duy trì, phát triển và trở thành triệu triệu phú.\n\nEker là tác giả của cuốn sách bán chạy nhất \"Bí Mật Tư Duy Triệu Phú\" (Secret of Millionaire Mind)  và \"Làm Giàu Nhanh\" (Speed Wealth).\n\nT. Harv Eker là người sáng lập và là giám đốc Công ty Peak Potential Trainning, một trong những công ty đào tạo - nghiên cứu phát triển nhanh và mạnh nhất thế giới.\n\nMã hàng	8935086854624\nTên Nhà Cung Cấp	FIRST NEWS\nTác giả	T Harv Eker\nNXB	NXB Tổng Hợp TPHCM\nNăm XB	2021\nNgôn Ngữ	Tiếng Việt\nTrọng lượng (gr)	300\nKích Thước Bao Bì	20.5 x 14.5 cm\nSố trang	287\nHình thức	Bìa Mềm\nSản phẩm hiển thị trong	\nFIRST NEWS\nSản phẩm bán chạy nhất	Top 100 sản phẩm Quản Trị - Lãnh Đạo bán chạy của tháng\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\nTrong cuốn sách này T. Harv Eker sẽ tiết lộ những bí mật tại sao một số người lại đạt được những thành công vượt bậc, được số phận ban cho cuộc sống sung túc, giàu có, trong khi một số người khác phải chật vật, vất vả mới có một cuộc sống qua ngày. Bạn sẽ hiểu được nguồn gốc sự thật và những yếu tố quyết định thành công, thất bại để rồi áp dụng, thay đổi cách suy nghĩ, lên kế hoạch rồi tìm ra cách làm việc, đầu tư, sử dụng nguồn tài chính của bạn theo hướng hiệu quả nhất.\n\nCuốn sách dành cho những ai còn loay hoay muốn tìm đường đến sự giàu có và thành công. “Bí mật tự duy triệu phú” mang đến nhiều tư duy mới cho người đọc về cách suy nghĩ của người giàu hay cách suy nghĩ để trở nên giàu có.\n\nTrong cuốn sách, Eker liệt kê 17 cách thức mà các kế hoạch chi tiết tài chính của những người giàu khác với người nghèo và tầng lớp trung lưu. Một chủ đề được xác định trong sách này là loại bỏ các suy nghĩ đổ lỗi cho sự thất bại. Eker lập luận rằng: Người giàu tin \"Tôi tạo ra cuộc sống của tôi\", còn những người nghèo cho rằng \"Cuộc sống sẽ tự nhiên đến với tôi\"; người giàu tập trung vào các cơ hội trong khi người nghèo tập trung vào những trở ngại; và những người giàu ngưỡng mộ những người giàu có và thành công khác trong khi người dân nghèo ghen tị, bực tức trước những người thành công và giàu có.', 6, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669014597/imagesbookstore/sszpthsl4wsvlzthdrpr.jpg', '2022-11-17', '2022-11-21 07:27:44', '2022-11-21 00:11:52'),
(15, 'Chiến Tranh Tiền Tệ - Biên Giới Tiền Tệ - Nhân Tố Bí Ẩn Trong Các Cuộc Chiến Kinh Tế (Phần III)', 'NXB Lao Động', 'Song Hong Binh', '105000', 0, 0, 'Không có', 6, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669014690/imagesbookstore/ga9mmtdbxpistqdlhlkn.jpg', '2022-11-18', '2022-11-21 07:27:54', '2022-11-21 00:11:31'),
(16, 'Tại Sao Chúng Tôi Muốn Bạn Giàu (Tái Bản 2022)', 'NXB Trẻ', 'Donald J Trump, Robert T Kiyosaki', '114000', 0, 0, 'Không có', 6, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669014838/imagesbookstore/ated9q0utovbplm2evj4.jpg', '2022-11-18', '2022-11-21 07:28:04', '2022-11-21 00:13:59'),
(17, 'Doraemon - Chú Mèo Máy Đến Từ Tương Lai Tập 24 (Tái Bản 2019)', 'NXB Kim Đồng', 'Fujiko F Fujio', '18000', 0, 0, 'Những câu chuyện về chú mèo máy thông minh Doraemon và nhóm bạn Nobita, Shizuka, Suneo, Jaian, Dekisugi sẽ đưa chúng ta bước vào thế giới hồn nhiên, trong sáng đầy ắp tiếng cười với một kho bảo bối kì diệu - những bảo bối biến ước mơ của chúng ta thành sự thật. Nhưng trên tất cả Doraemon là hiện thân của tình bạn cao đẹp, của niềm khát khao vươn tới những tầm cao.', 4, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669014945/imagesbookstore/ytnpk7pkghr8wjdsukv4.jpg', '2022-11-19', '2022-11-21 07:28:16', '2022-11-21 00:15:46'),
(18, 'Giải Thích Ngữ Pháp Tiếng Anh (Tái Bản 2022)', 'NXB Đà Nẵng', 'Mai Lan Hương, Hà Thanh Uyên', '139000', 0, 0, 'Không có', 2, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669015013/imagesbookstore/k05jfmnndjvgtwz85kem.jpg', '2022-11-20', '2022-11-21 07:28:28', '2022-11-21 00:16:54'),
(19, 'Naruto Tập 59: Ngũ Kage Hợp Lực…!! (Tái Bản 2022)', 'NXB Kim Đồng', 'Masashi Kishimoto', '25000', 0, 0, 'Phòng ngự tuyệt đối của Gaara thất thủ trước Mizukage tiền nhiệm. Cậu liên kết với Onoki để phản công, nhưng chật vật trước nhẫn thuật “Chưng Nguy Bộc Uy” của Mizukage… Đối sách của Gaara là gì!? Mặt khác, sau khi phân thân hàng loạt đến các chiến trường, bản thể của Naruto cuối cùng cũng chạm trán Madara!!', 4, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669015120/imagesbookstore/mzc9glx4juvrsu6bg91l.jpg', '2022-11-21', '2022-11-21 07:28:36', '2022-11-21 00:18:41'),
(20, 'Cang Giả Kim Thuật Sư - Fullmetal Edition Tập 16', 'NXB Kim Đồng', 'Hiromu Arakawa', '69000', 0, 0, 'Trong thế giới của những giả kim thuật sư, có một tồn tại đã đi vào huyền thoại và trở thành ước mơ bất cứ ai cũng ao khát - đó chính là \"Hòn đá Triết gia\".\n\nBối cảnh của \"Fullmetal Alchemist\" được đặt trong một thế giới hư cấu, nơi giả kim thuật là một trong những kĩ thuật khoa học tiên tiến nhất con người từng biết đến. Và anh em nhà Elric cũng không là ngoại lệ. Sau thất bại khi cố gắng đem người mẹ dấu yêu từ cõi chết trở về, người anh Edward mất đi chân trái và người em Alphonse mất toàn bộ cơ thể; bằng nỗ lực đến tuyệt vọng, Edward đã hi sinh nốt cánh tay phải của mình để giành lại linh hồn Alphonse và chuyển hóa nó vào trong một bộ giáp.\n\nKể từ ngày kinh hoàng đó, cả hai đã quyết tâm lên đường tìm kiếm \"Hòn đá Triết gia\" - thứ duy nhất có thể giúp họ khôi phục lại cơ thể. \"Mọi thứ trên đời đều có giá của nó. Để tìm ra \"chân lí\", chúng tôi sẵn sàng trả giá, kể cả khi cái giá ấy là vô vọng...!\"\n\nMời các bạn cùng theo chân anh em Elric khám phá thế giới của những GIẢ KIM THUẬT SƯ thông qua một trong những Manga được yêu thích nhất đến từ Nữ tác giả Hiromu Arakawa, nay đã quay trở lại với phiên bản DELUXE - Fullmetal Edition...!\n\nMã hàng	8935244874501\nĐộ Tuổi	15 - 18\nTên Nhà Cung Cấp	Nhà Xuất Bản Kim Đồng\nTác giả	Hiromu Arakawa\nNgười Dịch	Hương Giang\nNXB	Kim Đồng\nNăm XB	2022\nNgôn Ngữ	Tiếng Việt\nTrọng lượng (gr)	250\nKích Thước Bao Bì	18 x 13 cm\nSố trang	270\nHình thức	Bìa Mềm\nGenres	Adventure, Action, Comedy, Sci Fi, Shounen, Fantasy, Drama, Supernatural, Tragedy\nSản phẩm bán chạy nhất	Top 100 sản phẩm Manga Khác bán chạy của tháng\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\nTrong thế giới của những giả kim thuật sư, có một tồn tại đã đi vào huyền thoại và trở thành ước mơ bất cứ ai cũng ao khát - đó chính là \"Hòn đá Triết gia\".\n\nBối cảnh của \"Fullmetal Alchemist\" được đặt trong một thế giới hư cấu, nơi giả kim thuật là một trong những kĩ thuật khoa học tiên tiến nhất con người từng biết đến. Và anh em nhà Elric cũng không là ngoại lệ. Sau thất bại khi cố gắng đem người mẹ dấu yêu từ cõi chết trở về, người anh Edward mất đi chân trái và người em Alphonse mất toàn bộ cơ thể; bằng nỗ lực đến tuyệt vọng, Edward đã hi sinh nốt cánh tay phải của mình để giành lại linh hồn Alphonse và chuyển hóa nó vào trong một bộ giáp.\n\nKể từ ngày kinh hoàng đó, cả hai đã quyết tâm lên đường tìm kiếm \"Hòn đá Triết gia\" - thứ duy nhất có thể giúp họ khôi phục lại cơ thể. \"Mọi thứ trên đời đều có giá của nó. Để tìm ra \"chân lí\", chúng tôi sẵn sàng trả giá, kể cả khi cái giá ấy là vô vọng...!\"\n\nMời các bạn cùng theo chân anh em Elric khám phá thế giới của những GIẢ KIM THUẬT SƯ thông qua một trong những Manga được yêu thích nhất đến từ Nữ tác giả Hiromu Arakawa, nay đã quay trở lại với phiên bản DELUXE - Fullmetal Edition...!', 4, 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669015214/imagesbookstore/x4gsyaxwojuueibjpehp.jpg', '2022-11-21', '2022-11-21 07:28:46', '2022-11-21 00:20:15');

-- --------------------------------------------------------

--
-- Table structure for table `tin_tucs`
--

CREATE TABLE `tin_tucs` (
  `id` int(11) NOT NULL,
  `Ma_NV` int(10) NOT NULL,
  `Tieu_De` text NOT NULL,
  `Loai_Tin_Tuc` text NOT NULL,
  `Ma_DM` int(11) DEFAULT NULL,
  `Hinh_Chinh` text NOT NULL,
  `Ngay_Dang` date NOT NULL,
  `Noi_Dung` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tin_tucs`
--

INSERT INTO `tin_tucs` (`id`, `Ma_NV`, `Tieu_De`, `Loai_Tin_Tuc`, `Ma_DM`, `Hinh_Chinh`, `Ngay_Dang`, `Noi_Dung`, `created_at`, `updated_at`) VALUES
(2, 1, 'Đồng hành cùng năm học mới', 'Tin Tức Sản phẩm', 3, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669136601/imagesbookstore/qrb1m15p7rznunxyixl6.png', '2022-11-19', '<p>Đồng hành cùng các bạn nhỏ với những món đồ học tập mới toanh.</p>', '2022-11-22 17:31:41', '2022-11-22 10:31:41'),
(4, 1, 'Khuyến mãi giảm giá tất cả các sản phẩm tiểu thuyết', 'Khuyến Mãi', 1, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669138255/imagesbookstore/cqxblfayqexqvottmqwt.png', '2022-11-23', '<p>Giảm giá tất cả sách tiểu thuyết</p>', '2022-11-22 17:30:55', '2022-11-22 10:30:55'),
(5, 1, 'Khuyến mãi 50% sách tiếng anh', 'Khuyến Mãi', NULL, 'https://res.cloudinary.com/dgkrtexdv/image/upload/v1669136396/imagesbookstore/byg2db3rfyzr6uysu7oh.jpg', '2022-11-22', '<p>Khuyến mãi 50% tất cả các cuốn sách tiếng anh</p>', '2022-11-22 17:24:25', '2022-11-22 10:24:25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'test', 'a@gmail.com', NULL, '$2y$10$cgwmU5CdpzG5hVuLhSw6OuUC14vNn5Fdks1Yd/ZUgw2yGmhpXNTKW', NULL, '2022-11-22 06:18:17', '2022-11-22 06:18:17'),
(3, 'test', 'b@gmail.com', NULL, '$2y$10$ICk5fh/OO0Y6EaQx1iR1gu.D6fCkLOY4ZyzfNfI50eS/LTPBMH38y', NULL, '2022-11-22 06:20:21', '2022-11-22 06:20:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chi_tiet_don_hangs`
--
ALTER TABLE `chi_tiet_don_hangs`
  ADD KEY `Ma_DH` (`id`,`Ma_SP`),
  ADD KEY `Ma_SP` (`Ma_SP`);

--
-- Indexes for table `chi_tiet_nhap_hangs`
--
ALTER TABLE `chi_tiet_nhap_hangs`
  ADD KEY `Ma_NH` (`Ma_NH`,`Ma_SP`),
  ADD KEY `Ma_SP` (`Ma_SP`);

--
-- Indexes for table `danh_muc`
--
ALTER TABLE `danh_muc`
  ADD PRIMARY KEY (`Ma_DM`);

--
-- Indexes for table `danh_mucs`
--
ALTER TABLE `danh_mucs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `don_hangs`
--
ALTER TABLE `don_hangs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ma_KH` (`Ma_KH`,`Ma_NV`),
  ADD KEY `Ma_KM` (`Ma_KM`),
  ADD KEY `Ma_NV` (`Ma_NV`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `khach_hangs`
--
ALTER TABLE `khach_hangs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `khuyen_mais`
--
ALTER TABLE `khuyen_mais`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nhan_viens`
--
ALTER TABLE `nhan_viens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Quyen` (`Quyen`);

--
-- Indexes for table `nhap_hangs`
--
ALTER TABLE `nhap_hangs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ma_NV` (`Ma_NV`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `phan_hois`
--
ALTER TABLE `phan_hois`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ma_KH` (`Ma_KH`);

--
-- Indexes for table `phan_quyens`
--
ALTER TABLE `phan_quyens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `san_phams`
--
ALTER TABLE `san_phams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Danh_Muc` (`Danh_Muc`);

--
-- Indexes for table `tin_tucs`
--
ALTER TABLE `tin_tucs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ma_NV` (`Ma_NV`),
  ADD KEY `Ma_DM` (`Ma_DM`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `danh_muc`
--
ALTER TABLE `danh_muc`
  MODIFY `Ma_DM` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `danh_mucs`
--
ALTER TABLE `danh_mucs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `don_hangs`
--
ALTER TABLE `don_hangs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `khach_hangs`
--
ALTER TABLE `khach_hangs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `khuyen_mais`
--
ALTER TABLE `khuyen_mais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `nhan_viens`
--
ALTER TABLE `nhan_viens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `nhap_hangs`
--
ALTER TABLE `nhap_hangs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `phan_hois`
--
ALTER TABLE `phan_hois`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `phan_quyens`
--
ALTER TABLE `phan_quyens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `san_phams`
--
ALTER TABLE `san_phams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tin_tucs`
--
ALTER TABLE `tin_tucs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chi_tiet_don_hangs`
--
ALTER TABLE `chi_tiet_don_hangs`
  ADD CONSTRAINT `chi_tiet_don_hangs_ibfk_1` FOREIGN KEY (`Ma_SP`) REFERENCES `san_phams` (`id`),
  ADD CONSTRAINT `chi_tiet_don_hangs_ibfk_2` FOREIGN KEY (`id`) REFERENCES `don_hangs` (`id`);

--
-- Constraints for table `chi_tiet_nhap_hangs`
--
ALTER TABLE `chi_tiet_nhap_hangs`
  ADD CONSTRAINT `chi_tiet_nhap_hangs_ibfk_1` FOREIGN KEY (`Ma_NH`) REFERENCES `nhap_hangs` (`id`),
  ADD CONSTRAINT `chi_tiet_nhap_hangs_ibfk_2` FOREIGN KEY (`Ma_SP`) REFERENCES `san_phams` (`id`);

--
-- Constraints for table `don_hangs`
--
ALTER TABLE `don_hangs`
  ADD CONSTRAINT `don_hangs_ibfk_1` FOREIGN KEY (`Ma_KH`) REFERENCES `khach_hangs` (`id`),
  ADD CONSTRAINT `don_hangs_ibfk_2` FOREIGN KEY (`Ma_KM`) REFERENCES `khuyen_mais` (`id`),
  ADD CONSTRAINT `don_hangs_ibfk_3` FOREIGN KEY (`Ma_NV`) REFERENCES `nhan_viens` (`id`);

--
-- Constraints for table `nhan_viens`
--
ALTER TABLE `nhan_viens`
  ADD CONSTRAINT `nhan_viens_ibfk_1` FOREIGN KEY (`Quyen`) REFERENCES `phan_quyens` (`id`);

--
-- Constraints for table `nhap_hangs`
--
ALTER TABLE `nhap_hangs`
  ADD CONSTRAINT `nhap_hangs_ibfk_1` FOREIGN KEY (`Ma_NV`) REFERENCES `nhan_viens` (`id`);

--
-- Constraints for table `phan_hois`
--
ALTER TABLE `phan_hois`
  ADD CONSTRAINT `phan_hois_ibfk_1` FOREIGN KEY (`Ma_KH`) REFERENCES `khach_hangs` (`id`);

--
-- Constraints for table `san_phams`
--
ALTER TABLE `san_phams`
  ADD CONSTRAINT `san_phams_ibfk_1` FOREIGN KEY (`Danh_Muc`) REFERENCES `danh_mucs` (`id`);

--
-- Constraints for table `tin_tucs`
--
ALTER TABLE `tin_tucs`
  ADD CONSTRAINT `tin_tucs_ibfk_1` FOREIGN KEY (`Ma_NV`) REFERENCES `nhan_viens` (`id`),
  ADD CONSTRAINT `tin_tucs_ibfk_2` FOREIGN KEY (`Ma_DM`) REFERENCES `danh_mucs` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
