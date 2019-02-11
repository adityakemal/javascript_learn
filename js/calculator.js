// FUNCTION ENABLE/DISABLE OPERATOR
var idOps = "#tambah,#kurang,#bagi,#kali,#equal"

function enableOps() {
  return $(idOps).prop("disabled", false)
}

function disableOps() {
  return $(idOps).prop("disabled", true)
}

// FUNCTION ENABLE/DISABLE ANGKA
var idAngkas = "#satu,#dua,#tiga,#empat,#lima,#enam,#tujuh,#delapan,#sembilan,#nol"

function disableAngka() {
  return $(idAngkas).prop("disabled", true)
}

function enableAngka() {
  return $(idAngkas).prop("disabled", false)
}
// currency function
var currencyFun = cur =>{
    return "Rp. "+cur.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
console.log(currencyFun(12345432))

// FUNTION INPUT NUMBER
function inputAngka(val) {
  return $(val).click(() => {
    let s = $(val).val()
    $('#hasil').append(s)
    // current call version
    let t = $('#hasil').text()
    let c = currencyFun(parseFloat(eval(t)))
    $('#currency').replaceWith(`<span id="currency">${c}</span>`)

    console.log(s);
    console.log(c);
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
  return $(op).click(() => {
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
$('#equal').click(() => {
  var x = $('#hasil').text()
  // console.log(eval(x));
  // console.log(parseFloat(eval(x)));
  var tot = parseFloat(eval(x))
  $('#hasil').replaceWith(`<p id="hasil">${tot}</p>`)
  // currency hasil
  let c = currencyFun(tot)
  $('#currency').replaceWith(`<span id="currency">${c}</span>`)
  // prop set disabled
  enableOps();
  disableAngka()

})
