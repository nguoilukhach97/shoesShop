import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-inline pull-left">
                                <li><a href="#">Terms of Services</a></li>
                                <li><a href="#">Refunds</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <form className="navbar-form pull-right" role="search">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <button type="Find" className="btn btn-default">Find</button>
                            </form>
                        </div>
                    </div>
                    <div className="copy-right text-center">
                        <p>©Copyright 2014 All Rights Reserved  Template <a href="http://w3layouts.com/">  w3layouts.com</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;