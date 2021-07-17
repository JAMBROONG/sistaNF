<h4 class="text-info">Pengguna</h4>
<div class="card">
    <div class="card-body">
        <div id="tbl_add">
            <button class="btn btn-primary btn-sm mb-2" onclick="form_gg(this)" data-tipe="user_form"><i class="fas fa-plus"></i> Tambah Pengguna</button>
        </div>
        <div id="form_user">
            
        </div>
        <table id="tabel" class="table table-bordered table-striped table-responsive-xl table-hover">
            <thead class="thead-light">
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Tanggal Dibuat</th>
                    <th>Terakhir Login</th>
                    <th>Aksi</th>

                </tr>
            </thead>
            <tbody>
                <?php
                $no = 1;
                foreach ($tampil as $row) { ?>
                    <tr>
                        <td><?= $no++ ?></td>
                        <td><?= $row->nama ?></td>
                        <td><?= $row->username ?></td>
                        <td><?= $row->email ?></td>
                        <td><?= $row->role ?></td>
                        <td><?= tgl_indo($row->created_at) ?></td>
                        <td><?= tgl_indo($row->last_login) ?></td>
                        <td>
                            <button onclick="form_gg(this)" data-tipe="user_form" data-id="<?= $row->id ?>" class="btn btn-primary btn-xs mb-1"><i class="fas fa-edit"></i> Ubah</button>
                            <button class="btn btn-danger btn-xs mb-1" id="custId" data-toggle="modal" data-tipe="user_delete" data-id="<?= $row->id; ?>" data-target="#konfir_delete"><i class="fas fa-trash"></i> Hapus</button>

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
                <button type="button" class="pull-right btn btn-danger btn-sm" data-dismiss="modal">Tutup</button>
            </div>
            <div class="modal-body" id="data_konfir_delete">
            </div>
        </div>
    </div>
</div>