// const constmes = "hello im constmes"
// let letmes = "hello im letmes"
// var varmes = "hello im varmes"
//
// if (true) {
//   let letmes = 2;
//   console.log("di dalam bracket: ",letmes)
//
// }
// console.log("ini di luar :", letmes)

  function load() {
    var s = document.getElementById('nomorkecepatan').value * 2
    var message = s ? `no anda ${s}` : alert("masukan angka")

    var render = document.getElementById('hasil')
    
    return message ? render.innerHTML = message : "no"
  }
