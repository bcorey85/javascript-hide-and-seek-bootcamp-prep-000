function getFirstSelector(selector){
  return(document.querySelector(selector))
}


function nestedTarget() {
return(document.getElementById('nested').querySelector('div.target'))
}


function increaseRankBy(n) {
  var liValue = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < liValue.length; i++) {
   var integer = parseInt(liValue[i].innerHTML) + n
   liValue[i].innerHTML = integer
  }
}

const divValue = document.getElementById('grand-node').querySelectorAll('div')



function deepestChild() {
    var current = document.getElementById('grand-node').querySelectorAll('div')
    return current[current.length - 1]
  }

//  var next = []
// while (current) {
// 		for (let i = 0; i < current.length; i++) {
//       if(current[i].innerHTML === "boo!"){
//       return current[i].innerHTML
//     }else{
//     console.log(current[i])
// 		next.push(current[i])
// 	}
// 	}
// 	current = next.shift()
// 	}
// 	return null
// }
