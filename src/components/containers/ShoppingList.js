import {connect} from 'react-redux';
import ShoppingList from '../shopping-list/ShoppingList'
import {clearShoppingList, deleteShoppingListItem} from '../actions/actions'

const mapStateToProps = state => {
  return {
    lineItems: state.shoppingList,
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteLineItem: id => {
      dispatch(deleteShoppingListItem(id))
    },
    clearList: () => {
      dispatch(clearShoppingList())
    }
  }
};

const ShoppingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);

export default ShoppingListContainer;