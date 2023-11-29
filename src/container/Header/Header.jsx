import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components/';

import './Header.css';

const Header = () => (
  <div className="app__header">
    <div className="app__header-content">
      <SubHeading title="Descubra Os Sabores Únicos" className='sub' />
      <h1 className="app__header-content_title">Os Segredos da Alta Gastronomia</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className="custom__button">Menu</button>
    </div>
    <div className="app__header-img">
      <img src={images.welcome2} alt="header_img" />
    </div>
  </div>
);

export default Header;

/* Erros cometidos: 

1 - no p, bastaria colocar a classe p__opensans, afinal, você já preparou ela para deixar todos os parágrafos com um estilo padrão.

2 - no h1, não existe a classe headtext-cormorant, faça sua propria classe depois estilize de acordo com o figma.

*/