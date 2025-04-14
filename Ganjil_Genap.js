//Ganjil_Genap
console.log("soal 1")

function apakah_genap(nilai) {
    switch (parseInt(nilai) % 2) {
        case 0:
            return true;
        default:
            return false;
    }
}

function Ganjil_Genap(platnomor) {
    platnomor = platnomor.filter(nilai => !isNaN(parseInt(nilai)));
    let nomor = "";

    platnomor.forEach(angka => nomor+=angka);


    let platgenap = apakah_genap(nomor);
    let tanggalgenap = apakah_genap(new Date().getDate());

    switch (platgenap) {
        case tanggalgenap:
            return "boleh melintas";
        default:
            return "tidak boleh melintas";
    }
}

let platnomor = ["B 1954 PZX", "B 1655 AUX", "F 1704 JYK"]

platnomor.forEach(plat => console.log(`hari ini tanggal ${new Date().getDate()}, kendaraan dengan plat nomor ${plat} ${Ganjil_Genap(plat.split(''))}`))
