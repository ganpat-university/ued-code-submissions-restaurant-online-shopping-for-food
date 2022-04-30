import React from 'react';
import './services.css';

import { MenuBook } from '@material-ui/icons';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LanguageIcon from '@material-ui/icons/Language';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';




function services() {

  return (
    <div className='services'>
          <div className="main">
              <div className='cont_serv'>
                  <div className='serviceBox'>
                      <div className='icon1'>
                          <MenuBook className='i' />
                      </div>
                      <div className='content'>
                          <h2>No Minimum Order</h2>
                          <p>
                          Order in for yourself or for the group, with no restrictions on order value
                          </p>
                      </div>
                  </div>

                  <div className='serviceBox'>
                      <div className='icon2'>
                          <PersonPinIcon className='i' />
                          
                          
                      </div>
                      <div className='content'>
                          <h2>Live Order Tracking</h2>
                          <p>
                          Know where your order is at all times, from the restaurant to your doorstep
                          </p>
                      </div>
                  </div>

                  <div className='serviceBox'>
                      <div className='icon3'>
                          <DirectionsBikeIcon className='i' />
                      </div>
                      <div className='content'>
                          <h2 >Lightning-Fast Delivery</h2>
                          <p>
                          Experience Swiggy's superfast delivery for food delivered fresh & on time
                          </p>
                      </div>
                  </div>

                  <div className='serviceBox'>
                      <div className='icon4'>
                          < LanguageIcon className='i' />
                      </div>
                      <div className='content'>
                          <h2>World Wide</h2>
                          <p>
                            We are in 24 Countries .
                          </p>
                      </div>
                  </div>

                  <div className='serviceBox'>
                      <div className='icon5'>
                          <HomeWorkIcon className='i' />
                      </div>
                      <div className='content'>
                          <h2>1.5m Listings</h2>
                          <p>
                              Our Happy Customer , over the Countries.
                          </p>
                      </div>
                  </div>

                  <div className='serviceBox'>
                      <div className='icon6'>
                          <SportsEsportsIcon className='i' />
                      </div>
                      <div className='content'>
                          <h2>Games</h2>
                          <p>
                              Complete Daily task and redeem rewards.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="login-page">
              <div className="formsection">
                  <form className="register-form">
                      <input type="text" placeholder="name" />
                      <input type="password" placeholder="password" />
                      <input type="text" placeholder="email address" />
                      <button>create</button>
                      <p className="message">Already registered? <a href="#">Sign In</a></p>
                  </form>
                  
              </div>
          </div>
          
        
    </div>
  )
}


export default services