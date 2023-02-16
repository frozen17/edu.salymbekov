import React, {useState, useEffect} from 'react';
import axios from 'axios';

const LatestBlog = () => {

const [blogs, setBlogs] = useState(null)

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


    return (
        <section className="latest-blog container wow bounceInUp animated">
        <div className="blog-title">
          <h2><span>ПОЛЕЗНЫЕ МАТЕРИАЛЫ »</span></h2>
        </div>
        {/* {console.log(blogs)} */}
        {blogs?.map((blog) => (
        <div className="col-xs-12 col-sm-4" key={blog.id}>
          <div className="blog-img"> <img src={blog.acf.images ? blog.acf.images : "../../assets/images/blog-img1.jpg"} alt=""/>
            <div className="mask"> <a className="info" href="blog_detail.html">Read More</a> </div>
          </div>
          <h2><a href="blog_detail.html">{blog.title.rendered}</a> </h2>
          <div className="post-date"><i className="icon-calendar"></i> Apr 10, 2014</div>
          <p>{blog.acf.otryvok}</p>
        </div>
        ))}


      </section>
    );
};

export default LatestBlog;