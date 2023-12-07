import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, AwardCard } from '../../components';
import './Laurels.css';

const Laurels = () => {
  return (
    <div className="app__laurels">

      <div className="app__laurels-info">
        <div className="app__laurels-info_header">
          <SubHeading title="Awards & recognition" />
          <h3>Our Laurels</h3>
        </div>

        <div className="app__laurels-awards">
          {
            data.awards.map((award, index) => (
              <AwardCard key={award.title + (index + 1)} title={award.title} subtitle={award.subtitle} imgUrl={award.imgUrl} />
            ))
          }
        </div>
      </div>

      <div className="app__laurels-img">
        <img src={images.laurels} alt="laurels__img" />
      </div>
    </div>
  )
}

export default Laurels
