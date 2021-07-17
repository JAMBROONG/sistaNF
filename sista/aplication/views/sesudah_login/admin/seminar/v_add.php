<h4 class="text-info">Tambah Seminar</h4>
<div class="card">
    <div class="card-body">
        <form method="POST" action="<?= base_url('admin/seminar_add') ?>" id="form_data">
            <div class="row">
                <div class="col-6">
                    <div class="row">

                        <div class="form-group col-md-12">
                            <label for="nim" class="mt-0 mb-0">NIM</label><br>
                            <span class="help-block text-red" id="msgnim"></span>
                            <input type="text" class="form-control form-control-sm" name="nim" id="nim" placeholder="Nomor NIM mahasiswa">
                        </div>

                        <div class="form-group col-md-12">
                            <label for="nama" class="mt-0 mb-0">Nama</label><br>
                            <span class="help-block text-red" id="msgnama"></span>
                            <input type="text" class="form-control form-control-sm" name="nama" id="nama" placeholder="Nama lengkap mahasiswa">
                        </div>

                        <div id="fgprodi" class="form-group col-md-12">
                            <label for="prodi" class="mt-0 mb-0">Prodi</label><br>
                            <span class="help-block text-red" id="msgprodi"></span>
                            <select class="custom-select select2" name="prodi" id="prodi">
                                <option value="">--Pilih prodi--</option>
                                <?php

                                foreach ($prodi as $row) { ?>
                                    <option value="<?= $row->id ?>"><?= $row->nama ?></option>
                                <?php  }
                                ?>
                            </select>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="nama" class="mt-0 mb-0">Semester</label><br>
                            <span class="help-block text-red" id="msgsms"></span>
                            <input type="text" class="form-control form-control-sm" name="semester" id="semester" placeholder="Semester">
                        </div>

                        <div class="form-group col-md-12">
                            <div class="form-group mb-0">
                                <label for="tgl_seminar" class="mt-0 mb-0">Tanggal Seminar </label><br>
                                <span class="help-block text-red" id="msgtgl"></span>
                                <div class="input-group date dtpicker">
                                    <input type="text" name="tgl_seminar" id="tgl_seminar" placeholder="Tanggal seminar" class="form-control form-control-sm">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fas fa-calendar-alt"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label class="mt-1 mb-0">Jam Seminar</label><br>
                            <span class="help-block text-red" id="msgjam"></span>
                            <div class="input-group">
                                <input type="text" class="form-control form-control-sm" id="jam" name="jam" placeholder="Jam seminar">

                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="far fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="ruangan" class="mt-0 mb-0">Ruangan</label><br>
                            <span class="help-block text-red" id="msgroom"></span>
                            <input type="text" class="form-control form-control-sm" id="ruangan" name="ruangan" placeholder="Ruangan seminar">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">

                        <div class="form-group col-md-12">
                            <label for="judulTA" class="mt-0 mb-0">Judul TA</label><br>
                            <span class="help-block text-red" id="msgjudul"></span>
                            <textarea class="form-control form-control-sm" name="judulTA" id="judulTA" rows="4" placeholder="Masukkan Judul TA"></textarea>
                        </div>

                        <div id="fgseminar" class="form-group col-md-12">
                            <label for="nm_seminar" class="mt-0 mb-0">Seminar</label><br>
                            <span class="help-block text-red" id="msgseminar"></span>
                            <select name="nm_seminar" id="nm_seminar" class="custom-select select2">
                                <option value=""></option>
                                <?php

                                foreach ($kategori as $row) { ?>
                                    <option value="<?= $row->id ?>"><?= $row->nama ?></option>
                                <?php  }
                                ?>
                            </select>
                        </div>

                        <div id="fgpem" class="form-group col-md-12">
                            <label for="pembimbing" class="mt-0 mb-0">Pembimbing</label><br>
                            <span class="help-block text-red" id="msgpem"></span>
                            <select name="pembimbing" id="pembimbing" class="custom-select select2">
                                <option value=""></option>
                                <?php
                                    
                                foreach ($dosen as $row) { ?>
                                    <option value="<?= $row->id ?>"><?= $row->nama ?></option>
                                <?php  }
                                ?>
                            </select>
                        </div>

                        <div id="fgpeng1" class="form-group col-md-12">
                            <label for="penguji1" class="mt-0 mb-0">Penguji 1</label><br>
                            <span class="help-block text-red" id="msgpeng1"></span>
                            <select name="penguji1" id="penguji1" class="custom-select select2">
                                <option value=""></option>
                                <?php

                                foreach ($dosen as $row) { ?>
                                    <option value="<?= $row->id ?>"><?= $row->nama ?></option>
                                <?php  }
                                ?>
                            </select>
                        </div>

                        <div id="fgpeng2" class="form-group col-md-12">
                            <label for="penguji2" class="mt-0 mb-0">Penguji 2</label><br>
                            <span class="help-block text-red" id="msgpeng2"></span>
                            <select name="penguji2" id="penguji2" class="custom-select select2">
                                <option value=""></option>
                                <?php

                                foreach ($dosen as $row) { ?>
                                    <option value="<?= $row->id ?>"><?= $row->nama ?></option>
                                <?php  }
                                ?>
                            </select>
                        </div>

                        <div id="fgstatus" class="form-group col-md-12">
                                <label for="status" class="mt-0 mb-0">Status</label><br>
                                <span class="help-block text-red" id="msgstatus"></span>
                                <select name="status" id="status" class="custom-select select2">
                                    <option value=""></option>
                                    <option value="Diterima">Disetujui</option>
                                    <option value="Ditolak">Ditolak</option>
                                    <option value="Menunggu Perssetujuan">Menunggu Persetujuan</option>
                                </select>
                            </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary btn-sm" name="add" type="submit" value="add" id="btn_add">Tambah</button>
            <a class="btn btn-danger btn-sm" href="<?= base_url('admin/seminar_data')?>" id="btn_batal">Batal</a>
        </form>
    </div>
</div>
</div>
</div>
</div>