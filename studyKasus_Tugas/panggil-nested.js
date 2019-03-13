var nestedArray = [
  [1, "Mark Zuckerberg", "Facebook"],
  [2, "Elon Musk", "Tesla"],
  [3, "Bill Gates", "Microsoft"],
  [4, "Steve Jobs", "Apple"]
]


function panggilNestedArray(val) {
  for (var x in val) {
      console.log(`id : ${val[x][0]}`);
      console.log(`name : ${val[x][1]}`);
      console.log(`company : ${val[x][2]}`);
  }
}
panggilNestedArray(nestedArray)

console.log('====== tryself ======');

function toObject(val) {
  var people = []
  for (var x in val) {
      var obj ={
        id :val[x][0],
        name :val[x][1] ,
        company : val[x][2]
      }
      people.push(obj)
  }
  console.log(people);

  for ( p of people) {
    console.log('id : ',p.id);
    console.log('name :',p.name);
    console.log('company :',p.company);
  }
}

toObject(nestedArray)


console.log('=========== tugas nested array ============');

function tugasNested(value){
 // tulis jawabanmu disini
 var data = []
 for (var i=0 ; i < value[0].length; i++) {
   data.push([value[0][i],value[1][i],value[2][i]])
 }
 console.log(data);
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

tugasNested(nestedArray)
