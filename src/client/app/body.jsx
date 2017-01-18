import React from 'react';

class bodyComponent extends React.Component {
  render() {
    return (
        <div>
            <main>
                <div class="container">
                    <div class="google-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" alt="google" />
                    </div>
                    <input type="text" name="search" value=""/>
                    <br/><br/><br/>
                    <div class="btn">
                        <a href="javascript:void(0)">Google Search</a>
                        <a href="javascript:void(0)">I'm feeling lucky</a>
                    </div>
                    <br/>
                    <div class="last">
                        Google.com.co ofrecido en: <a href="javascript:void(0);">Español (Latinoamérica)</a>
                    </div>
                </div>
            </main>
        </div>
    );
  }

}

export default bodyComponent;