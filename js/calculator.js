function enableOps(){
  return $("#tambah,#kurang,#bagi,#kali,#equal").prop("disabled",false)
}
function disableOps(){
  return $("#tambah,#kurang,#bagi,#kali,#equal").prop("disabled",true)
}
function disableAngka(){
  return $("#satu,#dua,#tiga,#empat,#lima,#enam,#tujuh,#delapan,#sembilan,#nol").prop("disabled",true)
}
function enableAngka(){
  return $("#satu,#dua,#tiga,#empat,#lima,#enam,#tujuh,#delapan,#sembilan,#nol").prop("disabled",false)
}

// FUNTION INPUT NUMBER
function inputAngka(val){
  return $(val).click(()=>{
            let s = $(val).val()
            $('#hasil').append(s)
            console.log(s);
            enableOps()
          })
}

inputAngka("#satu")
inputAngka("#dua")
inputAngka("#tiga")
inputAngka("#empat")
inputAngka("#lima")
inputAngka("#enam")
inputAngka("#tujuh")
inputAngka("#delapan")
inputAngka("#sembilan")
inputAngka("#nol")



// FUNCTION OPERATOR
function operator(op) {
  return $(op).click(()=>{
            let s = $(op).val()
            $('#hasil').append(s)
            // prop set disabled
            disableOps()
            enableAngka()
            console.log(s);
          })
}

operator("#tambah")
operator("#kurang")
operator("#bagi")
operator("#kali")




// jumlah total
$('#equal').click(()=>{
  var x = $('#hasil').text()
  // console.log(eval(x));
  // console.log(parseFloat(eval(x)));
  var tot = parseFloat(eval(x))
  $('#hasil').replaceWith(`<p id="hasil">${tot}</p>`)
  // prop set disabled
  enableOps();
  disableAngka()

})
