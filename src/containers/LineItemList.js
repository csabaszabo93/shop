import {connect} from 'react-redux';
import LineItems from "../components/shopping-list/LineItems";
import {toggleProductPoolVisibility} from "../actions/actions";

let mapStateToProps = state => {
  return {
    lineItems: state.lineItems.filter(lineItem => state.UIState.listToRender.includes(lineItem.id)),
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showProductPool: () => {
      dispatch(toggleProductPoolVisibility());
    }
  }
};

const LineItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LineItems);

export default LineItemsContainer;