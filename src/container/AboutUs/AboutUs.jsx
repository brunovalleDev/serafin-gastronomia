import React from 'react'
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus">
    <div className="app__aboutus-overlay">
      <img src={images.S} alt="g__img" />
    </div>

    <div className="app__aboutus-content">
      <div className="app__aboutus-content_info">
        <h2 className="section-title__cormorant">Sobre nós</h2>
        <img src={images.spoon} alt="spoon_img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="custom__button about__button">Saiba mais</button>
      </div>

      <div className="app__aboutus-content_img">
        <img src={images.knife} alt="knife_img" />
      </div>

      <div className="app__aboutus-content_history">
        <h2 className="section-title__cormorant">Jornada</h2>
        <img src={images.spoon} alt="spoon_img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="custom__button about__button">Saiba mais </button>
      </div>
    </div>
  </div>
)

export default AboutUs
