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
    var leftWords = ["Publicidad", "Negocios", "Acerca de"];
    var rightWords = ["Privacidad", "Condiciones", "Preferencias", "Usar Google.com"];
    div = divGenerator('left');

    for(i = 0; i < leftWords.length; i++){
        li = list();
        li.appendChild(Hyperlink(leftWords[i], ""));
        ul.appendChild(li);
    }
    div.appendChild(ul);
    footer.appendChild(div);
    
    ul = Ul();
    div = divGenerator('right');

    for(i = 0; i < rightWords.length; i++){
        li = list();
        li.appendChild(Hyperlink(rightWords[i], ""));
        ul.appendChild(li);
    }
    
    div.appendChild(ul);
    footer.appendChild(div);

    return footer;
 }