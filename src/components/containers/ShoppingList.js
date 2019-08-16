import {connect} from 'react-redux';
import ShoppingLists from '../shopping-list/ShoppingLists'
import ShoppingList from "../shopping-list/ShoppingList";

let mapStateToProps = state => {
  return {
    shoppingLists: state.shoppingLists,
  }
};

const ShoppingListsContainer = connect(
  mapStateToProps
)(ShoppingLists);

export default ShoppingListsContainer;

mapStateToProps = state => {
  return {
    shoppingList: state.shoppingLists[0]
  }
};

export const ShoppingListContainer = connect(mapStateToProps)(ShoppingList);