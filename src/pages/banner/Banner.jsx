import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './Banner.css'

const Banner = () => {

  const [banners, setBanners] = useState(null)


  const getData = async () => {
    try {
      await axios
        .get(
          "https://backend.salymbekov.kg/wp-json/wp/v2/greeting"
        )
        .then((res) => setBanners(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);



    return (
        <div className="promo-banner-section container wow bounceInUp animated">
        <div className="row">
          {banners?.map((banner) => (
            <div key={banner.id} style={{
              width: "100%",
              height: "35vh",
              backgroundImage: `url(${banner.acf.photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
              backgroundRepeat: "no-repeat"
            }} className="col-lg-12">
              <div className="banner-info">
              <h4>{banner.acf.text}</h4>

<h4>{banner.acf.text_un}</h4>
              </div>
              
            </div>
          ))}
          
        </div>
      </div>
    );
};

export default Banner;