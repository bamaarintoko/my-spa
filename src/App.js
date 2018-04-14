import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Full from './Container/Full'
import {Card, CardPanel, CardTitle, Col, Icon, Navbar, NavItem, Row} from "react-materialize";
import Header from "./Components/Header/Header";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
    render() {
        return (
                <Router>
                    <Switch>
                        <Route path="/" name="Home" component={Full}/>
                    </Switch>
                </Router>
        );
    }
}

export default App;
