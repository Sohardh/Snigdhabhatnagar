import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import About from './component/About/About';
import Work from './component/Work/Work';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
        <Route path="/" exact component={Home}/>
      </Layout>
      </div>
    );
  }
}

export default App;
