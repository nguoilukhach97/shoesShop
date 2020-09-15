import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="header-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="logo">
                                <Link to="/"><img src="images/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <nav className="navbar navbar-default" role="navigation">
                                <div className="container-fluid">
                                    {/* Brand and toggle get grouped for better mobile display */}
                                    <div className="navbar-header"><span className="text-left"><a href="#">MENU</a></span>
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    {/* Collect the nav links, forms, and other content for toggling */}
                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav">
                                            <li>
                                                <div className="btn-group show-on-hover">
                                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        Các chức năng<span className="caret" />
                                                    </button>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li><a href="#">Website building...</a></li>
                                                        <li><a href="#">Men</a></li>
                                                        <li><a href="#">Women</a></li>
                                                        <li><a href="#">Accessories</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/blog">Blog</NavLink></li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                    </div>{/* /.navbar-collapse */}
                                </div>{/* /.container-fluid */}
                            </nav>
                            <div className="right">
                                <ul className="list-unstyled">
                                    <li className="a text-left"><a href="#"><span className="glyphicon glyphicon-shopping-cart" /></a> 1,696,96
                    9 đ</li>
                                    <li><a href="#">Giỏ hàng</a></li>
                                </ul>
                            </div>
                        </div>
                        {/*--start-images-slider--*/}
                        {/* Single button */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;