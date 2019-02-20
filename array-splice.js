//splice menambahkan di tengah2 array
function panggilSplice() {
  var kota = ['bandung','lembang','jakarta','garut','jogja','tasik']
  //2 disini menambahkan pada posisi array ke 2 sedangkan 0/param ke dua yaitu jumlah data setelah array yg di tambahkan 0dihapus/tidak akan di hapus
  kota.splice(2,0,"ZIMBABUWE")
  return kota
}

console.log(panggilSplice());
