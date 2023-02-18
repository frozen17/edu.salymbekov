import React from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer wow bounceInUp animated">

              
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-7">
                <div className="block-subscribe">
                  <div className="newsletter">
                    <form>
                      <h4>newsletter</h4>
                      <input type="text" placeholder="Enter your email address" className="input-text required-entry validate-email" title="Sign up for our newsletter" id="newsletter1" name="email"/>
                      <button className="subscribe" title="Subscribe" type="submit"><span>Subscribe</span></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-5">
                <div className="social">
                  <ul>
                    <li className="fb"><Link to="#"></Link></li>
                    <li className="tw"><Link to="#"></Link></li>
                    <li className="googleplus"><Link to="#"></Link></li>
                    <li className="rss"><Link to="#"></Link></li>
                    <li className="pintrest"><Link to="#"></Link></li>
                    <li className="linkedin"><Link to="#"></Link></li>
                    <li className="youtube"><Link to="#"></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle container">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <div className="footer-logo"><a href="index.html" title="Logo"><img style={{width: "150px"}} src={'https://salymbekov.kg/wp-content/themes/it_college/images/logo_w.svg'} alt="logo"/></a></div>
              <p>ПРОЦВЕТАНИЕ ЧЕРЕЗ ОБРАЗОВАНИЕ! </p>
            </div>
            <div className="col-md-2 col-sm-4">
              <h4>Shopping Guide</h4>
              <ul className="links">
                <li className="first"><a href="#index.html" title="How to buy">How to buy</a></li>
                <li><a href="faq.html" title="FAQs">FAQs</a></li>
                <li><a href="#index.html" title="Payment">Payment</a></li>
                <li><a href="#index.html" title="Shipment&lt;/a&gt;">Shipment</a></li>
                <li><a href="#index.html" title="Where is my order?">Where is my order?</a></li>
                <li className="last"><a href="#index.html" title="Return policy">Return policy</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4">
              <h4>Style Advisor</h4>
              <ul className="links">
                <li className="first"><a title="Your Account" href="login.html">Your Account</a></li>
                <li><a title="Information" href="#index.html">Information</a></li>
                <li><a title="Addresses" href="#index.html">Addresses</a></li>
                <li><a title="Addresses" href="#index.html">Discount</a></li>
                <li><a title="Orders History" href="#index.html">Orders History</a></li>
                <li className="last"><a title=" Additional Information" href="#index.html">Additional Information</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4">
              <h4>Information</h4>
              <ul className="links">
                <li className="first"><a href="#index.html" title="privacy policy">Privacy policy</a></li>
                <li><a href="#/" title="Search Terms">Search Terms</a></li>
                <li><a href="#index.html" title="Advanced Search">Advanced Search</a></li>
                <li><a href="contact_us.html" title="Contact Us">Contact Us</a></li>
                <li><a href="#index.html" title="Suppliers">Suppliers</a></li>
                <li className=" last"><a href="#index.html" title="Our stores" className="link-rss">Our stores</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-xs-12 coppyright"> &copy; Salymbekov University 2023 </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;