import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import LatestBlog from "../latest/LatestBlog";
import Students from "../students/Students";
import News from "../news/News";
import Banner from "../banner/Banner";
import Events from "../events/Events";
import Teachers from "../teachers/Teachers";
import axios from "axios";
import Partners from "../partners/Partners";
import '../../bootstrap.min.css'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Home = () => {
  const sliderRef = useRef(null);
  const [slides, setSlides] = useState(null);
  const [banners, setBanners] = useState(null);

  const getData = async () => {
    try {
      await axios
        .get("https://backend.salymbekov.kg/wp-json/wp/v2/slides?per_page=100")
        .then((res) => setSlides(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const getBannerData = async () => {
    try {
      await axios
        .get("https://backend.salymbekov.kg/wp-json/wp/v2/banner_1")
        .then((res) => setBanners(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getBannerData();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const nextStudent = () => {
    sliderRef.current?.slickNext();
  };
  const prevStudent = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="home-page">
      <div id="magik-slideshow" className="magik-slideshow">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-md-8 wow bounceInUp animated">
              

          <div className="carousel-inner" style={{
            width: "100%",
            height: "60vh"
          }}>
          <Slider {...settings} ref={sliderRef}>
                  {slides?.map((slide) => (
                    <div key={slide.id}>
                                          <li
                      key={slide.id}
                      data-transition="random"
                      data-slotamount="7"
                      data-masterspeed="1000"
                      className="black-text"
                    >
                      <img
                        src={slide.acf.photo_slide}
                        style={{
                          width: "100%",
                        }}
                        
                        className="main-banner"
                        alt="banner"
                      />
                               
                    </li>

                    </div>

                  ))}
                </Slider>
           



          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
            onClick={prevStudent}
          >
            <Fab sx={{borderRadius: "0", backgroundColor: "#1c95d1", '&:hover': {
        backgroundColor: "#1c95d1"
   }}} onClick={prevStudent} size="small" color="secondary" aria-label="add">
        <ChevronLeftIcon />
      </Fab>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
          onClick={nextStudent}
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
<Fab sx={{borderRadius: "0" , backgroundColor: "#1c95d1", '&:hover': {
        backgroundColor: "#1c95d1"
   }}} onClick={nextStudent} size="small" color="secondary" aria-label="add">
        <ChevronRightIcon />
      </Fab>
            <span className="visually-hidden">Next</span>
          </button>

        
        
      </div>
            {/* <div className="col-lg-8 col-sm-12 col-md-8 wow bounceInUp animated">
              <div
                id="rev_slider_4_wrapper"
                className="rev_slider_wrapper fullwidthbanner-container"
              >
                <Slider {...settings} ref={sliderRef}>
                  {slides?.map((slide) => (
                    <li
                      key={slide.id}
                      data-transition="random"
                      data-slotamount="7"
                      data-masterspeed="1000"
                      className="black-text"
                    >
                      <img
                        src={slide.acf.photo_slide}
                        style={{
                          width: "100%",
                        }}
                        
                        className="main-banner"
                        alt="banner"
                      />
                    </li>
                  ))}
                </Slider>
              </div>
            </div> */}

            <aside className="col-xs-12 col-sm-12 col-md-4 wow bounceInUp animated">
              <div className="RHS-banner">
                {banners?.map((banner) => (
                  <div key={banner.id} className="add">
                    <a href={banner.acf.bann_link}>
                      <img alt="banner-img" src={banner.acf.bann} />
                    </a>
                    <div className="overlay">
                      <a className="info" href={banner.acf.bann_link}>
                        Подробнее
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Events />
      <Banner />
      <News />
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto"
        }}
      >
        <Students />
        <Teachers />
      </div>

      <LatestBlog />
      <Partners />
    </div>
  );
};

export default Home;
