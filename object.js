function panggilObject() {

  var mobil = {
    nama: "triton",
    type: "SUV",
    harga: 500000000,
    deskripsi: function() {
      return `namanya adalah ${mobil.nama} typenya adalah ${mobil.type} harganya yaitu ${mobil.harga} thanks!!`
    }
  }
  // ini cara push ke objek
  mobil.tahun = 202020202
  //console.log(mobil);
}
panggilObject()

console.log ('-----------------------------object constructor-----------------------------------');
// object constructor
function siswa(id, first, last, jurusan, birthday) {
  this.id = id;
  this.nama = {
    first: first,
    last: last
  }
  this.jurusan = jurusan
  this.birthday = new Date(birthday).toDateString("yyyy-MM-dd")
  this.created = new Date()
}
// var dataSiswa = []
var players = []
players.push(new siswa(123, "kemal", "aditya", "it", "1993/05/05"))
players.push(new siswa(231, "ade", "arif", "it", "1993/05/05"))

// console.table(players)


console.log("----------------------------------OOP CLAS CONSTRUCTOR------------------------------------------");

class Person {

  constructor(first,last, age, contact, home, birthday, hobby) {
    this.name = {
      first: first,
      last:last
    }
    this.age = age
    this.contact = contact
    this.home = home
    this.birthday = new Date(birthday).toDateString("yyyy-MM-dd")
    this.hobby = hobby
  }
  ////manggilnya pake kurung
  get greeting(){
    console.log(`hai aku ${this.name.last} selamat pagi!!`);
  }
  ////manggilnya pake kurung
  togel(val){
    return `no togel anda adalah ${this.age}${val}`
  }

}

class Siswa extends Person {
  constructor(first,last, age, kampus,jurusan) {
    super(first,last, age)
    this.kampus = kampus
    this.jurusan = jurusan
  }
  get pendidikan(){
    return `${this.name.first} kuliah di ${this.kampus} ngambil jurusan ${this.jurusan}`
  }
}


let kemal = new Person('kemal','aditya', 25, 0981234567,'bandung','05/05/1993','coding')
let arif = new Person('arif','mutaqin', 20, 0981234567,'garut','05/05/1995','bisnis')

let aku = new Siswa('kemal','aditya',24,'UIN SGD','bandung', 'elektro',)

var persons = []
persons.push(kemal)
persons.push(arif)

console.log(persons[0].togel(1234))
console.log(aku);
// console.log(persons.setting("makan siang dolooo"));

// console.log(arif);
