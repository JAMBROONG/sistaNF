<h4 class="text-info">Pengajuan Seminar</h4>
<div class="card">
    <div class="card-body">
        <table id="tabel" class="table table-bordered table-striped table-responsive-xl table-hover">
            <thead class="thead-light">
                <tr>
                    <th>No</th>
                    <th>NIM</th>
                    <th>Mahasiswa/i</th>
                    <th>Prodi</th>
                    <th>Seminar</th>
                    <th>Judul</th>
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
                        <td><?= $row->kategori ?></td>
                        <td><?= $row->judul ?></td>
                        <td>
                            <form method="POST" action="<?= base_url('admin/setujui_seminar') ?>">
                                <input type="hidden" name="status" value="Disetujui">
                                <button class="btn btn-success btn-sm" type="submit" name="id" value="<?= $row->id ?>"><i class="fas fa-check"></i> Setujui</button>
                            </form>
                            <button class="btn btn-danger btn-sm" id="custId" data-toggle="modal" data-tipe="seminar_tolak" data-id="<?= $row->id; ?>" data-target="#konfir_delete"> Tolak</button>
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