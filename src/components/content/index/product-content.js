import React, { Component } from 'react';
class ProductContent extends Component {

    render() {
        return (
            <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2 flex-item">
                <div className="grid">
                    <div className="portfolio app mix_all" data-cat="app" style={{ display: 'inline-block', opacity: 1 }}>
                        <div className="portfolio-wrapper">
                            <a data-toggle="modal" data-target={"." + this.props.id} href="#" className="b-link-stripe b-animate-go  thickbox">
                                <img src={this.props.image} /><div className="b-wrapper"><h2 className="b-animate b-from-left b-delay03 "><img src="images/link-ico.png" alt="" /></h2>
                                </div></a>
                        </div>
                    </div>
                    <p className="text-center">{this.props.name}</p>
                    <h2 className="text-center">${this.props.price}</h2>
                    <p className="text-center"><a href="details.html">Buy</a></p>
                </div>
                {/*--start-model-box--*/}
                <a data-toggle="modal" data-target=".bs-example-modal-md" href="#"> </a>
                <div className={"modal fade bs-example-modal-md light-box class3 " + this.props.id} tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
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
        );
    }
}

export default ProductContent;
