import React, { Component } from 'react';
import ProductContent from './product-content.js';
class Content extends Component {

    render() {
        var products = [
            {
                id: "1",
                name: "Đôi giày xin sò ",
                image: "images/cont1.jpg",
                price: 350
            },
            {
                id: "2",
                name: "Đôi giày xin sò hình cái túi",
                image: "images/cont2.jpg",
                price: 350
            },
            {
                id: "3",
                name: "Đôi giày xin sò hình cái túi",
                image: "images/cont3.jpg",
                price: 350
            },
            {
                id: "4",
                name: "Đôi giày xin sò",
                image: "images/cont3.jpg",
                price: 350
            },
            {
                id: "5",
                name: "Đôi giày xin sò hình cái túi",
                image: "images/cont4.jpg",
                price: 350
            },
            {
                id: "6",
                name: "Đôi giày xin sò hình cái túi",
                image: "images/cont4.jpg",
                price: 350
            },
            {
                id: "7",
                name: "Đôi giày xin sò ",
                image: "images/cont4.jpg",
                price: 350
            },
            {
                id: "8",
                name: "Đôi giày xin sò hình cái túi",
                image: "images/cont4.jpg",
                price: 350
            },
            {
                id: "9",
                name: "Đôi giày xin sò hình cái túi",
                image: "images/cont4.jpg",
                price: 350
            },
            {
                id: "10",
                name: "Đôi giày xin sò hình cái túiasdasdasdasdasd",
                image: "images/cont4.jpg",
                price: 350
            },
            {
                id: "11",
                name: "Đôi giày xin sò ",
                image: "images/cont4.jpg",
                price: 350
            },
            {
                id: "12",
                name: "Đôi giày xin sò i",
                image: "images/cont4.jpg",
                price: 350
            },
            {
                id: "13",
                name: "Đôi giày xin sò hình cái túi",
                image: "images/cont4.jpg",
                price: 350
            },
        ];

        let elementProduct = products.map((product, item) => {
            return (
                <ProductContent name={product.name} price={product.price} image={product.image} id={product.id} key={item} />
            );
        });
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
                        <div className="row is-flex">
                            { elementProduct }
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