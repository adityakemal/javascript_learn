// \w yang asal nya manggil angka dan huruf kecuali spasi malah sebaliknya kalau di tulis dengan huruf besar
// panggil kecuali huruf
function panggilSemua(val) {
    var data = val.match(/\W/g)
    console.log(data);
}

panggilSemua('bulan ke 1 sampai ke 4')

//panggil kecuali angka
function panggilKecAngka( val ) {
  var data = val.match(/\D/g)
  console.log('data hasil :',data);
  // coba di match lagi (harus dari string ternyata)
  var d = data.toString().match(/\w/g)
  console.log(typeof(data));
  console.log(d);
}

panggilKecAngka('bulan ke 1 sampai bulan ke 4')

function kecualiSpasi(val) {
  var data = val.match(/\S/g)
  console.log('hasil kecuali spasi ::', data);

}
kecualiSpasi('bulan ke 1 sampai bulan ke 4')
