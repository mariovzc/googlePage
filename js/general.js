function Hyperlink(title, cls) {
    var a = document.createElement('a');
    var linkText = document.createTextNode(title);
    a.appendChild(linkText);
    a.title = title;
    a.href = "javascript:void(0);";
    if(cls !== ""){a.classList.add('user')}
    return a;
}
function br() {
    return document.createElement('br');
  }

  function inputGenerator(type,name) {
    var input = document.createElement('input');
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    return input;
}
function divGenerator(cls) { 
    var div = document.createElement('div');
    div.classList.add(cls);
    return div;
 }
function image(src, alt) {
    var img= document.createElement('img');
    img.src = src;
    if (alt !== null) img.alt= alt;
    return img;
}

function Ul() {
    var ul = document.createElement('ul');
    return ul;
}
function list() { 
    var li = document.createElement('li');
    return li;
 }