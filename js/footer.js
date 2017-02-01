/*
<footer>
    <div class="left">
        <ul>
            <li><a href="javascript:void(0)">Publicidad</a></li>
            <li><a href="javascript:void(0)">Negocios</a></li>
            <li><a href="javascript:void(0)">Acerca de</a></li>
        </ul>
    </div>
    <div class="right">
        <ul>
            <li><a href="javascript:void(0)">Privacidad</a></li>
            <li><a href="javascript:void(0)">Condiciones</a></li>
            <li><a href="javascript:void(0)">Preferencias</a></li>
            <li><a href="javascript:void(0)">Usar Google.com</a></li>
        </ul>
    </div>
</footer>
 */
function footer() { 
    var footer = document.createElement('footer');;
    var div,
        li;
    var ul = Ul();

    div = divGenerator('left');

    li = list();
    li.appendChild(Hyperlink("Publicidad", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("Negocios", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("Acerca de", ""));
    ul.appendChild(li);

    div.appendChild(ul);
    footer.appendChild(div);
    
    ul = Ul();

    div = divGenerator('right');

    li = list();
    li.appendChild(Hyperlink("Privacidad", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("Condiciones", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("Preferencias", ""));
    ul.appendChild(li);

    li = list();
    li.appendChild(Hyperlink("Usar Google.com", ""));
    ul.appendChild(li);

    div.appendChild(ul);
    footer.appendChild(div);

    return footer;
 }