//splice menambahkan di tengah2 array
function panggilSplice() {
  var kota = ['bandung','lembang','jakarta','garut','jogja','tasik']
  //2 disini menambahkan pada posisi array ke 2 sedangkan 0/param ke dua yaitu jumlah data setelah array yg di tambahkan 0dihapus/tidak akan di hapus
  kota.splice(2,0,"ZIMBABUWE")
  return kota
}

console.log(panggilSplice());



// DIGUNAKAN HANYA UNTUK MENGHAPUS

//splice menambahkan di tengah2 array
function splice() {
  var arr = ['bandung','lembang','jakarta','garut','jogja','tasik']
// param pertama yaitu posisi index array dan kedua yaitu jumlahnya berapa yg mau di hapus  dimulai dari array yg terpilih 
// yg akan di hapus yautu hanya jakarta
  arr.splice(2,1)
  return arr
}

console.log(splice());
