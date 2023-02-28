import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import './News.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const News = () => {
    const sliderRef = useRef(null);

    const [news, setNews] = useState(null)

  const getData = async () => {
    try {
      await axios
        .get(
          "https://backend.salymbekov.kg/wp-json/wp/v2/latest_news"
        )
        .then((res) => setNews(res.data));
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
        slidesToShow: 5,
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
        <section className="featured-pro container wow bounceInUp animated">
        <div className="slider-items-products">
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                    <div className="new_title center">
                  <h2>ПОСЛЕДНИЕ НОВОСТИ »</h2>
                </div>
                    <div>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{borderRadius: "0", backgroundColor: "#1c95d1", '&:hover': {
        backgroundColor: "#1c95d1"
   }}} onClick={prev} size="small" color="secondary" aria-label="add">
        <ChevronLeftIcon />
      </Fab>
      <Fab sx={{borderRadius: "0" , backgroundColor: "#1c95d1", '&:hover': {
        backgroundColor: "#1c95d1"
   }}} onClick={next} size="small" color="secondary" aria-label="add">
        <ChevronRightIcon />
      </Fab>
    </Box>
                    </div>
                </div>
          <div id="featured-slider" className="product-flexslider hidden-buttons">
            <div className="slider-items slider-width-col4"> 
              <Slider {...settings} ref={sliderRef}>
                {news?.map((news) => (
                                <div key={news.id} className="item">
                <div className="col-item">
                  <div className="sale-label sale-top-right">Sale</div>
                  <div className="product-image-area"> <Link className="product-image" title="Sample Product" to={`/latest_news_detailed/${news.id}`}> <img style={{
                    width: "100%",
                    height: "35vh"
                  }} src={news.acf.file1 ? news.acf.file1 : "../../assets/products-images/product1.jpg"} className="img-responsive" alt="a" /> </Link>
                    <div className="actions-links"><span className="add-to-links"> <a title="magik-btn-quickview" className="magik-btn-quickview" href="quick_view.html"><span>quickview</span></a> <a title="Add to Wishlist" className="link-wishlist" href="http://bit.do/bromq"><span>Add to Wishlist</span></a> <a title="Add to Compare" className="link-compare" href="compare.html"><span>Add to Compare</span></a></span> </div>
                  </div>
                  <div className="info">
                    <div className="info-inner">
                      <div className="item-title"> <a title=" Sample Product" href="http://ow.ly/XqzNo"> {news.title.rendered}... </a> </div>
                      <div className="item-content">
                        <div className="ratings">
                          <div className="rating-box">
                            <div className="rating"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="actions">
                      <button type="button" title="Add to Cart" className="button btn-cart"><span>Подробнее...</span></button>
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
      </section>
    );
};

export default News;