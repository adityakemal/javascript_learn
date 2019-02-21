// kebalikan dari shift pop menghilangkan dari belakang array
function panggilPop() {
  var kota = ['bandung','jakarta','medan','surabaya','solo']
  var pop1 = kota.pop()
  var pop2 = kota.pop()
  console.log(pop1);
  console.log(pop2);

  return kota
}
console.log(panggilPop());
