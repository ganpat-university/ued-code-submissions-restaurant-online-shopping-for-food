import React from 'react'; 
import { Link } from "react-router-dom";
import './contaact.css';
import aboutimg from '../assests/about-img.png';
import post_1 from '../assests/beans.png';
import post_2 from '../assests/menu-1.jpg';
import post_3 from '../assests/dinnertable.jpg';
import map from '../assests/map.PNG';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Menu from '@material-ui/icons/RestaurantMenu';

function contact() {
  return (
    <div className='contactsec'>
        <div className="contact">
              <div className="contactup">
                  <p className="tcontact">Meet , Eat & Enjoy <br />the true test</p>
                  <p className="pcontact">Making a reservation at delicious restaurant is easy and takes just a couple of minutes .</p>
                  <Link to="/menu">
                      <button> Check out Menu
                          <Menu />
                      </button>
                  </Link>
              </div>
    
             <img src={aboutimg} className="aboutimg" />

        </div>


        <section className="contactus">
              <div className="containercontact">
                  <div className="tweet">
                      <p className="heading">Tweet</p>
                      <div className="conttitle1">
                          <p><span>@ClassicChao</span> Some people call it a sizzle. We think of it as an anthem.
                              Our family gets a little
                              excited  every time you come
                              by.
                          </p>
                      </div>
                      <div className="contsub1">
                          <p>12 days ago </p>
                      </div>
                      <div className="follow">
                          <TwitterIcon className='icon' />
                          <p className="followc">Follow on Twitter ...</p>
                      </div>
                  </div>



                  <div className="Latest">
                      <p className="heading">Latest Post</p>
                      <div className="conttitle2">
                          <div className="wrap">
                              <img src={post_1} className="post_1" alt="" />
                              <p className='para_1'>Lets bring the New Spicy
                                  Flavour to your Dishes
                              </p>
                          </div>
                          <span>12 days ago </span> 
                          
                          <div className="wrap">
                              <img src={post_2} className="post_2" alt="" />
                              <p className='para_2'>Now we have more
                                  variety of delicious food
                              </p>
                          </div> 
                          <span>12 days ago </span> 
                          
                          <div className="wrap">
                              <img src={post_3} className="post_3" alt="" />
                              <p className='para_3'>Lets have a Candle Light
                                  Dinner with your partner
                              </p>
                          </div>
                          <span>12 days ago </span> 


                      </div>

                  </div>



                  <div className="location">
                      <p className="heading">Our Location</p>
                      <div className="contentloc">
                          <img src={map} className="mapimg" alt="" />
                          <button className='buttonc'>We invite you to share with
                              us a celebration of love…</button>
                      </div>
                  </div>



                  <div className="ourcontact">
                      <p className="heading">Our Contact</p>
                      <div className="conttitle4">
                          <div className="iconsicon">
                              <FacebookIcon className='iconc1' />
                              <InstagramIcon className='iconc2' />
                              <TwitterIcon className='iconc3' />
                          </div>

                          <div className="contc">
                              <div className="iconsc1">
                                  <PhoneInTalkIcon className='iconc4' />
                                  <p className="phone">+91- 8349650217</p>
                              </div>

                              <div className="iconsc1">
                                  <EmailIcon className='iconc5' />
                                  <p className="contentc5">classicchao@gmail.com</p>
                              </div>

                              <div className="iconsc1">
                                  <LocationOnIcon className='iconc6' />
                                  <p className="contentc6">Gandhinagar , Gujarat</p>
                              </div>
                          </div>
                      </div>
    
                  </div>
              </div>
        </section>
        
    </div>
  )
}

export default contact