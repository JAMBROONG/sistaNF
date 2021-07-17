<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Auth extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
    }

    public function index()
    {
        $this->form_validation->set_rules('uname', 'Username', 'trim');
        $this->form_validation->set_rules('pass', 'Pasword', 'trim');
        if ($this->form_validation->run() == false) {
            $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
            $data['page'] = 'login';
            $this->load->view('template/_auth/atas', $data);
            $this->load->view('auth/login');
            $this->load->view('template/bawah');
        } else {
            $this->_login();
        }
    }

    private function _login()
    {
        $uname = htmlspecialchars($this->input->post('uname'));
        $pass = htmlspecialchars($this->input->post('pass'));
        $user = $this->db->query('SELECT * FROM user WHERE username = "' . $uname . '" OR email = "' . $uname . '"')->row_array(); /* mencari user di database sesuai inputan */

        // jika ada user
        if ($user) {
            /* cek password */
            if (password_verify($pass, $user['password'])) { /* jika password benar */
                /* siapkan data session  */
                $data = [
                    'id' => $user['id'],
                    'role' => $user['role']
                ];
                $this->session->set_userdata($data); /* buat session sesuai variabel data */
                $this->db->update('user', array('last_login' => date('Y-m-d H:i:s')), array('id' => $user['id']));
                if ($user['role'] == 'Admin') {
                    redirect('admin');
                } else {
                    redirect('dashboard');
                }
            } else { /* jika password salah */

                /* tampilkan pesan password salah */
                $this->session->set_flashdata('mesage', '
                <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-danger">
                        <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-exclamation-circle"></i> Peringatan!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Password Anda Salah!</p>
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
        } else { /* jika username tidak ada */

            /* tampilkan pesan username tidak terdaftar */
            $this->session->set_flashdata('mesage', '
            <div class="modal" tabindex="-1" role="dialog" id="modal_alert">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content bg-danger">
                    <div class="modal-header">
                        <h5 class="modal-title"><i class="fas fa-exclamation-circle"></i> Peringatan!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <p>Email/Username Tidak Terdaftar! <br>Periksa kembali Email/Username Anda atau <a class="text-white" href="' . base_url("auth/register") . '"><u>Daftar Member baru<u></a></p>
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

    public function register()
    {
        $this->form_validation->set_rules('email', 'Email', 'trim|is_unique[user.email]');
        $this->form_validation->set_rules('uname', 'Username', 'trim|is_unique[user.username]');
        if ($this->form_validation->run() == false) {
            $data['title'] = 'SISTA | Sistem Informasi Seminar Tugas Akhir';
            $data['page'] = 'register';
            $this->load->view('template/_auth/atas', $data);
            $this->load->view('auth/register');
            $this->load->view('template/bawah');
        } else {
            $data = [
                'id' => '',
                'nama' => $this->input->post('nama'),
                'email' => $this->input->post('email'),
                'username' => $this->input->post('uname'),
                'password' => password_hash($this->input->post('pass'), PASSWORD_DEFAULT),
                'role' => 'member',
                'created_at' => date("Y-m-d H:i:s"),
                'last_login' => ''
            ];
            $this->db->insert('user', $data);
            redirect('auth');
        }
    }

    public function logout()
    {
        /* hapus session */
        $this->session->unset_userdata('id');
        $this->session->unset_userdata('role');

        /* tampilkan pesan logout */
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
                    <p>Anda Telah Keluar! <br> Terimakasih Telah Berkunjung!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-light" data-dismiss="modal">Oke</button>
                </div>
                </div>
            </div>
            </div>
        ');
        redirect('home');
    }
}
