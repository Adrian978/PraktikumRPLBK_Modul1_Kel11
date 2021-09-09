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

    //reduce
    let reducer = angka.reduce((totalResult, currValue) =>
    //The callback method must return a value using the required function       
    { return totalResult * currValue; });
    console.log("Hasil Tanpa initial value")
    console.log(reducer);

    console.log("Diberikan initial value 2. Hasil akan menjadi dobel")
    var dobel = angka.reduce((totalResult, currValue) => { return totalResult * currValue; }, 2);
    console.log(dobel);

    //filter
    var filter = angka.filter(function (number) {
        return number >= 5;
    });
    console.log("Array Hasil Filter Angka >= 5 = " + filter);

    //forEach
    angka.forEach((num, index, arr) => {
        arr[index] = num * 5
    })
    console.log("ForEach Array Kali 5 = " + angka);

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
