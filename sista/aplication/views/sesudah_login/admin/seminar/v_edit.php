<h4 class="text-info">Ubah Data Seminar</h4>
<div class="card">
    <div class="card-body">
        <form method="POST" action="<?= base_url('admin/seminar_edit') ?>" id="form_data">
            <div class="row">
                <?php
                foreach ($seminar_lama as $key) {
                ?>
                    <div class="col-6">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label for="nim" class="mt-0 mb-0">NIM</label><br>
                                <span class="help-block text-red" id="msgnim"></span>
                                <input type="text" class="form-control form-control-sm" name="nim" id="nim" placeholder="Nomor NIM mahasiswa" value="<?= $key->nim ?>">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="nama" class="mt-0 mb-0">Nama</label><br>
                                <span class="help-block text-red" id="msgnama"></span>
                                <input type="text" class="form-control form-control-sm" name="nama" id="nama" placeholder="Nama lengkap mahasiswa" value="<?= $key->nama_mahasiswa ?>">
                            </div>

                            <div id="fgprodi" class="form-group col-md-12">
                                <label for="prodi" class="mt-0 mb-0">Prodi</label><br>
                                <span class="help-block text-red" id="msgprodi"></span>
                                <select class="custom-select select2" name="prodi" id="prodi">
                                    <option value="">--Pilih prodi--</option>
                                    <?php

                                    foreach ($prodi as $row) { ?>
                                        <option <?php if ($row->id == $key->prodi_id) {
                                                    echo 'selected';
                                                } ?> value="<?= $row->id ?>"><?= $row->nama ?></option>
                                    <?php  }
                                    ?>
                                </select>
                            </div>

                            <div class="form-group col-md-12">
                                <label for="nama" class="mt-0 mb-0">Semester</label><br>
                                <span class="help-block text-red" id="msgsms"></span>
                                <input type="text" class="form-control form-control-sm" name="semester" id="semester" placeholder="Semester" value="<?= $key->semester ?>">
                            </div>

                            <div class="form-group col-md-12">
                                <div class="form-group mb-0">
                                    <label for="tgl_seminar" class="mt-0 mb-0">Tanggal Seminar </label><br>
                                    <span class="help-block text-red" id="msgtgl"></span>
                                    <div class="input-group date dtpicker">
                                        <input type="text" name="tgl_seminar" id="tgl_seminar" placeholder="Tanggal seminar" class="form-control form-control-sm" value="<?= date('d-m-Y', strtotime($key->tanggal)) ?>">
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
                                    <input type="text" class="form-control form-control-sm" id="jam" name="jam" placeholder="Jam seminar" value="<?= date('H:i', strtotime($key->tanggal)) ?>">

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
                                <input type="text" class="form-control form-control-sm" id="ruangan" name="ruangan" placeholder="Ruangan seminar" value="<?= $key->lokasi ?>">
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">

                            <div class="form-group col-md-12">
                                <label for="judulTA" class="mt-0 mb-0">Judul TA</label><br>
                                <span class="help-block text-red" id="msgjudul"></span>
                                <textarea class="form-control form-control-sm" name="judulTA" id="judulTA" rows="4" placeholder="Masukkan Judul TA"><?= $key->judul ?></textarea>
                            </div>

                            <div id="fgseminar" class="form-group col-md-12">
                                <label for="nm_seminar" class="mt-0 mb-0">Seminar</label><br>
                                <span class="help-block text-red" id="msgseminar"></span>
                                <select name="nm_seminar" id="nm_seminar" class="custom-select select2">
                                    <option value=""></option>
                                    <?php

                                    foreach ($kategori as $row) { ?>
                                        <option <?php if ($row->id == $key->kategori_seminar_id) {
                                                    echo 'selected';
                                                } ?> value="<?= $row->id ?>"><?= $row->nama ?></option>
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
                                        <option <?php if ($row->id == $key->pembimbing_id) {
                                                    echo 'selected';
                                                } ?> value="<?= $row->id ?>"><?= $row->nama ?></option>
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
                                        <option <?php if ($row->id == $key->penguji1_id) {
                                                    echo 'selected';
                                                } ?> value="<?= $row->id ?>"><?= $row->nama ?></option>
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

                                        <option <?php if ($row->id == $key->penguji2_id) {
                                                    echo 'selected';
                                                } ?> value="<?= $row->id ?>"><?= $row->nama ?></option>

                                    <?php  }
                                    ?>
                                </select>
                            </div>

                            <div id="fgstatus" class="form-group col-md-12">
                                <label for="status" class="mt-0 mb-0">Status</label><br>
                                <span class="help-block text-red" id="msgstatus"></span>
                                <select name="status" id="status" class="custom-select select2">
                                    <?php $status = $key->status; ?>
                                    <option value=""></option>
                                    <option <?php $x = 'Disetujui'; if($x == $status){ echo 'selected'; } ?> value="Disetujui">Disetujui</option>
                                    <option <?php $x = 'Ditolak'; if($x == $status){ echo 'selected'; } ?> value="Ditolak">Ditolak</option>
                                    <option <?php $x = 'Menunggu Perssetujuan'; if($x == $status){ echo 'selected'; } ?> value="Menunggu Perssetujuan">Menunggu Persetujuan</option>
                                </select>
                            </div>
                        </div>
                    </div>
            </div>
            <button class="btn btn-primary btn-sm" name="edit" type="submit" value="<?= $key->id ?>" id="btn_edit">Ubah</button>
            <a class="btn btn-danger btn-sm" href="<?= base_url('admin/seminar_data') ?>" id="btn_batal">Batal</a>
        <?php } ?>
        </form>
    </div>
</div>
</div>
</div>
</div>