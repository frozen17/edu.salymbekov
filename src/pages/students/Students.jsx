import React, { useRef } from 'react';
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";

const Students = () => {
    const sliderRef = useRef(null);


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <section className="middle-slider container wow bounceInUp animated">
        <div className="row">


        
          <div className="col-md-6">
            <div className="bag-product-slider small-pr-slider cat-section">
              <div className="slider-items-products">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <div className="new_title center">
                  <h2>ОТЗЫВЫ СТУДЕНТОВ »</h2>
                </div>
                    <div>
                        <button onClick={prev}>назад</button><button onClick={next}>след</button>
                    </div>
                </div>

                
                <div id="bag-seller-slider" className="product-flexslider hidden-buttons">
                
                  <div className="slider-items slider-width-col3"> 
                    <Slider {...settings} ref={sliderRef}>
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img src="../../assets/products-images/product1.jpg" className="img-responsive" alt="a" /> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button type="button" title="Add to Cart" className="button btn-cart"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img src="../../assets/products-images/product1.jpg" className="img-responsive" alt="a" /> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button type="button" title="Add to Cart" className="button btn-cart"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg" /> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
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
        

          <div className="col-md-6">
            <div className="shoes-product-slider small-pr-slider cat-section">
              <div className="slider-items-products">
<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <div className="new_title center">
                  <h2>НАШИ ПРЕПОДАВАТЕЛИ »</h2>
                </div>
                    <div>
                        <button onClick={prev}>назад</button><button onClick={next}>след</button>
                    </div>
                </div>
                <div id="shoes-slider" className="product-flexslider hidden-buttons">
                  <div className="slider-items slider-width-col3"> 
                  <Slider {...settings} ref={sliderRef}>

                
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img src="../../assets/products-images/product1.jpg" className="img-responsive" alt="a" /> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button type="button" title="Add to Cart" className="button btn-cart"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img src="../../assets/products-images/product1.jpg" className="img-responsive" alt="a" /> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button type="button" title="Add to Cart" className="button btn-cart"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="item">
                      <div className="col-item">
                        <div className="product-image-area"> <a className="product-image" title="Sample Product" href="http://ow.ly/XqzNo"> <img alt="a" className="img-responsive" src="../../assets/products-images/product1.jpg"/> </a>
                          <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
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
                          <div className="actions">
                            <button className="button btn-cart" title="Add to Cart" type="button"><span>Add to Cart</span></button>
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

export default Students;