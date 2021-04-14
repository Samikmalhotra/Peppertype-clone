import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-5">
                <img alt='' className="plogo" src="https://uploads-ssl.webflow.com/6036972e08af561b470b4831/6036972e08af56a73f0b486c_white-logo-400px.png"/>
                <p>Peppertype.ai is an instant content generator powered by artificial intelligence.</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-5">
                <h5>Company</h5>
                <p className="company">About</p>
                <p className="company">Career</p>
                <p className="company">Terms of Service</p>
                <p className="company">Privacy Policy</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-5">
                <h5>Help</h5>   
                <p className="company">Watch the Demo</p>
                <p className="company">Report a Bug</p>
                <p className="company">Share Feedback</p>
                <p className="company">Contact Support</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-5">
                <img alt='' className="plogo2" src="https://uploads-ssl.webflow.com/6036972e08af561b470b4831/6036972e08af56ff3b0b4870_New%20Pepper%20Logo%20(1).png"/>
                <p>Pepper Content is India's Largest Content Marketplace and the parent company of Peppertype.ai</p>
            </div>
        </div>
    </div>
    )
}

export default Footer
