import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import SideBar from '../sidebar/SideBar';


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


<SideBar/>
          </div>
        </div>
      </div>
    );
};

export default BlogDetailed;