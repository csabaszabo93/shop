import {connect} from 'react-redux';
import ShoppingList from '../actual/ShoppingList'
import {clearShoppingList, deleteShoppingListItem} from '../actions/actions'

const mapStateToProps = state => {
  return {
    lineItems: state.shoppingList
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