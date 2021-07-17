<?php
    class M_membersista extends CI_Model
    {
        public function prosestambahseminar($data)
        {
            return $this->db->insert('seminar_ta', $data);
        }
        public function prosesdaftarpeserta($data)
        {
            return $this->db->insert('peserta_seminar', $data);
        }

        public function getDataSeminar()
        {
            $query = $this->db->get('seminar_ta');
            return $query -> result();
        }

        public function getDataSeminarPeserta()
        {
            $query = $this->db->get('seminar_ta');
            return $query -> row();
        }

        public function getDataSeminarDetail($id)
        {
            $query = $this->db->get_where('seminar_ta', array('id' => $id));
            return $query -> row();
        }
    }

?>