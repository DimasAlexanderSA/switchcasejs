//check nilai
console.log("soal 2")

let grade = [
    {nama : "Fhabil" , nilai : "A"}, 
    {nama : "Gani", nilai : "C"} , 
    {nama : "Mahansa", nilai : "B"} , 
    {nama : "Dimas", nilai : "F"}
]

function check_nilai(nilai){
    switch (nilai.toLowerCase()) {
        case "a":
            return "Sangat Baik";
            
        case "b":
            return "Baik";
            
        case "c":
            return "Cukup Baik";
            
        case "d":
            return "Buruk";
            
        default:
            return "Sangat Buruk"
    }
}

grade.forEach(siswa => console.log(`${siswa.nama} mendapat nilai ${siswa.nilai} , maka ${siswa.nama} memiliki nilai yang ${check_nilai(siswa.nilai)} `))
