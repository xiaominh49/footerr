import React from 'react';
import './Footer.css'; // Add styles
import visa from '../assets/New folder/visa.png'
import mastercard from '../assets/New folder/mastercard.png'
import paypal from '../assets/New folder/paypal.png'
import applepay from '../assets/New folder/applepay.png'
import gpay from '../assets/New folder/gpay.png'
import twitter from '../assets/New folder/twitter.png'
import fb from '../assets/New folder/facebook.png'
import ig from '../assets/New folder/ig.png'
import github from '../assets/New folder/github.png'
import image from '../assets/New folder/image.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section company">
          <h3>SHOP.CO</h3>
          <p className='font-size'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className="social-icons"> 
                <img src={twitter} alt="" />
                <img src={fb} alt="" />
                <img src={ig} alt="" />
                <img src={github} alt="" />

          </div>
        </div>

        <div className="footer-section links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="footer-section links ">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>FAQ</h4>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>RESOURCES</h4>
          <ul>
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How to - Blog</a></li>
            <li><a href="#">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="payment-icons">
        <img src={visa} alt="Visa" />
        <img src={mastercard} alt="Mastercard" />
        <img src={paypal} alt="paypal" />
        <img src={applepay} alt="applepay" />
        <img src={gpay} alt="gpay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;