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
    var ul = Ul();
    var li;

    var words = ["Gmail", "Images", "Menu", "Bell"];
    
    for(i = 0; i < words.length; i++){
        li = list();
        li.appendChild(Hyperlink(words[i], ""));
        ul.appendChild(li);
    }

    li = list();
    li.appendChild(Hyperlink("M", "user"));
    ul.appendChild(li);

    header.appendChild(ul);
    return header;
}