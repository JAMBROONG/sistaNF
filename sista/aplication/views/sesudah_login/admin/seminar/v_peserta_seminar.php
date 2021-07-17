<h4 class="text-info">Peserta Seminar</h4>
<div class="card">
    <div class="card-body">
        <table class="noborder">
            <?php
            foreach ($seminar_id as $key) { ?>
                <tr>
                    <td><span>Nama</span></td>
                    <td>:</td>
                    <td><?= $key->nama_mahasiswa ?></td>
                </tr>
                <tr>
                    <td><span>Judul</span></td>
                    <td>:</td>
                    <td><?= $key->judul ?></td>
                </tr>
                <tr>
                    <td><span>Waktu</span></td>
                    <td>:</td>
                    <td><?= tgl_indo($key->tanggal) ?></td>
                </tr>
            <?php }
            ?>
        </table>
        <table id="tabel" class="table table-bordered table-striped table-responsive-xl table-hover">
            <thead class="thead-light">
                <tr>
                    <th>No</th>
                    <th>NIM</th>
                    <th>Mahasiswa/i</th>
                    <th>Prodi</th>
                    <th>Jenjang</th>
                    <th>Status</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $no = 1;
                foreach ($tampil as $row) { ?>
                    <tr>
                        <td><?= $no++ ?></td>
                        <td><?= $row->nim ?></td>
                        <td><?= $row->nama ?></td>
                        <td><?= $row->prodi ?></td>
                        <td><?= $row->jenjang ?></td>
                        <td><?= $row->status ?></td>
                        <td>
                            <?php
                            if ($row->status == 'Menunggu Persetujuan') { ?>
                                <form action="<?= base_url('admin/status_peserta_seminar') ?>" method="POST">
                                    <input type="hidden" name="id_seminar" value="<?= $row->seminar ?>">
                                    <input type="hidden" name="status" value="Disetujui">
                                    <button class="btn btn-success btn-xs" type="submit" name="id" value="<?= $row->id ?>">Setujui</button>
                                </form>
                                <form action="<?= base_url('admin/status_peserta_seminar') ?>" method="POST">
                                    <input type="hidden" name="id_seminar" value="<?= $row->seminar ?>">
                                    <input type="hidden" name="status" value="Ditolak">
                                    <button class="btn btn-danger btn-xs" type="submit" name="id" value="<?= $row->id ?>">Tolak</button>
                                </form>
                            <?php  } else if ($row->status == 'Disetujui') { ?>
                                <button class="btn btn-info btn-xs">Kehadiran</button>
                            <?php } else { ?>
                                <form action="<?= base_url('admin/status_peserta_seminar') ?>" method="POST">
                                    <input type="hidden" name="id_seminar" value="<?= $row->seminar ?>">
                                    <input type="hidden" name="status" value="Disetujui">
                                    <button class="btn btn-success btn-xs" type="submit" name="id" value="<?= $row->id ?>">Setujui</button>
                                </form>
                            <?php }

                            ?>
                        </td>
                    </tr>
                <?php  } ?>
            </tbody>
        </table>
    </div>
</div>
</div>
</div>
</div>


<div class="modal fade bd-example-modal-sm" id="detail" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5><i class="fas fa-search"></i> Detail</h5>
                <button type="button" class="pull-right btn btn-danger btn-sm" data-dismiss="modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body" id="data_detail">

            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="konfir_delete" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-danger">
            <div class="modal-header">
                <h5><i class="fas fa-exclamation-circle"></i> Peringatan!</h5>
                <button type="button" class="pull-right btn btn-danger btn-sm" data-dismiss="modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body" id="data_konfir_delete">
            </div>
        </div>
    </div>
</div>