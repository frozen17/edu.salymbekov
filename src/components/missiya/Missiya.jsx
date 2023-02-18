import React, { useRef, useState } from "react";
import "././Missiya.css"
import axios from "axios";
import { useEffect } from "react";
import { RichText,  } from '@wordpress/block-editor';



const Missiya = () => {
  const sliderRef = useRef(null);
  const [nnews, setNnews] = useState(null);

  const getData = async () => {
    try {
      await axios
        .get(
          "https://backend.salymbekov.kg/wp-json/wp/v2/nnews?per_page=100"
        )
        .then((res) => setNnews(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  


    return (
      <div>
<div className="main-container col2-right-layout">
    <div className="main container">
      <div className="row">
        <div className="col-main col-sm-9">
          
          {nnews?.map((nnews) => ( 
            
          <div className="blog-wrapper" id="main" key={nnews.id}>
            <div className="page-title">
            <h2>Миссия</h2>
          </div>
            <RichText value={nnews.acf.en_title}  />
            <div className="site-content" id="primary">
              <div role="main" id="content">
</div>
</div>
</div> ))}
</div>
</div>
</div>
</div>
</div>
 
    );
};

export default Missiya;