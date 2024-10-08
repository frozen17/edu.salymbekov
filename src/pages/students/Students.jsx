import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Students = () => {
  const sliderRef = useRef(null);
  const [students, setStudents] = useState(null);

  const getData = async () => {
    try {
      await axios
        .get(
          "https://backend.salymbekov.kg/wp-json/wp/v2/students?per_page=100"
        )
        .then((res) => setStudents(res.data));
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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="col-md-6 col-xs-12">
      <div className="bag-product-slider small-pr-slider cat-section">
        <div className="slider-items-products">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="new_title center">
              <h2>НАШИ СТУДЕНТЫ »</h2>
            </div>
            <div>
            <Box sx={{ '& > :not(style)': { m: 1 }, position: "relative", zIndex: "1" }}>
      <Fab sx={{borderRadius: "0", backgroundColor: "#1c95d1", '&:hover': {
        backgroundColor: "#1c95d1"
   }}} onClick={prevStudent} size="small" color="secondary" aria-label="add">
        <ChevronLeftIcon />
      </Fab>
      <Fab sx={{borderRadius: "0" , backgroundColor: "#1c95d1", '&:hover': {
        backgroundColor: "#1c95d1"
   }}} onClick={nextStudent} size="small" color="secondary" aria-label="add">
        <ChevronRightIcon />
      </Fab>
    </Box>
            </div>
          </div>

          <div
            id="bag-seller-slider"
            className="product-flexslider hidden-buttons"
          >
            <div className="slider-items slider-width-col3">
              {/* {console.log(students)} */}
              <Slider {...settings} ref={sliderRef}>
                {students?.map((student) => (
                  <div className="item" key={student.id}>
                    <div className="col-item">
                      <div className="product-image-area">
                        {" "}
                        <Link
                          className="product-image"
                          title="Sample Product"
                          to={`/students/${student.id}`}
                        >
                          {" "}
                          <img
                            src={
                              student.acf.photo
                                ? student.acf.photo
                                : "../../assets/products-images/product1.jpg"
                            }
                            className="img-responsive"
                            alt="a"
                          />{" "}
                        </Link>
                        <div className="actions-links">
                          <span className="add-to-links">
                            {" "}
                            <a
                              title="magik-btn-quickview"
                              className="magik-btn-quickview"
                              href="quick_view.html"
                            >
                              <span>quickview</span>
                            </a>{" "}
                            <a
                              title="Add to Wishlist"
                              className="link-wishlist"
                              href="http://bit.do/bromq"
                            >
                              <span>Add to Wishlist</span>
                            </a>{" "}
                            <a
                              title="Add to Compare"
                              className="link-compare"
                              href="compare.html"
                            >
                              <span>Add to Compare</span>
                            </a>
                          </span>{" "}
                        </div>
                      </div>
                      <div className="info">
                        <div className="info-inner">
                          <div className="item-title">
                            {" "}
                            <a
                              title=" Sample Product"
                              href="http://ow.ly/XqzNo"
                            >
                              {student.acf.surname} {student.acf.name}{" "}
                            </a>{" "}
                          </div>
                          <div className="item-content">
                            <div className="ratings">
                              <div className="rating-box">
                                <div className="rating"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="actions">
                          <button
                            type="button"
                            title="Add to Cart"
                            className="button btn-cart"
                          >
                            <span>Подробнее...</span>
                          </button>
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
  );
};

export default Students;
