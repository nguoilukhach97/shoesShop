import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            {/*--start-images-slider--*/}
                            <div className="images-slider">
                                <div id="fwslider">
                                    <div className="slider_container">
                                        <div className="slide">
                                            <img src="images/img.jpg" alt="" />
                                            <div className="slide_content">
                                                <div className="slide_content_wrap">
                                                    <p className="description">Website building..</p>
                                                    <h4 className="title">Shoes and Sandal or Laptop</h4>
                                                    <p className="description"><a href="#">Bấm vào đây không có tác dụng	</a></p>
                                                    <div className="slide-btns description">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide">
                                            <img src="images/img.jpg" alt="" />
                                            <div className="slide_content">
                                                <div className="slide_content_wrap">
                                                    <p className="description">Trang web đang xây dựng</p>
                                                    <h4 className="title">Sẽ bán giày dép và 1 vài thứ</h4>
                                                    <p className="description"><a href="#">Giao diện không chính chủ</a></p>
                                                    <div className="slide-btns description">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/slide */}
                                    </div>
                                    <div className="timers"> </div>
                                    <div className="slidePrev"><span> </span></div>
                                    <div className="slideNext"><span> </span></div>
                                </div>
                                {/*/slider */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*--//End-container---*/}
                <div className="container">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2>Một số sản phẩm nổi bật</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="grid">
                                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                                        <div className="portfolio-wrapper">
                                            <a data-toggle="modal" data-target=".class2" href="#" className="b-link-stripe b-animate-go  thickbox">
                                                <img src="images/cont1.jpg" /><div className="b-wrapper"><h2 className="b-animate b-from-left    b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                                </div></a>
                                        </div>
                                    </div>
                                    <p className="text-center">Đôi giày xin sò hình cái túi</p>
                                    <h2 className="text-center">$350.00</h2>
                                    <p className="text-center"><a href="details.html">Mua luôn</a></p>
                                </div>
                            </div>
                            {/*--start-model-box--*/}
                            <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                            <div className="modal fade bs-example-modal-md light-box class2" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content light-box-info">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src="images/close.png" title="close" /></button>
                                        <h3>Bạn muốn hiện gì ở đây</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque posuere diam et est hendrerit, eget sodales lectus tincidunt.
                                        Etiam suscipit orci sapien, at molestie lorem imperdiet vitae. Fusce nunc eros, congue non hendrerit sed, lobortis scelerisque magna.
                                        Ut in nunc sem. Integer bibendum enim et erat molestie, sed interdum nisl ultricies. In hac habitasse platea dictumst.
                      Nullam sem diam, tincidunt dapibus tellus pulvinar, pulvinar tempus dui. Integer eu faucibus arcu. Duis adipiscing commodo ipsum dapibus elementum.</p>
                                    </div>
                                </div>
                            </div>
                            {/*--start-model-box--*/}
                            <div className="col-md-2">
                                <div className="grid">
                                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                                        <div className="portfolio-wrapper">
                                            <a data-toggle="modal" data-target=".class3" href="#" className="b-link-stripe b-animate-go  thickbox">
                                                <img src="images/cont2.jpg" /><div className="b-wrapper"><h2 className="b-animate b-from-left    b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                                </div></a>
                                        </div>
                                    </div>
                                    <p className="text-center">Big block Lether Bag</p>
                                    <h2 className="text-center">$350.00</h2>
                                    <p className="text-center"><a href="details.html">Buy</a></p>
                                </div>
                            </div>
                            {/*--start-model-box--*/}
                            <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                            <div className="modal fade bs-example-modal-md light-box class3" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content light-box-info">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src="images/close.png" title="close" /></button>
                                        <h3>Bạn muốn hiện gì ở đây lần 2</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque posuere diam et est hendrerit, eget sodales lectus tincidunt.
                                        Etiam suscipit orci sapien, at molestie lorem imperdiet vitae. Fusce nunc eros, congue non hendrerit sed, lobortis scelerisque magna.
                                        Ut in nunc sem. Integer bibendum enim et erat molestie, sed interdum nisl ultricies. In hac habitasse platea dictumst.
                      Nullam sem diam, tincidunt dapibus tellus pulvinar, pulvinar tempus dui. Integer eu faucibus arcu. Duis adipiscing commodo ipsum dapibus elementum.</p>
                                    </div>
                                </div>
                            </div>
                            {/*--start-model-box--*/}
                            <div className="col-md-2">
                                <div className="grid">
                                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                                        <div className="portfolio-wrapper">
                                            <a data-toggle="modal" data-target=".bs-example-modal-md" href="#" className="b-link-stripe b-animate-go  thickbox">
                                                <img src="images/cont3.jpg" /><div className="b-wrapper"><h2 className="b-animate b-from-left    b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                                </div></a>
                                        </div>
                                    </div>
                                    <p className="text-center">Big block Lether Bag</p>
                                    <h2 className="text-center">$350.00</h2>
                                    <p className="text-center"><a href="details.html">Buy</a></p>
                                </div>
                                {/*--start-model-box--*/}
                                <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                                <div className="modal fade bs-example-modal-md light-box class3" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-md">
                                        <div className="modal-content light-box-info">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src="images/close.png" title="close" /></button>
                                            <h3>Bạn muốn hiện gì ở đây lần 2</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque posuere diam et est hendrerit, eget sodales lectus tincidunt.
                                            Etiam suscipit orci sapien, at molestie lorem imperdiet vitae. Fusce nunc eros, congue non hendrerit sed, lobortis scelerisque magna.
                                            Ut in nunc sem. Integer bibendum enim et erat molestie, sed interdum nisl ultricies. In hac habitasse platea dictumst.
                      Nullam sem diam, tincidunt dapibus tellus pulvinar, pulvinar tempus dui. Integer eu faucibus arcu. Duis adipiscing commodo ipsum dapibus elementum.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*--start-model-box--*/}
                            </div>
                            
                            <div className="col-md-2">
                                <div className="grid">
                                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                                        <div className="portfolio-wrapper">
                                            <a data-toggle="modal" data-target=".bs-example-modal-md" href="#" className="b-link-stripe b-animate-go  thickbox">
                                                <img src="images/cont2.jpg" /><div className="b-wrapper"><h2 className="b-animate b-from-left    b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                                </div></a>
                                        </div>
                                    </div>
                                    <p className="text-center">Big block Lether Bag</p>
                                    <h2 className="text-center">$350.00</h2>
                                    <p className="text-center"><a href="details.html">Buy</a></p>
                                </div>
                                {/*--start-model-box--*/}
                                <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                                <div className="modal fade bs-example-modal-md light-box class3" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-md">
                                        <div className="modal-content light-box-info">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src="images/close.png" title="close" /></button>
                                            <h3>Bạn muốn hiện gì ở đây lần 2</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque posuere diam et est hendrerit, eget sodales lectus tincidunt.
                                            Etiam suscipit orci sapien, at molestie lorem imperdiet vitae. Fusce nunc eros, congue non hendrerit sed, lobortis scelerisque magna.
                                            Ut in nunc sem. Integer bibendum enim et erat molestie, sed interdum nisl ultricies. In hac habitasse platea dictumst.
                      Nullam sem diam, tincidunt dapibus tellus pulvinar, pulvinar tempus dui. Integer eu faucibus arcu. Duis adipiscing commodo ipsum dapibus elementum.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*--start-model-box--*/}
                            </div>
                            <div className="col-md-2">
                                <div className="grid">
                                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                                        <div className="portfolio-wrapper">
                                            <a data-toggle="modal" data-target=".bs-example-modal-md" href="#" className="b-link-stripe b-animate-go  thickbox">
                                                <img src="images/cont2.jpg" /><div className="b-wrapper"><h2 className="b-animate b-from-left    b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                                </div></a>
                                        </div>
                                    </div>
                                    <p className="text-center">Big block Lether Bag</p>
                                    <h2 className="text-center">$350.00</h2>
                                    <p className="text-center"><a href="details.html">Buy</a></p>
                                </div>
                                {/*--start-model-box--*/}
                                <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                                <div className="modal fade bs-example-modal-md light-box class3" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-md">
                                        <div className="modal-content light-box-info">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src="images/close.png" title="close" /></button>
                                            <h3>Bạn muốn hiện gì ở đây lần 2</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque posuere diam et est hendrerit, eget sodales lectus tincidunt.
                                            Etiam suscipit orci sapien, at molestie lorem imperdiet vitae. Fusce nunc eros, congue non hendrerit sed, lobortis scelerisque magna.
                                            Ut in nunc sem. Integer bibendum enim et erat molestie, sed interdum nisl ultricies. In hac habitasse platea dictumst.
                      Nullam sem diam, tincidunt dapibus tellus pulvinar, pulvinar tempus dui. Integer eu faucibus arcu. Duis adipiscing commodo ipsum dapibus elementum.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*--start-model-box--*/}
                            </div>
                            <div className="col-md-2">
                                <div className="grid">
                                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                                        <div className="portfolio-wrapper">
                                            <a data-toggle="modal" data-target=".bs-example-modal-md" href="#" className="b-link-stripe b-animate-go  thickbox">
                                                <img src="images/cont2.jpg" /><div className="b-wrapper"><h2 className="b-animate b-from-left    b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                                </div></a>
                                        </div>
                                    </div>
                                    <p className="text-center">Big block Lether Bag</p>
                                    <h2 className="text-center">$350.00</h2>
                                    <p className="text-center"><a href="details.html">Buy</a></p>
                                </div>
                                {/*--start-model-box--*/}
                                <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                                <div className="modal fade bs-example-modal-md light-box class3" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-md">
                                        <div className="modal-content light-box-info">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src="images/close.png" title="close" /></button>
                                            <h3>Bạn muốn hiện gì ở đây lần 2</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque posuere diam et est hendrerit, eget sodales lectus tincidunt.
                                            Etiam suscipit orci sapien, at molestie lorem imperdiet vitae. Fusce nunc eros, congue non hendrerit sed, lobortis scelerisque magna.
                                            Ut in nunc sem. Integer bibendum enim et erat molestie, sed interdum nisl ultricies. In hac habitasse platea dictumst.
                      Nullam sem diam, tincidunt dapibus tellus pulvinar, pulvinar tempus dui. Integer eu faucibus arcu. Duis adipiscing commodo ipsum dapibus elementum.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*--start-model-box--*/}
                            </div>
                            <div className="col-md-2">
                                <div className="grid">
                                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                                        <div className="portfolio-wrapper">
                                            <a data-toggle="modal" data-target=".bs-example-modal-md" href="#" className="b-link-stripe b-animate-go  thickbox">
                                                <img src="images/cont2.jpg" /><div className="b-wrapper"><h2 className="b-animate b-from-left    b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                                </div></a>
                                        </div>
                                    </div>
                                    <p className="text-center">Big block Lether Bag</p>
                                    <h2 className="text-center">$350.00</h2>
                                    <p className="text-center"><a href="details.html">Buy</a></p>
                                </div>
                                {/*--start-model-box--*/}
                                <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                                <div className="modal fade bs-example-modal-md light-box class3" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-md">
                                        <div className="modal-content light-box-info">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src="images/close.png" title="close" /></button>
                                            <h3>Bạn muốn hiện gì ở đây lần 2</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque posuere diam et est hendrerit, eget sodales lectus tincidunt.
                                            Etiam suscipit orci sapien, at molestie lorem imperdiet vitae. Fusce nunc eros, congue non hendrerit sed, lobortis scelerisque magna.
                                            Ut in nunc sem. Integer bibendum enim et erat molestie, sed interdum nisl ultricies. In hac habitasse platea dictumst.
                      Nullam sem diam, tincidunt dapibus tellus pulvinar, pulvinar tempus dui. Integer eu faucibus arcu. Duis adipiscing commodo ipsum dapibus elementum.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*--start-model-box--*/}
                            </div>
                            <div className="col-md-2">
                                <div className="grid">
                                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                                        <div className="portfolio-wrapper">
                                            <a data-toggle="modal" data-target=".bs-example-modal-md" href="#" className="b-link-stripe b-animate-go  thickbox">
                                                <img src="images/cont2.jpg" /><div className="b-wrapper"><h2 className="b-animate b-from-left    b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                                </div></a>
                                        </div>
                                    </div>
                                    <p className="text-center">Big block Lether Bag</p>
                                    <h2 className="text-center">$350.00</h2>
                                    <p className="text-center"><a href="details.html">Buy</a></p>
                                </div>
                                {/*--start-model-box--*/}
                                <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                                <div className="modal fade bs-example-modal-md light-box class3" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-md">
                                        <div className="modal-content light-box-info">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><img src="images/close.png" title="close" /></button>
                                            <h3>Bạn muốn hiện gì ở đây lần 2</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque posuere diam et est hendrerit, eget sodales lectus tincidunt.
                                            Etiam suscipit orci sapien, at molestie lorem imperdiet vitae. Fusce nunc eros, congue non hendrerit sed, lobortis scelerisque magna.
                                            Ut in nunc sem. Integer bibendum enim et erat molestie, sed interdum nisl ultricies. In hac habitasse platea dictumst.
                      Nullam sem diam, tincidunt dapibus tellus pulvinar, pulvinar tempus dui. Integer eu faucibus arcu. Duis adipiscing commodo ipsum dapibus elementum.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*--start-model-box--*/}
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                    <div className="top">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="grid">
                                    <h2>About Us</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus Quisque posuere diam et est hendrerit, eget sodales lectus.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="grid">
                                    <h2>Our Blog</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas orci et blandit dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus Quisque posuere diam et est hendrerit, eget sodales lectus.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="grid1 pull-left">
                                    <h2>Contact</h2>
                                    <address>
                                        <p>tryd online service</p>
                                        <p>12345 main street</p>
                                        <p>Newyork</p>
                                        <p><a href="#">info#@mystore.com</a></p>
                                        <p>555-58746-5475</p>
                                    </address>
                                </div>
                                <div className="grid2 pull-right">
                                    <div className="social-icons-set">
                                        <ul>
                                            <li><a className="facebook" href="#"> </a></li>
                                            <li><a className="twitter" href="#"> </a></li>
                                            <li><a className="vimeo" href="#"> </a></li>
                                            <div className="clear"> </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;