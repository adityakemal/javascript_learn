// menngunakan split reverse dan join

function balikKata(val) {
  val = val.split("").reverse().join("")
  return val
}

balikKata("kemal")

console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))

// menggunakan for
console.log('========== menggunakan for =================');

function balikFor(val) {
  var kata = ""
  for (var i = val.length - 1; i >= 0; i--) {
    kata += val[i]
    // console.log(val[i]);
  }
  console.log(kata);
  // console.log(arr.toString());
}


balikFor('Kemal')
