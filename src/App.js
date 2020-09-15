import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import './App.css';
import Redirect from './router/redirect.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Redirect />
                {/* <Content /> */}
                <Footer />
            </div>
        </Router>
        
    );
}

export default App;
