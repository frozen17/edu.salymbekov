import React from 'react';
import './AppBar.css'
import i18n from "../../i18n";
import useLocalStorage from '../../hooks/use-localstorage';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const AppBar = () => {
  const [language, setLanguage] = useLocalStorage('language', 'ru')
  const [age, setAge] = React.useState('');


  const handleChangeLanguage = (language, e) => {
  i18n.changeLanguage(language)
  }


  

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return (
<div className="header-top" >
      <div className="container">
        <div className="row"> 
          
          <div className="col-xs-6">
            
       
            
          <div className="chooseLngTop">
<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} className="lng" onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" className="imgLng" alt="" /> EN</MenuItem>
<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"  className="imgLng" alt="" /> RU</MenuItem>
<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png" className="imgLng" alt="" /> KGZ</MenuItem>
</div>
            
            
           
            
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