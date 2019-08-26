import {connect} from 'react-redux';
import ShoppingLists from '../shopping-list/ShoppingLists'
import ShoppingList from "../shopping-list/ShoppingList";
import {renderComponent, saveListToRender} from "../actions/actions";
import {LINE_ITEMS} from "../ComponentRegister";

let mapStateToProps = state => {
  return {
    shoppingLists: state.shoppingLists,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadLineItems: (lineItems) => {
      dispatch(saveListToRender(lineItems));
      dispatch(renderComponent(LINE_ITEMS));
    }
  }
}

const ShoppingListsContainer = connect(
  mapStateToProps,
    mapDispatchToProps
)(ShoppingLists);

export default ShoppingListsContainer;

mapStateToProps = state => {
  return {
    shoppingList: state.shoppingLists[0]
  }
};

export const ShoppingListContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);