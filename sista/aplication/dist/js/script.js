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
  function hidemsgnama() {
    $('#msgnama').hide(350);
    $('#nama').attr("class", "form-control");
  }
  function hidemsguname() {
    $('#msguname').hide(350);
    $('#uname').attr("class", "form-control");
  }
  function hidemsgemail() {
    $('#msgemail').hide(350);
    $('#emailinvalid').hide(350);
    $('#email').attr("class", "form-control");
  }
  function hidemsguname() {
    $('#msguname').hide(350);
    $('#uname').attr("class", "form-control");
  }
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
    if ($('#pass').attr("type") == "password" && ($('#iconpass').attr("class") == "fas fa-eye" || $('#iconpass').attr("class") == "fas fa-eye-slash")) {
      $('#pass').attr("type", "text");
      $('#iconpass').attr("class", "fas fa-eye-slash");
      $('#pass').focus();
    } else if ($('#pass').attr("type") == "text" && ($('#iconpass').attr("class") == "fas fa-eye" || $('#iconpass').attr("class") == "fas fa-eye-slash")) {
      $('#pass').attr("type", "password");
      $('#iconpass').attr("class", "fas fa-eye");
      $('#pass').focus();
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
  $('#btn_daftar').click(function () {
    const nama = $('#nama').val();
    const email = $('#email').val();
    const uname = $('#uname').val();
    const pass = $('#pass').val();
    const repass = $('#repass').val();
    const atps = email.indexOf("@");
    const dots = email.lastIndexOf(".");
    var cekemail = false;
    if (atps < 1 || dots < atps + 2 || dots + 2 >= email.length) {
      if (email == "") {
        $('#msgemail').show(350);
        $('#email').attr("class", "form-control is-invalid");
      } else {
        $('#emailinvalid').show(350);
        $('#email').attr("class", "form-control is-invalid");
      }
    } else {
      cekemail = true;
    }
    if (nama == "") {
      $('#msgnama').show(350);
      $('#nama').attr("class", "form-control is-invalid");
    }
    if (uname == "") {
      $('#msguname').show(350);
      $('#uname').attr("class", "form-control is-invalid");
    }
    if (pass == "") {
      $('#msgpass').show(350);
      $('#pass').attr("class", "form-control is-invalid");
    }
    if (repass == "") {
      $('#msgrepass').show(350);
      $('#repass').attr("class", "form-control is-invalid");
    }

    if (nama != "" && uname != "" && pass != "" && repass != "" && cekemail == true) {
      $('#modal_alert').modal('show');
    }
  });
} else if (page == "login") {
  $("#btn_login").click(function () {
    const uname = $('#uname').val();
    const pass = $('#pass').val();
    if (uname == "admin01" && pass == "admin123") {
      window.location = "../../pages/sesudah/admin/index.html";
    } else if (uname == "member01" && pass == "member123") {
      window.location = "../../pages/sesudah/member/index.html";
    } else {
      console.log("login gagal");
      $('#modal_alert').modal('show');
    }
  });
  $('#liatpass').click(function () {
    if ($('#pass').attr("type") == "password" && ($('#iconpass').attr("class") == "fas fa-eye" || $('#iconpass').attr("class") == "fas fa-eye-slash")) {
      $('#pass').attr("type", "text");
      $('#iconpass').attr("class", "fas fa-eye-slash");
      $('#pass').focus();
    } else if ($('#pass').attr("type") == "text" && ($('#iconpass').attr("class") == "fas fa-eye" || $('#iconpass').attr("class") == "fas fa-eye-slash")) {
      $('#pass').attr("type", "password");
      $('#iconpass').attr("class", "fas fa-eye");
      $('#pass').focus();
    }
  });
  var inputpass = document.getElementById('pass');
  inputpass.addEventListener("input", function () {
    const typeinput = $('#pass').attr("type");
    const pass = $('#pass').val();
    if (pass == "") {
      $('#iconpass').attr("class", "fas fa-lock");
    } else {
      if (typeinput == "password") {
        $('#iconpass').attr("class", "fas fa-eye");
      } else {
        $('#iconpass').attr("class", "fas fa-eye-slash");
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
} else if (page == "daftar_seminar_admin") {
  $('#modaldiego').on('show.bs.modal', function () {

    $(this).find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide();
    $(this).find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide();
    $(this).find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali, #data_kosong').hide();

    $(this).find('#hapus_wawan').click(function () {
      $('#modaldiego').find('#wawan').hide(500);
    });
    $(this).find('#edit_wawan').click(function () {
      $('#modaldiego').find('#edit_wawan, #hapus_wawan').hide(500);
      $('#modaldiego').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').show(500);
    });
    $(this).find('#batal_wawan').click(function () {
      $('#modaldiego').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide(500);
      $('#modaldiego').find('#edit_wawan, #hapus_wawan').show(500);
    });
    $(this).find('#simpan_wawan').click(function () {
      const nim = $('#modaldiego').find('#edit_nim_wawan').val();
      const nama = $('#modaldiego').find('#edit_nama_wawan').val();
      const prodi = $('#modaldiego').find('#edit_prodi_wawan').val();
      const program = $('#modaldiego').find('#edit_program_wawan').val();
      const status = $('#modaldiego').find('#edit_status_wawan').val();
      $('#modaldiego').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide(500);
      $('#modaldiego').find('#edit_wawan, #hapus_wawan').show(500);
      if (nim != "") {
        $('#modaldiego').find('#nim_wawan').html(nim);
      } if (nama != "") {
        $('#modaldiego').find('#nama_wawan').html(nama);
      } if (prodi != "") {
        $('#modaldiego').find('#prodi_wawan').html(prodi);
      } if (program != "") {
        $('#modaldiego').find('#program_wawan').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modaldiego').find('#status_wawan').attr("class", "text-green");
        } else {
          $('#modaldiego').find('#status_wawan').attr("class", "text-red");
        }
        $('#modaldiego').find('#status_wawan').html(status);
      }
      $('#modaldiego').find('#edit_nim_wawan').val("");
      $('#modaldiego').find('#edit_nama_wawan').val("");
      $('#modaldiego').find('#edit_prodi_wawan').val("");
      $('#modaldiego').find('#edit_program_wawan').val("");
      $('#modaldiego').find('#edit_status_wawan').val("");
    });
    $(this).find('#hapus_ali').click(function () {
      $('#modaldiego').find('#ali').hide(500);
    });
    $(this).find('#edit_ali').click(function () {
      $('#modaldiego').find('#edit_ali, #hapus_ali').hide(500);
      $('#modaldiego').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').show(500);
    });
    $(this).find('#batal_ali').click(function () {
      $('#modaldiego').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').hide(500);
      $('#modaldiego').find('#edit_ali, #hapus_ali').show(500);
    });
    $(this).find('#simpan_ali').click(function () {
      const nim = $('#modaldiego').find('#edit_nim_ali').val();
      const nama = $('#modaldiego').find('#edit_nama_ali').val();
      const prodi = $('#modaldiego').find('#edit_prodi_ali').val();
      const program = $('#modaldiego').find('#edit_program_ali').val();
      const status = $('#modaldiego').find('#edit_status_ali').val();
      $('#modaldiego').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').hide(500);
      $('#modaldiego').find('#edit_ali, #hapus_ali').show(500);
      if (nim != "") {
        $('#modaldiego').find('#nim_ali').html(nim);
      } if (nama != "") {
        $('#modaldiego').find('#nama_ali').html(nama);
      } if (prodi != "") {
        $('#modaldiego').find('#prodi_ali').html(prodi);
      } if (program != "") {
        $('#modaldiego').find('#program_ali').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modaldiego').find('#status_ali').attr("class", "text-green");
        } else {
          $('#modaldiego').find('#status_ali').attr("class", "text-red");
        }
        $('#modaldiego').find('#status_ali').html(status);
      }
      $('#modaldiego').find('#edit_nim_ali').val("");
      $('#modaldiego').find('#edit_nama_ali').val("");
      $('#modaldiego').find('#edit_prodi_ali').val("");
      $('#modaldiego').find('#edit_program_ali').val("");
      $('#modaldiego').find('#edit_status_ali').val("");
    });

    $(this).find('#hapus_wati').click(function () {
      $('#modaldiego').find('#wati').hide(500);
    });
    $(this).find('#edit_wati').click(function () {
      $('#modaldiego').find('#edit_wati, #hapus_wati').hide(500);
      $('#modaldiego').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').show(500);
    });
    $(this).find('#batal_wati').click(function () {
      $('#modaldiego').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide(500);
      $('#modaldiego').find('#edit_wati, #hapus_wati').show(500);
    });
    $(this).find('#simpan_wati').click(function () {
      const nim = $('#modaldiego').find('#edit_nim_wati').val();
      const nama = $('#modaldiego').find('#edit_nama_wati').val();
      const prodi = $('#modaldiego').find('#edit_prodi_wati').val();
      const program = $('#modaldiego').find('#edit_program_wati').val();
      const status = $('#modaldiego').find('#edit_status_wati').val();
      $('#modaldiego').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide(500);
      $('#modaldiego').find('#edit_wati, #hapus_wati').show(500);
      if (nim != "") {
        $('#modaldiego').find('#nim_wati').html(nim);
      } if (nama != "") {
        $('#modaldiego').find('#nama_wati').html(nama);
      } if (prodi != "") {
        $('#modaldiego').find('#prodi_wati').html(prodi);
      } if (program != "") {
        $('#modaldiego').find('#program_wati').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modaldiego').find('#status_wati').attr("class", "text-green");
        } else {
          $('#modaldiego').find('#status_wati').attr("class", "text-red");
        }
        $('#modaldiego').find('#status_wati').html(status);
      }
      $('#modaldiego').find('#edit_nim_wati').val("");
      $('#modaldiego').find('#edit_nama_wati').val("");
      $('#modaldiego').find('#edit_prodi_wati').val("");
      $('#modaldiego').find('#edit_program_wati').val("");
      $('#modaldiego').find('#edit_status_wati').val("");
    });
  });
  $('#modalahmad').on('show.bs.modal', function () {

    $(this).find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide();
    $(this).find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide();
    $(this).find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali, #data_kosong').hide();

    $(this).find('#hapus_wawan').click(function () {
      $('#modalahmad').find('#wawan').hide(500);
    });
    $(this).find('#edit_wawan').click(function () {
      $('#modalahmad').find('#edit_wawan, #hapus_wawan').hide(500);
      $('#modalahmad').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').show(500);
    });
    $(this).find('#batal_wawan').click(function () {
      $('#modalahmad').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide(500);
      $('#modalahmad').find('#edit_wawan, #hapus_wawan').show(500);
    });
    $(this).find('#simpan_wawan').click(function () {
      const nim = $('#modalahmad').find('#edit_nim_wawan').val();
      const nama = $('#modalahmad').find('#edit_nama_wawan').val();
      const prodi = $('#modalahmad').find('#edit_prodi_wawan').val();
      const program = $('#modalahmad').find('#edit_program_wawan').val();
      const status = $('#modalahmad').find('#edit_status_wawan').val();
      $('#modalahmad').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide(500);
      $('#modalahmad').find('#edit_wawan, #hapus_wawan').show(500);
      if (nim != "") {
        $('#modalahmad').find('#nim_wawan').html(nim);
      } if (nama != "") {
        $('#modalahmad').find('#nama_wawan').html(nama);
      } if (prodi != "") {
        $('#modalahmad').find('#prodi_wawan').html(prodi);
      } if (program != "") {
        $('#modalahmad').find('#program_wawan').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modalahmad').find('#status_wawan').attr("class", "text-green");
        } else {
          $('#modalahmad').find('#status_wawan').attr("class", "text-red");
        }
        $('#modalahmad').find('#status_wawan').html(status);
      }
      $('#modalahmad').find('#edit_nim_wawan').val("");
      $('#modalahmad').find('#edit_nama_wawan').val("");
      $('#modalahmad').find('#edit_prodi_wawan').val("");
      $('#modalahmad').find('#edit_program_wawan').val("");
      $('#modalahmad').find('#edit_status_wawan').val("");
    });
    $(this).find('#hapus_ali').click(function () {
      $('#modalahmad').find('#ali').hide(500);
    });
    $(this).find('#edit_ali').click(function () {
      $('#modalahmad').find('#edit_ali, #hapus_ali').hide(500);
      $('#modalahmad').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').show(500);
    });
    $(this).find('#batal_ali').click(function () {
      $('#modalahmad').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').hide(500);
      $('#modalahmad').find('#edit_ali, #hapus_ali').show(500);
    });
    $(this).find('#simpan_ali').click(function () {
      const nim = $('#modalahmad').find('#edit_nim_ali').val();
      const nama = $('#modalahmad').find('#edit_nama_ali').val();
      const prodi = $('#modalahmad').find('#edit_prodi_ali').val();
      const program = $('#modalahmad').find('#edit_program_ali').val();
      const status = $('#modalahmad').find('#edit_status_ali').val();
      $('#modalahmad').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').hide(500);
      $('#modalahmad').find('#edit_ali, #hapus_ali').show(500);
      if (nim != "") {
        $('#modalahmad').find('#nim_ali').html(nim);
      } if (nama != "") {
        $('#modalahmad').find('#nama_ali').html(nama);
      } if (prodi != "") {
        $('#modalahmad').find('#prodi_ali').html(prodi);
      } if (program != "") {
        $('#modalahmad').find('#program_ali').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modalahmad').find('#status_ali').attr("class", "text-green");
        } else {
          $('#modalahmad').find('#status_ali').attr("class", "text-red");
        }
        $('#modalahmad').find('#status_ali').html(status);
      }
      $('#modalahmad').find('#edit_nim_ali').val("");
      $('#modalahmad').find('#edit_nama_ali').val("");
      $('#modalahmad').find('#edit_prodi_ali').val("");
      $('#modalahmad').find('#edit_program_ali').val("");
      $('#modalahmad').find('#edit_status_ali').val("");
    });

    $(this).find('#hapus_wati').click(function () {
      $('#modalahmad').find('#wati').hide(500);
    });
    $(this).find('#edit_wati').click(function () {
      $('#modalahmad').find('#edit_wati, #hapus_wati').hide(500);
      $('#modalahmad').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').show(500);
    });
    $(this).find('#batal_wati').click(function () {
      $('#modalahmad').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide(500);
      $('#modalahmad').find('#edit_wati, #hapus_wati').show(500);
    });
    $(this).find('#simpan_wati').click(function () {
      const nim = $('#modalahmad').find('#edit_nim_wati').val();
      const nama = $('#modalahmad').find('#edit_nama_wati').val();
      const prodi = $('#modalahmad').find('#edit_prodi_wati').val();
      const program = $('#modalahmad').find('#edit_program_wati').val();
      const status = $('#modalahmad').find('#edit_status_wati').val();
      $('#modalahmad').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide(500);
      $('#modalahmad').find('#edit_wati, #hapus_wati').show(500);
      if (nim != "") {
        $('#modalahmad').find('#nim_wati').html(nim);
      } if (nama != "") {
        $('#modalahmad').find('#nama_wati').html(nama);
      } if (prodi != "") {
        $('#modalahmad').find('#prodi_wati').html(prodi);
      } if (program != "") {
        $('#modalahmad').find('#program_wati').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modalahmad').find('#status_wati').attr("class", "text-green");
        } else {
          $('#modalahmad').find('#status_wati').attr("class", "text-red");
        }
        $('#modalahmad').find('#status_wati').html(status);
      }
      $('#modalahmad').find('#edit_nim_wati').val("");
      $('#modalahmad').find('#edit_nama_wati').val("");
      $('#modalahmad').find('#edit_prodi_wati').val("");
      $('#modalahmad').find('#edit_program_wati').val("");
      $('#modalahmad').find('#edit_status_wati').val("");
    });
  });
  $('#modalfradelina').on('show.bs.modal', function () {

    $(this).find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide();
    $(this).find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide();
    $(this).find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali, #data_kosong').hide();

    $(this).find('#hapus_wawan').click(function () {
      $('#modalfradelina').find('#wawan').hide(500);
    });
    $(this).find('#edit_wawan').click(function () {
      $('#modalfradelina').find('#edit_wawan, #hapus_wawan').hide(500);
      $('#modalfradelina').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').show(500);
    });
    $(this).find('#batal_wawan').click(function () {
      $('#modalfradelina').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide(500);
      $('#modalfradelina').find('#edit_wawan, #hapus_wawan').show(500);
    });
    $(this).find('#simpan_wawan').click(function () {
      const nim = $('#modalfradelina').find('#edit_nim_wawan').val();
      const nama = $('#modalfradelina').find('#edit_nama_wawan').val();
      const prodi = $('#modalfradelina').find('#edit_prodi_wawan').val();
      const program = $('#modalfradelina').find('#edit_program_wawan').val();
      const status = $('#modalfradelina').find('#edit_status_wawan').val();
      $('#modalfradelina').find('#edit_nim_wawan, #edit_nama_wawan, #edit_prodi_wawan, #edit_program_wawan, #edit_status_wawan, #simpan_wawan, #batal_wawan').hide(500);
      $('#modalfradelina').find('#edit_wawan, #hapus_wawan').show(500);
      if (nim != "") {
        $('#modalfradelina').find('#nim_wawan').html(nim);
      } if (nama != "") {
        $('#modalfradelina').find('#nama_wawan').html(nama);
      } if (prodi != "") {
        $('#modalfradelina').find('#prodi_wawan').html(prodi);
      } if (program != "") {
        $('#modalfradelina').find('#program_wawan').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modalfradelina').find('#status_wawan').attr("class", "text-green");
        } else {
          $('#modalfradelina').find('#status_wawan').attr("class", "text-red");
        }
        $('#modalfradelina').find('#status_wawan').html(status);
      }
      $('#modalfradelina').find('#edit_nim_wawan').val("");
      $('#modalfradelina').find('#edit_nama_wawan').val("");
      $('#modalfradelina').find('#edit_prodi_wawan').val("");
      $('#modalfradelina').find('#edit_program_wawan').val("");
      $('#modalfradelina').find('#edit_status_wawan').val("");
    });
    $(this).find('#hapus_ali').click(function () {
      $('#modalfradelina').find('#ali').hide(500);
    });
    $(this).find('#edit_ali').click(function () {
      $('#modalfradelina').find('#edit_ali, #hapus_ali').hide(500);
      $('#modalfradelina').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').show(500);
    });
    $(this).find('#batal_ali').click(function () {
      $('#modalfradelina').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').hide(500);
      $('#modalfradelina').find('#edit_ali, #hapus_ali').show(500);
    });
    $(this).find('#simpan_ali').click(function () {
      const nim = $('#modalfradelina').find('#edit_nim_ali').val();
      const nama = $('#modalfradelina').find('#edit_nama_ali').val();
      const prodi = $('#modalfradelina').find('#edit_prodi_ali').val();
      const program = $('#modalfradelina').find('#edit_program_ali').val();
      const status = $('#modalfradelina').find('#edit_status_ali').val();
      $('#modalfradelina').find('#edit_nim_ali, #edit_nama_ali, #edit_prodi_ali, #edit_program_ali, #edit_status_ali, #simpan_ali, #batal_ali').hide(500);
      $('#modalfradelina').find('#edit_ali, #hapus_ali').show(500);
      if (nim != "") {
        $('#modalfradelina').find('#nim_ali').html(nim);
      } if (nama != "") {
        $('#modalfradelina').find('#nama_ali').html(nama);
      } if (prodi != "") {
        $('#modalfradelina').find('#prodi_ali').html(prodi);
      } if (program != "") {
        $('#modalfradelina').find('#program_ali').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modalfradelina').find('#status_ali').attr("class", "text-green");
        } else {
          $('#modalfradelina').find('#status_ali').attr("class", "text-red");
        }
        $('#modalfradelina').find('#status_ali').html(status);
      }
      $('#modalfradelina').find('#edit_nim_ali').val("");
      $('#modalfradelina').find('#edit_nama_ali').val("");
      $('#modalfradelina').find('#edit_prodi_ali').val("");
      $('#modalfradelina').find('#edit_program_ali').val("");
      $('#modalfradelina').find('#edit_status_ali').val("");
    });

    $(this).find('#hapus_wati').click(function () {
      $('#modalfradelina').find('#wati').hide(500);
    });
    $(this).find('#edit_wati').click(function () {
      $('#modalfradelina').find('#edit_wati, #hapus_wati').hide(500);
      $('#modalfradelina').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').show(500);
    });
    $(this).find('#batal_wati').click(function () {
      $('#modalfradelina').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide(500);
      $('#modalfradelina').find('#edit_wati, #hapus_wati').show(500);
    });
    $(this).find('#simpan_wati').click(function () {
      const nim = $('#modalfradelina').find('#edit_nim_wati').val();
      const nama = $('#modalfradelina').find('#edit_nama_wati').val();
      const prodi = $('#modalfradelina').find('#edit_prodi_wati').val();
      const program = $('#modalfradelina').find('#edit_program_wati').val();
      const status = $('#modalfradelina').find('#edit_status_wati').val();
      $('#modalfradelina').find('#edit_nim_wati, #edit_nama_wati, #edit_prodi_wati, #edit_program_wati, #edit_status_wati, #simpan_wati, #batal_wati').hide(500);
      $('#modalfradelina').find('#edit_wati, #hapus_wati').show(500);
      if (nim != "") {
        $('#modalfradelina').find('#nim_wati').html(nim);
      } if (nama != "") {
        $('#modalfradelina').find('#nama_wati').html(nama);
      } if (prodi != "") {
        $('#modalfradelina').find('#prodi_wati').html(prodi);
      } if (program != "") {
        $('#modalfradelina').find('#program_wati').html(program);
      } if (status != "") {
        if (status == "Diterima") {
          $('#modalfradelina').find('#status_wati').attr("class", "text-green");
        } else {
          $('#modalfradelina').find('#status_wati').attr("class", "text-red");
        }
        $('#modalfradelina').find('#status_wati').html(status);
      }
      $('#modalfradelina').find('#edit_nim_wati').val("");
      $('#modalfradelina').find('#edit_nama_wati').val("");
      $('#modalfradelina').find('#edit_prodi_wati').val("");
      $('#modalfradelina').find('#edit_program_wati').val("");
      $('#modalfradelina').find('#edit_status_wati').val("");
    });
  });

  $('#hapus_rowdiego').click(function () {
    $('#rowdiego').hide(500);
  });
  $('#hapus_rowahmad').click(function () {
    $('#rowahmad').hide(500);
  });
  $('#hapus_rowfradelina').click(function () {
    $('#rowfradelina').hide(500);
  });

} else if (page == "edit_seminar_admin") {
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
  $('#btn_update').click(function () {
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
}
