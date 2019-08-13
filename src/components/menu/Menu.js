import React from 'react';
import MenuTile from '../menu/MenuTile';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward} from "@fortawesome/free-solid-svg-icons";

const Menu = ({visible, menuTitles, selectedMenuItem, selectionHandler, closeMenu}) => {
  if(visible) {
    return (
        <div id="modal">
          <div id="menu">
            Menu
            {menuTitles.map((menuTitle, index) => (
              <MenuTile key={index} title={menuTitle} selectionHandler={selectionHandler} highlight={menuTitle === selectedMenuItem}/>
            ))}
            <div onClick={closeMenu}>
              <FontAwesomeIcon icon={faBackward}/>
            </div>
          </div>
        </div>
    )
  }
  return null
};

export default Menu