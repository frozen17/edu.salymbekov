import React, { useRef } from 'react';
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import { Link } from 'react-router-dom'

const Events = () => {


    const sliderRef = useRef(null);


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };


      const next = () =>{
        sliderRef.current?.slickNext();
      }
      const prev = () =>{
        sliderRef.current?.slickPrev();
      }



    return (
        <section className="main-container col1-layout home-content-container">
        <div className="container">
          <div className="std">
            <div className="best-seller-pro wow bounceInUp animated">
              <div className="slider-items-products">
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <div className="new_title center">
                  <h2>ВАЖНЫЕ МЕРОПРИЯТИЯ »</h2>
                </div>
                    <div>
                        <button onClick={prev}>назад</button><button onClick={next}>след</button>
                    </div>
                </div>
                <div id="best-seller-slider" className="product-flexslider hidden-buttons">
                  <div className="slider-items slider-width-col4"> 
                  <Slider {...settings} ref={sliderRef}>
                    <div className="item">
                      <div className="col-item">
                        <div className="sale-label sale-top-right">Sale</div>
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img src="../../assets/products-images/product1.jpg" className="img-responsive" alt="" /> </a>
                          <div className="hover_fly"> <Link className="exclusive ajax_add_to_cart_button" to="#" title="Add to cart">
                            <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                            </Link> <a className="quick-view" href="quick_view.html">
                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                            </a> <a className="add_to_compare" href="compare.html">
                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                            </a> <a className="addToWishlist wishlistProd_5" href="http://bit.do/bromq" >
                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                            </a> </div>
                        </div>
                        <div className="info">
                          <div className="info-inner">
                            <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> Sample Product </a> </div>
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <div className="price-box">
                                <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="new-label new-top-right">New</div>
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img src="../../assets/products-images/product1.jpg" className="img-responsive" alt="a" /> </a>
                          <div className="hover_fly"> <Link className="exclusive ajax_add_to_cart_button" to="#" title="Add to cart">
                            <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                            </Link> <a className="quick-view" href="quick_view.html">
                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                            </a> <a className="add_to_compare" href="compare.html">
                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                            </a> <a className="addToWishlist wishlistProd_5" href="http://bit.do/bromq" >
                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                            </a> </div>
                        </div>
                        <div className="info">
                          <div className="info-inner">
                            <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> Sample Product </a> </div>
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <div className="price-box"> <span className="regular-price"> <span className="price">$422.00</span> </span> </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="sale-label sale-top-right">Sale</div>
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="hover_fly"> <Link className="exclusive ajax_add_to_cart_button" to="#" title="Add to cart">
                            <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                            </Link> <a className="quick-view" href="quick_view.html">
                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                            </a> <a className="add_to_compare" href="compare.html">
                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                            </a> <a className="addToWishlist wishlistProd_5" href="http://bit.do/bromq" >
                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                            </a> </div>
                        </div>
                        <div className="info">
                          <div className="info-inner">
                            <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> Sample Product </a> </div>
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <div className="price-box"> <span className="regular-price"> <span className="price">$50.00</span> </span> </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="sale-label sale-top-right">Sale</div>
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="hover_fly"> <Link className="exclusive ajax_add_to_cart_button" to="#" title="Add to cart">
                            <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                            </Link> <a className="quick-view" href="quick_view.html">
                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                            </a> <a className="add_to_compare" href="compare.html">
                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                            </a> <a className="addToWishlist wishlistProd_5" href="http://bit.do/bromq" >
                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                            </a> </div>
                        </div>
                        <div className="info">
                          <div className="info-inner">
                            <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> Sample Product </a> </div>
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <div className="price-box">
                                <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="sale-label sale-top-right">Sale</div>
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="hover_fly"> <Link className="exclusive ajax_add_to_cart_button" to="#" title="Add to cart">
                            <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                            </Link> <a className="quick-view" href="quick_view.html">
                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                            </a> <a className="add_to_compare" href="compare.html">
                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                            </a> <a className="addToWishlist wishlistProd_5" href="http://bit.do/bromq" >
                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                            </a> </div>
                        </div>
                        <div className="info">
                          <div className="info-inner">
                            <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> Sample Product </a> </div>
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <div className="price-box">
                                <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="new-label new-top-right">New</div>
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="hover_fly"> <Link className="exclusive ajax_add_to_cart_button" to="#" title="Add to cart">
                            <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                            </Link> <a className="quick-view" href="quick_view.html">
                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                            </a> <a className="add_to_compare" href="compare.html">
                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                            </a> <a className="addToWishlist wishlistProd_5" href="http://bit.do/bromq" >
                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                            </a> </div>
                        </div>
                        <div className="info">
                          <div className="info-inner">
                            <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> Sample Product </a> </div>
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <div className="price-box"> <span className="regular-price"> <span className="price">$422.00</span> </span> </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="sale-label sale-top-right">Sale</div>
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="hover_fly"> <Link className="exclusive ajax_add_to_cart_button" to="#" title="Add to cart">
                            <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                            </Link> <a className="quick-view" href="quick_view.html">
                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                            </a> <a className="add_to_compare" href="compare.html">
                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                            </a> <a className="addToWishlist wishlistProd_5" href="http://bit.do/bromq" >
                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                            </a> </div>
                        </div>
                        <div className="info">
                          <div className="info-inner">
                            <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> Sample Product </a> </div>
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <div className="price-box"> <span className="regular-price"> <span className="price">$50.00</span> </span> </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="sale-label sale-top-right">Sale</div>
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="hover_fly"> <Link className="exclusive ajax_add_to_cart_button" to="#" title="Add to cart">
                            <div><i className="icon-shopping-cart"></i><span>Add to cart</span></div>
                            </Link> <a className="quick-view" href="quick_view.html">
                            <div><i className="icon-eye-open"></i><span>Quick view</span></div>
                            </a> <a className="add_to_compare" href="compare.html">
                            <div><i className="icon-random"></i><span>Add to compare</span></div>
                            </a> <a className="addToWishlist wishlistProd_5" href="http://bit.do/bromq" >
                            <div><i className="icon-heart"></i><span>Add to Wishlist</span></div>
                            </a> </div>
                        </div>
                        <div className="info">
                          <div className="info-inner">
                            <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> Sample Product </a> </div>
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <div className="price-box">
                                <p className="special-price"> <span className="price"> $45.00 </span> </p>
                                <p className="old-price"> <span className="price-sep">-</span> <span className="price"> $50.00 </span> </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Events;