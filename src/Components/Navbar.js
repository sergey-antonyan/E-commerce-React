import React from "react";
import { Component } from "react";
import './navbarStyles.css';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
   
  state= { clicked : false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
  return (
    <div>
      <nav>
        <div className="logoCont">
        <Link to="/"><span></span>
         <img className="logo"  src="/image/salogo.png"/>
        </Link>
        </div>
        <div>
           <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><Link className="active" to="/">Home</Link></li>
              <li><a href='#'>About</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><Link to="/buyonline">Buy Online</Link></li>
           </ul>
        </div>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div>

          </div>
      </nav>
    </div>
  );
}
}