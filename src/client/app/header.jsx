import React from 'react';

class headerComponent extends React.Component {
  render() {
    return (
      <div>
        <header>
            <ul>
                <li><a href="javascript:void(0);">Gmail</a></li>
                <li><a href="javascript:void(0);">Images</a></li>
                <li><a href="javascript:void(0);">Menu</a></li>
                <li><a href="javascript:void(0);">Bell</a></li>
                <li><a href="javascript:void(0);" class="user">M</a></li>
            </ul>
        </header>
      </div>
    );
  }

}

export default headerComponent;