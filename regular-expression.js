var str = 'abcdefghaaaujklmnopqrstuvwxyz'
function regExp(val) {
  return str.search(val)
}

console.log(regExp(/a/));




console.log('======== Req with flag i ========');
//huruf kecil dan besar akan terbaca

function panggilRegExp(val) {
  return str.search(val)
}

console.log(panggilRegExp('K'));
console.log(panggilRegExp(/K/));
console.log(panggilRegExp(/K/i));
console.log(panggilRegExp(/K/i));
