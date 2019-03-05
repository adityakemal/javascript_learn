function panggilBilanganKelipatan() {
  var data = []
  for (var i = 0; i < 30 ; i++) {
    if (i%5 === 0) {
      data.push(i)
    }
  }
  return data
}
console.log(panggilBilanganKelipatan());

//akan menampilkan angka yg bisa di bagi 5 dari rang 1-30 yang jika dibagi 5 bisa menghasilkan nol
