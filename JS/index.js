function validateForm (name, email, interest) {
    if (name !="") {
        updateUI(name, email, interest)
    } else {
        alert("Isi form belum lengkap")
    }
}

function validateForm() {
    const name = document.forms["message-form"]["name"].value;
    const email = document.forms["message-form"]["email"].value;
    const interest = document.forms["message-form"]["interest"].value;

    if (name == "" || email == "" || interest == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, email, interest);

    return false;
}

function setSenderUI(name, email, interest) {
    document.getElementById("sender-name").innerHTML = name
    document.getElementById("sender-email").innerHTML = email
    document.getElementById("sender-interest").innerHTML = interest
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    if (n > slides.length) slideIndex = 1;
    else if (n < 1) slideIndex = slides.length ;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 10000);
