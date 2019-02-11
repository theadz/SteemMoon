import React, { Component } from 'react';
import { Button, Jumbotron, Popover, OverlayTrigger } from 'react-bootstrap';
import background from '../images/Moontile background-2855.png';
import steemmoonsign from '../images/Steem Moon Sign.png';
import steemmoontitle from '../images/Steem Moon Pixel Art Title.png';
import storagefacility06 from '../images/Storage Facility 06.png';
import bitcoinimprint from '../images/Bitcoin Moon Imprint.png';
import sndboxgallery from '../images/SndBox Gallery.png';
import './App.css';

// Function to create the pop ups.
// Pop ups will supply the username and post details of the pixel art contributor.

const popoverRight = (
  <Popover id="popover-positioned-right" title="@ninjavideo">
    <strong>Steem Moon Sign : </strong>
    check this <a href="https://steemit.com/sndbox/@ninjavideo/cryptoart-with-sndbox-contest-3"
    target="_blank" rel="noopener noreferrer">post</a>.
  </Popover>
);

const popoverRightsf06 = (
  <Popover id="popover-positioned-right" title="@ninjavideo">
    <strong>Storage Facility 06 : </strong>
    check this <a href="https://steemit.com/steemmoon/@ninjavideo/steemmoon-entry-boring-storage-facility"
    target="_blank" rel="noopener noreferrer">post</a>.
  </Popover>
);

const popoverTop = (
  <Popover id="popover-positioned-right" title="@ninjavideo">
    <strong>Bitcoin Imprint : </strong>
    check this <a href="https://steemit.com/steemmoon/@ninjavideo/steemmoon-entry-bitcoin-imprint-for-sndbox-cryptoart"
    target="_blank" rel="noopener noreferrer">post</a>.
  </Popover>
);

const popoverRightSG = (
  <Popover id="popover-positioned-right" title="@ninjavideo">
    <strong>SndBox Gallery : </strong>
    check this <a href="https://steemit.com/steemmoon/@ninjavideo/steemmoon-entry-boring-storage-facility"
    target="_blank" rel="noopener noreferrer">post</a>.
  </Popover>
);

// Need to figure out how to get all of the popup data in a table so I'm not typing new stuff all the time.

// Main React component.
// Background and Heading are imported in first.
// Jumbotron is used for the introduction information.

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={background} className="Moon-Background" alt="Moon Background"/>
        <img src={steemmoontitle} className="Steem-Moon-Title" alt="Steem Moon Title"/>

        <Jumbotron>
           <h1>Steem to the Moon!</h1>
           <p>Steem Moon is a collaborative community effort to add fun pixel art to our moonscape.</p>
           <p>Click on each piece to see who created it.</p>
           <p><Button bsStyle="primary" href="https://steemit.com/crimsaystakeaction/@ninjavideo/welcome-to-steemmoon">Instructional Post</Button></p>
        </Jumbotron>

        <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
           <img src={steemmoonsign} className="SteemMoonSign-contribution" alt="SteemMoonSign-contribution"/>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverRightsf06}>
           <img src={storagefacility06} className="StorageFacility06-contribution" alt="StorageFacility06-contribution"/>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
           <img src={bitcoinimprint} className="BitcoinImprint-contribution" alt="BitcoinImprint-contribution"/>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={popoverRightSG}>
           <img src={sndboxgallery} className="SndBoxGallery-contribution" alt="SndBoxGallery-contribution"/>
        </OverlayTrigger>
      </div>
    );
  }
}



export default App;
