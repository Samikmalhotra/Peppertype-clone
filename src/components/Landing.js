import React from 'react';
import landingss from '../img/pepertype.png'

const Landing = () => {
    return (
        <div class="landing">
            <div class="row">
                <div class="content-assistant  ">
                    <h1>Your Virtual Content Assistant 👋</h1>
                    <p>Generate better content copies in seconds with the power of Artificial Intelligence.</p>
                    <button class = "register">
                        Get Started for Free →
                    </button>
                </div>
                <div class="peppertype-img col-lg-5 ">
                    <img src={landingss} alt="logo"/>
                </div>
            </div>
            <p class="tagline">FROM THE TEAM CREATING CONTENT FOR 1000+ AMAZING BRANDS LIKE</p>
        </div>
    )
}

export default Landing;
