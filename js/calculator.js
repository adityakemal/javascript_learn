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
var currencyFun = cur => {
  return "Rp. " + cur.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
console.log(currencyFun(12345432))

// FUNTION INPUT NUMBER
function inputAngka(val) {
  return $(val).click(() => {
    let s = $(val).val()
    let text = $(val).text()

    $('#hasil').append(s)
    $('#valReader').append(text)

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
    let text = $(op).text()

    $('#hasil').append(s)
    $('#valReader').append(text)

    // prop set disabled
    if (op === "#persen") {
      enableOps()
    } else {
      disableOps()
    }
    enableAngka()
    // console.log(s);
  })
}


operator("#tambah")
operator("#kurang")
operator("#bagi")
operator("#kali")
operator("#persen")

$("#persen").click(() => {
  let x = $('#hasil').text() //400,000-10%
  if (x.includes("-")) {
    var splitMin = x.split("-")
    var changeMin = eval(splitMin[0]) + "*" + splitMin[1]+'/100'
    var hasilAwal = eval(changeMin)
    console.log(changeMin)
    var hasilAkhir = eval(splitMin[0]) - hasilAwal //HASIL AKHIR
    let c = currencyFun(hasilAkhir)
    $('#currency').replaceWith(`<span id="currency">${c}</span>`)
    $('#hasil').replaceWith(`<p id="hasil">${hasilAkhir}</p>`)

  } else {
    let x = $("#hasil").append("/100")
  }
})


// jumlah total
$('#equal').click(() => {
  let x = $('#hasil').text()
  // console.log(eval(x));
  // console.log(parseFloat(eval(x)));
  var tot = parseFloat(eval(x))
  $('#hasil').replaceWith(`<p id="hasil">${tot}</p>`)
  $('#valReader').replaceWith(`<p id="valReader">${tot}</p>`)

  // currency hasil
  let c = currencyFun(tot)
  $('#currency').replaceWith(`<span id="currency">${c}</span>`)
  // prop set disabled
  enableOps();
  disableAngka()
})
