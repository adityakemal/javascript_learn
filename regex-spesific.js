function regSpec(val) {
  //spesific
  var data = val.match(/ke/g)
  //dijadikan array
  var datArr = val.match(/[ke]/g)
  //kecuali
  var datKec = val.match(/[^ke]/g)

  console.log(data);
  console.log('di jadikan array :',datArr);
  console.log('di jadikan array :',datKec);
}

regSpec('kemal aditya mau kemana?')


function antara(val) {
  // antara abjad a dampai i
  let data = val.match(/[a-i]/g)
  console.log(data);
}

antara('aku ini anak indonesia bro')
