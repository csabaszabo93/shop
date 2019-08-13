import {connect} from 'react-redux';
import {selectMenuItem, toggleMenuVisibility} from '../actions/actions'
import Menu from "../menu/Menu";
import {menuTitleToComponent} from "../menu/TitleToComponent";

const mapStateToProps = state => {
  return {
    visible: state.UIState.menuVisibility,
    menuTitles: Object.keys(menuTitleToComponent),
    selectedMenuItem: state.UIState.selectedMenuItem
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectionHandler: title => {
      dispatch(selectMenuItem(title));
      dispatch(toggleMenuVisibility())
    },
    closeMenu: () => {
      dispatch(toggleMenuVisibility());
    }
  }
};

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;