import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 332;
    } else {
      current.scrollLeft += 332;
    }
  }
  return (
    <div className="app__gallery">

      <div className="app__gallery-info">
        <div className="app__gallery-info_title">
          <SubHeading title="Instagram" />
          <h3 className="section-title__cormorant">Photo Gallery</h3>
        </div>

        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">

        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
              <div className="app__gallery-images_card">
                <img src={image} alt="gallery__img" />
                <BsInstagram className="gallery_instagram-icon" />
              </div>
            ))
          }
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>

      </div>

    </div>
  )
}

export default Gallery
