function panggilBilanganGanjil() {
  var bilanganGanjil = []
  for (var i = 0; i < 30; i++) {
    i%2 === 1 ? bilanganGanjil.push(i) : ""
  }
  return bilanganGanjil
}

console.log(panggilBilanganGanjil());
