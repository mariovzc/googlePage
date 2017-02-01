/*
<header>
    <ul>
        <li><a href="javascript:void(0);">Gmail</a></li>
        <li><a href="javascript:void(0);">Images</a></li>
        <li><a href="javascript:void(0);">Menu</a></li>
        <li><a href="javascript:void(0);">Bell</a></li>
        <li><a href="javascript:void(0);" class="user">M</a></li>
    </ul>
</header>
 */

function header() {
    var header = document.createElement('header');
    header.appendChild(ul());
    return header;
}
function ul() {
    var ul = document.createElement('ul');
    ul.appendChild(list("Gmail", ""));
    ul.appendChild(list("Images", ""));
    ul.appendChild(list("Menu", ""));
    ul.appendChild(list("Bell", ""));
    ul.appendChild(list("M", "user"));
    return ul;
}
function list(title,cls) { 
    var li = document.createElement('li');
    li.appendChild(Hyperlink(title, cls));
    return li;
 }

function Hyperlink(title, cls) {
    var a = document.createElement('a');
    var linkText = document.createTextNode(title);
    a.appendChild(linkText);
    a.title = title;
    a.href = "javascript:void(0);";
    if(cls !== ""){a.classList.add('user')}
    return a;
}