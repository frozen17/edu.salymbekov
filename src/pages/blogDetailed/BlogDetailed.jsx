import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";


const fetchData = (id) => {
    return axios
      .get(`https://backend.salymbekov.kg/wp-json/wp/v2/polez_mater/${id}`)
      .then((res) => res.data);
  };




const BlogDetailed = () => {
    const [ blog, setBlog] = useState(null)
    const [ news, setNews] = useState(null) 
    const [detailNews, setDetailNews] = useState(null)
    const { id } = useParams();


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
        fetchData(id).then((data) => setBlog(data));
        getData();
      }, [id]);
    return (
        <div className="main-container col2-right-layout">
            {console.log(blog)}
        <div className="main container">
          <div className="row">
            {blog ? (
                           <div className="col-main col-sm-9 wow bounceInUp animated">
              <div className="blog-wrapper" id="main">
                <div className="site-content" id="primary">
                  <div role="main" id="content">
                    <article className="blog_entry clearfix">
                      <header className="blog_entry-header clearfix">
                        <div className="blog_entry-header-inner">
                          <h2 className="blog_entry-title"> {blog.title.rendered} </h2>
                        </div>
                      </header>
                      <div className="entry-content">
                        <div style={{width: "80%", margin: "0 auto"}} className="featured-thumb"><a href="#"><img alt="blog-img4" style={{
                            width: "90%", height: "65vh", overflow: "hidden", padding: "15px 20px"
                        }} src={blog.acf.images}/></a></div>
                        <div className="entry-content">
                          <p>{blog.acf.full_text}</p>
                          
                        </div>
                      </div>
                      <footer className="entry-meta"> Опубликовано <a rel="category tag" title="View all posts in First Category" href="#first-category"> </a>
                        <time dateTime="2014-07-10" className="entry-date">{blog.date.split('T')[0]}</time>
                        . </footer>
                    </article>
                    <div className="comment-content wow bounceInUp animated">
                      

           
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            ) : ""}


            <div className="col-right sidebar col-sm-3 wow bounceInUp animated">
              <div role="complementary" className="widget_wrapper13" id="secondary">
                <div className="popular-posts widget widget__sidebar wow bounceInUp animated" id="recent-posts-4">
                  <h3 className="widget-title">ПОСЛЕДНИЕ НОВОСТИ</h3>
                  <div className="widget-content">
                    {console.log(news)}
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
          </div>
        </div>
      </div>
    );
};

export default BlogDetailed;