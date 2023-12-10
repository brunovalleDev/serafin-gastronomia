import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './FindUs.css';

const FindUs = () => (
  <div className="app__findus">
    <div className="app__findus-content">
      <div className="app__findus-content_title">
        <SubHeading title="Contact" />
        <h3 className="section-title__cormorant">Find Us</h3>
      </div>

      <div className="app__findus-content_info">
        <div className="app__findus-content_address">
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        </div>

        <div className="app__findus-content_hours">
          <p className='p__cormorant'>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>

      <button type="button" className='custom__button'>Visit Us</button>
    </div>

    <div className="app__findus-img">
      <img src={images.findus} alt="findus__img" />
    </div>
  </div>
);

export default FindUs;
