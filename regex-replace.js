function panggilRegexp() {
  var str = "satu nusa Satu bangsa"
  return str.replace(/satu/ig,"1")
}
console.log(panggilRegexp());
