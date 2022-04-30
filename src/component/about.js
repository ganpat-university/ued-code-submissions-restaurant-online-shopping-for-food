import React from 'react';
import './about.css';
import aboutimg from '../assests/about-img.png';

function about() {

    function sendEmail() {
        window.location = "mailto:classicchao@gmail.com";
    }

    return (
        <div className='aboutsection'>
            <div className="up1">
                <div className="ct1">
                    <p className="ti1">Food is an Important<br />Part of your Health</p>
                    <p className="pra2">Making a reservation at delicious restaurant is easy and takes just a couple of minutes .</p>

                </div>
                <img src={aboutimg} className="aboutimg" />

            </div>


            <section className="buttonmsg">
                <button className='msg' onClick={sendEmail} >Send Mail</button>
            </section>


            <section className="middlecont">
                <p className="head">We provide home made <br />
                    Food at your Door steps</p>
            </section>


            <section className='locont'>
                <div className="container_first">
                    <p className="title_1">"Classic chao"</p>
                    <p className="sub_title1">Since our modest beginnings in 2022 with a little
                        space in Toronto's stylish Yorkville locale, Classic chao 's
                        development has been enlivened with the energy to cook and serve solid,
                        Indian-roused takeout food.In contrast to other Indian eateries,
                        'Organization Name' was made with the explicit expectation to appear
                        as something else.We realize numerous individuals love Indian
                        sustenance, yet a large number of them loathe or are unconscious of the
                        regularly unfortunate fixings that make run-of-the-mill Indian
                        nourishment taste so great.
                    </p>
                </div>

                <div className="container_second">
                    <p className="title_2">"Short Story"</p>
                    <p className="sub_title2">We perceive that a few people are as yet searching for the run-of-the-mill
                        Indian nourishment, and that is fine with us. Our disclaimer is that on the off
                        chance that you're anticipating overwhelming, slick, undesirable Indian
                        nourishment, Classic Chao isn't the place for you.
                    </p>
                </div>

                <div className="sign">
                    <p className="sign1"><strong>~ Arjun Thakor</strong></p>
                </div>


            </section>
        </div>
    )
}

export default about