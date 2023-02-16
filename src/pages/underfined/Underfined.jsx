import React from 'react';
import { Link } from 'react-router-dom';

const Underfined = () => {
    return (
        <section className="content-wrapper">
        <div className="container">
          <div className="std">
            <div className="page-not-found wow bounceInRight animated">
              <h2>404</h2>
              <h3><img src="../../assets/images/signal.png" alt="signal"/>Oops! The Page you requested was not found!</h3>
              <div><Link href="/" className="btn-home"><span>Back To Home</span></Link></div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Underfined;