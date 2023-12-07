import React from 'react'
import { images } from '../../constants'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => {
  return (
    <div className="app__footer">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-info">
        <div className="app__footer-info_contact">
          <h4>Contact Us</h4>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="app__footer-info_logo">
          <h2 className='headtext__cormorant' style={{ marginBottom: '2rem' }}>Gerícht</h2>
          <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon_img" style={{ margin: '0.5rem 0' }} />
          <div className="app__footer-info_social-icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-info_work">
          <h4>Working Hours</h4>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>

      <div className="app__footer-copyright">
        <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
