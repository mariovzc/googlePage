import React from 'react';

class footerComponent extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }

}

export default footerComponent;