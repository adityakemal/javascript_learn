var arr = ['bandung','jakarta','surabaya','cimahi','garut']

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]) //harus di push ke array baru
}

var perFe = arr.forEach((fe, index, array)=>{
  return fe
})

console.log(perFe); //hasil akan undefined

var perMap = arr.map((fm , index, array)=>{
  // console.log(index);
  // console.log(array);
  return fm + ' kota' + index

})

console.log(perMap); //akan menghasilkan array baru tanpa harus push
