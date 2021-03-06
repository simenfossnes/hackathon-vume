import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './containers/Home/Home.js';
import ShroomCreator from './containers/ShroomCreator/ShroomCreator.js';
import PresenterShroom from './containers/PresenterShroom/PresenterShroom.js';
import ViewerShroom from './containers/ViewerShroom/ViewerShroom.js'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/shroomcreator" component={ShroomCreator}/>
                <Route exact path="/shroom/:shroomId" component={ViewerShroom}/>
                <Route exact path="/shroom/:shroomId/admin" component={PresenterShroom}/>
            </div>
        </Router>
    );
  }
}

export default App;
