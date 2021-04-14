import './App.css';
import React, {Fragment} from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Logos from './components/Logos'
import Working from './components/Working'
import PeppertypeFor from './components/PeppertypeFor'
import Reviews from './components/Reviews'
import Gradient from './components/Gradient'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Panel1 from './components/panels/Panel1'
import Panel2 from './components/panels/Panel2'
import Panel3 from './components/panels/Panel3'

function App() {
  return (
    <Router>
    <Fragment>
      <Navbar/>
      <Landing/>
      <Logos/>
      <Working/>
      <Switch>
        <Route exact path = '/' component={Panel1} />
        <Route exact path = '/panel2' component={Panel2} />
        <Route exact path = '/panel3' component={Panel3} />
      </Switch>
      <PeppertypeFor/>
      <Reviews/>
      <Gradient/>
      <Footer/>
    </Fragment>
    </Router>
  );
}

export default App;
