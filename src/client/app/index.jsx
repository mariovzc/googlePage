//YOU MUST RUN THIS IN CONSOLE ./node_modules/.bin/webpack -d
//npm run build RUN WEBPACK IN PRODUCTION
// NPM IN DEVELOP npm run dev

import React from 'react';
import {render} from 'react-dom';
import headerComponent from './header.jsx';
import bodyComponent from './body.jsx';
import footerComponent from './footer.jsx';

// ...
class App extends React.Component {
  render () {
    return (
      <div>
        <headerComponent />
        <bodyComponent />
        <footerComponent />
      </div>
    );
  }
}
render(<App/>, document.getElementById('app'));
