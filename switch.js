var testingSwitch = () => {
//switch bisa true apabila nilai dalam case sama dengan cara mencocokan
  var nilai = 10
  switch (10) {
    case 10:
      console.log('sangat bagus');
      break;
    case 8:
      console.log('bagus');
      break;
    case 7:
      console.log('cukup');
      break;
    case 5:
      console.log('kurang');
      break;
    default:
      console.log("laiinya");
  }
}
testingSwitch()


function test(value){
  //sudah di set true hanya tinggal mencocokan dengan casenya
  const x = value;
  switch (true) {
    case (x < 5):
      console.log("less than five");
      break;
    case (x < 9):
      console.log("between 5 and 8");
      break;
    case (x < 12):
      console.log("between 9 and 11");
      break;
    default:
      console.log("none");
      break;
  }
}
test(3)
