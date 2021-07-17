<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function index()
    {
        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'home';
        $this->load->view('template/atas', $data);
        $this->load->view('sesudah_login/member/jadwal');
        $this->load->view('template/bawah');
    }
}