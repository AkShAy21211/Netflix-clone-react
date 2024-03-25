// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="column">
        <h3>Discover</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Genres</a></li>
        </ul>
      </div>
      <div className="column">
        <h3>My Account</h3>
        <ul>
          <li><a href="#">Account Settings</a></li>
          <li><a href="#">Subscription</a></li>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
      </div>
      <div className="column">
        <h3>About Us</h3>
        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
      </div>
      <div className="column">
        <h3>Contact Us</h3>
        <p>If you have any questions or need assistance, please contact us at support@netflix.com</p>
      </div>
    </div>
  );
}

export default Footer;
