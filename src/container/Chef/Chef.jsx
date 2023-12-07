import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';


import './Chef.css';

const Chef = () => (
  <div className="app__chef">

    <div className="app__chef-img">
      <img src={images.chef} alt="chef__img" />
    </div>

    <div className="app__chef-info">
      <div className="app__chef-info_title">
        <SubHeading title="Chef’s Word" />
        <h3 className="headtext__cormorant" style={{ textTransform: 'uppercase' }}>Nossa meta principal</h3>
      </div>

      <div className="app__chef-content_content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote__img" />
          <p className="p__opensans" style={{ fontStyle: 'italic' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans" style={{ fontStyle: 'italic' }}>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>

      <div className="app__chef-content_name">
        <p className="p__cormorant">Might Guy</p>
        <p className="p__opensans">Chef & Fundador</p>
      </div>

      <div className="app__chef-content_sign">
        <img src={images.sign} alt="sign__img" />
      </div>

    </div>
  </div>
);

export default Chef;
