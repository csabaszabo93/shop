import React from 'react';
import MenuTile from '../menu/MenuTile';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Menu = ({visible, menuTitles, selectedMenuItem, selectionHandler, closeMenu}) => {
  if(visible) {
    return (
        <div id="modal">
          <div id="menu">
            <div onClick={closeMenu}>
              <FontAwesomeIcon icon={faBars}/>
            </div>
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