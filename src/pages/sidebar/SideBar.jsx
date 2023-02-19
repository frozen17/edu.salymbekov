import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = () => {


    const [ news, setNews] = useState(null) 

    const getData = async () => {
        try {
          await axios
            .get(
              "https://backend.salymbekov.kg/wp-json/wp/v2/news"
            )
            .then((res) => setNews(res.data));
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        getData();
      }, []);


    return (
        <div className="col-right sidebar col-sm-3 wow bounceInUp animated">
        <div role="complementary" className="widget_wrapper13" id="secondary">
          <div className="popular-posts widget widget__sidebar wow bounceInUp animated" id="recent-posts-4">
            <h3 className="widget-title">ПОСЛЕДНИЕ НОВОСТИ</h3>
            <div className="widget-content">
              {news?.map((news) => (
                                      <ul className="posts-list unstyled clearfix">
                <li>
                  <figure className="featured-thumb"> <Link to={`/news_detailed/${news.id}`}> <img width="80" height="53" alt="blog image" src={news.acf.file1 ? news.acf.file1 : ""}/> </Link> </figure>
                  <h4><a title="Pellentesque posuere" href="http://demo.magikthemes.com/index.php/Poloblue/pellentesque-posuere">{news.title.rendered}</a></h4>
                  <p className="post-meta"><i className="icon-calendar"></i>
                    <time dateTime="2014-07-10T07:09:31+00:00" className="entry-date">{news.date.split('T')[0]}</time>
                    .</p>
                </li>

              </ul>
              ))}

            </div>
          </div>
        </div>
      </div>
    );
};

export default SideBar;