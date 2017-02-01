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

    li = list();
    li.appendChild(Hyperlink("Gmail", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("Images", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("Menu", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("Bell", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("M", "user"));
    ul.appendChild(li);

    header.appendChild(ul);
    return header;
}