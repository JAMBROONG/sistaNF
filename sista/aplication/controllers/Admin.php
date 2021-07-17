<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Admin extends CI_Controller
{
    private $sesi;
    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->helper('custom_helper');
        $this->load->model('M_seminar');
        $this->sesi = $this->session->userdata('id');
        if ($this->sesi == false) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-danger">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Silahkan Login Terlebih Dahulu!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('auth');
        }
    }

    public function index()
    {
        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'dashboard';
        $data['breadcrumb'] = '<ol class="breadcrumb">
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>';
        $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
        $data['userrow'] = $this->db->get('user')->num_rows();
        $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
        $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
        $data['dosen'] = $this->db->get('dosen')->num_rows();
        $data['dosenrow'] = $this->db->get('dosen')->num_rows();
        $this->load->view('template/_admin/atas', $data);
        $this->load->view('sesudah_login/admin/dashboard', $data);
        $this->load->view('template/bawah');
    }

    public function seminar_data()
    {

        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'seminar_data';
        $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item active">Seminar</li>
              </ol>';
        $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
        $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
        $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
        $data['dosenrow'] = $this->db->get('dosen')->num_rows();
        $data['userrow'] = $this->db->get('user')->num_rows();
        $data['tampil'] = $this->M_seminar->getAll();

        $this->load->view('template/_admin/atas', $data);
        $this->load->view('sesudah_login/admin/seminar/v_data', $data);
        $this->load->view('template/bawah');
    }

    public function peserta_seminar_data()
    {

        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'peserta_seminar_data';
        $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item"><a href="' . base_url('admin/seminar_data') . '"> Seminar</a>
                <li class="breadcrumb-item active">Peserta Seminar</li>
              </ol>';
        $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
        $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
        $data['seminar_id'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui', 'id' => $this->input->post('id')])->result();
        $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
        $data['dosenrow'] = $this->db->get('dosen')->num_rows();
        $data['userrow'] = $this->db->get('user')->num_rows();
        $id = $this->input->post('id');
        if (!$id) {
            $id = $this->session->flashdata('id_seminar');
        }
        $data['tampil'] = $this->M_seminar->getPesertaSeminar($id);

        $this->load->view('template/_admin/atas', $data);
        $this->load->view('sesudah_login/admin/seminar/v_peserta_seminar', $data);
        $this->load->view('template/bawah');
    }

    public function status_peserta_seminar()
    {

        $id = $this->input->post('id');
        $query = $this->M_seminar->status_peserta_seminar($id);
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Ubah Status Berhasil!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            $this->session->set_flashdata('id_seminar', $this->input->post('id_seminar'));
            redirect('admin/peserta_seminar_data');
        }
    }

    public function seminar_pengajuan_data()
    {

        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'seminar_pengajuan_data';
        $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item"><a href="' . base_url('admin/seminar_data') . '"> Seminar</a>
                <li class="breadcrumb-item active">Pengajuan</li>
              </ol>';
        $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
        $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
        $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
        $data['dosenrow'] = $this->db->get('dosen')->num_rows();
        $data['userrow'] = $this->db->get('user')->num_rows();
        $data['tampil'] = $this->db->get_where('v_seminar_pengajuan', ['status' => 'Menunggu Persetujuan'])->result();

        $this->load->view('template/_admin/atas', $data);
        $this->load->view('sesudah_login/admin/seminar/v_pengajuan_seminar', $data);
        $this->load->view('template/bawah');
    }

    public function setujui_seminar()
    {
        $aksi_post = $this->input->post('edit');
        if ($aksi_post) {
            $query = $this->M_seminar->setujui_seminar($aksi_post);
            if ($query) {
                $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil disetujui!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
                redirect('admin/seminar_pengajuan_data');
            }
        } else {
            $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
            $data['page'] = 'setujui_seminar';
            $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item"><a href="' . base_url('admin/seminar_data') . '"> Seminar</a>
                <li class="breadcrumb-item active">Setujui Seminar</li>
              </ol>';
            $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
            $data['userrow'] = $this->db->get('user')->num_rows();
            $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
            $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
            $data['seminar_lama'] = $this->M_seminar->getById($this->input->post('id'));
            $data['dosen'] = $this->db->get('dosen')->result();
            $data['dosenrow'] = $this->db->get('dosen')->num_rows();
            $data['prodi'] = $this->db->get('prodi')->result();
            $data['kategori'] = $this->db->get('kategori_seminar')->result();

            $this->load->view('template/_admin/atas', $data);
            $this->load->view('sesudah_login/admin/seminar/v_setujui_seminar', $data);
            $this->load->view('template/bawah');
        }
    }

    public function tolak_seminar()
    {

        $id = $this->input->post('id');
        $query = $this->M_seminar->tolak_seminar($id);
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Seminar Berhasil Ditolak!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/seminar_pengajuan_data');
        }
    }

    public function seminar_add()
    {
        $aksi_post = $this->input->post('add');
        if ($aksi_post) {
            $query = $this->M_seminar->save_seminar();
            if ($query) {
                $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil ditambahkan!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
                redirect('admin/seminar_data');
            }
        } else {
            $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
            $data['page'] = 'seminar_add';
            $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item"><a href="' . base_url('admin/seminar_data') . '"> Seminar</a>
                <li class="breadcrumb-item active">Tambah Seminar</li>
              </ol>';
            $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
            $data['userrow'] = $this->db->get('user')->num_rows();
            $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
            $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
            $data['dosen'] = $this->db->get('dosen')->result();
            $data['dosenrow'] = $this->db->get('dosen')->num_rows();
            $data['prodi'] = $this->db->get('prodi')->result();
            $data['kategori'] = $this->db->get('kategori_seminar')->result();

            $this->load->view('template/_admin/atas', $data);
            $this->load->view('sesudah_login/admin/seminar/v_add', $data);
            $this->load->view('template/bawah');
        }
    }

    public function seminar_edit()
    {

        $aksi_post = $this->input->post('edit');
        if ($aksi_post) {
            $query = $this->M_seminar->update_seminar($aksi_post);
            if ($query) {
                $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil dirubah!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
                redirect('admin/seminar_data');
            }
        } else {
            $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
            $data['page'] = 'seminar_edit';
            $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item"><a href="' . base_url('admin/seminar_data') . '"> Seminar</a>
                <li class="breadcrumb-item active">Ubah Data Seminar</li>
              </ol>';
            $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
            $data['userrow'] = $this->db->get('user')->num_rows();
            $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
            $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
            $data['seminar_lama'] = $this->M_seminar->getById($this->input->post('id'));
            $data['dosen'] = $this->db->get('dosen')->result();
            $data['dosenrow'] = $this->db->get('dosen')->num_rows();
            $data['prodi'] = $this->db->get('prodi')->result();
            $data['kategori'] = $this->db->get('kategori_seminar')->result();

            $this->load->view('template/_admin/atas', $data);
            $this->load->view('sesudah_login/admin/seminar/v_edit', $data);
            $this->load->view('template/bawah');
        }
    }

    public function seminar_del()
    {

        $id = $this->input->post('id');
        $query = $this->M_seminar->delete_seminar($id);
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil dihapus!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/seminar_data');
        }
    }

    public function seminar_kategori_data()
    {
        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'seminar_kategori_data';
        $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item"><a href="' . base_url('admin/seminar_data') . '"> Seminar</a>
                <li class="breadcrumb-item active">Kategori Seminar</li>
              </ol>';
        $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
        $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
        $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
        $data['dosenrow'] = $this->db->get('dosen')->num_rows();
        $data['userrow'] = $this->db->get('user')->num_rows();
        $data['tampil'] = $this->M_seminar->getAllKategori();

        $this->load->view('template/_admin/atas', $data);
        $this->load->view('sesudah_login/admin/seminar/v_kategori_data', $data);
        $this->load->view('template/bawah');
    }

    public function seminar_kategori_add()
    {
        $query = $this->M_seminar->save_kategori();
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil ditambahkan!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/seminar_kategori_data');
        }
    }

    public function seminar_kategori_edit()
    {
        $id = $this->input->post('id');
        $query = $this->M_seminar->update_kategori($id);
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil dirubah!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/seminar_kategori_data');
        }
    }

    public function seminar_kategori_del()
    {

        $id = $this->input->post('id');
        $query = $this->M_seminar->delete_kategori($id);
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil dihapus!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/seminar_kategori_data');
        }
    }

    public function dosen_data()
    {
        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'dosen_data';
        $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item active">Dosen</li>
              </ol>';
        $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
        $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
        $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
        $data['dosenrow'] = $this->db->get('dosen')->num_rows();
        $data['userrow'] = $this->db->get('user')->num_rows();
        $data['tampil'] = $this->M_seminar->getAllDosen();

        $this->load->view('template/_admin/atas', $data);
        $this->load->view('sesudah_login/admin/dosen/v_data', $data);
        $this->load->view('template/bawah');
    }

    public function dosen_add()
    {
        $query = $this->M_seminar->save_dosen();
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil ditambahkan!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/dosen_data');
        }
    }

    public function dosen_edit()
    {
        $id = $this->input->post('id');
        $query = $this->M_seminar->update_dosen($id);
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil dirubah!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/dosen_data');
        }
    }

    public function dosen_del()
    {

        $id = $this->input->post('id');
        $query = $this->M_seminar->delete_dosen($id);
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Data berhasil dihapus!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/dosen_data');
        }
    }

    public function pengguna_data()
    {
        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'pengguna_data';
        $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item active">Pengguna</li>
              </ol>';
        $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
        $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
        $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
        $data['dosenrow'] = $this->db->get('dosen')->num_rows();
        $data['userrow'] = $this->db->get('user')->num_rows();
        $data['tampil'] = $this->M_seminar->getAllUser();

        $this->load->view('template/_admin/atas', $data);
        $this->load->view('sesudah_login/admin/user/v_data', $data);
        $this->load->view('template/bawah');
    }

    public function penilaian()
    {
        $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
        $data['page'] = 'penilaian';
        $data['breadcrumb'] = '<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="' . base_url('admin') . '"> Dashboard</a>
                <li class="breadcrumb-item"><a href="' . base_url('admin/seminar_data') . '"> Seminar</a>
                <li class="breadcrumb-item active">Penilaian</li>
              </ol>';
        $data['user'] = $this->db->query('SELECT nama, username, email, role, foto FROM user WHERE id = ' . $this->sesi . '')->row_array();
        $data['seminar'] = $this->db->get_where('seminar_ta', ['status' => 'Disetujui'])->num_rows();
        $data['seminar_tunggu'] = $this->db->get_where('seminar_ta', ['status' => 'Menunggu Persetujuan'])->num_rows();
        $data['dosenrow'] = $this->db->get('dosen')->num_rows();
        $data['userrow'] = $this->db->get('user')->num_rows();
        $data['tampil'] = $this->M_seminar->getDetail($this->input->post('id'));

        $this->load->view('template/_admin/atas', $data);
        $this->load->view('sesudah_login/admin/seminar/penilaian', $data);
        $this->load->view('template/bawah');
    }

    public function nilai()
    {
        $query = $this->M_seminar->nilai();
        if ($query) {
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-success">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-check"></i> Sukses!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Penilaian berhasil!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                    </div>
                    </div>
                </div>
                </div>
            ');
            redirect('admin/seminar_data');
        }
    }

    public function ajax()
    {

        $aksi = $this->input->post('aksi');
        $id = $this->input->post('id');
        $query = $this->M_seminar->getDetail($id);

        if ($aksi == 'seminar_detail') {
            if ($query) {
                foreach ($query as $row) { ?>
                    <table class="noborder">
                        <tbody>
                            <tr>
                                <td>NIM</td>
                                <td class="pull-left">:</td>
                                <td><?= $row->nim ?></td>
                            </tr>
                            <tr>
                                <td>Nama</td>
                                <td class="pull-left">:</td>
                                <td><?= $row->nama ?></td>
                            </tr>
                            <tr>
                                <td>Prodi</td>
                                <td class="pull-left">:</td>
                                <td><?= $row->prodi ?></td>
                            </tr>
                            <tr>
                                <td>Kategori</td>
                                <td class="pull-left">:</td>
                                <td><?= $row->kategori ?></td>
                            </tr>
                            <tr>
                                <td>Judul</td>
                                <td class="pull-left">:</td>
                                <td><?= $row->judul ?></td>
                            </tr>
                            <tr>
                                <td>Waktu</td>
                                <td class="pull-left">:</td>
                                <td><?= tgl_indo($row->tanggal) ?></td>
                            </tr>
                            <tr>
                                <td>Ruang</td>
                                <td class="pull-left">:</td>
                                <td><?= $row->lokasi ?></td>
                            </tr>
                            <tr>
                                <td>Pembimbing</td>
                                <td class="pull-left">:</td>
                                <td><?= $row->pembimbing ?></td>
                            </tr>
                            <tr>
                                <td>Penguji</td>
                                <td class="pull-left">:</td>
                                <td><?= $row->penguji1 ?></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="pull-left"></td>
                                <td><?= $row->penguji2 ?></td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td class="pull-left">:</td>
                                <td><?php if ($row->status == 'Disetujui') {
                                        echo '<h6 class="text-success mt-2"><b>' . $row->status . '</b></h6>';
                                    } else if ($row->status == 'Ditolak') {
                                        echo '<h6 class="text-danger mt-2"><b>' . $row->status . '</b></h6>';
                                    } else if ($row->status == 'Menunggu Persetujuan') {
                                        echo '<h6 class="text-warning mt-2"><b>' . $row->status . '</b></h6>';
                                    } ?></td>
                            </tr>
                            <?php
                            if ($row->nilai != '') { ?>
                                <tr>
                                    <td>Nilai</td>
                                    <td class="pull-left">:</td>
                                    <td><?= $row->nilai ?></td>
                                </tr>
                            <?php  }
                            ?>
                        </tbody>

                    </table>

                    <div class="row">
                        <div class="col-sm text-center">
                            <form action="<?= base_url('admin/seminar_edit') ?>" method="POST"><button type="submit" name="id" value="<?= $row->id ?>" class="btn btn-primary mb-1"><i class="fas fa-edit"></i> Ubah</button></form>
                        </div>
                        <div class="col-sm text-center">
                            <button class="btn btn-danger mb-1" id="custId" data-toggle="modal" data-tipe="seminar_delete" data-id="<?= $row->id; ?>" data-target="#konfir_delete"><i class="fas fa-trash"></i> Hapus</button>
                        </div>
                        <div class="col-sm text-center">
                            <form action="<?= base_url('admin/peserta_seminar_data') ?>" method="POST"><button type="submit" name="id" value="<?= $row->id ?>" class="btn btn-info"><i class="fas fa-users"></i> Peserta</button></form>
                        </div>
                        <div class="col-sm text-center">
                            <?php
                            if ($row->nilai == '') { ?>
                                <form action="<?= base_url('admin/penilaian') ?>" method="POST"><button type="submit" name="id" value="<?= $row->id ?>" class="btn btn-success"><i class="fas fa-percentage"></i> Penilaian</button></form>
                            <?php  } else { ?>
                                <button class="btn btn-success mb-1" id="custId" data-toggle="modal" data-tipe="nilai_detail" data-id="<?= $row->id; ?>" data-target="#detail_nilai"><i class="fas fa-search"></i> Detail Penilaian</button>
                            <?php }
                            ?>
                        </div>
                    </div>
                <?php
                }
            }
        } else if ($aksi == 'seminar_delete') {
            if ($query) {
                foreach ($query as $row) {

                ?>
                    <div class="card tabel bg-danger">
                        <div class="card-body text-center">
                            <p>Anda yakin ingin menghapus data Seminar <b><i><?= $row->kategori; ?></i></b> Oleh <b><i><?= $row->nama; ?></i></b> yang berjudul <b><i><?= $row->judul; ?></i></b>?</p>
                        </div>
                    </div>
                    <form action="<?= base_url('admin/seminar_del'); ?>" method="POST">
                        <button type="submit" name="id" value="<?= $row->id; ?>" class="btn btn-outline-light float-center"><i class="fas fa-trash"></i> Hapus</button>
                        <button type="button" class="float-center btn btn-outline-light" data-dismiss="modal"><i class="fas fa-times"></i> Batal</button>
                    </form>
                <?php
                }
            }
        } else if ($aksi == 'kategori_form') {
            $query = $this->M_seminar->getByIdKategori($id);
            if ($query) {
                foreach ($query as $row) {
                ?>
                    <form id="formm" action="<?= base_url('admin/seminar_kategori_edit'); ?>" method="POST">
                        <div class="row mb-2">
                            <div class="col-md-4">
                                <label for="nm_kategori">Ubah Kategori</label>
                                <input type="text" name="nm_kategori" id="nm_kategori" value="<?= $row->nama ?>" placeholder="Nama Kategori" class="form-control">
                                <span class="text-red" id="msgkategori">Harap isi Nama Kategori!</span>
                            </div>
                            <div class="col-md-2">
                                <span id="btn_batal" class="btn btn-danger btn-sm mt-2"><i class="fas fa-times"></i> Batal</span><br>
                                <button type="submit" id="btn_form" name="id" value="<?= $row->id ?>" class="btn btn-primary btn-sm mt-1"><i class="fas fa-save"></i> Simpan</button>
                            </div>
                        </div>
                    </form>
                <?php
                }
            } else { ?>
                <form id="formm" action="<?= base_url('admin/seminar_kategori_add'); ?>" method="POST">
                    <div class="row mb-2">
                        <div class="col-md-4">
                            <label for="nm_kategori">Tambah Kategori</label>
                            <input type="text" name="nm_kategori" id="nm_kategori" value="" placeholder="Nama Kategori" class="form-control">
                            <span class="text-red" id="msgkategori">Harap isi Nama Kategori!</span>
                        </div>
                        <div class="col-md-2">
                            <span id="btn_batal" class="btn btn-danger btn-sm mt-2"><i class="fas fa-times"></i> Batal</span><br>
                            <button type="submit" id="btn_form" name="id" value="" class="btn btn-primary btn-sm mt-1"><i class="fas fa-save"></i> Simpan</button>
                        </div>
                    </div>
                </form>
                <?php }
        } else if ($aksi == 'kategori_delete') {
            $query = $this->M_seminar->getByIdKategori($id);
            if ($query) {
                foreach ($query as $row) {

                ?>
                    <div class="card tabel bg-danger">
                        <div class="card-body text-center">
                            <p>Anda yakin ingin menghapus data Kategori <b><i><?= $row->nama ?></i></b></p>
                        </div>
                    </div>
                    <form action="<?= base_url('admin/seminar_kategori_del'); ?>" method="POST">
                        <button type="submit" name="id" value="<?= $row->id; ?>" class="btn btn-outline-light float-center"><i class="fas fa-trash"></i> Hapus</button>
                        <button type="button" class="float-center btn btn-outline-light" data-dismiss="modal"><i class="fas fa-times"></i> Batal</button>
                    </form>
                <?php
                }
            }
        } else if ($aksi == 'seminar_tolak') {
            $query = $this->M_seminar->getPengajuan($id);
            if ($query) {
                foreach ($query as $row) {

                ?>
                    <div class="card tabel bg-danger">
                        <div class="card-body text-center">
                            <p>Anda yakin ingin menolak pengajuan Seminar <b><i><?= $row->kategori; ?></i></b> Oleh <b><i><?= $row->nama; ?></i></b> yang berjudul <b><i><?= $row->judul; ?></i></b>?</p>
                        </div>
                    </div>
                    <form action="<?= base_url('admin/tolak_seminar'); ?>" method="POST">
                        <input type="hidden" name="status" value="Ditolak">
                        <button type="submit" name="id" value="<?= $row->id; ?>" class="btn btn-outline-light float-center"> Tolak</button>
                        <button type="button" class="float-center btn btn-outline-light" data-dismiss="modal">Batal</button>
                    </form>
                <?php
                }
            }
        } else if ($aksi == 'dosen_form') {
            $query = $this->M_seminar->getByIdDosen($id);
            if ($query) {
                foreach ($query as $row) {
                ?>
                    <form id="formm" action="<?= base_url('admin/dosen_edit'); ?>" method="POST">
                        <div class="row mb-2">
                            <div class="col-md-4">
                                <label for="nidn">Ubah Dosen</label>
                                <input type="text" name="nidn" id="nidn" value="<?= $row->nidn ?>" placeholder="Nomor NIDN Dosen" class="form-control">
                                <span class="text-red" id="msgnama">Harap isi Nama Dosen!</span>
                            </div>
                            <div class="col-md-4">
                                <label for="nama"></label>
                                <input type="text" name="nama" id="nama" value="<?= $row->nama ?>" placeholder="Nama Lengkap Dosen" class="form-control mt-2">
                                <span class="text-red" id="msgnidn">Harap isi Nomor NIDN Dosen!</span>
                            </div>
                            <div class="col-md-2">
                                <span id="btn_batal" class="btn btn-danger btn-sm mt-2"><i class="fas fa-times"></i> Batal</span><br>
                                <button type="submit" id="btn_form" name="id" value="<?= $row->id ?>" class="btn btn-primary btn-sm mt-1"><i class="fas fa-save"></i> Simpan</button>
                            </div>
                        </div>
                    </form>
                <?php
                }
            } else { ?>
                <form id="formm" action="<?= base_url('admin/dosen_add'); ?>" method="POST">
                    <div class="row mb-2">
                        <div class="col-md-4">
                            <label for="nidn">Tambah Dosen</label>
                            <input type="text" name="nidn" id="nidn" value="" placeholder="Nomor NIDN Dosen" class="form-control">
                            <span class="text-red" id="msgnidn">Harap isi Nomor NIDN Dosen!</span>
                        </div>
                        <div class="col-md-4">
                            <label for="nama"></label>
                            <input type="text" name="nama" id="nama" value="" placeholder="Nama Lengkap Dosen" class="form-control mt-2">
                            <span class="text-red" id="msgnama">Harap isi Nama Dosen!</span>
                        </div>
                        <div class="col-md-2">
                            <span id="btn_batal" class="btn btn-danger btn-sm mt-2"><i class="fas fa-times"></i> Batal</span><br>
                            <button type="submit" id="btn_form" name="id" value="" class="btn btn-primary btn-sm mt-1"><i class="fas fa-save"></i> Simpan</button>
                        </div>
                    </div>
                </form>
                <?php }
        } else if ($aksi == 'dosen_delete') {
            $query = $this->M_seminar->getByIdDosen($id);
            if ($query) {
                foreach ($query as $row) {

                ?>
                    <div class="card tabel bg-danger">
                        <div class="card-body text-center">
                            <p>Anda yakin ingin menghapus data Dosen <b><i><?= $row->nama ?></i></b></p>
                        </div>
                    </div>
                    <form action="<?= base_url('admin/dosen_del'); ?>" method="POST">
                        <button type="submit" name="id" value="<?= $row->id; ?>" class="btn btn-outline-light float-center"><i class="fas fa-trash"></i> Hapus</button>
                        <button type="button" class="float-center btn btn-outline-light" data-dismiss="modal"><i class="fas fa-times"></i> Batal</button>
                    </form>
                <?php
                }
            }
        } else if ($aksi == 'user_form') {
            $query = $this->M_seminar->getByIdUser($id);
            if ($query) {
                foreach ($query as $row) {
                ?>
                    <form id="formm" action="<?= base_url('admin/pengguna_edit'); ?>" method="POST">
                        <input type="hidden" id="mode" value="edit">
                        <div class="row mb-2">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-3">
                                        <label for="nama">Ubah Pengguna</label>
                                        <input type="text" name="nama" id="nama" value="<?= $row->nama ?>" placeholder="Nama Lengkap Pengguna" class="form-control">
                                        <span class="text-red" id="msgnama">Harap isi Nama Pengguna!</span>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="uname"></label>
                                        <input type="text" name="uname" id="uname" value="<?= $row->username ?>" placeholder="Username Pengguna" class="form-control mt-2">
                                        <span class="text-red" id="msguname">Harap isi Username Pengguna!</span>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="email"></label>
                                        <input type="text" name="email" id="email" value="<?= $row->username ?>" placeholder="Email Pengguna" class="form-control mt-2">
                                        <span class="text-red" id="msgemail">Harap isi Email Pengguna!</span>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-3">
                                        <label for="role"></label>
                                        <div id="fgrole" class="form-group col-md-12">
                                            <select name="role" id="role" class="custom-select select2">
                                                <?php $role = $row->role; ?>
                                                <option value=""></option>
                                                <option <?php $x = 'Admin';
                                                        if ($x == $role) {
                                                            echo 'selected';
                                                        } ?> value="Admin">Admin</option>
                                                <option <?php $x = 'Member';
                                                        if ($x == $role) {
                                                            echo 'selected';
                                                        } ?> value="Member">Member</option>
                                            </select>
                                        </div>
                                        <span class="text-red" id="msgrole">Pilih Role Pengguna!</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <span id="btn_batal" class="btn btn-danger btn-sm mt-2"><i class="fas fa-times"></i> Batal</span><br>
                                <button type="submit" id="btn_form" name="id" value="<?= $row->id ?>" class="btn btn-primary btn-sm mt-1"><i class="fas fa-save"></i> Simpan</button>
                            </div>


                        </div>
                    </form>
                <?php
                }
            } else { ?>
                <form id="formm" action="<?= base_url('admin/pengguna_add'); ?>" method="POST">
                    <input type="hidden" id="mode" value="add">
                    <div class="row mb-2">
                        <div class="col-md-10">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="nama">Ubah Pengguna</label>
                                    <input type="text" name="nama" id="nama" value="" placeholder="Nama Lengkap Pengguna" class="form-control">
                                    <span class="text-red" id="msgnama">Harap isi Nama Pengguna!</span>
                                </div>
                                <div class="col-md-3">
                                    <label for="uname"></label>
                                    <input type="text" name="uname" id="uname" value="" placeholder="Username Pengguna" class="form-control mt-2">
                                    <span class="text-red" id="msguname">Harap isi Username Pengguna!</span>
                                </div>
                                <div class="col-md-3">
                                    <label for="email"></label>
                                    <input type="text" name="email" id="email" value="" placeholder="Email Pengguna" class="form-control mt-2">
                                    <span class="text-red" id="msgemail">Harap isi Email Pengguna!</span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-3">
                                    <label for="role"></label>
                                    <div id="fgrole" class="form-group col-md-12 mt-2">
                                        <select name="role" id="role" class="custom-select select2">
                                            <option value=""></option>
                                            <option value="Admin">Admin</option>
                                            <option value="Member">Member</option>
                                        </select>
                                    </div>
                                    <span class="text-red" id="msgrole">Pilih Role Pengguna!</span>
                                </div>
                                <div class="col-md-3">
                                    <label for="Pass"></label>
                                    <input type="text" name="pass" id="pass" value="" placeholder="Password Pengguna" class="form-control mt-2">
                                    <span class="text-red" id="msgpass">Harap isi Password Pengguna!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <span id="btn_batal" class="btn btn-danger btn-sm mt-2"><i class="fas fa-times"></i> Batal</span><br>
                            <button type="submit" id="btn_form" name="id" value="" class="btn btn-primary btn-sm mt-1"><i class="fas fa-save"></i> Simpan</button>
                        </div>


                    </div>
                </form>
                <?php }
        } else if ($aksi == 'nilai_detail') {
            $query = $this->M_seminar->getDetail($this->input->post('id'));
            $query2 = $this->db->query('SELECT penilaian.*,seminar_ta.id AS id_seminar , v_pembimbing.pembimbing, v_penguji1.penguji1, v_penguji2.penguji2 FROM penilaian INNER JOIN seminar_ta ON penilaian.seminar_id = seminar_ta.id 
            INNER JOIN v_pembimbing ON penilaian.dosen_id = v_pembimbing.id INNER JOIN v_penguji1 ON penilaian.id_dosen = v_penguji1.id INNER JOIN v_penguji2 ON penilaian.id_dosen = v_penguji2.id WHERE seminar_ta.id = ' . $this->input->post('id') . '')->result();
            if ($query) {
                foreach ($query as $key) {
                ?>

                    <div class="row mb-3">
                        <?php
                        $i = 1;
                        foreach ($query2 as $row) {
                            $query2 = $this->db->query('SELECT penilaian.*,seminar_ta.id AS id_seminar , v_pembimbing.pembimbing, v_penguji1.penguji1, v_penguji2.penguji2 FROM penilaian INNER JOIN seminar_ta ON penilaian.seminar_id = seminar_ta.id 
            INNER JOIN v_pembimbing ON penilaian.dosen_id = v_pembimbing.id INNER JOIN v_penguji1 ON penilaian.id_dosen = v_penguji1.id INNER JOIN v_penguji2 ON penilaian.id_dosen = v_penguji2.id WHERE penilaian.dosen_id = ' . $row->dosen_id . '')->result();
                        ?>


                            <div class="col">
                                <h4>Pembimbing</h4>
                                <p><?= $key->pembimbing ?></p>
                                <label>Presentasi</label>
                                <textarea name="ket11" rows="3" placeholder="Keterangan" class="form-control mb-2" readonly><?= $row->keterangan ?></textarea>
                                <input type="text" name="nilai11" class="form-control" placeholder="Nilai" readonly value="<?= $row->penilaian_tentang ?>">

                                <label>Penguasaan Materi</label>
                                <textarea name="ket12" rows="3" placeholder="Keterangan" class="form-control mb-2" readonly></textarea>
                                <input type="text" name="nilai12" class="form-control" placeholder="Nilai" readonly>

                                <label>Penulisan Dokumen</label>
                                <textarea name="ket13" rows="3" placeholder="Keterangan" class="form-control mb-2" readonly></textarea>
                                <input type="text" name="nilai13" class="form-control" placeholder="Nilai" readonly>

                            </div>

                        <?php $i++;
                        }
                        ?>
                    </div>
<?php }
            }
        }
    }
}
