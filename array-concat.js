function arrConcat() {
  var makanan = ['bakso','sate','nasi goreng']
  var minuman = ['juice','starbuck','kullo']
  // versi concat
  // return makanan.concat(minuman)
  // versi es 6
  return [...makanan,...minuman]
}

console.log(arrConcat());
