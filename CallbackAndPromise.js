var json = {
	name : "john",
  gender : 'man',
}

function call(){
	console.log(json)
}

/* call() */
//ini callback
function add(val, callback){
  json.age = val
  callback()
  //console.table(json)
}
add(40, call)

//ini promise biasa
const add = (val)=>{
  return new Promise((res,rej)=>{
    json.age = val
    var error = true
    if(!error){
    res()
    }else{
    rej('aya error')
    }
  })
}

add(200).then(call).catch((err)=>{console.log(err)})


// ini promise.all
var p1 = 'saya satu'
var p2 = 'saya dua'
const p3 = ()=>('tiga')
var p4 = ['asdfas','asdfdsadf','dsfaf','asdfdasdd','dfadfa']
//labih mudahds pakai Promise.all
Promise.all([p4,p2,p3,p1]).then((val)=> console.log(val))
