<h4 class="text-info">Jadwalkan Seminar</h4>
<div class="card">
    <div class="card-body">
        <form method="POST" action="<?= base_url('admin/setujui_seminar') ?>" id="form_data">
            <div class="row">
                <?php
                foreach ($seminar_lama as $key) {
                ?>
                    <div class="col-6">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label for="nim" class="mt-0 mb-0">NIM</label><br>
                                <span class="help-block text-red" id="msgnim"></span>
                                <input type="text" class="form-control form-control-sm" name="nim" id="nim" readonly placeholder="Nomor NIM mahasiswa" value="<?= $key->nim ?>">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="nama" class="mt-0 mb-0">Nama</label><br>
                                <span class="help-block text-red" id="msgnama"></span>
                                <input type="text" class="form-control form-control-sm" name="nama" id="nama" readonly placeholder="Nama lengkap mahasiswa" value="<?= $key->nama_mahasiswa ?>">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="prodi" class="mt-0 mb-0">Prodi</label><br>
                                <span class="help-block text-red" id="msgprodi"></span>
                                <input type="text" class="form-control form-control-sm" id="prodii" name="prodi" readonly placeholder="prodi" value="<?php

                                                                                                                                                        foreach ($prodi as $row) {
                                                                                                                                                            if ($row->id == $key->prodi_id) {
                                                                                                                                                                echo $row->nama;
                                                                                                                                                            }
                                                                                                                                                        } ?>">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="nama" class="mt-0 mb-0">Semester</label><br>
                                <span class="help-block text-red" id="msgsms"></span>
                                <input type="text" class="form-control form-control-sm" name="semester" id="semester" placeholder="Semester" readonly value="<?= $key->semester ?>">
                            </div>

                            <div class="form-group col-md-12">
                                <div class="form-group mb-0">
                                    <label for="tgl_seminar" class="mt-0 mb-0">Tanggal Seminar </label><br>
                                    <span class="help-block text-red" id="msgtgl"></span>
                                    <div class="input-group date dtpicker">
                                        <input type="text" name="tgl_seminar" id="tgl_seminar" placeholder="Tanggal seminar" class="form-control form-control-sm" value="">
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
                                    <input type="text" class="form-control form-control-sm" id="jam" name="jam" placeholder="Jam seminar" value="">

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
                                <input type="text" class="form-control form-control-sm" id="ruangan" name="ruangan" placeholder="Ruangan seminar" value="">
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">

                            <div class="form-group col-md-12">
                                <label for="judulTA" class="mt-0 mb-0">Judul TA</label><br>
                                <span class="help-block text-red" id="msgjudul"></span>
                                <textarea class="form-control form-control-sm" name="judulTA" id="judulTA" rows="4" readonly placeholder="Masukkan Judul TA"><?= $key->judul ?></textarea>
                            </div>

                            <div class="form-group col-md-12">
                                <label for="seminar" class="mt-0 mb-0">Seminar</label><br>
                                <span class="help-block text-red" id="msgseminar"></span>
                                <input type="text" class="form-control form-control-sm" id="nm_seminarr" name="nm_seminar" readonly placeholder="Seminar" value="<?php

                                                                                                                                                                    foreach ($kategori as $row) {
                                                                                                                                                                        if ($row->id == $key->kategori_seminar_id) {
                                                                                                                                                                            echo $row->nama;
                                                                                                                                                                        }
                                                                                                                                                                    } ?>">
                            </div>

                            <div id="fgpem" class="form-group col-md-12">
                                <label for="pembimbing" class="mt-0 mb-0">Pembimbing</label><br>
                                <span class="help-block text-red" id="msgpem"></span>
                                <input type="text" class="form-control form-control-sm" id="pembimbingg" name="pembimbing" readonly placeholder="pembimbing" value="<?php

                                                                                                                                                                    foreach ($dosen as $row) {
                                                                                                                                                                        if ($row->id == $key->pembimbing_id) {
                                                                                                                                                                            echo $row->nama;
                                                                                                                                                                        }
                                                                                                                                                                    } ?>">
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

                                <input type="hidden" id="statuss" name="status" placeholder="Status" value="Disetujui">

                        </div>
                    </div>
            </div>
            <button class="btn btn-primary btn-sm" name="edit" type="submit" value="<?= $key->id ?>" id="btn_edit">Setujui</button>
            <a class="btn btn-danger btn-sm" href="<?= base_url('admin/seminar_pengajuan_data') ?>" id="btn_batal">Batal</a>
        <?php } ?>
        </form>
    </div>
</div>
</div>
</div>
</div>