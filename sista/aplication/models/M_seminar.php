<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_seminar extends CI_Model
{

    // model seminar

    public function getAll()
    {
        $this->db->order_by("tanggal", "asc");
        return $this->db->get_where('v_seminar', ['status' => 'Disetujui'])->result();
    }

    public function getDetail($id)
    {
        return $this->db->get_where('v_seminar', ['id' => $id])->result();
    }
    public function getPengajuan($id)
    {
        return $this->db->get_where('v_seminar_pengajuan', ['id' => $id])->result();
    }

    public function getById($id)
    {
        return $this->db->query('SELECT seminar_ta.*, kategori_seminar.nama AS kategori, prodi.nama AS prodi FROM seminar_ta 
        INNER JOIN kategori_seminar ON seminar_ta.kategori_seminar_id = kategori_seminar.id INNER JOIN prodi ON seminar_ta.prodi_id = prodi.id WHERE seminar_ta.id = ' . $id . '')->result();
    }

    public function save_seminar()
    {
        $data = [
            'id' => '',
            'semester' => $this->input->post('semester'),
            'tanggal' => '' . date('Y-m-d H:i:s', strtotime($this->input->post('tgl_seminar') . ' ' . $this->input->post('jam'))),
            'kategori_seminar_id' => $this->input->post('nm_seminar'),
            'nim' => $this->input->post('nim'),
            'nama_mahasiswa' => $this->input->post('nama'),
            'prodi_id' => $this->input->post('prodi'),
            'judul' => $this->input->post('judulTA'),
            'pembimbing_id' => $this->input->post('pembimbing'),
            'penguji1_id' => $this->input->post('penguji1'),
            'penguji2_id' => $this->input->post('penguji2'),
            'nilai_penguji1' => '',
            'nilai_penguji2' => '',
            'lokasi' => $this->input->post('ruangan'),
            'nilai_akhir' => '',
            'status' => $this->input->post('status'),
            'user_id' => $this->session->userdata('id')
        ];
        return $this->db->insert('seminar_ta', $data);
    }

    public function update_seminar($id)
    {
        $data = [
            'semester' => $this->input->post('semester'),
            'tanggal' => '' . date('Y-m-d H:i:s', strtotime($this->input->post('tgl_seminar') . ' ' . $this->input->post('jam'))),
            'kategori_seminar_id' => $this->input->post('nm_seminar'),
            'nim' => $this->input->post('nim'),
            'nama_mahasiswa' => $this->input->post('nama'),
            'prodi_id' => $this->input->post('prodi'),
            'judul' => $this->input->post('judulTA'),
            'pembimbing_id' => $this->input->post('pembimbing'),
            'penguji1_id' => $this->input->post('penguji1'),
            'penguji2_id' => $this->input->post('penguji2'),
            'lokasi' => $this->input->post('ruangan'),
            'status' => $this->input->post('status')
        ];
        return $this->db->update('seminar_ta', $data, array('id' => $id));
    }

    public function delete_seminar($id)
    {
        return $this->db->delete('seminar_ta', array('id' => $id));
    }

    // model kategori
    public function getAllKategori()
    {
        $this->db->order_by("nama", "asc");
        return $this->db->get('kategori_seminar')->result();
    }

    public function getByIdKategori($id)
    {
        return $this->db->get_where('kategori_seminar', ['id' => $id])->result();
    }

    public function save_kategori()
    {
        $data = [
            'id' => '',
            'nama' => $this->input->post('nm_kategori'),
        ];
        return $this->db->insert('kategori_seminar', $data);
    }

    public function update_kategori($id)
    {
        $data = [
            'nama' => $this->input->post('nm_kategori'),
        ];
        return $this->db->update('kategori_seminar', $data, array('id' => $id));
    }

    public function delete_kategori($id)
    {
        return $this->db->delete('kategori_seminar', array('id' => $id));
    }

    public function setujui_seminar($id)
    {
        $data = [
            'tanggal' => '' . date('Y-m-d H:i:s', strtotime($this->input->post('tgl_seminar') . ' ' . $this->input->post('jam'))),
            'penguji1_id' => $this->input->post('penguji1'),
            'penguji2_id' => $this->input->post('penguji2'),
            'lokasi' => $this->input->post('ruangan'),
            'status' => $this->input->post('status')
        ];
        return $this->db->update('seminar_ta', $data, array('id' => $id));
    }
    public function tolak_seminar($id)
    {
        $data = [
            'status' => $this->input->post('status')
        ];
        return $this->db->update('seminar_ta', $data, array('id' => $id));
    }
    public function status_peserta_seminar($id)
    {
        $data = [
            'status' => $this->input->post('status')
        ];
        return $this->db->update('peserta_seminar', $data, array('id' => $id));
    }

    public function getPesertaSeminar($id)
    {
        $this->db->order_by("nama", "asc");
        return $this->db->query('SELECT peserta_seminar.id AS id, seminar_ta.id AS seminar, peserta_seminar.nama
         AS nama, peserta_seminar.nim, prodi.nama AS prodi, jenjang, peserta_seminar.status  FROM peserta_seminar 
         INNER JOIN prodi ON peserta_seminar.prodi_id = prodi.id INNER JOIN seminar_ta ON peserta_seminar.seminar_id = seminar_ta.id WHERE seminar_id = ' . $id . '')->result();
    }

    public function getAllDosen()
    {
        $this->db->order_by("nama", "asc");
        return $this->db->get('dosen')->result();
    }

    public function getByIdDosen($id)
    {
        return $this->db->get_where('dosen', ['id' => $id])->result();
    }

    public function save_dosen()
    {
        $data = [
            'id' => '',
            'nidn' => $this->input->post('nidn'),
            'nama' => $this->input->post('nama'),
        ];
        return $this->db->insert('dosen', $data);
    }

    public function update_dosen($id)
    {
        $data = [
            'nidn' => $this->input->post('nidn'),
            'nama' => $this->input->post('nama'),
        ];
        return $this->db->update('dosen', $data, array('id' => $id));
    }

    public function delete_dosen($id)
    {
        return $this->db->delete('dosen', array('id' => $id));
    }

    public function getAllUser()
    {
        $this->db->order_by("nama", "asc");
        return $this->db->get('user')->result();
    }

    public function getByIdUser($id)
    {
        return $this->db->get_where('user', ['id' => $id])->result();
    }

    public function nilai()
    {
        $nilai_akhir = 0;
        for ($i = 1; $i <= 3; $i++) {
            $total = 0;
            for ($j = 1; $j <= 3; $j++) {
                $q1 = $this->db->insert('penilaian', [
                    'dosen_id' => $this->input->post('id_dosen' . $i . ''),
                    'seminar_id' => $this->input->post('id'), 'penilaian_tentang' => $this->input->post('tentang' . $i . $j),
                    'keterangan' => $this->input->post('ket' . $i . '' . $j), 'nilai' => $this->input->post('nilai' . $i . $j)
                ]);
                $total += $this->input->post('nilai' . $i . $j);
            }
            if ($i < 2) {
                $q2 = $this->db->update('seminar_ta', ['nilai_pembimbing' => $total / 3], ['id' => $this->input->post('id')]);
            } else {
                $y = $i - 1;
                $q2 = $this->db->update('seminar_ta', ['nilai_penguji' . $y . '' => $total / 3], ['id' => $this->input->post('id')]);
            }
            $nilai_akhir += ($total / 3);
        }
        $q3 = $this->db->update('seminar_ta', ['nilai_akhir' => $nilai_akhir / 3], ['id' => $this->input->post('id')]);
        if ($q1 && $q2 && $q3) {
            return true;
        } else {
            return false;
        }
    }
}
