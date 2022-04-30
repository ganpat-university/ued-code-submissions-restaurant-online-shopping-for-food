import { Link } from "react-router-dom";
import React from 'react';
import Menu from '@material-ui/icons/RestaurantMenu';
import './home.css';
import aboutimg from '../assests/about-img.png';
import choco from '../assests/splash-removebg-preview.png';
import { KeyboardArrowDown } from "@material-ui/icons";
import table from '../assests/dinnertable000.webp'

export default function home() {
    <></>
  return (
    <div className="home">
        <div className="uppercontent">
              <div className="container">
                  <p className="title">Meet , Eat & Enjoy <br />the true test</p>
                  <p className="param1">Making a reservation at delicious restaurant is easy and takes just a couple of minutes .</p>
                  <Link to="/menu">
                      <button> Check out Menu
                          <Menu />
                      </button>
                  </Link>
              </div>
    
             <img src={aboutimg} className="aboutimg" />

        </div>

        <section className="middle">
              <div class="menu" id="menu">
                  <article class="menu-image"></article>
                  <article class="menu-text">
                      <img src={choco} alt="" className="chocoimg"/>
                      <div class="menu-text-center">
                          <div className="chococonent">
                              <h2 className="dish">Most Popular Dish</h2>
                               <p className="dishname">Choco Waffer</p>
                          <p className="cost">Cost : 150 /-</p>
                          </div>
                          <Link to="/menu">
                          <div className="btns">
                              <button class="btn1" > Order Now </button>
                              <button class="btn2" > Check out Menu </button>
                          </div>
                          </Link>
                          
                      </div>
                  </article>
              </div>
        </section>

        <section className="lower">
            <div className="container_main">
                  <div className="container1">
                      <p className="title1">Book a table</p>
                      <p className="sub4">Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</p>


                      <div className="form">
                          <input type="text" placeholder="Name :"  name="Name" id="name" /><br />
                          <input type="date" name="Date" id="date" />
                          <select class="select" name="option">
                              <option value="" disabled selected>Choose your option</option>
                              <option value="1">Break Fast</option>
                              <option value="2">Lunch</option>
                              <option value="3">Dinner</option>
                          </select>
                          <br />
                          <input type="text" placeholder="Phone :" name="Phone" id="phone" /><br />
                          <input type="text" placeholder="Message :" name="Message" id="message" />
                          <div className="send">
                              <button class="btn5" > Send Request </button>
                          </div>
                          
                      </div>
                </div>
                <img src={table} alt="" />

            </div>
        </section>

    </div>
  )
}
