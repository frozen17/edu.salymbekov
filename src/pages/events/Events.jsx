import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import { Link } from 'react-router-dom'
import axios from 'axios';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Events = () => {


    const sliderRef = useRef(null);
    const [events, setEvents] = useState(null)


    const getData = async () => {
      try {
        await axios
          .get(
            "https://backend.salymbekov.kg/wp-json/wp/v2/news?per_page=100"
          )
          .then((res) => setEvents(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      getData();
    }, []);


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
                  {console.log(events)}
                  <Slider {...settings} ref={sliderRef}>
                  {events?.map((event) => (
                    <div className="item" key={event.id}>
                      <div className="col-item">
                        <div className="sale-label sale-top-right">Sale</div>
                        <div className="product-image-area"> <Link className="product-image" title="Sample Product" to={`/news_detailed/${event.id}`}> <img style={{
                                                      width: "100%",
                                                      height: "40vh"
                        }} src={event.acf.file1 ? event.acf.file1 : "../../assets/products-images/product1.jpg"} className="img-responsive" alt="" /> </Link>
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
                            <div className="item-content">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                              </div>
                              <p>{event.title.rendered}</p>
                            </div>
                          </div>
                          
                          <div className="clearfix"> </div>
                        </div>
                      </div>
                    </div>
                    ))}
                  
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