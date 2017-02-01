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
    ul = ul();
    ul.appendChild(list("Gmail", ""));
    ul.appendChild(list("Images", ""));
    ul.appendChild(list("Menu", ""));
    ul.appendChild(list("Bell", ""));
    ul.appendChild(list("M", "user"));

    header.appendChild(ul);
    return header;
}