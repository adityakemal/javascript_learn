function arrayIndexOf(val) {
  var kota = ['bandung','jakarta','malang','depok','bogor','cianjur',]
  // return kota.indexOf(val)
  var n = kota.indexOf(val)
  console.log(n);
  if(n >= 0){
    console.log(kota[n]);
  }else{
    console.log('data tidak ada bro!!');
  }
}

arrayIndexOf("ba")
