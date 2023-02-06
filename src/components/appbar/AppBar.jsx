import React from 'react';
import './AppBar.css'


const AppBar = () => {
    return (
<div className="header-top" >
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

        <div className="search-row-appbar">
        <div className="col-lg-2 col-sm-3 col-md-2"> 
          <a className="logo" title="Magento Commerce" href="index.html"><img className='college-logo' alt="Magento Commerce" src={'https://salymbekov.kg/wp-content/themes/it_college/images/logo_w.svg'}/></a> 
        </div>
        <div className="col-lg-8 col-sm-6 col-md-8"> 
          <div className="search-box">
            <form action="cat" method="POST" id="search_mini_form" name="Categories">
              
              <input type="text" placeholder="Search here..."  maxLength="70" className="" name="search" id="search"/>
              <button id="submit-button" className="search-btn-bg"><span>Search</span></button>
            </form>
            
          </div>
          
        </div>
        </div>
      </div>
    </div>
    );
};

export default AppBar;