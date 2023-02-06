import React from 'react';

const Header = () => {
    return (
<nav>
    <div className="container">
      <div className="nav-inner">
        <div className="logo-small"> <a className="logo" title="Magento Commerce" href="#index.html"><img alt="Magento Commerce" src="images/logo.png"/></a> </div>

        <div className="hidden-desktop" id="mobile-menu">
          <ul className="navmenu">
            <li>
              <div className="menutop">
                <div className="toggle"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></div>
                <h2>Menu</h2>
              </div>
              <ul className="submenu">
                <li>
                  <ul className="topnav">
                    <li className="level0 nav-6 level-top first parent"> <a className="level-top" href="#index.html"> <span>Pages</span> </a>
                      <ul className="level0">
                        <li className="level1 first"><a href="grid.html"><span>Grid</span></a></li>
                        <li className="level1 nav-10-2"> <a href="list.html"> <span>List</span> </a> </li>
                        <li className="level1 nav-10-3"> <a href="http://ow.ly/XqzNo"> <span>Product Detail</span> </a> </li>
                        <li className="level1 nav-10-4"> <a href="shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
                        <li className="level1 first"><a href="checkout.html"><span>Checkout</span></a> </li>
                        <li className="level1 nav-10-4"> <a href="http://bit.do/bromq"> <span>Wishlist</span> </a> </li>
                        <li className="level1"> <a href="dashboard.html"> <span>Dashboard</span> </a> </li>
                        <li className="level1"> <a href="multiple_addresses.html"> <span>Multiple Addresses</span> </a> </li>
                        <li className="level1"> <a href="about_us.html"> <span>T_H_E_M_E_L_O_C_K_._C_O_M</span> </a> </li>
                        <li className="level1"> <a href="compare.html"> <span>Compare</span> </a> </li>
                        <li className="level1"> <a href="faq.html"> <span>FAQ</span> </a> </li>
                        <li className="level1"> <a href="login.html"> <span>Login</span> </a> </li>
                        <li className="level1"> <a href="quick_view.html"> <span>Quick view</span> </a> </li>
                        <li className="level1"><a href="blog.html"><span>Blog</span></a> </li>
                        <li className="level1"><a href="contact_us.html"><span>Contact us</span></a> </li>
                        <li className="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
                      </ul>
                    </li>
                    <li className="level0 nav-7 level-top parent"> <a className="level-top" href="grid.html"> <span>Women</span> </a>
                      <ul className="level0">
                        <li className="level1 nav-1-1 first parent"> <a href="grid.html"> <span>Clothing</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-1-1-1 first"> <a href="grid.html"> <span>Western Wear</span> </a> </li>
                            <li className="level2 nav-1-1-2"> <a href="grid.html"> <span>Night Wear</span> </a> </li>
                            <li className="level2 nav-1-1-3"> <a href="grid.html"> <span>Ethnic Wear</span> </a> </li>
                            <li className="level2 nav-1-1-4 last"> <a href="grid.html"> <span>Designer Wear</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-1-2 parent"> <a href="grid.html"> <span>Watches</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-1-2-5 first"> <a href="grid.html"> <span>Fashion</span> </a> </li>
                            <li className="level2 nav-1-2-6"> <a href="grid.html"> <span>Dress</span> </a> </li>
                            <li className="level2 nav-1-2-7"> <a href="grid.html"> <span>Sports</span> </a> </li>
                            <li className="level2 nav-1-2-8 last"> <a href="grid.html"> <span>Casual</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-1-3 parent"> <a href="grid.html"> <span>Styliest Bag</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-1-3-9 first"> <a href="grid.html"> <span>Clutch Handbags</span> </a> </li>
                            <li className="level2 nav-1-3-10"> <a href="grid.html"> <span>Diaper Bags</span> </a> </li>
                            <li className="level2 nav-1-3-11"> <a href="grid.html"> <span>Bags</span> </a> </li>
                            <li className="level2 nav-1-3-12 last"> <a href="grid.html"> <span>Hobo Handbags</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-1-4 last parent"> <a href="grid.html"> <span>Material Bag</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-1-4-13 first"> <a href="grid.html"> <span>Beaded Handbags</span> </a> </li>
                            <li className="level2 nav-1-4-14"> <a href="grid.html"> <span>Fabric Handbags</span> </a> </li>
                            <li className="level2 nav-1-4-15"> <a href="grid.html"> <span>Handbags</span> </a> </li>
                            <li className="level2 nav-1-4-16 last"> <a href="grid.html"> <span>Leather Handbags</span> </a> </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="level0 nav-8 level-top parent"> <a className="level-top" href="grid.html"> <span>Men</span> </a>
                      <ul className="level0">
                        <li className="level1 nav-2-1 first parent"> <a href="grid.html"> <span>Clothing</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-1-1 first"> <a href="grid.html"> <span>Casual Wear</span> </a> </li>
                            <li className="level2 nav-2-1-2"> <a href="grid.html"> <span>Formal Wear</span> </a> </li>
                            <li className="level2 nav-2-1-3"> <a href="grid.html"> <span>Ethnic Wear</span> </a> </li>
                            <li className="level2 nav-2-1-4 last"> <a href="grid.html"> <span>Denims</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-2-2 parent"> <a href="grid.html"> <span>Shoes</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-2-5 first"> <a href="grid.html"> <span>Formal Shoes</span> </a> </li>
                            <li className="level2 nav-2-2-6"> <a href="grid.html"> <span>Sport Shoes</span> </a> </li>
                            <li className="level2 nav-2-2-7"> <a href="grid.html"> <span>Canvas Shoes</span> </a> </li>
                            <li className="level2 nav-2-2-8 last"> <a href="grid.html"> <span>Leather Shoes</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-2-3 parent"> <a href="grid.html"> <span>Watches</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-3-9 first"> <a href="grid.html"> <span>Digital</span> </a> </li>
                            <li className="level2 nav-2-3-10"> <a href="grid.html"> <span>Chronograph</span> </a> </li>
                            <li className="level2 nav-2-3-11"> <a href="grid.html"> <span>Sports</span> </a> </li>
                            <li className="level2 nav-2-3-12 last"> <a href="grid.html"> <span>Casual</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-2-4 parent"> <a href="grid.html"> <span>Jackets</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-4-13 first"> <a href="grid.html"> <span>Coats</span> </a> </li>
                            <li className="level2 nav-2-4-14"> <a href="grid.html"> <span>Formal Jackets</span> </a> </li>
                            <li className="level2 nav-2-4-15"> <a href="grid.html"> <span>Leather Jackets</span> </a> </li>
                            <li className="level2 nav-2-4-16 last"> <a href="grid.html"> <span>Blazers</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-2-5 last parent"> <a href="grid.html"> <span>Sunglasses</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-5-17 first"> <a href="grid.html"> <span>Ray Ban</span> </a> </li>
                            <li className="level2 nav-2-5-18"> <a href="grid.html"> <span>Fasttrack</span> </a> </li>
                            <li className="level2 nav-2-5-19"> <a href="grid.html"> <span>Police</span> </a> </li>
                            <li className="level2 nav-2-5-20 last"> <a href="grid.html"> <span>Oakley</span> </a> </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="level0 nav-3 level-top parent"> <a href="grid.html" className="level-top"> <span>Jewellery</span> </a><em>+</em>
                      <ul className="level0">
                        <li className="level1 nav-3-1 first parent"> <a href="grid.html"> <span>Precious Jewellery</span> </a><em>+</em>
                          <ul className="level1">
                            <li className="level2 nav-3-1-1 first"> <a href="grid.html"> <span>Gitanjali</span> </a> </li>
                            <li className="level2 nav-3-1-2"> <a href="grid.html"> <span>Tara</span> </a> </li>
                            <li className="level2 nav-3-1-3"> <a href="grid.html"> <span>Orra</span> </a> </li>
                            <li className="level2 nav-3-1-4 last"> <a href="grid.html"> <span>Ahilya</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-3-2 parent"> <a href="grid.html"> <span>Fashion Jewellery</span> </a><em>+</em>
                          <ul className="level1">
                            <li className="level2 nav-3-2-5 first"> <a href="grid.html"> <span>Earrings</span> </a> </li>
                            <li className="level2 nav-3-2-6"> <a href="grid.html"> <span>Rings</span> </a> </li>
                            <li className="level2 nav-3-2-7"> <a href="grid.html"> <span>Bangles &amp; Bracelets</span> </a> </li>
                            <li className="level2 nav-3-2-8 last"> <a href="grid.html"> <span>Pendants</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-3-3 parent"> <a href="grid.html"> <span>Mens Jewellery</span> </a><em>+</em>
                          <ul className="level1">
                            <li className="level2 nav-3-3-9 first"> <a href="grid.html"> <span>Neck Wear</span> </a> </li>
                            <li className="level2 nav-3-3-10"> <a href="grid.html"> <span>Cufflinks</span> </a> </li>
                            <li className="level2 nav-3-3-11"> <a href="grid.html"> <span>Wrist Wear</span> </a> </li>
                            <li className="level2 nav-3-3-12 last"> <a href="grid.html"> <span>Rings</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-3-4 parent"> <a href="grid.html"> <span>Designer</span> </a><em>+</em>
                          <ul className="level1">
                            <li className="level2 nav-3-4-13 first"> <a href="grid.html"> <span>Bbling</span> </a> </li>
                            <li className="level2 nav-3-4-14"> <a href="grid.html"> <span>Ciana</span> </a> </li>
                            <li className="level2 nav-3-4-15"> <a href="grid.html"> <span>Bansri</span> </a> </li>
                            <li className="level2 nav-3-4-16 last"> <a href="grid.html"> <span>Arsya</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-3-5 last parent"> <a href="grid.html"> <span>Platinum</span> </a><em>+</em>
                          <ul className="level1">
                            <li className="level2 nav-3-5-17 first"> <a href="grid.html"> <span>Earrings</span> </a> </li>
                            <li className="level2 nav-3-5-18"> <a href="grid.html"> <span>Rings</span> </a> </li>
                            <li className="level2 nav-3-5-19"> <a href="grid.html"> <span>Bangles &amp; Bracelets</span> </a> </li>
                            <li className="level2 nav-3-5-20 last"> <a href="grid.html"> <span>Pendants</span> </a> </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="level0 nav-10 level-top "> <a className="level-top" href="blog.html"> <span>Custom</span> </a> </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

        </div>
        

        <ul id="nav" className="hidden-xs">
          <li id="nav-home" className="level0 parent drop-menu"><a href="index.html" className="active"><span>Home</span> </a>
            <ul className="level1">
              <li className="level1 first parent"><a href="../../Variation1/blue/index.html"><span>Home Version 1</span></a> </li>
              <li className="level1 first parent"><a href="../../Variation2/blue/index.html"><span>Home Version 2</span></a> </li>
              <li className="level1 parent"><a href="../../Variation1/blue/index.html"><span>Blue</span></a> </li>
              <li className="level1 parent"><a href="../../Variation1/red/index.html"><span>Red</span></a> </li>
              <li className="level1 parent"><a href="../../Variation1/lavender/index.html"><span>Lavender</span></a> </li>
              <li className="level1 parent"><a href="../../Variation1/green/index.html"><span>Green</span></a> </li>
              <li className="level1 parent"><a href="../../Variation1/emerald/index.html"><span>Emerald</span></a> </li>
            </ul>
          </li>
          <li className="level0 parent drop-menu"><a href="#index.html"><span>Pages</span> </a>
            <ul className="level1">
              <li className="level1 first"><a href="grid.html"><span>Grid</span></a></li>
              <li className="level1 nav-10-2"> <a href="list.html"> <span>List</span> </a> </li>
              <li className="level1 nav-10-3"> <a href="http://ow.ly/XqzNo"> <span>Product Detail</span> </a> </li>
              <li className="level1 nav-10-4"> <a href="shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
              <li className="level1 first parent"><a href="checkout.html"><span>Checkout</span></a> </li>
              <li className="level1 nav-10-4"> <a href="http://bit.do/bromq"> <span>Wishlist</span> </a> </li>
              <li className="level1"> <a href="dashboard.html"> <span>Dashboard</span> </a> </li>
              <li className="level1"> <a href="multiple_addresses.html"> <span>Multiple Addresses</span> </a> </li>
              <li className="level1"> <a href="about_us.html"> <span>T_H_E_M_E_L_O_C_K_._C_O_M</span> </a> </li>
              <li className="level1"> <a href="compare.html"> <span>Compare</span> </a> </li>
              <li className="level1"> <a href="faq.html"> <span>FAQ</span> </a> </li>
              <li className="level1"> <a href="login.html"> <span>Login</span> </a> </li>
              <li className="level1"> <a href="quick_view.html"> <span>Quick view </span> </a> </li>
              <li className="level1 first parent"><a href="blog.html"><span>Blog</span></a>
                <ul className="level2">
                  <li className="level2 nav-2-1-1 first"><a href="blog_detail.html"><span>Blog Detail</span></a></li>
                </ul>
              </li>
              <li className="level1"><a href="contact_us.html"><span>Contact us</span></a> </li>
              <li className="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
            </ul>
          </li>
          <li className="level0 nav-6 level-top parent"> <a href="grid.html" className="level-top"> <span>Women</span> </a>
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center grid12-8 itemgrid itemgrid-4col"> 
                  


                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Clothing</span></a> 


                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Western Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Night Wear</span></a> </li>

                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ethnic Wear</span></a> </li>

                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Designer Wear</span></a> </li>

                      </ul>




                    </li>


                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Watches</span></a> 


                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fashion</span></a> </li>

                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Dress</span></a> </li>

                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sports</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Casual</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Styliest Bag</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Clutch Handbags</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Diaper Bags</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bags</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Hobo Handbags</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Material Bag</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Beaded Handbags</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fabric Handbags</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Handbags</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leather Handbags</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                  </ul>
                  
                  <div className="fur-des">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa.</p>
                  </div>
                </div>
                <div className="nav-block nav-block-right std grid12-4">
                  <div className="static-img-block"><a href="#index.html"><img src="images/nav-img1.jpg" alt="Responsive"/></a></div>
                </div>
              </div>
            </div>
          </li>
          <li className="level0 nav-5 level-top first"> <a className="level-top" href="grid.html"> <span>Men</span> </a>
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center">
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Clothing</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Casual Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Formal Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ethnic Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Denims</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Shoes</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Formal Shoes</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sport Shoes</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Canvas Shoes</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leather Shoes</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Watches</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Digital</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chronograph</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sports</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Casual</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Jackets</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Coats</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Formal Jackets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leather Jackets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Blazers</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Sunglasses</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ray Ban</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fasttrack</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Police</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Oakley</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="nav-add">
                <div className="push_item">
                  <div className="push_img"><a href="#index.html"><img src="images/menu-sunglass.png" alt="sunglass"/></a></div>
                </div>
                <div className="push_item">
                  <div className="push_img"><a href="#index.html"><img src="images/menu-sunglass.png" alt="watch"/></a></div>
                </div>
                <div className="push_item">
                  <div className="push_img"><a href="#index.html"><img src="images/menu-sunglass.png" alt="jeans"/></a></div>
                </div>
                <div className="push_item">
                  <div className="push_img"><a href="#index.html"><img src="images/menu-sunglass.png" alt="shoes"/></a></div>
                </div>
                <div className="push_item push_item_last">
                  <div className="push_img"><a href="#index.html"><img src="images/menu-sunglass.png" alt="swimwear"/></a></div>
                </div>
              </div>
            </div>
          </li>
          <li className="level0"> <a className="level-top" href="grid.html"><span>Jewellery</span></a>
            <div className="level0-wrapper dropdown-6col">
              <div className="level0-wrapper2">
                <div className="nav-block nav-block-center"> 
                  
                  
                  <ul className="level0">
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Precious Jewellery</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Gitanjali</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Tara</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Orra</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ahilya</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Fashion Jewellery</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Earrings</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Rings</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bangles &amp; Bracelets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Pendants</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Mens Jewellery</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Neck Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cufflinks</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Wrist Wear</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Rings</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Designer</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bbling</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ciana</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bansri</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Arsya</span></a> </li>
                      </ul>
                      
                    </li>
                    
                    <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Platinum</span></a> 
                      
                      <ul className="level1">
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Earrings</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Rings</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bangles &amp; Bracelets</span></a> </li>
                        <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Pendants</span></a> </li>
                      </ul>
                      
                      
                    </li>
                    
                  </ul>
                  
                </div>
                
              </div>
              
            </div>
            
            
          </li>
          <li className="level0 parent drop-menu"><a href="grid.html"><span>Sub menu </span> 
            </a>
            <ul className="level1">
              <li className="level1 first parent"><a href="grid"><span>Submenu</span></a>
                <ul className="level2">
                  <li className="level2 first"><a href="#index.html"><span>Menu1</span></a></li>
                  <li className="level2 nav-1-1-2"><a href="#index.html"><span>Menu1</span></a></li>
                  <li className="level2 nav-1-1-3"><a href="#index.html"><span>Menu2</span></a></li>
                  <li className="level2 nav-1-1-4"><a href="#index.html"><span>Menu3</span></a></li>
                  <li className="level2 nav-1-1-5 last"><a href="#index.html"><span>Menu4</span></a></li>
                </ul>
              </li>
              <li className="level1 first parent"><a href="#index.html"><span>Submenu</span></a>
                <ul className="level2">
                  <li className="level2 first"><a href="#index.html"><span>Menu1</span></a></li>
                  <li className="level2 nav-1-1-2"><a href="#index.html"><span>Menu1</span></a></li>
                  <li className="level2 nav-1-1-3"><a href="#index.html"><span>Menu2</span></a></li>
                  <li className="level2 nav-1-1-4"><a href="#index.html"><span>Menu3</span></a></li>
                  <li className="level2 nav-1-1-5 last"><a href="#index.html"><span>Menu4</span></a></li>
                </ul>
              </li>
              <li className="level1 parent"><a href="#index.html"><span>Submenu</span></a> </li>
            </ul>
          </li>
          <li className="nav-custom-link level0 level-top parent"> <a className="level-top" href="#index.html"><span>Custom</span></a>
            <div className="level0-wrapper custom-menu">
              <div className="header-nav-dropdown-wrapper clearer">
                <div className="grid12-5">
                  <div className="custom_img"><a href="#index.html"><img src="images/custom-img1.jpg" alt="custom img1"/></a></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                  <button type="button" title="Add to Cart" className="learn_more_btn"><span>Learn More</span></button>
                </div>
                <div className="grid12-5">
                  <div className="custom_img"><a href="#index.html"><img src="images/custom-img2.jpg" alt="custom img2"/></a></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                  <button type="button" title="Add to Cart" className="learn_more_btn"><span>Learn More</span></button>
                </div>
                <div className="grid12-5">
                  <div className="custom_img"><a href="#index.html"><img src="images/custom-img3.jpg" alt="custom img3"/></a></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                  <button type="button" title="Add to Cart" className="learn_more_btn"><span>Learn More</span></button>
                </div>
                <div className="grid12-5">
                  <div className="custom_img"><a href="#index.html"><img src="images/custom-img4.jpg" alt="custom img4"/></a></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                  <button type="button" title="Add to Cart" className="learn_more_btn"><span>Learn More</span></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
};

export default Header;