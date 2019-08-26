import {connect} from 'react-redux';
import ShoppingLists from '../components/shopping-list/ShoppingLists'
import ShoppingList from "../components/shopping-list/ShoppingList";
import {
  clearShoppingLists,
  removeShoppingList,
  renderComponent,
  saveListToRender,
  saveSelectedShoppingList
} from "../actions/actions";
import {LINE_ITEMS} from "../components/ComponentRegister";

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
    },
    saveSelected: (id) => {
      dispatch(saveSelectedShoppingList(id));
    },
    clear: () => {
      dispatch(clearShoppingLists())
    },
    remove: (id) => {
      dispatch(removeShoppingList(id))
    }
  }
};

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