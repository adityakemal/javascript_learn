//shift spperti mengambil isi dalam array dan di tampung di shift itu sendiri sehingga dalam array akan berkurang 1, unshift() sebaliknya bisa menambah pada array
//shift dan unshift keduanya mengeksekusi dari awal array
function panggilShift() {
  var kota = ['bandung','garut','jakarta','cirebon','jogja']
  //console.log(kota);
  console.log('========================');

   for (var i = 0; i < 3; i++) {
     k = kota.shift()
     console.log(k);
   }
  return kota
}
console.log(panggilShift());

function panggilUnshift() {
  var arr = ["aaa"]
  arr.unshift('xxx')
  arr.unshift('yyy')
  arr.unshift('zzz')
return arr
}
console.log(panggilUnshift());
