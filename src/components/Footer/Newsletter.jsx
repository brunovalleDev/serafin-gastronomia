import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-head">
      <SubHeading title="Newsletter" />
      <h3>Subscribe to Our Newsletter</h3>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>

    <div className="app__newsletter-input">
      <input type="email" className="app__newsletter-input_email" placeholder='Email Address' />
      <button type='button' className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
