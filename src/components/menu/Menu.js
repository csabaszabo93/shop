import React from 'react';
import MenuTile from '../menu/MenuTile';

const Menu = ({visible, menuTitles, selectedMenuItem, selectionHandler, closeMenu}) => {
  if(visible) {
    return (
        <div id="modal" onClick={closeMenu}>
          <div id="menu">
            Menu
            {menuTitles.map((menuTitle, index) => (
              <MenuTile key={index} title={menuTitle} selectionHandler={selectionHandler} highlight={menuTitle === selectedMenuItem}/>
            ))}
          </div>
        </div>
    )
  }
  return null
};

export default Menu