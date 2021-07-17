<h4 class="text-info">Penilaian Seminar</h4>
<div class="card">
    <div class="card-body">
        <table class="noborder">
            <?php
            foreach ($tampil as $key) { ?>
                <tr>
                    <td><span>Nama</span></td>
                    <td>:</td>
                    <td><?= $key->nama ?></td>
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
        <form action="nilai" method="post">
            <input type="hidden" name="id" value="<?= $key->id ?>">
            <div class="row mb-3">
                <div class="col">
                    <h4>Pembimbing</h4>
                    <p><?= $key->pembimbing ?></p>
                    <input type="hidden" name="id_dosen1" value="<?= $key->id_pembimbing ?>">
                    <label>Presentasi</label>
                    <input type="hidden" name="tentang11" value="Presentasi">
                    <textarea name="ket11" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai11" class="form-control" placeholder="Nilai">

                    <label>Penguasaan Materi</label>
                    <input type="hidden" name="tentang12" value="Penguasaan Materi">
                    <textarea name="ket12" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai12" class="form-control" placeholder="Nilai">

                    <label>Penulisan Dokumen</label>
                    <input type="hidden" name="tentang13" value="Penulisan Dokumen">
                    <textarea name="ket13" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai13" class="form-control" placeholder="Nilai">

                </div>
                <div class="col">
                    <h4>Penguji 1</h4>
                    <p><?= $key->penguji1 ?></p>
                    <input type="hidden" name="id_dosen2" value="<?= $key->id_penguji1 ?>">
                    <label>Presentasi</label>
                    <input type="hidden" name="tentang21" value="Presentasi">
                    <textarea name="ket21" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai21" class="form-control" placeholder="Nilai">

                    <label>Penguasaan Materi</label>
                    <input type="hidden" name="tentang22" value="Penguasaan Materi">
                    <textarea name="ket22" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai22" class="form-control" placeholder="Nilai">

                    <label>Penulisan Dokumen</label>
                    <input type="hidden" name="tentang23" value="Penulisan Dokumen">
                    <textarea name="ket23" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai23" class="form-control" placeholder="Nilai">

                </div>
                <div class="col">
                    <h4>Penguji 2</h4>
                    <p><?= $key->penguji2 ?></p>
                    <input type="hidden" name="id_dosen3" value="<?= $key->id_penguji2 ?>">
                    <label>Presentasi</label>
                    <input type="hidden" name="tentang31" value="Presentasi">
                    <textarea name="ket31" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai31" class="form-control" placeholder="Nilai">

                    <label>Penguasaan Materi</label>
                    <input type="hidden" name="tentang32" value="Penguasaan Materi">
                    <textarea name="ket32" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai32" class="form-control" placeholder="Nilai">

                    <label>Penulisan Dokumen</label>
                    <input type="hidden" name="tentang33" value="Penulisan Dokumen">
                    <textarea name="ket33" rows="3" placeholder="Keterangan" class="form-control mb-2"></textarea>
                    <input type="text" name="nilai33" class="form-control" placeholder="Nilai">

                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-sm"><i class="fas fa-save"></i> Simpan</button>
            <a href="<?= base_url('admin/seminar_data')?>" class="btn btn-danger btn-sm"><i class="fas fa-times"></i> Batal</a>
        </form>

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