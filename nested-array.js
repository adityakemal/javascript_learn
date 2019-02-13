function panggilNestedArray() {
  var nesArr = [
    ["ab", "ac", "ad"],
    ['bola1', 'bola2', 'bola3'],
    ['rem1', 'rem2', 'rem3'],
  ]

  //console.log(nesArr[0][2]);
}

panggilNestedArray()

// cara bikin array
var pets = new Array()
pets[0] = new Array("miow", "kucing", "susu")
pets[1] = new Array("gukguk", "anjing", "tulang")

// cara 2
var piara = []
piara[0] = ["miow", "kucing", "susu"]
piara[1] = ["gukguk", "anjing", "tuak"]
piara[2] = ["rawr", "beruang", "madu"]

// console.log(piara[0][0]);
// coba label label disini untuk penanda akan mengulangi dari label itu lg seperti kembali ke checkpoint
looplagi:
  for (var x of piara) {
    var desc = `suaranya ${x[0]} jenisnya ${x[1]} suka minum ${x[2]}`
    if (x[0] === "gukguk") {
      continue looplagi
    }
    console.log(desc);
  }
console.log("----------------------------coba push pake for in dan for of ke array------------------------------------");

// var count = []
//for disini nge push angka ke nested array di atas
for (var c in piara) {
  piara[c].push(c)
  console.log( parseInt(c)+1,`. suaranya ${piara[c][0]} jeisnya ${piara[c][1]}`);
}

piara.forEach(function(val) {
 console.log(`${val[3]}. suaranya ${val[0]} jenisnya ${val[1]} suka minum ${val[2]}`);
})
console.log(piara);
