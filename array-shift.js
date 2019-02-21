//shift spperti mengambil isi dalam array dan di tampung di shift itu sendiri sehingga dalam array akan berkurang 1, unshift() sebaliknya bisa menambah pada array
//shift dan unshift keduanya mengeksekusi dari awal array
function panggilShift() {
  var kota = ['bandung','garut','jakarta','cirebon','jogja']
  //console.log(kota);
  console.log('-------------');
    var yangDihapus = []
   for (var i = 0; i < 3; i++) {
     k = kota.shift()
     yangDihapus.push(k)
     console.log(k);
   }
   console.log('ini yg di hapus bray====', yangDihapus);

  return kota
}
console.log(panggilShift());
