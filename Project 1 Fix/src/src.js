function masuk(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const email_masuk = email.value;
    const password_masuk = password.value;

    if (email_masuk == "adminsista@nurulfikri.ac.id" && password_masuk == "admin123"){
        console.log("Login Berhasil");
        window.location.href = "adminkelolaseminarTA.html"
    }

    else {
        console.log("Login Gagal");
        window.location.href = "login.html"
    }
}

function modal(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const email_masuk = email.value;
    const password_masuk = password.value;

    if (email_masuk == "adminsista@nurulfikri.ac.id" && password_masuk == "admin123"){
        console.log("Login Berhasil");
        document.getElementById("modal_title").innerHTML = "Login Berhasil";
        document.getElementById("modal_body").innerHTML = "Login Telah Berhasil Silahkan Masuk"
    }

    else {
        console.log("Login Gagal");
    }
    
}


function daftar(){
    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let prodi = document.getElementById("prodi").value;
    let ruangan = document.getElementById("ruangan").value;
    let seminar = document.getElementById("seminar").value;
    let tanggal = document.getElementById("tanggal_seminar").value;
    let dospem = document.getElementById("dospem").value;
    let jam = document.getElementById("jam_seminar").value;
    let penguji1 = document.getElementById("penguji1").value;
    let penguji2 = document.getElementById("penguji2").value;
    
    event.preventDefault()

    if (nama == ""){
       document.getElementById("alert_nama").style.visibility = "visible";
       console.log("Nama anda kosong.")
    }

    if (prodi == ""){
        document.getElementById("alert_prodi").style.visibility = "visible";
        console.log("Silahkan Pilih Prodi");
    }

    if(nim == ""){
        document.getElementById("alert_nim").style.visibility = " visible";
        console.log("Masukan NIM");
    }

    if(ruangan == ""){
        document.getElementById("alert_ruangan").style.visibility = "visible";
        console.log("Masukan ruangan");
    }

    if(seminar == ""){
        document.getElementById("alert_seminar").style.visibility = "visible";
        console.log("Masukan Seminar");
    }

    if(tanggal == ""){
        document.getElementById("alert_tanggal").style.visibility = "visible";
        console.log("Masukan_tanggal");
    }

    if(dospem == ""){
        document.getElementById("alert_dospem").style.visibility = "visible";
        console.log("Pilih dospem");
    }

    if(jam == ""){
        document.getElementById("alert_jam").style.visibility = "visible";
        console.log("Masukan jam");
    }

    if(penguji1 == ""){
        document.getElementById("alert_penguji1").style.visibility = "visible";
        console.log("Pilih Penguji1");
    }

    if(penguji2 == ""){
        document.getElementById("alert_penguji2").style.visibility = "visible";
        console.log("Pilih penguji2");
    }
}

