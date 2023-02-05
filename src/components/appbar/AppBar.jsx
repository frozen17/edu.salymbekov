import React from 'react';

const AppBar = () => {
    return (
<div className="header-top" style={{backgroundColor: "blue"}}>
      <div className="container">
        <div className="row"> 
          
          <div className="col-xs-6">
            <div className="dropdown block-language-wrapper"> <a role="button" data-toggle="dropdown" data-target="#" className="block-language dropdown-toggle" href="index.html"> <img src="../../assets/images/english.png" alt="language"/> English <span className="caret"></span> </a>
              <ul className="dropdown-menu" role="menu">
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#index.html"><img src="../../assets/images/english.png" alt="language"/> English </a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#index.html"><img src="../../assets/images/francais.png" alt="language"/> French </a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#index.html"><img src="../../assets/images/german.png" alt="language"/> German </a></li>
              </ul>
            </div>
            
            
            <div className="dropdown block-currency-wrapper"> <a role="button" data-toggle="dropdown" data-target="#" className="block-currency dropdown-toggle" href="#index.html"> USD <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#index.html"> $ - Dollar </a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#index.html"> £ - Pound </a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#index.html"> € - Euro </a></li>
              </ul>
            </div>
            
           
            
            <div className="welcome-msg hidden-xs"> Default welcome msg! </div>
          </div>
          <div className="col-xs-6"> 
            
            <div className="toplinks">
              <div className="links">
                <div className="myaccount"><a title="My Account" href="login.html"><span className="hidden-xs">My Account</span></a></div>
                <div className="wishlist"><a title="My Wishlist"  href="http://bit.do/bromq"><span className="hidden-xs">Wishlist</span></a></div>
                <div className="check"><a title="Checkout" href="checkout.html"><span className="hidden-xs">Checkout</span></a></div>
                <div className="login"><a title="Login" href="login.html"><span  className="hidden-xs">Log In</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AppBar;