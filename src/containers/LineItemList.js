import {connect} from 'react-redux';
import LineItems from "../components/shopping-list/LineItems";
import {deleteLineItems, deleteLineItem, toggleProductPoolVisibility} from "../actions/actions";

let mapStateToProps = state => {
  return {
    lineItems: state.lineItems.filter(lineItem => state.UIState.listToRender.includes(lineItem.id)),
    products: state.products,
    selectedShoppingList: state.selectedResources.shoppingList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showProductPool: () => {
      dispatch(toggleProductPoolVisibility());
    },
    clear: function (ids) {
      dispatch(deleteLineItems(ids, this.shoppingList))
    },
    remove: function (id) {
      dispatch(deleteLineItem(id, this.shoppingList))
    }
  }
};

const mergeProps = (state, dispatch, own) => {
  return {
    ...state,
    ...dispatch,
    ...own,
    clear(ids) {
      const boundClear = dispatch.clear.bind({shoppingList: state.selectedShoppingList});
      boundClear(ids);
    },
    remove(id) {
      const boundRemove = dispatch.remove.bind({shoppingList: state.selectedShoppingList});
      boundRemove(id);
    }
  }
};

const LineItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(LineItems);

export default LineItemsContainer;