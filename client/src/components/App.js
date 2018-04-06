import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


const DashBoard = () => {
    return ( <h2>DashBoard</h2> )
}

const SurveyNew = () => {
    return ( <h2>surveyNew</h2> )
}

class App extends Component {

    componentDidMount () {
        this.props.fetchUser();
    }

    render () {
       return( 
       <div className="container-fluid">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={Landing} />
                    <Route path="/surveys" exact component={DashBoard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
       )
    }
}

export default connect(null,actions)(App)