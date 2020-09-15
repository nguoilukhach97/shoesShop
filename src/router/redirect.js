import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Content from '../components/content/index/content.js';
import About from '../components/content/about/about.js';
import Blog from '../components/content/blog/blog.js';
import Contact from '../components/content/contact/contact.js';
import Detail from '../components/content/detail/detail.js';

export default class Redirect extends Component {
    render() {
        return (
            
                <div>
                    <Route exact path="/" component={Content} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/detail" component={Detail} />
                </div>
            
        )
    }
}
