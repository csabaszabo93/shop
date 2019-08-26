import React from 'react';
import MenuTile from '../menu/MenuTile';

const Menu = ({visible, menuOptions, selectionHandler, closeMenu}) => {
  if(visible) {
    return (
        <div id="modal" onClick={closeMenu}>
          <div id="menu">
            Menu
            {menuOptions.map((menuOption, index) => (
              <MenuTile key={index} option={menuOption} selectionHandler={selectionHandler}/>
            ))}
          </div>
        </div>
    )
  }
  return null
};

export default Menu