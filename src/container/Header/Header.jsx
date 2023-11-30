import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className="app__header">
    <div className="app__header-content">
      <SubHeading title="Busque O Melhor Sabor" />
      <h1 className="app__header-content_title">Gastronomia que encanta</h1>
      <p className="p__opensans" style={{ margin: '2rem 0 2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className="custom__button" style={{ fontSize: '1.4rem' }}>Menu</button>
    </div>

    <div className="app__header-img">
      <img src={images.welcome2} alt="welcome__img" />
    </div>
  </div>
)

export default Header


/* Erros cometidos: 

1 - no p, bastaria colocar a classe p__opensans, afinal, você já preparou ela para deixar todos os parágrafos com um estilo padrão.

2 - no h1, não existe a classe headtext-cormorant, faça sua propria classe depois estilize de acordo com o figma.

*/