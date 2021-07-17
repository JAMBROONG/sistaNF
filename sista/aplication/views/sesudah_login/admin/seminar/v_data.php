<h4 class="text-info">Kelola Seminar</h4>
<div class="card">
    <div class="card-body">
        <a href="<?= base_url('admin/seminar_add') ?>" class="btn btn-primary btn-sm mb-2"><i class="fas fa-plus"></i> Tambah Seminar</a>
        <a href="<?= base_url('admin/seminar_kategori_data') ?>" class="btn btn-success btn-sm mb-2"><i class="fas fa-tag"></i> Kategori Seminar</a>
        <a href="<?= base_url('admin/seminar_pengajuan_data') ?>" class="btn btn-warning btn-sm mb-2 pr-0"><i class="fas fa-hourglass-half"></i> Pengajuan Seminar<?php if ($seminar_tunggu){ echo '<span class="badge badge-danger navbar-badge ml-2 mr-0">'.$seminar_tunggu.'</span>'; } ?> </a>
        <table id="tabel" class="table table-bordered table-striped table-responsive-xl table-hover">
            <thead class="thead-light">
                <tr>
                    <th>No</th>
                    <th>NIM</th>
                    <th>Mahasiswa/i</th>
                    <th>Seminar</th>
                    <th>Tanggal/Waktu</th>
                    <th>Ruangan</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $no = 1;
                foreach ($tampil as $row) { ?>
                    <tr id="custId" data-toggle="modal" data-tipe="seminar_detail" data-id="<?= $row->id; ?>" data-target="#detail">
                        <td><?= $no++ ?></td>
                        <td><?= $row->nim ?></td>
                        <td><?= $row->nama ?></td>
                        <td><?= $row->kategori ?></td>
                        <td><?= tgl_indo($row->tanggal) ?></td>
                        <td><?= $row->lokasi ?></td>
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
<div class="modal fade bd-example-modal-lg" id="detail_nilai" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5><i class="fas fa-search"></i> Detail</h5>
                <button type="button" class="pull-right btn btn-danger btn-sm" data-dismiss="modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body" id="data_detail_nilai">
                
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="konfir_delete" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-lg" role="document">
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