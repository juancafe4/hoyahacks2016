import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';


export default class NavBar extends Component {
  render() {
    return (
      // <AppBar
        // title="NutriDay"
        // iconClassNameRight="muidocs-icon-navigation-expand-more"
        // children={
          <nav style={navbarStyle} className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
             <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
               </button>
               <Link style={whiteFont} className="navbar-brand" to='/'>NutriDay</Link>
             </div>
             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav navbar-right">
                 <li><Link style={whiteFont} to="/add">Add</Link></li>
                 <li><Link style={whiteFont} to="/today">Today</Link></li>
                 <li><Link style={whiteFont} to="/history">History</Link></li>
                 <li><Link style={whiteFont} to="/preferences">Preferences</Link></li>
               </ul>
             </div>
             </div>
          </nav>
        // }
      // />

    )
  }
}

const navbarStyle = {
  backgroundColor: "#8BC34A",
  borderStyle: "solid",
  boxShadow: "0px 0px 10px #A1887F",
  borderColor: "#8BC34A",
  // borderBottomWidth: "2px"
  // color: "white"
};

const whiteFont = {
  color: "white"
};
