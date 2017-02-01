//YOU MUST RUN THIS IN CONSOLE ./node_modules/.bin/webpack -d
//npm run build RUN WEBPACK IN PRODUCTION
// NPM IN DEVELOP npm run dev

import React from 'react';
import {render} from 'react-dom';
import headerComponent from './header.jsx';
import bodyComponent from './body.jsx';
import footerComponent from './footer.jsx';

// ...
function Header() {
  return (
      <div>
        <header>
            <ul>
                <li><a href="javascript:void(0);">Gmail</a></li>
                <li><a href="javascript:void(0);">Images</a></li>
                <li><a href="javascript:void(0);">Menu</a></li>
                <li><a href="javascript:void(0);">Bell</a></li>
                <li><a href="javascript:void(0);" className="user">M</a></li>
            </ul>
        </header>
      </div>
  );
}
function Body(){
  return (
    <div>
            <main>
                <div className="container">
                    <div className="google-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" alt="google" />
                    </div>
                    <input type="text" name="search" value=""/>
                    <br/><br/><br/>
                    <div className="btn">
                        <a href="javascript:void(0)">Google Search</a>
                        <a href="javascript:void(0)">I'm feeling lucky</a>
                    </div>
                    <br/>
                    <div className="last">
                        Google.com.co ofrecido en: <a href="javascript:void(0);">Español (Latinoamérica)</a>
                    </div>
                </div>
            </main>
        </div>
  );
}
function Footer(){
  return(
    <div>
        <footer>
            <div className="left">
                <ul>
                    <li><a href="javascript:void(0)">Publicidad</a></li>
                    <li><a href="javascript:void(0)">Negocios</a></li>
                    <li><a href="javascript:void(0)">Acerca de</a></li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li><a href="javascript:void(0)">Privacidad</a></li>
                    <li><a href="javascript:void(0)">Condiciones</a></li>
                    <li><a href="javascript:void(0)">Preferencias</a></li>
                    <li><a href="javascript:void(0)">Usar Google.com</a></li>
                </ul>
            </div>
        </footer>
      </div>
  );
}
function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
render(<App/>, document.getElementById('app'));