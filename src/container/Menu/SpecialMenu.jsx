import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import images from '../../constants/images';
import data from '../../constants/data';
import './SpecialMenu.css';


const SpecialMenu = () => {
  return (
    <div className="app__specialmenu">

      <div className="app__specialmenu-header">
        <SubHeading title="Menu that fits you palatte" />
        <h2 className="app__specialmenu-header_title">Vinhos e Drinks</h2>
      </div>

      <div className="app__specialmenu-menu">

        <div className="app__specialmenu-menu_wine">
          <h3 className="app__specialmenu-menu_title">Vinhos</h3>
          <div className="app__specialmenu-menu_items">
            {
              data.wines.map((wine, index) => (
                <MenuItem key={wine.title + (index + 1)} title={wine.title} price={wine.price} tags={wine.tags} />
              ))
            }
          </div>
        </div>

        <div className="app__specialmenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__special-menu_cocktails">
          <h3 className="app__specialmenu-menu_title">Drinks</h3>
          <div className="app__specialmenu-menu_items">
            {
              data.cocktails.map((cocktail, index) => (
                <MenuItem key={cocktail.title + (index + 1)} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="app__specialmenu-button">
        <button className="custom__button">Ver mais</button>
      </div>
    </div>
  )
}

export default SpecialMenu
