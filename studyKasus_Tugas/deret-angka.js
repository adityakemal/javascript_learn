function deretAngka(n) {
  var kata = ""

  for (var i = 1; i < n; i++) {
    if (i%3 == 0) {
      // console.log('NIO');
      kata += "NIO "
    }else if (i%5 == 0) {
      // console.log('MIC');
      kata += "MIC "
    }else {
      // console.log(i);
      kata += i+" "
    }
  }

  console.log(kata);
}

deretAngka(10)
deretAngka(20)
deretAngka(30)



console.log('===============tugas===============');

function tugasDeret(x) {
  let hasil = ''
  for (let i = 0; i < x; i++) {
    if (i%3 === 0 && i%5 === 0) {
      hasil += "NIOMIC "
    }else if (i%5 === 0) {
      hasil += "MIC "
    }else if (i%3 === 0) {
      hasil += "NIO "
    }else {
      hasil += `${i} `
    }
  }
  console.log(hasil);
}

tugasDeret(10)
tugasDeret(20)
tugasDeret(31)
