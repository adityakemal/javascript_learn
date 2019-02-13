var perulangan = ()=>{
  for (var i = 0; i < 10; i++) {
    //console.log("ulang", i);
    var b = '*'
    console.log(b.repeat(i))
  }
}

perulangan()

// ES 5 for each harus di SPLIT dlu jadi array
var five = "INI ES 5 FOR EACH"
var five = five.split("")
function iniForEach() {
  five.forEach(function(val) {
    console.log("contoh for each",val);
  })
}
iniForEach()

//kalo for in akan membaca menjadi number per character array
var helloIn = "hello world"
var nesArr = [["kemal"],["adiya"],["zulfikar"]]
function iniForIf() {

  for(var h in nesArr){
    console.log("for in :",nesArr[h])
  }

}
iniForIf()


// ES 6 "for of" adalah seperti penggabungan for-in dan foreach di es5
var hello = "INI ES6 FOR-OF"
var obj = [{nama:"kemal", alamat:"bandung", hp:0987654321},
            {nama:"aditya", alamat:"jakarta", hp:0987654321}]
var
function iniForOf() {

  for(var h of obj){
    console.log(h.nama + " tinggal di " + h.alamat)
  }

}
iniForOf()
