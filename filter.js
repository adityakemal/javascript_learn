// filter keluarannya true of false jadi tidak perlu memakai if else


function panggilFilter() {
  var arr = ['bandung','jakarta','surabaya','cimahi','garut']
  var diatasEnam = arr.filter((x)=>{
    return x.length > 6
  })
  console.log(diatasEnam);
}
panggilFilter()
