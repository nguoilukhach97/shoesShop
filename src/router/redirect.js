import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Home from '../components/content/index/content';
import About from '../components/content/about/about';
import Blog from '../components/content/blog/blog';
import Contact from '../components/content/contact/contact';
import Detail from '../components/content/detail/detail.js';


export default class Redirect extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/detail" component={Detail} />
                </div>
            </Router>
        )
    }
}
