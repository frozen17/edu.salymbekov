import React, { useRef } from 'react';
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import LatestBlog from '../latest/LatestBlog';
import Students from '../students/Students';
import News from '../news/News';
import Banner from '../banner/Banner';
import Events from '../events/Events';
import Teachers from '../teachers/Teachers';

const Home = () => {


  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const next = () =>{
    sliderRef.current?.slickNext();
  }
  const prev = () =>{
    sliderRef.current?.slickPrev();
  }


    return (
        <div>
          <div id="magik-slideshow" className="magik-slideshow">
    <div className="container">
      <div className="row">


<div className="col-lg-8 col-sm-12 col-md-8 wow bounceInUp animated">
 <div id='rev_slider_4_wrapper' className='rev_slider_wrapper fullwidthbanner-container' > 
 <div id='rev_slider_4_wrapper' className='rev_slider_wrapper fullwidthbanner-container' >
            <div id='rev_slider_4' className='rev_slider fullwidthabanner'>
<Slider {...settings} ref={sliderRef}>
        
          
<li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='../../assets/images/slider_img_2.jpg'><img src='../../assets/images/slide-img1.jpg' data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' alt="banner"/>
                  <div    className='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='45'  data-y='30'  data-endspeed='500'  data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "2", whiteSpace: "nowrap"}}>Exclusive of designer</div>
                  <div    className='tp-caption LargeTitle sfl  tp-resizeme ' data-x='45'  data-y='70'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "3", whiteSpace: "nowrap"}}>Handbags & Purses</div>
                  <div    className='tp-caption sfb  tp-resizeme ' data-x='45'  data-y='360'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap"}}><a href='#index.html' className="view-more">View More</a> <a href='#index.html' className="buy-btn">Buy Now</a></div>
                  <div    className='tp-caption Title sft  tp-resizeme ' data-x='45'  data-y='130'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap"}}>In augue urna, nunc, tincidunt, augue,<br/>
                    augue facilisis facilisis.</div>
                  <div    className='tp-caption Title sft  tp-resizeme ' data-x='45'  data-y='400'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap", fontSize: "11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <button onClick={prev}>назад</button><button onClick={next}>след</button>
                </li>
                <li data-transition='random' data-slotamount='7' data-masterspeed='1000' data-thumb='../../assets/images/slider_img_2.jpg' className="black-text"><img src='../../assets/images/slide-img2.jpg'  data-bgposition='left top'  data-bgfit='cover' data-bgrepeat='no-repeat' alt="banner"/>
                  <div className='tp-caption ExtraLargeTitle sft  tp-resizeme ' data-x='45'  data-y='30'  data-endspeed='500'  data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "2", whiteSpace: "nowrap"}}>Super Hot</div>
                  <div    className='tp-caption LargeTitle sfl  tp-resizeme ' data-x='45'  data-y='70'  data-endspeed='500'  data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "3", whiteSpace: "nowrap"}}>Go Lightly</div>
                  <div    className='tp-caption sfb  tp-resizeme ' data-x='45'  data-y='360'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap"}}><a href='#index.html' className="view-more">View More</a> <a href='#index.html' className="buy-btn">Buy Now</a></div>
                  <div    className='tp-caption Title sft  tp-resizeme ' data-x='45'  data-y='130'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap"}}>In augue urna, nunc, tincidunt, augue,<br/>
                    augue facilisis facilisis.</div>
                  <div    className='tp-caption Title sft  tp-resizeme ' data-x='45'  data-y='400'  data-endspeed='500'  data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap", fontSize: "11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <button onClick={prev}>назад</button><button onClick={next}>след</button>
                </li>

        
</Slider>
              <div className="tp-bannertimer"></div>
            </div>
          </div>
  </div> 
          </div>
        {/* <div className="col-lg-8 col-sm-12 col-md-8 wow bounceInUp animated">
          <div id='rev_slider_4_wrapper' className='rev_slider_wrapper fullwidthbanner-container' >
            <div id='rev_slider_4' className='rev_slider fullwidthabanner'>
              <ul>
                <li dataTransition='random' dataSlotamount='7' dataMasterspeed='1000' dataThumb='../../../public/assets/images/slider_img_2.jpg'><img src='../../../assets/images/slide-img1.jpg' dataBgposition='left top' data-bgfit='cover' dataBgrepeat='no-repeat' alt="banner"/>
                  <div    className='tp-caption ExtraLargeTitle sft  tp-resizeme ' dataX='45'  dataY='30'  dataEndspeed='500'  dataSpeed='500' dataStart='1100' dataEasing='Linear.easeNone' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "2", whiteSpace: "nowrap"}}>Exclusive of designer</div>
                  <div    className='tp-caption LargeTitle sfl  tp-resizeme ' dataX='45'  dataY='70'  dataEndspeed='500'  dataSpeed='500' dataStart='1300' dataEasing='Linear.easeNone' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "3", whiteSpace: "nowrap"}}>Handbags & Purses</div>
                  <div    className='tp-caption sfb  tp-resizeme ' dataX='45'  dataY='360'  dataEndspeed='500'  dataSpeed='500' dataStart='1500' dataEasing='Linear.easeNone' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap"}}><a href='#index.html' className="view-more">View More</a> <a href='#index.html' className="buy-btn">Buy Now</a></div>
                  <div    className='tp-caption Title sft  tp-resizeme ' dataX='45'  dataY='130'  dataEndspeed='500'  dataSpeed='500' dataStart='1500' dataEasing='Power2.easeInOut' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap"}}>In augue urna, nunc, tincidunt, augue,<br/>
                    augue facilisis facilisis.</div>
                  <div    className='tp-caption Title sft  tp-resizeme ' dataX='45'  dataY='400'  dataEndspeed='500'  dataSpeed='500' dataStart='1500' dataEasing='Power2.easeInOut' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap", fontSize: "11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </li>
                <li data-transition='random' dataSlotamount='7' dataMasterspeed='1000' dataThumb='images/slider_img_2.jpg' className="black-text"><img src='../../../assets/images/slide-img2.jpg'  dataBgposition='left top'  data-bgfit='cover' dataBgrepeat='no-repeat' alt="banner"/>
                  <div className='tp-caption ExtraLargeTitle sft  tp-resizeme ' dataX='45'  dataY='30'  dataEndspeed='500'  dataSpeed='500' dataStart='1100' dataEasing='Linear.easeNone' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "2", whiteSpace: "nowrap"}}>Super Hot</div>
                  <div    className='tp-caption LargeTitle sfl  tp-resizeme ' dataX='45'  dataY='70'  dataEndspeed='500'  dataSpeed='500' dataStart='1300' dataEasing='Linear.easeNone' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "3", whiteSpace: "nowrap"}}>Go Lightly</div>
                  <div    className='tp-caption sfb  tp-resizeme ' dataX='45'  dataY='360'  dataEndspeed='500'  dataSpeed='500' dataStart='1500' dataEasing='Linear.easeNone' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap"}}><a href='#index.html' className="view-more">View More</a> <a href='#index.html' className="buy-btn">Buy Now</a></div>
                  <div    className='tp-caption Title sft  tp-resizeme ' dataX='45'  dataY='130'  dataEndspeed='500'  dataSpeed='500' dataStart='1500' dataEasing='Power2.easeInOut' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap"}}>In augue urna, nunc, tincidunt, augue,<br/>
                    augue facilisis facilisis.</div>
                  <div    className='tp-caption Title sft  tp-resizeme ' dataX='45'  dataY='400'  dataEndspeed='500'  dataSpeed='500' dataStart='1500' dataEasing='Power2.easeInOut' dataSplitin='none' dataSplitout='none' dataElementdelay='0.1' dataEndelementdelay='0.1' style={{zIndex: "4", whiteSpace: "nowrap", fontSize: "11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </li>
              </ul>
              <div className="tp-bannertimer"></div>
            </div>
          </div>
        </div> */}
        <aside className="col-xs-12 col-sm-12 col-md-4 wow bounceInUp animated">
          <div className="RHS-banner">
            <div className="add"><a href="#index.html"><img alt="banner-img" src="../../../assets/images/rhs-banner.jpg"/></a>
              <div className="overlay"><a className="info" href="#index.html">Learn More</a></div>
           </div>
          </div>
        </aside>
      </div>
    </div>
  </div>  
  <Events/>
  <Banner/>
  <News/>
  <section className="middle-slider container wow bounceInUp animated">
        <div className="row">
  <Students/>
  <Teachers/>
  </div>
      </section>
  <LatestBlog/>
        </div>

    );
};

export default Home;