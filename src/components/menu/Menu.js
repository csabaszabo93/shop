import React from 'react';
import MenuTile from '../menu/MenuTile';

const Menu = ({visible, menuTitles, selectedMenuItem, selectionHandler}) => {
  if(visible) {
    return (
        <div id="modal">
          <div id="menu">
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