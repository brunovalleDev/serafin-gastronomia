import React from 'react';
import { images } from '../../constants';
import './AwardCard.css';

const AwardCard = ({ title, subtitle, imgUrl }) => (
  <div className="app__awardcard">
    <div className="app__awardcard-img">
      <img src={imgUrl} alt="award__img" />
    </div>

    <div className="app__awardcard-info">
      <p className='p__cormorant'>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
)

export default AwardCard
