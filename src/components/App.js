import React, { Component } from 'react';
import { Button, Jumbotron, Popover, OverlayTrigger } from 'react-bootstrap';
import background from '../images/Moontile background.png';
import heading from '../images/Steem Moon Title.png';
import bear from '../images/Bear.gif';
import './App.css';

const popoverRight = (
  <Popover id="popover-positioned-right" title="@ninjavideo">
    <strong>Steem Bear : </strong>
    check this <a href="https://steemit.com/cryptoart/@ninjavideo/sndbox-crypto-art-bubby-the-big-blue-steem-bear" target="_blank">post</a>.
  </Popover>
);

// Need to figure out how to get all of the popup data in a table so I'm not typing new stuff all the time.

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={background} className="Moon-Background" alt="Moon Background"/>
        <img src={heading} className="Steem-Moon-Title" alt="Steem Moon Title"/>

        <Jumbotron>
           <h1>Steem to the Moon!</h1>
            <p>
             Steem Moon is a collaborative community effort to add fun pixel art to our moonscape.
            </p>
            <p>
             Hover over each piece to see who created it.
            </p>
            <p>
              <Button bsStyle="primary" href="https://www.steemit.com">Instructional Post</Button>
            </p>
        </Jumbotron>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
           <img src={bear} className="Bear-contribution" alt="Bear-contribution"/>
        </OverlayTrigger>
      </div>
    );
  }
}



export default App;
