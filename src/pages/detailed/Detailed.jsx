import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


const fetchData = (id) => {
  return axios
    .get(`https://backend.salymbekov.kg/wp-json/wp/v2/students/${id}`)
    .then((res) => res.data);
};

const fetchTeachersData = (id) => {
    return axios
      .get(`https://backend.salymbekov.kg/wp-json/wp/v2/teachers/${id}`)
      .then((res) => res.data);
  };

const Detailed = () => {
  const { id } = useParams();
  const [students, setStudents] = useState(null);
  const [teachers, setTeachers] = useState(null)

  useEffect(() => {
    fetchData(id).then((data) => setStudents(data.acf));
    fetchTeachersData(id).then((data) => setTeachers(data.acf));
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
                    <input
                      name="form_key"
                      value="6UbXroakyQlbfQzK"
                      type="hidden"
                    />
                    <div className="product-img-box col-lg-6 col-sm-6 col-xs-12">
                      <img
                        src={students.photo}
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="product-shop col-lg-6 col-sm-6 col-xs-12">
                      <div className="product-name">
                        <h1>
                          {students.surname} {students.name} {students.family_name}
                        </h1>
                      </div>
                      <div className="ratings">
                        <div className="rating-box">
                          <div className="rating"></div>
                        </div>
                        <p className="rating-links">
                          {" "}
                          <a href="#">1 Review(s)</a>{" "}
                          <span className="separator">|</span>{" "}
                          <a href="#">Add Your Review</a>{" "}
                        </p>
                      </div>
                      <div className="short-description">
                        <h2 style={{display: "flex", alignItems: "center"}}><InfoIcon sx={{margin: "5px"}}/>Информация</h2>
                        <ul>
                        <li>{students.date_of_birth ? <p style={{display: "flex", alignItems: "center"}}><CalendarMonthIcon sx={{margin: "5px"}}/> {students.date_of_birth}</p> : <h4></h4>}</li>
                        <li>{students.email ? <p style={{display: "flex", alignItems: "center"}}><EmailIcon sx={{margin: "5px"}}/> {students.email}</p> : <h4></h4>}</li>
                        <li>{students.phone ? <p style={{display: "flex", alignItems: "center"}}><PhoneIphoneIcon sx={{margin: "5px"}}/> {students.phone}</p> : <h4></h4>}</li>
                        <li>{students.speciality ? <p style={{display: "flex", alignItems: "center"}}><LaptopIcon sx={{margin: "5px"}}/> {students.speciality}</p> : <h4></h4>}</li>
                        <li>{students.group ? <p style={{display: "flex", alignItems: "center"}}><Diversity3Icon sx={{margin: "5px"}}/> {students.group}</p> : <h4></h4>}</li>
                        </ul>
                      </div>
                      <div className="social">
                        <ul>
                          <li className="fb">
                            <Link to="#"></Link>
                          </li>
                          <li className="tw">
                            <Link to="#"></Link>
                          </li>
                          <li className="googleplus">
                            <Link to="#"></Link>
                          </li>
                          <li className="rss">
                            <Link to="#"></Link>
                          </li>
                          <li className="pintrest">
                            <Link to="#"></Link>
                          </li>
                          <li className="linkedin">
                            <Link to="#"></Link>
                          </li>
                          <li className="youtube">
                            <Link to="#"></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              )}

{console.log(teachers)}
{teachers && (
                <div key={teachers.id} className="product-essential">
                  <form action="#" method="post" id="product_addtocart_form">
                    <input
                      name="form_key"
                      value="6UbXroakyQlbfQzK"
                      type="hidden"
                    />
                    <div className="product-img-box col-lg-6 col-sm-6 col-xs-12">
                      <img
                        src={teachers.photo}
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="product-shop col-lg-6 col-sm-6 col-xs-12">
                      <div className="product-name">
                        <h1>
                          {teachers.surname} {teachers.name} {teachers.family_name}
                        </h1>
                      </div>
                      <div className="ratings">
                        <div className="rating-box">
                          <div className="rating"></div>
                        </div>
                        <p className="rating-links">
                          {" "}
                          <a href="#">1 Review(s)</a>{" "}
                          <span className="separator">|</span>{" "}
                          <a href="#">Add Your Review</a>{" "}
                        </p>
                      </div>
                      <div className="short-description">
                        <h2 style={{display: "flex", alignItems: "center"}}><InfoIcon sx={{margin: "5px"}}/>Информация</h2>
                        <ul>
                        <li>{teachers.date_of_birth ? <p style={{display: "flex", alignItems: "center"}}><CalendarMonthIcon sx={{margin: "5px"}}/> {teachers.date_of_birth}</p> : <h4></h4>}</li>
                        <li>{teachers.email ? <p style={{display: "flex", alignItems: "center"}}><EmailIcon sx={{margin: "5px"}}/> {teachers.email}</p> : <h4></h4>}</li>
                        <li>{teachers.phone ? <p style={{display: "flex", alignItems: "center"}}><PhoneIphoneIcon sx={{margin: "5px"}}/> {teachers.phone}</p> : <h4></h4>}</li>
                        <li>{teachers.speciality ? <p style={{display: "flex", alignItems: "center"}}><LaptopIcon sx={{margin: "5px"}}/> {teachers.speciality}</p> : <h4></h4>}</li>
                        <li>{teachers.group ? <p style={{display: "flex", alignItems: "center"}}><Diversity3Icon sx={{margin: "5px"}}/> {teachers.group}</p> : <h4></h4>}</li>
                        <li>{teachers.uch_st ? <p style={{display: "flex", alignItems: "center"}}><BusinessCenterIcon sx={{margin: "5px"}}/> {teachers.uch_st}</p> : <h4></h4>}</li>
                        </ul>
                      </div>
                      <div className="social">
                        <ul>
                          <li className="fb">
                            <Link to="#"></Link>
                          </li>
                          <li className="tw">
                            <Link to="#"></Link>
                          </li>
                          <li className="googleplus">
                            <Link to="#"></Link>
                          </li>
                          <li className="rss">
                            <Link to="#"></Link>
                          </li>
                          <li className="pintrest">
                            <Link to="#"></Link>
                          </li>
                          <li className="linkedin">
                            <Link to="#"></Link>
                          </li>
                          <li className="youtube">
                            <Link to="#"></Link>
                          </li>
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
