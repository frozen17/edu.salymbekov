import React, { useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const fetchData = (id) => {
    return axios.get(`https://backend.salymbekov.kg/wp-json/wp/v2/students/${id}`).then((res) => res.data);
  };


const Detailed = () => {
    const { id } = useParams();
    const [students, setStudents] = useState(null)


    
      useEffect(() => {
        fetchData(id).then((data) => setStudents(data.acf));
      }, [id]);

    return (
        <section className="main-container col1-layout">
        <div className="main container">
          <div className="col-main">
            <div className="row">
              <div className="product-view">
                {console.log(students)}
                {students && (
                                   <div key={students.id} className="product-essential">
                  <form action="#" method="post" id="product_addtocart_form">
                    <input name="form_key" value="6UbXroakyQlbfQzK" type="hidden"/>
                    <div className="product-img-box col-lg-6 col-sm-6 col-xs-12">
                        <img src={students.photo} alt="" style={{width: "100%"}}/>
                    </div>
                    <div className="product-shop col-lg-6 col-sm-6 col-xs-12">
                      <div className="product-name">
                        <h1>{students.surname} {students.name}</h1>
                      </div>
                      <div className="ratings">
                        <div className="rating-box">
                          <div className="rating"></div>
                        </div>
                        <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Your Review</a> </p>
                      </div>
                      <div className="short-description">
                        <h2>Информация</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                      </div>
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
                  </form>
                </div>
                )}
 
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Detailed;