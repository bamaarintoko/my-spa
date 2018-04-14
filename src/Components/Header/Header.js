import React, {Component} from 'react';
import {Navbar, NavItem} from "react-materialize";
import logo from '../../Assets/Image/log_new.png'
// import {connect} from 'react-redux';
import './b.css'

class Header extends Component {
    render() {
        return (
            <Navbar brand={<span style={{marginLeft:10}} className="brand">MALAS<span style={{color:'#2196F3'}}>KODING</span></span>} style={{backgroundColor:'#212121'}} right>

                <NavItem href='#'>
                    <span className="menu_text" style={{float:"left"}}>Home</span>
                </NavItem>
                {/* <NavItem href='#' style={{position:'absolute',left:0}}>
                    <img width={64} src={logo}/>
                </NavItem> */}
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>|</span></NavItem>
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>Our Team</span></NavItem>
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>|</span></NavItem>
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>Our Story</span></NavItem>
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>|</span></NavItem>
                <NavItem href='#'><span className="menu_text" style={{float:"left"}}>About</span></NavItem>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default Header;
