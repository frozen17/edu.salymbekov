import React, { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Language } from "@mui/icons-material";

const Structure = () => {
  const sliderRef = useRef(null);
  const [nnews, setNnews] = useState(null);

  const getData = async () => {
    try {
      await axios
        .get("https://backend.salymbekov.kg/wp-json/wp/v2/nnews?per_page=100")
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
              {nnews
                ?.filter((nnews) => nnews.acf.catigoria.label === "Structure")
                .map((nnews) => (
                  <div className="blog-wrapper" id="main" key={nnews.id}>
                    <div className="page-title">
                      <h2>Миссия</h2>
                    </div>
                    {localStorage.getItem("language") === '"en"' && (
                      <div
                        dangerouslySetInnerHTML={{ __html: nnews.acf.en_title }}
                      />
                    )}
                    {localStorage.getItem("language") === '"ru"' && (
                      <div
                        dangerouslySetInnerHTML={{ __html: nnews.acf.ru_title }}
                      />
                    )}
                    {localStorage.getItem("language") === '"kgz"' && (
                      <div
                        dangerouslySetInnerHTML={{ __html: nnews.acf.kg_title }}
                      />
                    )}
                    <div className="site-content" id="primary">
                      <div role="main" id="content"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
