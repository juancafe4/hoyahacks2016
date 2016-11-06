import React, { Component } from 'react';
import NavBar from './NavBar';
export default class Splash extends Component {
  render() {
    return (
      <div className="text-center" style={splashDiv}>
        <div style={splash.holder}>
          <h1 style={splash.brandName}>
            NutriDay
          </h1>
        </div>
      </div>
    )
  }
}

const splashDiv = {
  backgroundColor: "#f4f4f4",
  backgroundImage: "url('https://s-media-cache-ak0.pinimg.com/originals/84/21/70/842170d0c6dae05a7776d93009a8fbe5.jpg')",
  width: "auto",
  marginTop: "-60px",
  height: "93vh",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

const splash = {
  holder: {
    // lineHeight: '50vh'
  },
  brandName: {
    marginTop: '60px',
    lineHeight: '85vh',
    color: 'white',
    fontSize: '90px'
  }
};
