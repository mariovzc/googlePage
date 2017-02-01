/*
<main>
    <div class="container">
        <div class="google-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" alt="google">
        </div>
        <input type="text" name="search" value="">
        <br><br><br>
        <div class="btn">
            <a href="javascript:void(0)">Google Search</a>
            <a href="javascript:void(0)">I'm feeling lucky</a>
        </div>
        <br>
        <div class="last">
            Google.com.co ofrecido en: <a href="javascript:void(0);">Español (Latinoamérica)</a>
        </div>
    </div>
</main>
*/
function main() { 
    var main = document.createElement('main');
    var containerDiv, div;
    containerDiv = divGenerator('container');

    //IMAGE DIV
    div = divGenerator('google-image');
    div.appendChild(image("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png","Google"));
    containerDiv.appendChild(div);

    containerDiv.appendChild(inputGenerator("text","search"));

    containerDiv.appendChild(br());
    containerDiv.appendChild(br());
    containerDiv.appendChild(br());

    //BTN DIV
    div = divGenerator('btn');
    div.appendChild(Hyperlink("Google Search",""));
    div.appendChild(Hyperlink("I'm feeling lucky",""));
    containerDiv.appendChild(div);

    containerDiv.appendChild(br());

    //LAST DIV
    div = divGenerator('last');
    div.innerHTML = "Google.com.co ofrecido en: Español (Latinoamérica)";
    containerDiv.appendChild(div);

    main.appendChild(containerDiv);
    return main;
 }
