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
    var containerDiv, imageDiv, btnDiv, lastDiv;
    var jump = br();
    containerDiv = divGenerator('container');

    imageDiv = divGenerator('google-image');
    imageDiv.appendChild(image("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png","Google"));
    containerDiv.appendChild(imageDiv);

    containerDiv.appendChild(inputGenerator("text","search"));

    containerDiv.appendChild(jump);
    containerDiv.appendChild(jump);
    containerDiv.appendChild(jump);

    btnDiv = divGenerator('btn');
    btnDiv.appendChild(Hyperlink("Google Search",""));
    btnDiv.appendChild(Hyperlink("I'm feeling lucky",""));
    containerDiv.appendChild(btnDiv);
    containerDiv.appendChild(jump);


    lastDiv = divGenerator('last');
    lastDiv.innerHTML = "Google.com.co ofrecido en: Español (Latinoamérica)";
    containerDiv.appendChild(lastDiv);

    main.appendChild(containerDiv);
    return main;
 }
