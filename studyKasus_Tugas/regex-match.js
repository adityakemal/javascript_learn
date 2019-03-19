
var str = 'kemal-kemal-aditya'

function panggilRegex(sVal) {
  // pake g
  console.log('tanpa g ::',sVal.match(/a/g));
  // tanpa g
  console.log('pake g ::',sVal.match(/a/));
}

panggilRegex(str)



console.log('===============tugas=============');


function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

 //Tulis Code Jawaban Kamu Di Bawah ini
 //replace spacenya
 // var repStr = str.replace(/ /g,"")
 // console.log(repStr);
 // i untuk sensitif jadi huruf besar/kecil bakal keambil kalo g untuk global
 console.log(str.match(/c/ig));
 console.log(str.match(/k/ig));
 console.log(str.match(/l/ig));
}

panggilRegexp()
