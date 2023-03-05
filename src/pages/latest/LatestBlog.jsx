import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LatestBlog.css";
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useLocalStorage from '../../hooks/use-localstorage';
import MenuItem from '@mui/material/MenuItem';
import i18n from "../../i18n";

const LatestBlog = () => {
  const sliderRef = useRef(null);
  const [blogs, setBlogs] = useState(null);

  const [language, setLanguage] = useLocalStorage('language', 'ru')

  const handleChangeLanguage = (language, e) => {
    i18n.changeLanguage(language)
    }
  

  const getData = async () => {
    try {
      await axios
        .get(
          "https://backend.salymbekov.kg/wp-json/wp/v2/polez_mater?per_page=100"
        )
        .then((res) => setBlogs(res.data));
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

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className="latest-blog container wow bounceInUp animated latestBlog">
      <div>
        {console.log(blogs)}
        {blogs?.length <= 3 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="new_title center">
              <h2>ВАЖНЫЕ МЕРОПРИЯТИЯ »</h2>
            </div>
            <div></div>
          </div>
        )} {blogs?.length > 3 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="new_title center">
              <h2>ВАЖНЫЕ МЕРОПРИЯТИЯ »</h2>
            </div>
            <div>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab
                  sx={{
                    borderRadius: "0",
                    backgroundColor: "#1c95d1",
                    "&:hover": {
                      backgroundColor: "#1c95d1",
                    },
                  }}
                  onClick={prev}
                  size="small"
                  color="secondary"
                  aria-label="add"
                >
                  <ChevronLeftIcon />
                </Fab>
                <Fab
                  sx={{
                    borderRadius: "0",
                    backgroundColor: "#1c95d1",
                    "&:hover": {
                      backgroundColor: "#1c95d1",
                    },
                  }}
                  onClick={next}
                  size="small"
                  color="secondary"
                  aria-label="add"
                >
                  <ChevronRightIcon />
                </Fab>
              </Box>
            </div>
          </div>
        )}
      </div>

      {console.log(blogs)}
      <Slider {...settings} ref={sliderRef}>
        {blogs?.map((blog) => (
          <div className="col-xs-12 col-sm-4" key={blog.id}>
            <div className="blog-img">
              {" "}
              <img
                src={
                  blog.acf.images
                    ? blog.acf.images
                    : "../../assets/images/blog-img1.jpg"
                }
                alt=""
              />
              <div className="mask">
                {" "}
                <Link className="info" to={`/blog_detailed/${blog.id}`}>
                  Read More
                </Link>{" "}
              </div>
            </div>
            <h2>
              {localStorage.getItem('language') === '"ru"' && <Link className="info" to={`/blog_detailed/${blog.id}`}>
              {blog.acf.title_ru}
                </Link>}
                {localStorage.getItem('language') === '"en"' && <Link className="info" to={`/blog_detailed/${blog.id}`}>
              {blog.acf.title_en}
                </Link>}
                {localStorage.getItem('language') === '"kgz"' && <Link className="info" to={`/blog_detailed/${blog.id}`}>
              {blog.acf.title_kgz}
                </Link>}
            </h2>
            <div className="post-date">
              <i className="icon-calendar"></i> Apr 10, 2014
            </div>
            <p>{blog.acf.otryvok}</p>
          </div>
        ))}
      </Slider>
      {/* <div className="chooseLngTop">
<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} className="lng" onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" className="imgLng" alt="" /> EN</MenuItem>
<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"  className="imgLng" alt="" /> RU</MenuItem>
<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png" className="imgLng" alt="" /> KGZ</MenuItem>
</div> */}
    </section>
  );
};

export default LatestBlog;
