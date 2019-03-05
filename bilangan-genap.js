function panggilBilanganGenap() {
  var bilanganGenap = []
  for (var i = 0; i < 30; i++) {
    if (i%2 === 0) {
      bilanganGenap.push(i)
    }
  }
  return bilanganGenap
}

console.log(panggilBilanganGenap());


//modulus dibagi 2 dan jika hasilnya 0 maka itu pasti genap
