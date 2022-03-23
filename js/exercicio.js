
var btn = document.getElementById('button');
var list = document.getElementById('list');
btn.addEventListener("click", function(){
    var input = document.getElementById('input').value;
    console.log('Foi');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(input));
    list.appendChild(item);
});