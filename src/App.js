import React from 'react';
import Header from './components/header/header.js';
import Content from './components/content/index/content.js';
import Footer from './components/footer/footer.js';
import About from './components/content/about/about.js';
import Blog from './components/content/blog/blog.js';
import Contact from './components/content/contact/contact.js';
import Detail from './components/content/detail/detail.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
