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
          <h4 style={splash.moto}>Count your Daily Nutritions</h4>
        </div>
      </div>
    )
  }
}

const splashDiv = {
  backgroundColor: "#f4f4f4",
  backgroundImage: "url('http://www.hdbloggers.net/wp-content/uploads/2016/11/Wood-Wallpapers.jpg')",
  width: "auto",
  marginTop: "-60px",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

const splash = {
  holder: {
    // lineHeight: '50vh'
  },
  moto: {
    color: "silver"
    // lineHeight: '5vh',
  },
  brandName: {
    lineHeight: '95vh',
    marginTop: '60px',
    color: 'white',
    fontSize: '90px'
  }
};
