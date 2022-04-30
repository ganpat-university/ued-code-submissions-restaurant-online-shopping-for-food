import { Link } from "react-router-dom";
import React  from 'react';
import Menu from '@material-ui/icons/RestaurantMenu';
import './menu.css';
import aboutimg from '../assests/home-img-1.png';
import SearchIcon from '@material-ui/icons/Search';

import food1 from '../assests/menu-5.jpg';
import food2 from '../assests/menu-3.jpg';
import food3 from '../assests/panner.jpg';
import food4 from '../assests/pavbhaji.jpg';
import food5 from '../assests/idli.jpg';
import food6 from '../assests/khichdi.jpg';
import food7 from '../assests/chicken cury.jpg';
import food8 from '../assests/chicken biryani.jpg';
import food9 from '../assests/momos.jpg';
import food10 from '../assests/chicken ball.jpg';
import food11 from '../assests/menu-1.jpg';
import food12 from '../assests/dosa.jpg';
import food13 from '../assests/menu-6.jpg';
import food14 from '../assests/menu-4.jpg';
import food15 from '../assests/gujrati.jpeg';
import food16 from '../assests/menu-7.jpg';

function menu() {


  return (
      <>
    <div className='menusection' id="content1">
        <div className="upper1">
            <div className="cont1">
                <p className="t1">Food is an Important<br />Part of your Health</p>
                <p className="p2">Making a reservation at delicious restaurant is easy and takes just a couple of minutes .</p>
                <Link to="/menu">
                    <button> Scroll down for menu
                        <Menu />
                    </button>
                </Link>
            </div>
            <img src={aboutimg}  className="aboutimg" />
            
        </div>
        <section className="mid2">
            <div className="veg">
                {/*<input type='checkbox' id="toggle" />
                <p className="title">VEG</p>*/}
                <div id="app-cover">
                    <div class="row">
                        <div class="toggle-button-cover">
                            <div class="button-cover">
                                <div class="button r" id="button-1">
                                    <input type="checkbox" class="checkbox"  name="fl-colour" value="red" id="red" />
                                    <div class="knobs"></div>
                                    <div class="layer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search">
                <SearchIcon className='search1' />
                <input type="search" name="search" className="searchbar" placeholder="Search ..." />
            </div>
        </section>


        <section className="gallery-container">
            <div class="grid-container">
                <div className="fooditems">
                    <img src={food1} className="veg" alt="" />
                    <p className="item1">Classic Chao Special</p>
                    <div className="buttonsw">
                    <button className="button1"  > 150 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems">
                    <img src={food2}  className="veg" alt="" />  
                    <p className="item1">lachha Paratha</p>
                    <div className="buttonsw">
                    <button className="button1"  > 100 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems">
                    <img src={food3}  className="veg" alt="" />
                    <p className="item1">Panner Special</p>
                    <div className="buttonsw">
                    <button className="button1"  > 110 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems">
                    <img src={food4}  className="veg" alt="" />
                    <p className="item1">Pav Bhaji</p>
                    <div className="buttonsw">
                    <button className="button1"  > 100 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems1">
                    <img src={food5}  className="veg" alt="" />
                    <p className="item1">Rava Idli</p>
                    <div className="buttonsw">
                    <button className="button1"  > 120 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems1">
                    <img src={food6}  className="veg" alt="" />
                    <p className="item1">Pullav Special</p>
                    <div className="buttonsw">
                    <button className="button1"  > 140 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems1">
                    <img src={food7}  className="non-veg"  alt="" />
                    <p className="item1">Chicken cury</p>
                    <div className="buttonsw">
                    <button className="button1"  > 110 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems1">
                    <img src={food8}  className="non-veg" alt="" />
                    <p className="item1">Chicken Biryani</p>
                    <div className="buttonsw">
                    <button className="button1"  > 130 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems2">
                    <img src={food9}  className="veg" alt="" />
                    <p className="item1">Momos</p>
                    <div className="buttonsw">
                    <button className="button1"  > 100 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems2">
                    <img src={food10}  className="non-veg" alt="" />
                    <p className="item1">Chicken Balls</p>
                    <div className="buttonsw">
                    <button className="button1"  > 90 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems2">
                    <img src={food11}  className="veg" alt="" />
                    <p className="item1">Unknown Special</p>
                    <div className="buttonsw">
                    <button className="button1"  > 120 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems2">
                    <img src={food12}  className="veg" alt="" />
                    <p className="item1">dosa</p>
                    <div className="buttonsw">
                    <button className="button1"  > 90 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems3">
                    <img src={food13}  className="veg" alt="" />
                    <p className="item1">Winter Crust</p>
                    <div className="buttonsw">
                    <button className="button1"  > 60 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems3">
                    <img src={food14}  className="veg" alt="" />
                    <p className="item1">Choco Wafer</p>
                    <div className="buttonsw">
                    <button className="button1"  > 80 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems3">
                    <img src={food15}  className="veg" alt="" />
                    <p className="item1">Gujarati Thali</p>
                    <div className="buttonsw">
                    <button className="button1"  > 110 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>

                <div className="fooditems3">
                    <img src={food16}  className="veg" alt="" />
                    <p className="item1">Lemonade</p>
                    <div className="buttonsw">
                    <button className="button1"  > 50 ₹ </button>
                    <button className="button2"> Add to cart + </button>
                    </div>
                </div>
                
            </div>
        </section>


    </div>
    </>
  )
}

export default menu