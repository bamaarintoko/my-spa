import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "../Components/Header/Header";
import PageHome from "../Pages/Home/page-home";
import {CardPanel, Col, Row} from "react-materialize";
import {Route, Switch} from "react-router-dom";

class Full extends Component {
    render() {
        return (
            <div className="app">
                {/* <Header/> */}
                <div>
                    <Switch>
                        <Route path={"/"} name ="Home" component={PageHome}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default (Full);
