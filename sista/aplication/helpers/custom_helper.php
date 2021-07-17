<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

if (!function_exists('rupiah_format')) {
    function rupiah_format($angka)
    {
        $str_total = number_format($angka);
        $total = preg_replace("/[^0-9]/", ".", $str_total);
        return 'Rp. ' . $total;
    }
}

if (!function_exists('angka_aja')) {
    function angka_aja($angka)
    {
        $angka_str = $angka;
        $hasil = preg_replace("/[^0-9]/", "", $angka_str);
        return $hasil;
    }
}

if (!function_exists('tgl_indo')) {
    function tgl_indo($tanggal)
    {
        $hari = array(
            1 =>    'Senin',
            'Selasa',
            'Rabu',
            'Kamis',
            'Jumat',
            'Sabtu',
            'Minggu'
        );

        $bulan = array(
            1 =>   'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember'
        );
        $tgl = preg_replace('/[: ]/', '-', $tanggal);
        $pecahkan = explode('-', $tgl);
        $hitung = count($pecahkan);
        $num = date('N', strtotime($tanggal));
        if ($hitung > 3) {
            return $hari[$num] . ', ' . $pecahkan[2] . ' ' . $bulan[(int)$pecahkan[1]] . ' ' . $pecahkan[0] . ' Pukul ' . $pecahkan[3] . ':' . $pecahkan[4];
        } else {
            return $hari[$num] . ', ' . $pecahkan[2] . ' ' . $bulan[(int)$pecahkan[1]] . ' ' . $pecahkan[0];
        }
    }
}

if (!function_exists('enkripsi')) {
    function enkripsi($string, $prefix = 5, $char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    {
        $charlen = strlen($char);
        $stringlen = strlen($string);
        $randomString = '';
        for ($i = 0; $i < $stringlen; $i++) {
            for ($j = 0; $j < $prefix; $j++) {
                $randomString .= $char[rand(0, $charlen - 1)];
            }
            $randomString .= $string[$i];
        }
        for ($j = 0; $j < $prefix; $j++) {
            $randomString .= $char[rand(0, $charlen - 1)];
        }
        return $randomString;
    }
}
