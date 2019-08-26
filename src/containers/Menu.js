import {connect} from 'react-redux';
import {renderComponent, toggleMenuVisibility} from '../actions/actions'
import Menu from "../components/menu/Menu";
import {getComponentKeys} from "../components/ComponentRegister";

const mapStateToProps = state => {
  return {
    visible: state.UIState.menuVisibility,
    menuOptions: getComponentKeys(),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectionHandler: title => {
      dispatch(renderComponent(title));
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