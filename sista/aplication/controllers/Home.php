<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function index()
    {
        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'home';
        $this->load->view('template/atas', $data);
        $this->load->view('sebelum_login/landing');
        $this->load->view('template/bawah');
    }

    public function berita1()
    {
        $this->load->view('layout/atas');
        $this->load->view('sebelum_login/berita1');
        $this->load->view('layout/bawah');
    }

    public function berita2()
    {
        $this->load->view('layout/atas');
        $this->load->view('sebelum_login/berita2');
        $this->load->view('layout/bawah');
    }

    public function berita3()
    {
        $this->load->view('layout/atas');
        $this->load->view('sebelum_login/berita3');
        $this->load->view('layout/bawah');
    }

    public function berita4()
    {
        $this->load->view('layout/atas');
        $this->load->view('sebelum_login/berita4');
        $this->load->view('layout/bawah');
    }

    public function berita5()
    {
        $this->load->view('layout/atas');
        $this->load->view('sebelum_login/berita5');
        $this->load->view('layout/bawah');
    }
}
