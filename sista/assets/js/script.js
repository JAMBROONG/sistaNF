$('#modal_alert').modal('show');
const page = $('#page').val();
if (page == "daftar_seminar") {
    $('.dtpicker').datepicker({
        language: 'id',
        weekStart: 1,
        autoclose: true,
        todayBtn: true,
        todayHighlight: true,
        pickerPosition: 'bottom-right',
        format: "dd-mm-yyyy",
        startView: 3,
        minView: 2
    });

    $('#jam').timepicker();
    $.fn.select2.defaults.set("theme", "bootstrap");
    $('#prodi').select2({
        placeholder: "Pilih Prodi",
    });
    $('#nm_seminar').select2({
        placeholder: "Pilih seminar",
    });
    $('#pembimbing').select2({
        placeholder: "Pilih Pembimbing",
    });
    $('#penguji1').select2({
        placeholder: "Pilih Penguji",
    });
    $('#penguji2').select2({
        placeholder: "Pilih Penguji",
    });

    $('#msgnim').hide();
    $('#msgnama').hide();
    $('#msgprodi').hide();
    $('#msgtgl').hide();
    $('#msgjam').hide();
    $('#msgroom').hide();
    $('#msgjudul').hide();
    $('#msgseminar').hide();
    $('#msgpem').hide();
    $('#msgpeng1').hide();
    $('#msgpeng2').hide();
    $('#btn_daftar').click(function () {
        const nim = $('#nim').val();
        const nama = $('#nama').val();
        const prodi = $('#prodi').val();
        const tgl = $('#tgl_seminar').val();
        const jam = $('#jam').val();
        const ruangan = $('#ruangan').val();
        const judul = $('#judulTA').val();
        const nm_seminar = $('#nm_seminar').val();
        const pembimbing = $('#pembimbing').val();
        const penguji1 = $('#penguji1').val();
        const penguji2 = $('#penguji2').val();

        if (nim == "") {
            $('#nim').attr("class", "form-control is-invalid");
            $('#msgnim').show(500);

        } if (nama == "") {
            $('#nama').attr("class", "form-control is-invalid");
            $('#msgnama').show(500);

        } if (prodi == "") {
            $('#fgprodi').attr("class", "form-group col-md-12 is-invalid");
            $('#msgprodi').show(500);

        } if (tgl == "") {
            $('#tgl_seminar').attr("class", "form-control is-invalid");
            $('#msgtgl').show(500);

        } if (jam == "") {
            $('#jam').attr("class", "form-control is-invalid");
            $('#msgjam').show(500);

        } if (ruangan == "") {
            $('#ruangan').attr("class", "form-control is-invalid");
            $('#msgroom').show(500);

        } if (judul == "") {
            $('#judulTA').attr("class", "form-control is-invalid");
            $('#msgjudul').show(500);

        } if (nm_seminar == "") {
            $('#fgseminar').attr("class", "form-group col-md-12 is-invalid");
            $('#msgseminar').show(500);

        } if (pembimbing == "") {
            $('#fgpem').attr("class", "form-group col-md-12 is-invalid");
            $('#msgpem').show(500);

        } if (penguji1 == "") {
            $('#fgpeng1').attr("class", "form-group col-md-12 is-invalid");
            $('#msgpeng1').show(500);

        } if (penguji2 == "") {
            $('#fgpeng2').attr("class", "form-group col-md-12 is-invalid");
            $('#msgpeng2').show(500);

        }
        if (nim != "" && nama != "" && prodi != "" && tgl != "" && jam != "" && ruangan != "" && judul != "" && nm_seminar != "" && pembimbing != "" && penguji1 != "" && penguji2 != "") {
            $('#modal_alert').modal('show');
        }
    });
    $('#btn_oke').click(function () {
        $('#form_data').submit();
    });
    const validnim = document.getElementById('nim');
    validnim.addEventListener("input", function () {
        $('#nim').attr("class", "form-control");
        $('#msgnim').hide(500);
    });
    const validnama = document.getElementById('nama');
    validnama.addEventListener("input", function () {
        $('#nama').attr("class", "form-control");
        $('#msgnama').hide(500);
    });
    const validprodi = document.getElementById('select2-prodi-container');
    validprodi.addEventListener('click', function () {
        $('#fgprodi').attr('class', 'col-sm-12 mb-2');
        $('#msgprodi').hide(500);
    });
    $('#tgl_seminar').click(function () {
        $('#tgl_seminar').attr("class", "form-control");
        $('#msgtgl').hide(500);
    });
    $('#jam').click(function () {
        $('#jam').attr("class", "form-control");
        $('#msgjam').hide(500);
    });
    const validroom = document.getElementById('ruangan');
    validroom.addEventListener("input", function () {
        $('#ruangan').attr("class", "form-control");
        $('#msgroom').hide(500);
    });
    const validjudul = document.getElementById('judulTA');
    validjudul.addEventListener("input", function () {
        $('#judulTA').attr("class", "form-control");
        $('#msgjudul').hide(500);
    });
    const validseminar = document.getElementById('select2-nm_seminar-container');
    validseminar.addEventListener('click', function (e) {
        $('#fgseminar').attr('class', 'col-sm-12 mb-2');
        $('#msgseminar').hide(500);
    });
    const validpem = document.getElementById('select2-pembimbing-container');
    validpem.addEventListener('click', function (e) {
        $('#fgpem').attr('class', 'col-sm-12 mb-2');
        $('#msgpem').hide(500);
    });
    const validpeng1 = document.getElementById('select2-penguji1-container');
    validpeng1.addEventListener('click', function (e) {
        $('#fgpeng1').attr('class', 'col-sm-12 mb-2');
        $('#msgpeng1').hide(500);
    });
    const validpeng2 = document.getElementById('select2-penguji2-container');
    validpeng2.addEventListener('click', function (e) {
        $('#fgpeng2').attr('class', 'col-sm-12 mb-2');
        $('#msgpeng2').hide(500);
    });
} else if (page == "daftar_peserta") {
    $('#msg_nama').hide();
    $('#msg_nim').hide();
    $('#msg_prodi').hide();
    $('#msg_program').hide();
    $.fn.select2.defaults.set("theme", "bootstrap");
    $('#prodi').select2({
        placeholder: "Pilih Prodi",
    });
    $('#btn_daftar').click(function () {
        const nama = $('#nama').val();
        const nim = $('#nim').val();
        const prodi = $('#prodi').val();
        const program = document.getElementsByName('program');
        var program_check = false;

        for (var i = 0; i < program.length; i++) {
            if (program[i].checked == true) {
                program_check = true;
                break;
            }
        }
        if (nama == "") {
            $('#nama').attr('class', 'form-control form-control-sm is-invalid');
            $('#msg_nama').show(600);
        }
        if (nim == "") {
            $('#nim').attr('class', 'form-control form-control-sm is-invalid');
            $('#msg_nim').show(600);
        }
        if (prodi == "") {
            $('#fgprodi').attr('class', 'col-sm-12 mb-2 is-invalid');
            $('#msg_prodi').show(600);
        }
        if (program_check == false) {
            $('#msg_program').show(600);
            for (var i = 0; i < program.length; i++) {
                program[i].className = "custom-control-input is-invalid";
            }
        }
        if (nama != "" && nim != "" && prodi != "" && program_check === true) {
            $('#modal_alert').modal('show');
        }
    });

    $('#btn_oke').click(function () {
        $('#form_data').submit();
        window.location = "jadwal.html";
    });
    const validname = document.getElementById('nama');
    validname.addEventListener('input', function (e) {
        $('#nama').attr('class', 'form-control form-control-sm');
        $('#msg_nama').hide(600);
    });

    const validnim = document.getElementById('nim');
    validnim.addEventListener('input', function (e) {
        $('#nim').attr('class', 'form-control form-control-sm');
        $('#msg_nim').hide(600);
    });

    const validprodi = document.getElementById('select2-prodi-container');
    validprodi.addEventListener('click', function (e) {
        $('#fgprodi').attr('class', 'col-sm-12 mb-2');
        $('#msg_prodi').hide(600);
    });


    const s1reg = document.getElementById('s1reg');
    s1reg.addEventListener('input', function (e) {
        const validprogram = document.getElementsByName('program');
        $('#msg_program').hide(600);
        for (var i = 0; i < validprogram.length; i++) {
            validprogram[i].className = "custom-control-input";
        }
    });

    const s1fast = document.getElementById('s1fast');
    s1fast.addEventListener('input', function (e) {
        const validprogram = document.getElementsByName('program');
        $('#msg_program').hide(600);
        for (var i = 0; i < validprogram.length; i++) {
            validprogram[i].className = "custom-control-input";
        }
    });

    const d3 = document.getElementById('d3');
    d3.addEventListener('input', function (e) {
        const validprogram = document.getElementsByName('program');
        $('#msg_program').hide(600);
        for (var i = 0; i < validprogram.length; i++) {
            validprogram[i].className = "custom-control-input";
        }
    });

    const s2 = document.getElementById('s2');
    s2.addEventListener('input', function (e) {
        const validprogram = document.getElementsByName('program');
        $('#msg_program').hide(600);
        for (var i = 0; i < validprogram.length; i++) {
            validprogram[i].className = "custom-control-input";
        }
    });

    /* ==================== SCRIPT HALAMAN REGISTER ==================== */
} else if (page == "register") {
    $('#msgtru').hide();
    $('#msgfals').hide();
    $('#msgpass').hide();
    $('#msgrepass').hide();
    $('#msgpassleng').hide();
    $('#fgrepass').hide();
    $('#msgnama').hide();
    $('#msgemail').hide();
    $('#emailinvalid').hide();
    $('#msguname').hide();

    $(document).ready(function () {
        $('#msgtru').html('Password cocok!');
        $('#msgfals').html('Password tidak cocok!');
        $('#msgpass').html('Harap isi Password Anda!');
        $('#msgrepass').html('Cocokkan Password terlebih dahulu!');
        $('#msgpassleng').html('Password Minimal 6 Karakter!');
        $('#msgnama').html('Harap isi Nama lengkap Anda!');
        $('#msgemail').html('Harap isi Email Anda!');
        $('#emailinvalid').html('Masukkan Email yang valid!');
        $('#msguname').html('Harap isi Username Anda!');
    });

    $('#nama').on('input', function () {
        $('#msgnama').hide(350);
        $(this).attr("class", "form-control");
    });

    $('#uname').on('input', function () {
        $('#msguname').hide(350);
        $(this).attr("class", "form-control");
    });

    $('#email').on('input', function () {
        $('#msgemail').hide(350);
        $('#emailinvalid').hide(350);
        $(this).attr("class", "form-control");
    });

    function hidemsgpass() {
        $('#msgpass').hide(350);
        $('#pass').attr("class", "form-control");
    }
    function hidemsgrepass() {
        $('#msgrepass').hide(350);
        $('#repass').attr("class", "form-control");
    }
    function cekpass() {
        var pass = $('#pass').val();
        var repass = $('#repass').val();
        if (pass.length <= 5) {
            $('#fgrepass').hide(350);
            $('#repass').val('');
            $('#repass').attr("type", "password");
            $('#repass').attr("class", "form-control");
            $('#iconrepass').attr("class", "fas fa-lock");
            $('#iconpass').attr("class", "fas fa-eye");
            if (pass == "") {
                $('#msgfals').hide(350);
                $('#msgtru').hide(350);
                hidemsgrepass();
                hidemsgpass();
                $('#fgrepass').hide(350);
                $('#msgpassleng').hide(350);
                $('#iconpass').attr("class", "fas fa-lock");
                $('#pass').attr("class", "form-control");
            } else {
                $('#pass').attr("class", "form-control is-invalid");
                $('#msgpass').hide(350);
                $('#msgpassleng').show(350);
                if ($('#pass').attr("type") == "password") {
                    $('#iconpass').attr("class", "fas fa-eye");
                } else if ($('#pass').attr("type") == "text") {
                    $('#iconpass').attr("class", "fas fa-eye-slash");
                }
                return true;
            }
        } else {
            $('#pass').attr("class", "form-control");
            $('#fgrepass').show(350);
            $('#msgpassleng').hide(350);
            if (pass != repass) {
                if (repass == "") {
                    hidemsgrepass();
                    $('#msgfals').hide(350);
                    $('#msgtru').hide(350);
                    $('#iconrepass').attr("class", "fas fa-lock");
                    $('#repass').attr("class", "form-control");
                } else {
                    $('#msgtru').hide(350);
                    $('#msgfals').show(350);
                    $('#msgrepass').hide(350);
                    $('#repass').attr("class", "form-control is-invalid");
                    if ($('#repass').attr("type") == "password") {
                        $('#iconrepass').attr("class", "fas fa-eye");
                    } else if ($('#repass').attr("type") == "text") {
                        $('#iconrepass').attr("class", "fas fa-eye-slash");
                    }
                }
                return false;
            } else {
                if (repass == "") {
                    hidemsgrepass();
                    $('#msgfals').hide(350);
                    $('#msgtru').hide(350);
                } else {
                    $('#msgfals').hide(350);
                    $('#msgtru').show(350);
                    $('#msgrepass').hide(350);
                    $('#repass').attr("class", "form-control");
                    return true;
                }
            }
        }
    }
    $('#liatpass').click(function () {
        if ($('#pass').attr("type") == "password" && ($('#iconpass').attr("class") == "svg-inline--fa fa-eye fa-w-18" || $('#iconpass').attr("class") == "svg-inline--fa fa-eye-slash fa-w-20")) {
            $('#pass').attr("type", "text");
            $('#iconpass').attr("class", "fas fa-eye-slash");
            $('#pass').focus();
        } else if ($('#pass').attr("type") == "text" && ($('#iconpass').attr("class") == "svg-inline--fa fa-eye fa-w-18" || $('#iconpass').attr("class") == "svg-inline--fa fa-eye-slash fa-w-20")) {
            $('#pass').attr("type", "password");
            $('#iconpass').attr("class", "fas fa-eye");
            $('#pass').focus();
        }
    });

    $('#liatrepass').click(function () {
        if ($('#repass').attr("type") == "password" && ($('#iconrepass').attr("class") == "svg-inline--fa fa-eye fa-w-18" || $('#iconrepass').attr("class") == "svg-inline--fa fa-eye-slash fa-w-20")) {
            $('#repass').attr("type", "text");
            $('#iconrepass').attr("class", "fas fa-eye-slash");
            $('#repass').focus();
        } else if ($('#repass').attr("type") == "text" && ($('#iconrepass').attr("class") == "svg-inline--fa fa-eye fa-w-18" || $('#iconrepass').attr("class") == "svg-inline--fa fa-eye-slash fa-w-20")) {
            $('#repass').attr("type", "password");
            $('#iconrepass').attr("class", "fas fa-eye");
            $('#repass').focus();
        }
    });
    $('#form_register').on('submit', function () {
        const nama = $('#nama').val();
        const email = $('#email').val();
        const uname = $('#uname').val();
        const pass = $('#pass').val();
        const repass = $('#repass').val();
        const atps = email.indexOf("@");
        const dots = email.lastIndexOf(".");
        var cek = true;
        if (atps < 1 || dots < atps + 2 || dots + 2 >= email.length) {
            if (email == "") {
                $('#msgemail').show(350);
                $('#email').attr("class", "form-control is-invalid");
                cek = false;
            } else {
                $('#emailinvalid').show(350);
                $('#email').attr("class", "form-control is-invalid");
                cek = false;
            }
        }
        if (nama == "") {
            $('#msgnama').show(350);
            $('#nama').attr("class", "form-control is-invalid");
            cek = false;
        }
        if (uname == "") {
            $('#msguname').show(350);
            $('#uname').attr("class", "form-control is-invalid");
            cek = false;
        }
        if (pass == "") {
            $('#msgpass').show(350);
            $('#pass').attr("class", "form-control is-invalid");
            cek = false;
        }
        if (repass == "") {
            $('#msgrepass').show(350);
            $('#repass').attr("class", "form-control is-invalid");
            cek = false;
        }

        return cek;
    });


    /* ==================== SCRIPT HALAMAN LOGIN ==================== */
} else if (page == "login") {
    $('#msguname').hide();
    $('#msgpass').hide();

    $(document).ready(function () {
        $('#msguname').html('Harap isi Email atau Username Anda!');
        $('#msgpass').html('Harap isi Password Anda!');
    });
    $("#form_login").on('submit', function () {
        const uname = $('#uname').val();
        const pass = $('#pass').val();
        var cek = true;
        if (uname == "") {
            $('#msguname').show(350);
            $('#uname').attr("class", "form-control is-invalid");
            cek = false;
        }
        if (pass == "") {
            $('#msgpass').show(350);
            $('#pass').attr("class", "form-control is-invalid");
            cek = false;
        }
        return cek;
    });

    $('#uname').on('input', function () {
        $('#msguname').hide(350);
        $(this).attr("class", "form-control");
    });

    $('#pass').on('input', function () {
        $('#msgpass').hide(350);
        $(this).attr("class", "form-control");
    });
    $('#liatpass').click(function () {
        if ($('#pass').attr("type") == "password" && ($('#iconpass').attr("class") == "svg-inline--fa fa-eye fa-w-18" || $('#iconpass').attr("class") == "svg-inline--fa fa-eye-slash fa-w-20")) {
            $('#pass').attr("type", "text");
            $('#iconpass').attr("class", "fas fa-eye-slash");
            $('#pass').focus();
        } else if ($('#pass').attr("type") == "text" && ($('#iconpass').attr("class") == "svg-inline--fa fa-eye fa-w-18" || $('#iconpass').attr("class") == "svg-inline--fa fa-eye-slash fa-w-20")) {
            $('#pass').attr("type", "password");
            $('#iconpass').attr("class", "fas fa-eye");
            $('#pass').focus();
        }
    });
    var inputpass = document.getElementById('pass');
    inputpass.addEventListener("input", function () {
        if (this.value == '') {
            $('#iconpass').attr("class", "fas fa-lock");
        } else {
            if (this.getAttribute('type') == 'password') {
                $('#iconpass').attr("class", "svg-inline--fa fa-eye fa-w-18");
            } else {
                $('#iconpass').attr("class", "svg-inline--fa fa-eye-slash fa-w-20");
            }

        }
    });
} else if (page == "profile") {
    $('#upload_form').hide();
    $('#form_nama').hide();
    $('#form_uname').hide();
    $('#form_email').hide();
    $('#form_verif_email').hide();
    $('#emailinvalid').hide();
    $('#msgtru').hide();
    $('#msgfals').hide();
    $('#msgpasslama').hide();
    $('#msgpassbaru').hide();
    $('#msgrepass').hide();
    $('#msgpassleng').hide();
    $('#fgrepass').hide();
    $('#pass_manager').hide();
    $('#simpan_pass').hide();
    function hidemsgpasslama() {
        const pass = $('#passlama').val();
        $('#msgpasslama').hide(350);
        $('#passlama').attr("class", "form-control");
        if (pass == '') {
            $('#iconpasslama').attr("class", "fas fa-lock");
            $('#passlama').attr("type", "password");
        } else {
            if ($('#passlama').attr("type") == "password") {
                $('#iconpasslama').attr("class", "fas fa-eye");
            } else {
                $('#iconpasslama').attr("class", "fas fa-eye-slash");
            }
        }
    }
    function hidemsgpassbaru() {
        $('#msgpassbaru').hide(350);
        $('#passbaru').attr("class", "form-control");
    }
    function hidemsgrepass() {
        $('#msgrepass').hide(350);
        $('#repass').attr("class", "form-control");
    }

    function cekpass() {
        var pass = $('#passbaru').val();
        var repass = $('#repass').val();
        if (pass.length <= 5) {
            $('#fgrepass').hide(350);
            $('#repass').val('');
            $('#repass').attr("type", "password");
            $('#repass').attr("class", "form-control");
            $('#iconrepass').attr("class", "fas fa-lock");
            if (pass == "") {
                $('#msgfals').hide(350);
                $('#msgtru').hide(350);
                hidemsgrepass();
                hidemsgpassbaru();
                $('#fgrepass').hide(350);
                $('#msgpassleng').hide(350);
                $('#iconpassbaru').attr("class", "fas fa-lock");
                $('#passbaru').attr("class", "form-control");
                $('#passbaru').attr("type", "password");
            } else {
                $('#passbaru').attr("class", "form-control is-invalid");
                $('#msgpassbaru').hide(350);
                $('#msgpassleng').show(350);
                if ($('#passbaru').attr("type") == "password") {
                    $('#iconpassbaru').attr("class", "fas fa-eye");
                } else if ($('#passbaru').attr("type") == "text") {
                    $('#iconpassbaru').attr("class", "fas fa-eye-slash");
                }
                return true;
            }
        } else {
            $('#passbaru').attr("class", "form-control");
            $('#fgrepass').show(350);
            $('#msgpassleng').hide(350);
            if (pass != repass) {
                if (repass == "") {
                    hidemsgrepass();
                    $('#msgfals').hide(350);
                    $('#msgtru').hide(350);
                    $('#iconrepass').attr("class", "fas fa-lock");
                    $('#repass').attr("class", "form-control");
                    $('#simpan_pass').hide(350);
                } else {
                    $('#msgtru').hide(350);
                    $('#msgfals').show(350);
                    $('#msgrepass').hide(350);
                    $('#repass').attr("class", "form-control is-invalid");
                    $('#simpan_pass').hide(350);
                    if ($('#repass').attr("type") == "password") {
                        $('#iconrepass').attr("class", "fas fa-eye");
                    } else if ($('#repass').attr("type") == "text") {
                        $('#iconrepass').attr("class", "fas fa-eye-slash");
                    }
                }
                return false;
            } else {
                if (repass == "") {
                    hidemsgrepass();
                    $('#msgfals').hide(350);
                    $('#msgtru').hide(350);
                } else {
                    $('#msgfals').hide(350);
                    $('#msgtru').show(350);
                    $('#msgrepass').hide(350);
                    $('#repass').attr("class", "form-control");
                    $('#simpan_pass').show(350);
                    return true;
                }
            }
        }
    }
    $('#btn_ubah_foto').click(function () {
        $('#upload_form').show(350);
        $('#btn_ubah_foto').hide(350);
    });
    $('#liatpasslama').click(function () {
        if ($('#passlama').attr("type") == "password" && ($('#iconpasslama').attr("class") == "fas fa-eye" || $('#iconpasslama').attr("class") == "fas fa-eye-slash")) {
            $('#passlama').attr("type", "text");
            $('#iconpasslama').attr("class", "fas fa-eye-slash");
            $('#passlama').focus();
        } else if ($('#passlama').attr("type") == "text" && ($('#iconpasslama').attr("class") == "fas fa-eye" || $('#iconpasslama').attr("class") == "fas fa-eye-slash")) {
            $('#passlama').attr("type", "password");
            $('#iconpasslama').attr("class", "fas fa-eye");
            $('#passlama').focus();
        }
    });
    $('#liatpassbaru').click(function () {
        if ($('#passbaru').attr("type") == "password" && ($('#iconpassbaru').attr("class") == "fas fa-eye" || $('#iconpassbaru').attr("class") == "fas fa-eye-slash")) {
            $('#passbaru').attr("type", "text");
            $('#iconpassbaru').attr("class", "fas fa-eye-slash");
            $('#passbaru').focus();
        } else if ($('#passbaru').attr("type") == "text" && ($('#iconpassbaru').attr("class") == "fas fa-eye" || $('#iconpassbaru').attr("class") == "fas fa-eye-slash")) {
            $('#passbaru').attr("type", "password");
            $('#iconpassbaru').attr("class", "fas fa-eye");
            $('#passbaru').focus();
        }
    });
    $('#liatrepass').click(function () {
        if ($('#repass').attr("type") == "password" && ($('#iconrepass').attr("class") == "fas fa-eye" || $('#iconrepass').attr("class") == "fas fa-eye-slash")) {
            $('#repass').attr("type", "text");
            $('#iconrepass').attr("class", "fas fa-eye-slash");
            $('#repass').focus();
        } else if ($('#repass').attr("type") == "text" && ($('#iconrepass').attr("class") == "fas fa-eye" || $('#iconrepass').attr("class") == "fas fa-eye-slash")) {
            $('#repass').attr("type", "password");
            $('#iconrepass').attr("class", "fas fa-eye");
            $('#repass').focus();
        }
    });
    $('#upload_file').click(function () {
        var input = document.getElementById('customFile');
        var image = document.getElementById('img_profile');
        image.src = URL.createObjectURL(input.files[0]);
        $('#upload_form').hide(350);
        $('#btn_ubah_foto').show(350);
        $('#isi_pesan').html('Foto berhasil diubah!');
        $('#modal_alert').modal('show');
    });
    $('#cancel_upload').click(function () {
        $('#upload_form').hide(350);
        $('#btn_ubah_foto').show(350);
    });
    $('#edit_nama').click(function () {
        $('#form_nama').show(350);
        $('#edit_nama').hide(350);
    });
    $('#cancel_nama').click(function () {
        $('#form_nama').hide(350);
        $('#edit_nama').show(350);
    });
    $('#simpan_nama').click(function () {
        var nama = $('#nama').val();
        if (nama != "") {
            $('#td_nama').html(nama);
            $('#nama').val('');
            $('#form_nama').hide(350);
            $('#edit_nama').show(350);
            $('#isi_pesan').html('Nama berhasil diubah!');
            $('#modal_alert').modal('show');
        }
    });
    $('#edit_uname').click(function () {
        $('#form_uname').show(350);
        $('#edit_uname').hide(350);
    });
    $('#cancel_uname').click(function () {
        $('#form_uname').hide(350);
        $('#edit_uname').show(350);
    });
    $('#simpan_uname').click(function () {
        var uname = $('#uname').val();
        if (uname != "") {
            $('#td_uname').html(uname);
            $('#uname').val('');
            $('#form_uname').hide(350);
            $('#edit_uname').show(350);
            $('#isi_pesan').html('Username berhasil diubah!');
            $('#modal_alert').modal('show');
        }
    });
    $('#edit_email').click(function () {
        $('#form_email').show(350);
        $('#edit_email').hide(350);
    });
    $('#cancel_email').click(function () {
        $('#form_email').hide(350);
        $('#edit_email').show(350);
    });
    $('#simpan_email').click(function () {
        const email = $('#email').val();
        if (email != "") {
            const atps = email.indexOf("@");
            const dots = email.lastIndexOf(".");
            if (atps < 1 || dots < atps + 2 || dots + 2 >= email.length) {
                $('#emailinvalid').show(350);
            } else {
                $('#td_email').html(email);
                $('#emailinvalid').hide(350);
                $('#form_verif_email').show(350);
                $('#form_email').hide(350);
                $('#email').val('');
                $('#isi_pesan').html('Email berhasil diubah! <br> Kami telah mengirim 6 digit kode ke email baru Anda.');
                $('#modal_alert').modal('show');
            }
        }
    });
    $('#pindah').click(function () {
        if ($('#pindah').attr("class") == "btn btn-default btn-xs ch-prof") {
            $('#pass_manager').show(350);
            $('#profile_manager').hide(350);
            $('#pindah').attr("class", "btn btn-default btn-xs ch-pass");
            $('#pindah').html('<i class="fas fa-edit"></i> Ubah profile');
        } else {
            $('#profile_manager').show(350);
            $('#pass_manager').hide(350);
            $('#pindah').attr("class", "btn btn-default btn-xs ch-prof");
            $('#pindah').html('<i class="fas fa-edit"></i> Ubah password');
        }
    });
    $('#simpan_pass').click(function () {
        const passlama = $('#passlama').val();
        if (passlama != "member123") {
            $('#isi_pesan').html('Password lama Anda salah! silahkan cek kembali.');
            $('.modal-header').html('<h5><i class="fas fa-exclamation-triangle"></i> Peringatan!</h5>');
        } else {
            $('#profile_manager').show(350);
            $('#pass_manager').hide(350);
            $('#pindah').attr("class", "btn btn-default btn-xs ch-prof");
            $('#pindah').html('<i class="fas fa-edit"></i> Ubah password');
            $('#passlama').val("");
            $('#passbaru').val("");
            $('#repass').val("");
            $('#fgrepass').hide(350);
            $('.modal-header').html('<h5><i class="fas fa-check-circle"></i> Sukses!</h5>');
            $('#isi_pesan').html('Password berhasil diubah!');
        }
        $('#modal_alert').modal('show');
    });
    $('#verif_email').click(function () {
        var verif = $('#verif').val();
        if (verif != "") {
            if (verif == "123456") {
                $('#form_verif_email').hide(350);
                $('#edit_email').show(350);
                $('#isi_pesan').html('Email Anda telah terverifikasi!');
                $('#modal_alert').modal('show');
                $('#verif').val('');
            } else {
                $('#isi_pesan').html('Kode verifikasi yang Anda masukkan salah! <br>Silahkan cek kembali.');
                $('#modal_alert').modal('show');
                $('#verif').val('');
            }
        }
    });
} else if (page == "profile_admin") {
    $('#upload_form').hide();
    $('#form_nama').hide();
    $('#form_uname').hide();
    $('#form_email').hide();
    $('#form_verif_email').hide();
    $('#emailinvalid').hide();
    $('#msgtru').hide();
    $('#msgfals').hide();
    $('#msgpasslama').hide();
    $('#msgpassbaru').hide();
    $('#msgrepass').hide();
    $('#msgpassleng').hide();
    $('#fgrepass').hide();
    $('#pass_manager').hide();
    $('#simpan_pass').hide();
    function hidemsgpasslama() {
        const pass = $('#passlama').val();
        $('#msgpasslama').hide(350);
        $('#passlama').attr("class", "form-control");
        if (pass == '') {
            $('#iconpasslama').attr("class", "fas fa-lock");
            $('#passlama').attr("type", "password");
        } else {
            if ($('#passlama').attr("type") == "password") {
                $('#iconpasslama').attr("class", "fas fa-eye");
            } else {
                $('#iconpasslama').attr("class", "fas fa-eye-slash");
            }
        }
    }
    function hidemsgpassbaru() {
        $('#msgpassbaru').hide(350);
        $('#passbaru').attr("class", "form-control");
    }
    function hidemsgrepass() {
        $('#msgrepass').hide(350);
        $('#repass').attr("class", "form-control");
    }

    function cekpass() {
        var pass = $('#passbaru').val();
        var repass = $('#repass').val();
        if (pass.length <= 5) {
            $('#fgrepass').hide(350);
            $('#repass').val('');
            $('#repass').attr("type", "password");
            $('#repass').attr("class", "form-control");
            $('#iconrepass').attr("class", "fas fa-lock");
            if (pass == "") {
                $('#msgfals').hide(350);
                $('#msgtru').hide(350);
                hidemsgrepass();
                hidemsgpassbaru();
                $('#fgrepass').hide(350);
                $('#msgpassleng').hide(350);
                $('#iconpassbaru').attr("class", "fas fa-lock");
                $('#passbaru').attr("class", "form-control");
                $('#passbaru').attr("type", "password");
            } else {
                $('#passbaru').attr("class", "form-control is-invalid");
                $('#msgpassbaru').hide(350);
                $('#msgpassleng').show(350);
                if ($('#passbaru').attr("type") == "password") {
                    $('#iconpassbaru').attr("class", "fas fa-eye");
                } else if ($('#passbaru').attr("type") == "text") {
                    $('#iconpassbaru').attr("class", "fas fa-eye-slash");
                }
                return true;
            }
        } else {
            $('#passbaru').attr("class", "form-control");
            $('#fgrepass').show(350);
            $('#msgpassleng').hide(350);
            if (pass != repass) {
                if (repass == "") {
                    hidemsgrepass();
                    $('#msgfals').hide(350);
                    $('#msgtru').hide(350);
                    $('#iconrepass').attr("class", "fas fa-lock");
                    $('#repass').attr("class", "form-control");
                    $('#simpan_pass').hide(350);
                } else {
                    $('#msgtru').hide(350);
                    $('#msgfals').show(350);
                    $('#msgrepass').hide(350);
                    $('#repass').attr("class", "form-control is-invalid");
                    $('#simpan_pass').hide(350);
                    if ($('#repass').attr("type") == "password") {
                        $('#iconrepass').attr("class", "fas fa-eye");
                    } else if ($('#repass').attr("type") == "text") {
                        $('#iconrepass').attr("class", "fas fa-eye-slash");
                    }
                }
                return false;
            } else {
                if (repass == "") {
                    hidemsgrepass();
                    $('#msgfals').hide(350);
                    $('#msgtru').hide(350);
                } else {
                    $('#msgfals').hide(350);
                    $('#msgtru').show(350);
                    $('#msgrepass').hide(350);
                    $('#repass').attr("class", "form-control");
                    $('#simpan_pass').show(350);
                    return true;
                }
            }
        }
    }
    $('#btn_ubah_foto').click(function () {
        $('#upload_form').show(350);
        $('#btn_ubah_foto').hide(350);
    });
    $('#liatpasslama').click(function () {
        if ($('#passlama').attr("type") == "password" && ($('#iconpasslama').attr("class") == "fas fa-eye" || $('#iconpasslama').attr("class") == "fas fa-eye-slash")) {
            $('#passlama').attr("type", "text");
            $('#iconpasslama').attr("class", "fas fa-eye-slash");
            $('#passlama').focus();
        } else if ($('#passlama').attr("type") == "text" && ($('#iconpasslama').attr("class") == "fas fa-eye" || $('#iconpasslama').attr("class") == "fas fa-eye-slash")) {
            $('#passlama').attr("type", "password");
            $('#iconpasslama').attr("class", "fas fa-eye");
            $('#passlama').focus();
        }
    });
    $('#liatpassbaru').click(function () {
        if ($('#passbaru').attr("type") == "password" && ($('#iconpassbaru').attr("class") == "fas fa-eye" || $('#iconpassbaru').attr("class") == "fas fa-eye-slash")) {
            $('#passbaru').attr("type", "text");
            $('#iconpassbaru').attr("class", "fas fa-eye-slash");
            $('#passbaru').focus();
        } else if ($('#passbaru').attr("type") == "text" && ($('#iconpassbaru').attr("class") == "fas fa-eye" || $('#iconpassbaru').attr("class") == "fas fa-eye-slash")) {
            $('#passbaru').attr("type", "password");
            $('#iconpassbaru').attr("class", "fas fa-eye");
            $('#passbaru').focus();
        }
    });
    $('#liatrepass').click(function () {
        if ($('#repass').attr("type") == "password" && ($('#iconrepass').attr("class") == "fas fa-eye" || $('#iconrepass').attr("class") == "fas fa-eye-slash")) {
            $('#repass').attr("type", "text");
            $('#iconrepass').attr("class", "fas fa-eye-slash");
            $('#repass').focus();
        } else if ($('#repass').attr("type") == "text" && ($('#iconrepass').attr("class") == "fas fa-eye" || $('#iconrepass').attr("class") == "fas fa-eye-slash")) {
            $('#repass').attr("type", "password");
            $('#iconrepass').attr("class", "fas fa-eye");
            $('#repass').focus();
        }
    });
    $('#upload_file').click(function () {
        var input = document.getElementById('customFile');
        var image = document.getElementById('img_profile');
        image.src = URL.createObjectURL(input.files[0]);
        $('#upload_form').hide(350);
        $('#btn_ubah_foto').show(350);
        $('#isi_pesan').html('Foto berhasil diubah!');
        $('#modal_alert').modal('show');
    });
    $('#cancel_upload').click(function () {
        $('#upload_form').hide(350);
        $('#btn_ubah_foto').show(350);
    });
    $('#edit_nama').click(function () {
        $('#form_nama').show(350);
        $('#edit_nama').hide(350);
    });
    $('#cancel_nama').click(function () {
        $('#form_nama').hide(350);
        $('#edit_nama').show(350);
    });
    $('#simpan_nama').click(function () {
        var nama = $('#nama').val();
        if (nama != "") {
            $('#td_nama').html(nama);
            $('#nama').val('');
            $('#form_nama').hide(350);
            $('#edit_nama').show(350);
            $('#isi_pesan').html('Nama berhasil diubah!');
            $('#modal_alert').modal('show');
        }
    });
    $('#edit_uname').click(function () {
        $('#form_uname').show(350);
        $('#edit_uname').hide(350);
    });
    $('#cancel_uname').click(function () {
        $('#form_uname').hide(350);
        $('#edit_uname').show(350);
    });
    $('#simpan_uname').click(function () {
        var uname = $('#uname').val();
        if (uname != "") {
            $('#td_uname').html(uname);
            $('#uname').val('');
            $('#form_uname').hide(350);
            $('#edit_uname').show(350);
            $('#isi_pesan').html('Username berhasil diubah!');
            $('#modal_alert').modal('show');
        }
    });
    $('#edit_email').click(function () {
        $('#form_email').show(350);
        $('#edit_email').hide(350);
    });
    $('#cancel_email').click(function () {
        $('#form_email').hide(350);
        $('#edit_email').show(350);
    });
    $('#simpan_email').click(function () {
        const email = $('#email').val();
        if (email != "") {
            const atps = email.indexOf("@");
            const dots = email.lastIndexOf(".");
            if (atps < 1 || dots < atps + 2 || dots + 2 >= email.length) {
                $('#emailinvalid').show(350);
            } else {
                $('#td_email').html(email);
                $('#emailinvalid').hide(350);
                $('#form_verif_email').show(350);
                $('#form_email').hide(350);
                $('#email').val('');
                $('#isi_pesan').html('Email berhasil diubah! <br> Kami telah mengirim 6 digit kode ke email baru Anda.');
                $('#modal_alert').modal('show');
            }
        }
    });
    $('#pindah').click(function () {
        if ($('#pindah').attr("class") == "btn btn-default btn-xs ch-prof") {
            $('#pass_manager').show(350);
            $('#profile_manager').hide(350);
            $('#pindah').attr("class", "btn btn-default btn-xs ch-pass");
            $('#pindah').html('<i class="fas fa-edit"></i> Ubah profile');
        } else {
            $('#profile_manager').show(350);
            $('#pass_manager').hide(350);
            $('#pindah').attr("class", "btn btn-default btn-xs ch-prof");
            $('#pindah').html('<i class="fas fa-edit"></i> Ubah password');
        }
    });
    $('#simpan_pass').click(function () {
        const passlama = $('#passlama').val();
        if (passlama != "admin123") {
            $('#isi_pesan').html('Password lama Anda salah! silahkan cek kembali.');
            $('.modal-header').html('<h5><i class="fas fa-exclamation-triangle"></i> Peringatan!</h5>');
        } else {
            $('#profile_manager').show(350);
            $('#pass_manager').hide(350);
            $('#pindah').attr("class", "btn btn-default btn-xs ch-prof");
            $('#pindah').html('<i class="fas fa-edit"></i> Ubah password');
            $('#passlama').val("");
            $('#passbaru').val("");
            $('#repass').val("");
            $('#fgrepass').hide(350);
            $('.modal-header').html('<h5><i class="fas fa-check-circle"></i> Sukses!</h5>');
            $('#isi_pesan').html('Password berhasil diubah!');
        }
        $('#modal_alert').modal('show');
    });
    $('#verif_email').click(function () {
        var verif = $('#verif').val();
        if (verif != "") {
            if (verif == "123456") {
                $('#form_verif_email').hide(350);
                $('#edit_email').show(350);
                $('#isi_pesan').html('Email Anda telah terverifikasi!');
                $('#modal_alert').modal('show');
                $('#verif').val('');
            } else {
                $('#isi_pesan').html('Kode verifikasi yang Anda masukkan salah! <br>Silahkan cek kembali.');
                $('#modal_alert').modal('show');
                $('#verif').val('');
            }
        }
    });
} else if (page == "seminar_data") {
    $(function () {
        $('#tabel').DataTable({
            "order": [],
            "language": {
                "sEmptyTable": "Tidak ada data yang tersedia pada tabel ini. Silahkan Tambah data terlebih dahulu!",
                "sProcessing": "Sedang memproses...",
                "sLengthMenu": "Tampilkan _MENU_ data",
                "sZeroRecords": "Tidak ditemukan data yang sesuai.<br> Periksa kembali pencarian anda atau tambah data baru!",
                "sInfo": "<p class='text-muted'>Menampilkan _START_ sampai _END_ data dari total _TOTAL_ data</p>",
                "sInfoEmpty": "<p class='text-muted'>Menampilkan 0 sampai 0 dari 0 data<p>",
                "sInfoFiltered": "<p class='text-muted'>(disaring dari _MAX_ data keseluruhan)</p>",
                "sInfoPostFix": "",
                "sSearch": "Cari:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Pertama",
                    "sPrevious": "Sebelumnya",
                    "sNext": "Selanjutnya",
                    "sLast": "Terakhir"
                }
            }
        });
    });
    $('#tabel_paginate').ready(function () {
        $('#tabel_paginate').addClass('float-right');
        $('#tabel_filter').addClass('float-right');

    });

    $('#konfir_delete').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_konfir_delete').html(data);
            }
        });
    });
    $('#detail').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_detail').html(data);
            }
        });
    });
    $('#detail_nilai').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_detail_nilai').html(data);
            }
        });
    });


    /* ==================== SCRIPT HALAMAN TAMBAH SEMINAR ==================== */
} else if (page == "seminar_add" || page == "seminar_edit" || page == "setujui_seminar") {
    $('#msgnama').hide();
    $('#msgnim').hide();
    $('#msgsms').hide();
    $('#msgprodi').hide();
    $('#msgtgl').hide();
    $('#msgjam').hide();
    $('#msgroom').hide();
    $('#msgjudul').hide();
    $('#msgseminar').hide();
    $('#msgpem').hide();
    $('#msgpeng1').hide();
    $('#msgpeng2').hide();
    $('#msgstatus').hide();

    $(document).ready(function () {
        $('#msgnama').html('Nama tidak boleh kosong!');
        $('#msgnim').html('Nomor NIM tidak boleh kosong!');
        $('#msgsms').html('Semester tidak boleh kosong!');
        $('#msgprodi').html('Pilih salah satu prodi!');
        $('#msgtgl').html('Tanggal seminar tidak boleh kosong!');
        $('#msgjam').html('Jam seminar tidak boleh kosong!');
        $('#msgroom').html('Nama ruangan seminar tidak boleh kosong!');
        $('#msgjudul').html('Judul TA tidak boleh kosong!');
        $('#msgseminar').html('Pilih salah satu kategori seminar!');
        $('#msgpem').html('Pilih salah satu dosen!');
        $('#msgpeng1').html('Pilih salah satu dosen!');
        $('#msgpeng2').html('Pilih salah satu dosen!');
        $('#msgstatus').html('Pilih salah satu status!');
    });

    $('.dtpicker').datepicker({
        language: 'id',
        weekStart: 1,
        autoclose: true,
        todayBtn: true,
        todayHighlight: true,
        pickerPosition: 'bottom-right',
        format: "dd-mm-yyyy",
        startView: 3,
        minView: 2
    });
    $('#jam').timepicker();
    $.fn.select2.defaults.set("theme", "bootstrap");
    $('#prodi').select2({
        placeholder: "Pilih Prodi",
    });
    $('#nm_seminar').select2({
        placeholder: "Pilih seminar",
    });
    $('#pembimbing').select2({
        placeholder: "Pilih Pembimbing",
    });
    $('#penguji1').select2({
        placeholder: "Pilih Penguji",
    });
    $('#penguji2').select2({
        placeholder: "Pilih Penguji",
    });
    $('#status').select2({
        placeholder: "Pilih Status",
    });

    $('#form_data').on('submit', function () {
        var check = true;
        const nim = $('#nim').val();
        const nama = $('#nama').val();
        const semester = $('#semester').val();
        const prodi = $('#prodi').val();
        const tgl = $('#tgl_seminar').val();
        const jam = $('#jam').val();
        const ruangan = $('#ruangan').val();
        const judul = $('#judulTA').val();
        const nm_seminar = $('#nm_seminar').val();
        const pembimbing = $('#pembimbing').val();
        const penguji1 = $('#penguji1').val();
        const penguji2 = $('#penguji2').val();
        const status = $('#status').val();

        if (nim == "") {
            $('#nim').addClass("is-invalid");
            $('#msgnim').show(400);
            var check = false;

        } if (nama == "") {
            $('#nama').addClass("is-invalid");
            $('#msgnama').show(400);
            var check = false;

        } if (semester == "") {
            $('#semester').addClass("is-invalid");
            $('#msgsms').show(400);
            var check = false;

        } if (prodi == "") {
            $('#fgprodi').addClass("is-invalid");
            $('#msgprodi').show(400);
            var check = false;

        } if (tgl == "") {
            $('#tgl_seminar').addClass("is-invalid");
            $('#msgtgl').show(400);
            var check = false;

        } if (jam == "") {
            $('#jam').addClass("is-invalid");
            $('#msgjam').show(400);
            var check = false;

        } if (ruangan == "") {
            $('#ruangan').addClass("is-invalid");
            $('#msgroom').show(400);
            var check = false;

        } if (judul == "") {
            $('#judulTA').addClass("is-invalid");
            $('#msgjudul').show(400);
            var check = false;

        } if (nm_seminar == "") {
            $('#fgseminar').addClass("is-invalid");
            $('#msgseminar').show(400);
            var check = false;

        } if (pembimbing == "") {
            $('#fgpem').addClass("is-invalid");
            $('#msgpem').show(400);
            var check = false;

        } if (penguji1 == "") {
            $('#fgpeng1').addClass("is-invalid");
            $('#msgpeng1').show(400);
            var check = false;

        } if (penguji2 == "") {
            $('#fgpeng2').addClass("is-invalid");
            $('#msgpeng2').show(400);
            var check = false;

        } if (status == "") {
            $('#fgstatus').addClass("is-invalid");
            $('#msgstatus').show(400);
            var check = false;

        }

        return check;
    });

    $('#nim').on('input', function () {
        $(this).removeClass('is-invalid');
        $('#msgnim').hide(400);
    });

    $('#nama').on('input', function () {
        $(this).removeClass('is-invalid');
        $('#msgnama').hide(400);
    });
    const validprodi = document.getElementById('select2-prodi-container');
    validprodi.addEventListener('click', function () {
        $('#fgprodi').removeClass('is-invalid');
        $('#msgprodi').hide(400);
    });
    $('#semester').on('input', function () {
        $(this).removeClass('is-invalid');
        $('#msgsms').hide(400);
    });
    $('#tgl_seminar').on('click', function () {
        $('#tgl_seminar').removeClass('is-invalid');
        $('#msgtgl').hide(500);
    });
    $('#jam').on('click', function () {
        $('#jam').removeClass('is-invalid');
        $('#msgjam').hide(500);
    });
    $('#ruangan').on('input', function () {
        $(this).removeClass('is-invalid');
        $('#msgroom').hide(400);
    });
    $('#judulTA').on('input', function () {
        $(this).removeClass('is-invalid');
        $('#msgjudul').hide(400);
    });
    const validseminar = document.getElementById('select2-nm_seminar-container');
    validseminar.addEventListener('click', function () {
        $('#fgseminar').removeClass('is-invalid');
        $('#msgseminar').hide(400);
    });
    const validpem = document.getElementById('select2-pembimbing-container');
    validpem.addEventListener('click', function () {
        $('#fgpem').removeClass('is-invalid');
        $('#msgpem').hide(400);
    });
    const validpeng1 = document.getElementById('select2-penguji1-container');
    validpeng1.addEventListener('click', function () {
        $('#fgpeng1').removeClass('is-invalid');
        $('#msgpeng1').hide(400);
    });
    const validpeng2 = document.getElementById('select2-penguji2-container');
    validpeng2.addEventListener('click', function () {
        $('#fgpeng2').removeClass('is-invalid');
        $('#msgpeng2').hide(400);
    });



    /* ==================== SCRIPT HALAMAN KATEGORI SEMINAR ==================== */
} else if (page == "seminar_kategori_data") {
    $('#form_kategori').hide();
    $(function () {
        $('#tabel').DataTable({
            "order": [],
            "language": {
                "sEmptyTable": "Tidak ada data yang tersedia pada tabel ini. Silahkan Tambah data terlebih dahulu!",
                "sProcessing": "Sedang memproses...",
                "sLengthMenu": "Tampilkan _MENU_ data",
                "sZeroRecords": "Tidak ditemukan data yang sesuai.<br> Periksa kembali pencarian anda atau tambah data baru!",
                "sInfo": "<p class='text-muted'>Menampilkan _START_ sampai _END_ data dari total _TOTAL_ data</p>",
                "sInfoEmpty": "<p class='text-muted'>Menampilkan 0 sampai 0 dari 0 data<p>",
                "sInfoFiltered": "<p class='text-muted'>(disaring dari _MAX_ data keseluruhan)</p>",
                "sInfoPostFix": "",
                "sSearch": "Cari:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Pertama",
                    "sPrevious": "Sebelumnya",
                    "sNext": "Selanjutnya",
                    "sLast": "Terakhir"
                }
            }
        });
    });
    $('#tabel_paginate').ready(function () {
        $('#tabel_paginate').addClass('float-right');
        $('#tabel_filter').addClass('float-right');

    });

    function form_gg(e) {
        var rowid = e.getAttribute('data-id');
        var aksii = e.getAttribute('data-tipe');
        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#form_kategori').hide(50);
                $('#form_kategori').html(data);
                $('#msgkategori').hide();
                $('#form_kategori').show(500);
                $('#tbl_add').hide(500);
                $('#formm').on('submit', function () {
                    var check = true;
                    var kategori = $('#nm_kategori').val();
                    if (kategori == '') {
                        $('#nm_kategori').addClass("is-invalid");
                        $('#msgkategori').show(400);
                        check = false;
                    }
                    return check;
                });
                $('#nm_kategori').on('input', function () {
                    $('#nm_kategori').removeClass("is-invalid");
                    $('#msgkategori').hide(400);
                });
                $('#btn_batal').on('click', function () {
                    $('#form_kategori').hide(500);
                    $('#tbl_add').show(400);
                });
            }
        });
    }

    $('#konfir_delete').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_konfir_delete').html(data);
            }
        });
    });

    $('#konfir_delete').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_konfir_delete').html(data);
            }
        });
    });


} else if (page == "seminar_pengajuan_data") {
    $(function () {
        $('#tabel').DataTable({
            "order": [],
            "language": {
                "sEmptyTable": "Tidak ada pengajuan!",
                "sProcessing": "Sedang memproses...",
                "sLengthMenu": "Tampilkan _MENU_ data",
                "sZeroRecords": "Tidak ditemukan data yang sesuai.<br> Periksa kembali pencarian anda atau tambah data baru!",
                "sInfo": "<p class='text-muted'>Menampilkan _START_ sampai _END_ data dari total _TOTAL_ data</p>",
                "sInfoEmpty": "<p class='text-muted'>Menampilkan 0 sampai 0 dari 0 data<p>",
                "sInfoFiltered": "<p class='text-muted'>(disaring dari _MAX_ data keseluruhan)</p>",
                "sInfoPostFix": "",
                "sSearch": "Cari:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Pertama",
                    "sPrevious": "Sebelumnya",
                    "sNext": "Selanjutnya",
                    "sLast": "Terakhir"
                }
            }
        });
    });
    $('#tabel_paginate').ready(function () {
        $('#tabel_paginate').addClass('float-right');
        $('#tabel_filter').addClass('float-right');

    });

    $('#konfir_delete').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');
        console.log(rowid);
        console.log(aksii);

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_konfir_delete').html(data);
                console.log(data);

            }
        });
    });
    $('#detail').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_detail').html(data);
            }
        });
    });

} else if (page == "peserta_seminar_data") {
    $(function () {
        $('#tabel').DataTable({
            "order": [],
            "language": {
                "sEmptyTable": "Tidak ada pengajuan!",
                "sProcessing": "Sedang memproses...",
                "sLengthMenu": "Tampilkan _MENU_ data",
                "sZeroRecords": "Tidak ditemukan data yang sesuai.<br> Periksa kembali pencarian anda atau tambah data baru!",
                "sInfo": "<p class='text-muted'>Menampilkan _START_ sampai _END_ data dari total _TOTAL_ data</p>",
                "sInfoEmpty": "<p class='text-muted'>Menampilkan 0 sampai 0 dari 0 data<p>",
                "sInfoFiltered": "<p class='text-muted'>(disaring dari _MAX_ data keseluruhan)</p>",
                "sInfoPostFix": "",
                "sSearch": "Cari:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Pertama",
                    "sPrevious": "Sebelumnya",
                    "sNext": "Selanjutnya",
                    "sLast": "Terakhir"
                }
            }
        });
    });
    $('#tabel_paginate').ready(function () {
        $('#tabel_paginate').addClass('float-right');
        $('#tabel_filter').addClass('float-right');

    });

    $('#konfir_delete').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_konfir_delete').html(data);
            }
        });
    });
    $('#detail').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_detail').html(data);
            }
        });
    });
} else if (page == "dosen_data") {
    $('#form_dosen').hide();
    $(function () {
        $('#tabel').DataTable({
            "order": [],
            "language": {
                "sEmptyTable": "Tidak ada data yang tersedia pada tabel ini. Silahkan Tambah data terlebih dahulu!",
                "sProcessing": "Sedang memproses...",
                "sLengthMenu": "Tampilkan _MENU_ data",
                "sZeroRecords": "Tidak ditemukan data yang sesuai.<br> Periksa kembali pencarian anda atau tambah data baru!",
                "sInfo": "<p class='text-muted'>Menampilkan _START_ sampai _END_ data dari total _TOTAL_ data</p>",
                "sInfoEmpty": "<p class='text-muted'>Menampilkan 0 sampai 0 dari 0 data<p>",
                "sInfoFiltered": "<p class='text-muted'>(disaring dari _MAX_ data keseluruhan)</p>",
                "sInfoPostFix": "",
                "sSearch": "Cari:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Pertama",
                    "sPrevious": "Sebelumnya",
                    "sNext": "Selanjutnya",
                    "sLast": "Terakhir"
                }
            }
        });
    });
    $('#tabel_paginate').ready(function () {
        $('#tabel_paginate').addClass('float-right');
        $('#tabel_filter').addClass('float-right');

    });

    function form_gg(e) {
        var rowid = e.getAttribute('data-id');
        var aksii = e.getAttribute('data-tipe');
        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#form_dosen').hide(50);
                $('#form_dosen').html(data);
                $('#msgnidn').hide();
                $('#msgnama').hide();
                $('#form_dosen').show(500);
                $('#tbl_add').hide(500);
                $('#formm').on('submit', function () {
                    var check = true;
                    var nidn = $('#nidn').val();
                    var nama = $('#nama').val();
                    if (nama == '') {
                        $('#nama').addClass("is-invalid");
                        $('#msgnama').show(400);
                        check = false;
                    }
                    if (nidn == '') {
                        $('#nidn').addClass("is-invalid");
                        $('#msgnidn').show(400);
                        check = false;
                    }
                    return check;
                });
                $('#nama').on('input', function () {
                    $(this).removeClass("is-invalid");
                    $('#msgnama').hide(400);
                });
                $('#nidn').on('input', function () {
                    $(this).removeClass("is-invalid");
                    $('#msgnidn').hide(400);
                });
                $('#btn_batal').on('click', function () {
                    $('#form_dosen').hide(500);
                    $('#tbl_add').show(400);
                });
            }
        });
    }

    $('#konfir_delete').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_konfir_delete').html(data);
            }
        });
    });


} else if (page == "pengguna_data") {
    $('#form_user').hide();
    $(function () {
        $('#tabel').DataTable({
            "order": [],
            "language": {
                "sEmptyTable": "Tidak ada data yang tersedia pada tabel ini. Silahkan Tambah data terlebih dahulu!",
                "sProcessing": "Sedang memproses...",
                "sLengthMenu": "Tampilkan _MENU_ data",
                "sZeroRecords": "Tidak ditemukan data yang sesuai.<br> Periksa kembali pencarian anda atau tambah data baru!",
                "sInfo": "<p class='text-muted'>Menampilkan _START_ sampai _END_ data dari total _TOTAL_ data</p>",
                "sInfoEmpty": "<p class='text-muted'>Menampilkan 0 sampai 0 dari 0 data<p>",
                "sInfoFiltered": "<p class='text-muted'>(disaring dari _MAX_ data keseluruhan)</p>",
                "sInfoPostFix": "",
                "sSearch": "Cari:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Pertama",
                    "sPrevious": "Sebelumnya",
                    "sNext": "Selanjutnya",
                    "sLast": "Terakhir"
                }
            }
        });
    });
    $('#tabel_paginate').ready(function () {
        $('#tabel_paginate').addClass('float-right');
        $('#tabel_filter').addClass('float-right');

    });

    function form_gg(e) {
        var rowid = e.getAttribute('data-id');
        var aksii = e.getAttribute('data-tipe');
        console.log(rowid);
        console.log(aksii);
        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                console.log(data);
                $('#form_user').hide(50);
                $('#form_user').html(data);
                $('#msgnama').hide();
                $('#msguname').hide();
                $('#msgemail').hide();
                $('#msgrole').hide();
                $('#msgpass').hide();
                $('#form_user').show(500);
                $('#tbl_add').hide(500);
                $.fn.select2.defaults.set("theme", "bootstrap");
                $('#role').select2({
                    placeholder: "Pilih Role Pengguna",
                });
                $('#formm').on('submit', function () {
                    var check = true;
                    var nama = $('#nama').val();
                    var uname = $('#uname').val();
                    var email = $('#email').val();
                    var role = $('#role').val();
                    var pass = $('#pass').val();
                    var mode = $('#mode').val();
                    if (nama == '') {
                        $('#nama').addClass("is-invalid");
                        $('#msgnama').show(400);
                        check = false;
                    }
                    if (uname == '') {
                        $('#uname').addClass("is-invalid");
                        $('#msguname').show(400);
                        check = false;
                    }
                    if (email == '') {
                        $('#email').addClass("is-invalid");
                        $('#msgemail').show(400);
                        check = false;
                    }
                    if (role == '') {
                        $('#fgrole').addClass("is-invalid");
                        $('#msgrole').show(400);
                        check = false;
                    }
                    if (mode == 'add') {
                        if (pass == '') {
                            $('#pass').addClass("is-invalid");
                            $('#msgpass').show(400);
                            check = false;
                        }
                    }
                    return check;
                });
                $('#nama').on('input', function () {
                    $(this).removeClass("is-invalid");
                    $('#msgnama').hide(400);
                });
                $('#uname').on('input', function () {
                    $(this).removeClass("is-invalid");
                    $('#msguname').hide(400);
                });
                $('#email').on('input', function () {
                    $(this).removeClass("is-invalid");
                    $('#msgemail').hide(400);
                });
                $('#select2-role-container').on('click', function () {
                    $('#fgrole').removeClass("is-invalid");
                    $('#msgrole').hide(400);
                });
                $('#pass').on('input', function () {
                    $(this).removeClass("is-invalid");
                    $('#msgpass').hide(400);
                });
                $('#btn_batal').on('click', function () {
                    $('#form_user').hide(500);
                    $('#tbl_add').show(400);
                });
            }
        });
    }

    $('#konfir_delete').on('show.bs.modal', function (e) {
        var rowid = $(e.relatedTarget).data('id');
        var aksii = $(e.relatedTarget).data('tipe');

        $.ajax({
            type: 'POST',
            url: 'http://localhost/sista/admin/ajax',
            data: {
                id: rowid,
                aksi: aksii
            },
            success: function (data) {
                $('#data_konfir_delete').html(data);
            }
        });
    });


}