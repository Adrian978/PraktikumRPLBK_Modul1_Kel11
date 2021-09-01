//root scope
var a = 0;
console.log("ini root scope: " + a);
function q2() {
    // child scope 
    a = 5;
    console.log("ini child scope: " + a);
}
q2();

(a == 0) ? console.log("true") : console.log("false");

console.log("ini root scope: " + a);

var angka = [1, 2, 3];
var dobel = angka.map(function (num) {
    return num * 2;
});
console.log(angka);
console.log(dobel);

const myArray = [5, 10, 20];

const reducer = myArray.reduce((acumulator, currentValue) => acumulator + currentValue, initialValue - 10);

console.log(reducer);