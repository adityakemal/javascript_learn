//cara 1
function jalanSatu(){
  var nilai = 2;
  if (nilai === 3){
    console.log('benar');
  }else if(nilai === 2){
    console.log("ini jalan dua bung");
  }else{
    console.log('salah');
  }
}

jalanSatu()

//cara 2
function jalanDua(){
  var size = 8;
  if (size === 8) console.log('benar')
  else if(size === 2) console.log("ini jalan dua bung")
  else console.log('salah')
}

jalanDua()

//cara 3 es6
const jalanTiga = ()=>{
  let x = 11
  x === 10 ? console.log('anda benar') : console.log("salah ajig")
}
jalanTiga()
