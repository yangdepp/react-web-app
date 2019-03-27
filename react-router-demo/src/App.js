import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import User from './User'

//  BrowserRouter是基于HTML5 history API(pushState, replaceState)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          {/* //  exact属性，表示路由完全相同的情况下，才会渲染
          //  switch只会匹配第一个合适的理由 */}
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path="/contact"
            children={props =>
            <div>{props.match ? "active" : "deactive"}</div>
          } />
            {/* <Route path="/contact" component={Contact} /> */}
            <Route path="/user/:user" component={User} />
        </div>
      </Router>
        );
      }
    }
    
export default App;