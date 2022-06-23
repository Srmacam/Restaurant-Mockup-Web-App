import React from 'react';
import {Link} from 'react-router';

export class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    closeNav (){
        this.setState({ width: 0 + "px" });
    }

    openNav() {
        this.setState({ width: 250 + "px" });
    }

    render() {
        return (
            <div>
                <div text-decoration="none" className="topnav">
                    <a className="dropdown" href="javascript:void(0)" onClick={this.openNav}>&#9776;</a>
                </div>
                <div style={{width: this.state.width}} className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <Link to="home"> Home </Link>
                    <Link to="menu"> Menu </Link>
                    <Link to="progress"> Progress </Link>
                    <Link to="bill"> Bill </Link>
                </div>
            </div>
        );
    }
}


  /*<div>
    <div class=topnav>
        <a class=dropdown href="javascript:void(0)" onclick="openNav()">&#9776;</a>
    </div>
    <div class="buttons">
      <a href="foodmenu.html">MENU</a>
      <a href="ProgressPage.html">PROGRESS</a>
      <a href="BillPage.html">BILL</a>
    </div>
    <div class="chatbar">
      <a href="chatmockup.html">Chat</a>
    </div>
  </div>
  <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="SecondPage.html">Home</a>
      <a href="foodmenu.html">Menu</a>
      <a href="ProgressPage.html">Progress</a>
      <a href="BillPage.html">Bill</a>
    </div>*/