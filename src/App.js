import React from 'react';
import Header from './components/header/header.js';
import Content from './components/content/content.js';
import Footer from './components/footer/footer.js';
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
