function masuk(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const email_masuk = email.value;
    const password_masuk = password.value;

    if (email_masuk == "admin@sista.ac.id" && password_masuk == "admin123"){
        console.log("Login Berhasil");
        window.location.href = "index.html"
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

    if (email_masuk == "admin@sista.ac.id" && password_masuk == "admin123"){
        console.log("Login Berhasil");
        document.getElementById("modal_title").innerHTML = "Login Berhasil";
        document.getElementById("modal_body").innerHTML = "Login Telah Berhasil Silahkan Masuk"
    }

    else {
        console.log("Login Gagal");
    }
    
}

