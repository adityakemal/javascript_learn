//class es6 biasakan kapital di huruf awal
class Animal{
	constructor(name,type){
  	this.name = name
    this.type =  type
  }

  greeting(){
  	return `Im ${this.name} im a ${this.type} `
  }
  //fungsi get menjadikan pemanggilan tanpa bracket con: angsa.info
  get info(){
    return `Im an animal and my type is ${this.type} `
  }

}

// tambah info class
Animal.handler = "tom"

var angsa = new Animal('angsa','unggas')

console.log(angsa.info)
console.log(Animal.handler)

//extend animal artinya bisa mengambil objek constructo di class animal dengan cara super()
class Gorila extends Animal{
  constructor(name,type){
    super(name,type)
  }

  color(val){
    return `im ${this.name} my hair is ${val} `
  }
  //fungsi super.greeting adalah fungsi greeting() yang di panggil dari class animal
  eat(val){
  	var x = super.greeting()
    return `${x} and im eat ${val}`
  }

}
// new disini yang akan di cari oleh this dalam constructor
var igor = new Gorila('IGOR','mamalia')

console.table(igor)
console.log(igor.eat("pisang"))
