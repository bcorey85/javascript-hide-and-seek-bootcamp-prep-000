function getFirstSelector(selector){
  return document.querySelector(selector)
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

function deepestChild(){
  var node = document.querySelectorAll('#grand-node div')
  return node[node.length - 1]
}
