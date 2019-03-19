
function panggilRegexp(value) {
   //Tulis Code Jawaban Kamu Di Bawah ini
   if (/javascript/.test(value)) {
     var f =value.replace(/Javascript/i, "")
     console.log(f);
   }else if (/php/.test(value)) {
     var x =value.replace(/php/i, "")
     console.log(x);
   }else {
     console.log(value);
   }
}
panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");


var coba = 'kemal Aditya'
// includes gak mau pake regex
console.log(coba.includes("Aditya"));

console.log(/aditya/i.test(coba));
// match bisa pake regular expression
console.log(coba.match(/aditya/i));
