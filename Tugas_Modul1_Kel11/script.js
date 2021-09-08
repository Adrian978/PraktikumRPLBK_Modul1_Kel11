function perkalian() {
    // Memilih input element dan mengambil nilai 
    var a = document.getElementById("angka1").value;
    var b = document.getElementById("angka2").value;
    var c = document.getElementById("angka3").value;

    //arrow function
    var kali = (a, b, c) => a * b * c;
    console.log("Hasil Perkalian = " + kali(a, b, c));

    //ternary operator
    (a == 0) ? console.log("Nilai a = " + a + " Hasil perkalian adalah 0") : console.log("Nilai a = " + a);
    (b == 0) ? console.log("Nilai b = " + b + " Hasil perkalian adalah 0") : console.log("Nilai b = " + b);
    (c == 0) ? console.log("Nilai c = " + c + " Hasil perkalian adalah 0") : console.log("Nilai c = " + c);

    var angka = [a, b, c];

    //map
    var kali2 = angka.map(function (num) {
        return num * 2;
    });
    console.log("Array Angka = " + angka);
    console.log("Map Array Kali 2 = " + kali2);

    //promise
    const mypromise = new Promise((resolve, reject) => {
        if (a, b, c != 0) {
            let hasil = a * b * c;
            let kembali = { a: a, b: b, c: c, hasil: hasil };
            console.log('Ternyata ', a, ' x ', b, ' x ', c, ' hasilnya ', hasil);
            resolve(kembali);
        }
        else {
            let alasan = 'Nilai = 0';
            reject(alasan);
        }
    });
    console.log(mypromise);
}
