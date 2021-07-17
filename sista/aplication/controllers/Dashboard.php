<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	public function index()
	{
        $data['home'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $this->load->view('template/header', $data);
		$this->load->view('content/home');
        $this->load->view('template/footer');
	}

	public function halamandaftarseminar()
	{
		$data['home'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
		$data['dosen'] = $this->db->get('dosen')->result();
		$data['kategori'] = $this->db->get('kategori_seminar')->result();
		$this->load->view('template/header', $data);
		$this->load->view('content/daftar_seminar',$data);
		$this->load->view('template/bawah');
	}

	public function prosestambahseminar()
	{
		$data = array(
			'nim' => $this->input->post('nim') ,
			'nama_mahasiswa' => $this->input->post('nama'),
			'prodi_id' => $this->input->post('prodi'),
			'judul' => $this->input->post('judulTA'),
			'kategori_seminar_id' => $this->input->post('nm_seminar'),
			'pembimbing_id' => $this->input->post('pembimbing'),
			'user_id' => $this->session->userdata('id')
	);


		$prosestambahseminar = $this->M_membersista->prosestambahseminar($data);

		if ($prosestambahseminar){
			return base_url('home');
		}
	}


	public function jadwal()
	{
		$data['home'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
		$data['dataSeminar'] = $this->M_membersista->getDataSeminar();
		$this->load->view('template/header', $data);
		$this->load->view('content/jadwal', $data);
		$this->load->view('template/footer');
	}

	public function detailSeminar($id)
	{
		$data['home'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
		$data['detailSeminar'] = $this->M_membersista->getDataSeminarDetail($id);
		$this->load->view('template/header', $data);
		$this->load->view('content/detailSeminar', $data);
		$this->load->view('template/footer');
		
	}

	public function daftarpeserta()
	{
		$data['home'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
		$data['dtdfseminar'] = $this->M_membersista->getDataSeminarPeserta();
		$this->load->view('template/header', $data);
		$this->load->view('content/daftarpeserta', $data);
		$this->load->view('template/footer');
	}

	public function prosesdaftarpeserta()
	{
		$data = array(
			'nim' => $this->input->post('nim') ,
			'nama' => $this->input->post('nama'),
			'prodi_id' => $this->input->post('prodi'),
			'seminar_id' => $this->input->post('seminar'),
			'jenjang' => $this->input->post('program'),
			'user_id' => '2'
	);


		$prosestambahseminar = $this->M_membersista->prosesdaftarpeserta($data);

		if ($prosestambahseminar){
			redirect('dashboard/jadwal');
		}
	}
}