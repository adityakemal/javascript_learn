var arr = ["gajah",'bunglon','babi','semut','kecoak','kucing','onta','badak','bangau','cacing','beruang']


function fil(isi){

    var result = arr.filter(x =>{
      return  x.includes(isi)
    })

    return result
}

console.log(fil("k"));
