
// Semua karakter berupa angka dan huruf akan terambil semua, kecuali spasi. RegExp (Regular Expression) untuk melakukan itu adalah : \w
function panggilRegexp(val) {

  return val.match(/\w/g)
}
console.log(panggilRegexp(" bulan ke 1 sampai ke 4"));


//panggil angka saja menggunakan \d

function panggilAngka(val) {
  return val.match(/\d/g)
}

console.log('panggil angka saja ::',panggilAngka(" bulan ke 1 sampai ke 4"))

//panggil spasi saja
function panggilSpasi(val) {
  var data = val.match(/\s/g)
  console.log(data.length);
  console.log(data);
}

panggilSpasi('bulan ke 1 sampai ke 4')
