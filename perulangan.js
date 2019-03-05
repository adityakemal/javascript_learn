function perulangan() {
  var kota = ['bandung','jakarta','sukabumi']
  
  for (var i = 0; i < kota.length; i++) {
    console.log(kota[i]);
    console.log(i);
  //  console.log(kota);
  }

  kota.forEach((item,index,array)=>{
    console.log('dari for each :',item);
    console.log('dari for each :',index);
    //console.log('dari for each :',array);
  })

  kota.map((itm,i,arr)=>{
    console.log('dari map :',itm);
    console.log('dari map :',i);
  //  console.log('dari map :',arr);
  })


}

perulangan()
