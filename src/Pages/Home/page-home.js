import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Col, Footer, Row, Slide, Slider } from "react-materialize";
import Foot from "../../Components/Footer/Foot";
import { Wrapper } from "../../Components/Content/Content";
import P from 'react-particles-js'
import logo from '../../Assets/Image/log_new.png'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './a.css'
import { Navbar, NavItem } from "react-materialize";
import { Scrollbars } from 'react-custom-scrollbars';
class PageHome extends Component {
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        return (
            <Col m={12} s={12} style={{ overflow: 'hidden' }}>
                <Element name="home">
                    <Navbar fixed={true} className='navbar-fixed' brand={<span style={{ marginLeft: 10 }} className="brand">MALAS<span style={{ color: '#2196F3' }}>KODING</span></span>} style={{ backgroundColor: '#212121' }} right>
                        <NavItem>
                            <Link style={{ float: "left", width: '100%' }} activeClass="active" className="test1" to="home" spy={true} smooth={true} duration={500} >
                                <span className="menu_text">
                                    Home
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link style={{ width: '100%', float: "left" }} activeClass="active" className="test2" to="our_team" spy={true} smooth={true} duration={500} >
                                <span className="menu_text">
                                    Our Team
                                </span>
                            </Link>
                        </NavItem>
                        <NavItem href='#'><span className="menu_text" style={{ float: "left" }}>Our Story</span></NavItem>
                        <NavItem href='#'><span className="menu_text" style={{ float: "left" }}>About</span></NavItem>
                    </Navbar>
                    <div className='wrapper_' style={{ backgroundColor: '#212121' }}>
                        <P
                            params={{
                                particles: {
                                    number: {
                                        value: 100
                                    },
                                    line_linked: {
                                        shadow: {
                                            enable: false,
                                            color: "#E65100",
                                            blur: 5
                                        }
                                    },
                                    color: {
                                        value: '#FF6D00'
                                    },
                                    size: {
                                        value: 4,
                                        anim: {
                                            enable: true
                                        }

                                    },
                                    shape: {
                                        type: 'triangle'
                                    }
                                }
                            }}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }} />
                        <span>
                            Particles
                            </span>
                    </div>
                </Element>
                <Element name="our_team" className="element" >
                    <div style={{
                        width: "100%",
                        height: "100vh",
                        position: 'static',
                        backgroundColor: '#FFFFFF'
                    }}>

                    </div>
                </Element>
                <Element name="our_story">
                    <div style={{
                        width: "100%",
                        height: "100vh",
                        position: 'static',
                        backgroundColor: '#FFFFFF'
                    }}>

                    </div>
                </Element>
                <Element name="about">
                    <div style={{
                        width: "100%",
                        height: "100vh",
                        position: 'static',
                        backgroundColor: '#FFFFFF'
                    }}>

                    </div>
                </Element>
            </Col>
        );
    }
}

// function mapStateToProps(state) {
//     return {};
// }

export default (PageHome);
