import {connect} from 'react-redux';
import ShoppingLists from '../shopping-list/ShoppingLists'

const mapStateToProps = state => {
  return {
    shoppingLists: state.shoppingLists,
  }
};

const ShoppingListContainer = connect(
  mapStateToProps
)(ShoppingLists);

export default ShoppingListContainer;