import React from 'react';

const LatestBlog = () => {
    return (
        <section className="latest-blog container wow bounceInUp animated">
        <div className="blog-title">
          <h2><span>Latest Blog</span></h2>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="blog-img"> <img src="../../assets/images/blog-img1.jpg" alt=""/>
            <div className="mask"> <a className="info" href="blog_detail.html">Read More</a> </div>
          </div>
          <h2><a href="blog_detail.html">Pellentesque habitant morbi</a> </h2>
          <div className="post-date"><i className="icon-calendar"></i> Apr 10, 2014</div>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit  ... </p>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="blog-img"> <img src="../../assets/images/blog-img1.jpg" alt=""/>
            <div className="mask"> <a className="info" href="blog_detail.html">Read More</a> </div>
          </div>
          <h2><a href="blog_detail.html">Pellentesque habitant morbi</a> </h2>
          <div className="post-date"><i className="icon-calendar"></i> Apr 10, 2014</div>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit  ... </p>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="blog-img"> <img src="../../assets/images/blog-img1.jpg" alt=""/>
            <div className="mask"> <a className="info" href="blog_detail.html">Read More</a> </div>
          </div>
          <h2><a href="blog_detail.html">Pellentesque habitant morbi</a> </h2>
          <div className="post-date"><i className="icon-calendar"></i> Apr 10, 2014</div>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit  ... </p>
        </div>
      </section>
    );
};

export default LatestBlog;