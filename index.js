function sendMail() {
    var jenis_jasa = document.getElementById("jenis_jasa").value;
    if (jenis_jasa == "download") {
            jenis_jasa = "Download Apps di Google Play";
        } else {
            jenis_jasa = "Ulasan & Rating Positif di Google Play";
        }

    var params = {
        namaAplikasi: document.getElementById("nama_aplikasi").value,
        pesan: jenis_jasa,
        email: document.getElementById("email").value,
    };
    
    const serviceID = "service_bcn5bll";
    const templateID = "template_5inqfsj";
    
    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("nama_aplikasi").value = "";
        document.getElementById("jenis_jasa").value = "jenis jasa";
        document.getElementById("email").value = "";
        console.log(res);
    alert("Pesanan anda sudah terkirim!");
})
.catch((err) => console.log(err));

}