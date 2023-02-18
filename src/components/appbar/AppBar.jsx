import React from 'react';
import './AppBar.css'
import i18n from "../../i18n";
import useLocalStorage from '../../hooks/use-localstorage';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const AppBar = () => {
  const [language, setLanguage] = useLocalStorage('language', 'ru')
  const [age, setAge] = React.useState('');


  const handleChangeLanguage = (language, e) => {
  i18n.changeLanguage(language)
  }


  

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };


    return (
<div className="header-top" >
      <div className="container">
        <div className="row"> 
          
          <div className="col-xs-6">
            
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age ? age : 'ru'}
          onChange={handleChange}
          label="language"
        > 

                <MenuItem role="presentation" onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}> <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/2560px-US_flag_51_stars.svg.png"} className="lng-flag" alt="language"/> English</MenuItem>
                <MenuItem role="presentation" onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}> <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/200px-Flag_of_Russia.svg.png"} alt="language" className="lng-flag"/> Русский </MenuItem>
                <MenuItem role="presentation" onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src={"http://tourkg.com/wp-content/uploads/2014/02/flag-Kyrgyzstana.png"} alt="language" className="lng-flag"/> Кыргызча </MenuItem>
              </Select>
            
            
            
            
           
            
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