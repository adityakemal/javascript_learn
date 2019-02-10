// func biasa
function jalanSatu(){
  console.log('jalan Satu');
}

jalanSatu() //panggil

// ass a variable nb must constant
const jalanDua = function(){
  console.log("jalan dua");
}

jalanDua() //panggil


//arrow funct es6
const jalanTiga = ()=>{
  console.log(`jalan tiga`);
}

jalanTiga()

//pake objek
const objFunctions = {
  jalanEmpat : ()=>{
    console.log('jalan empat');
  },
  jalanLima : ()=>{
    console.log('jalan lima');
  }
}

objFunctions.jalanEmpat()
