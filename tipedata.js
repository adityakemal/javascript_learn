function tipeData() {
  var data = 2
  // berbeda kalau samadengannya cuma dua : == akan di baca sukse tapi biasakan sama denga itu 3 agar lebih specific
  data === "2" ? console.log('sukses') : console.log('bukan string');;
}

// console.log(tipeData());
tipeData()
