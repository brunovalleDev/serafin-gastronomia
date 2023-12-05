import React from 'react'
import './MenuItem.css'

const MenuItem = ({ title, price, tags }) => {

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <h4 className='p__cormorant'>{title}</h4>
        <div className="app__menuitem-head_dash" />
        <p className="p__cormorant" color="#fff">{price}</p>
      </div>
      <div className="app__menuitem-description">
        <p className="p__opensans">{tags}</p>
      </div>
    </div>
  )
}

export default MenuItem
