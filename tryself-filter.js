var dataHewan = ["gajah", 'bunglon', 'babi', 'semut', 'kecoak', 'kucing', 'onta', 'badak', 'bangau', 'cacing', 'beruang']

//make search with filter
function fil(isi) {
  var result = dataHewan.filter(x => {
    return x.includes(isi)
  })
  console.log(result);
  //catch index of resultnya
  for (n of result) {
   console.log(`si ${n} di array urutan ke ${dataHewan.indexOf(n)} dari data hewan`)
  }
}

fil("cing")

//example filter
// console.log(dataHewan.filter(x => x.length>5));

var y = dataHewan.filter(function (data) {
  if (data.length > 5) {
    console.log(data);
  }
})
