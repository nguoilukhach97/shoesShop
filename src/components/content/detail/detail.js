import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Detail extends Component {
    render() {
        return (
            <div>
                <div className="single">
                    <div className="container">
                        <div className="rsidebar span_1_of_left">
                            <section className="sky-form">
                                <h4>Occasion</h4>
                                <div className="row row1 scroll-pane" style={{ overflow: 'hidden', padding: '0px', width: '283px' }}>
                                    <div className="jspContainer" style={{ width: '283px', height: '200px' }}><div className="jspPane" style={{ padding: '20px', top: '0px', left: '0px', width: '243px' }}><div className="col col-4">
                                        <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />Athletic (20)</label>
                                    </div><div className="col col-4">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Athletic Shoes (48)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Casual (45)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Casual (45)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Other (1)</label>
                                        </div></div></div></div>
                                <h4>Category</h4>
                                <div className="row row1 scroll-pane" style={{ overflow: 'hidden', padding: '0px', width: '283px' }}>
                                    <div className="jspContainer" style={{ width: '283px', height: '200px' }}><div className="jspPane" style={{ padding: '20px', top: '0px', left: '0px', width: '243px' }}><div className="col col-4">
                                        <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />Flats (70)</label>
                                    </div><div className="col col-4">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Athletic Shoes (48)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Athletic Shoes (48)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Heels (38)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Other (1)</label>
                                        </div></div></div></div>
                                <h4>Styles</h4>
                                <div className="row row1 scroll-pane" style={{ overflow: 'hidden', padding: '0px', width: '283px' }}>
                                    <div className="jspContainer" style={{ width: '283px', height: '200px' }}><div className="jspPane" style={{ padding: '20px', top: '0px', left: '0px', width: '243px' }}><div className="col col-4">
                                        <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />Athletic (20)</label>
                                    </div><div className="col col-4">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Ballerina (5)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Pumps (7)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />High Tops (2)</label>
                                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i />Other (1)</label>
                                        </div></div></div></div>
                            </section>
                        </div>
                        <div className="cont span_2_of_3">
                            <div className="labout span_1_of_a1">
                                {/* start product_slider */}
                                <ul id="etalage">
                                    <li>
                                        <a href="optionallink.html">
                                            <img className="etalage_thumb_image" src="images/t1.jpg" />
                                            <img className="etalage_source_image" src="images/t2.jpg" />
                                        </a>
                                    </li>
                                    <li>
                                        <img className="etalage_thumb_image" src="images/t2.jpg" />
                                        <img className="etalage_source_image" src="images/t2.jpg" />
                                    </li>
                                    <li>
                                        <img className="etalage_thumb_image" src="images/t3.jpg" />
                                        <img className="etalage_source_image" src="images/t3.jpg" />
                                    </li>
                                    <li>
                                        <img className="etalage_thumb_image" src="images/t4.jpg" />
                                        <img className="etalage_source_image" src="images/t4.jpg" />
                                    </li>
                                    <li>
                                        <img className="etalage_thumb_image" src="images/t5.jpg" />
                                        <img className="etalage_source_image" src="images/t5.jpg" />
                                    </li>
                                    <li>
                                        <img className="etalage_thumb_image" src="images/t6.jpg" />
                                        <img className="etalage_source_image" src="images/t6.jpg" />
                                    </li>
                                    <li>
                                        <img className="etalage_thumb_image" src="images/t1.jpg" />
                                        <img className="etalage_source_image" src="images/t1.jpg" />
                                    </li>
                                </ul>
                                {/* end product_slider */}
                            </div>
                            <div className="cont1 span_2_of_a1 pull-right">
                                <h3 className="m_3">Lorem ipsum dolor sit amet</h3>
                                <div className="price_single">
                                    <span className="reducedfrom">$66.00</span>
                                    <span className="actual">$12.00</span><a href="#">click for offer</a>
                                </div>
                                <ul className="options list-unstyled">
                                    <h4 className="m_9">Select a Size</h4>
                                    <li><a href="#">6</a></li>
                                    <li><a href="#">7</a></li>
                                    <li><a href="#">8</a></li>
                                    <li><a href="#">9</a></li>
                                    <div className="clearfix" />
                                </ul>
                                <div className="btn_form">
                                    <form>
                                        <input type="submit" defaultValue="buy now" title />
                                    </form>
                                </div>
                                <ul className="add-to-links list-unstyled">
                                    <li><img src="images/wish.png" alt="" /><a href="#">Add to wishlist</a></li>
                                </ul>
                                <p className="m_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <div className="social_single">
                                    <ul list-unstyled>
                                        <li className="fb"><a href="#"><span> </span></a></li>
                                        <li className="tw"><a href="#"><span> </span></a></li>
                                        <li className="g_plus"><a href="#"><span> </span></a></li>
                                        <li className="rss"><a href="#"><span> </span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="nbs-flexisel-container"><div className="nbs-flexisel-inner"><ul id="flexiselDemo3" className="nbs-flexisel-ul" style={{ left: '-195.2px', display: 'block' }}>
                            <li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic9.jpg" /><div className="grid-flex"><a href="#">Zumba</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic8.jpg" /><div className="grid-flex"><a href="#">Bloch</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic7.jpg" /><div className="grid-flex"><a href="#">Capzio</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic11.jpg" /><div className="grid-flex"><a href="#">Bloch</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic10.jpg" /><div className="grid-flex"><a href="#">Capzio</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic9.jpg" /><div className="grid-flex"><a href="#">Zumba</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic8.jpg" /><div className="grid-flex"><a href="#">Bloch</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic7.jpg" /><div className="grid-flex"><a href="#">Capzio</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic11.jpg" /><div className="grid-flex"><a href="#">Bloch</a><p>Rs 850</p></div></li><li className="nbs-flexisel-item" style={{ width: '195.2px' }}><img src="images/pic10.jpg" /><div className="grid-flex"><a href="#">Capzio</a><p>Rs 850</p></div></li></ul><div className="nbs-flexisel-nav-left" style={{ top: '74px' }} /><div className="nbs-flexisel-nav-right" style={{ top: '74px' }} /></div></div>
                        <div className="toogle">
                            <h3 className="m_3">Product Details</h3>
                            <p className="m_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                        </div>
                        <div className="toogle">
                            <h3 className="m_3">Product Reviews</h3>
                            <p className="m_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        );
    }
}

export default Detail;