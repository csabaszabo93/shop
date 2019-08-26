import {connect} from 'react-redux';
import ProductList from '../components/product-list/ProductList'
import {convertToLineItem, toggleProductPoolVisibility, toggleQuantityFormVisibility} from "../actions/actions";

const mapStateToProps = state => {
  return {
    isVisible: state.UIState.isProductPoolVisible,
    isQuantityFormVisible: state.UIState.isQuantityFormVisible,
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return{
    toggleVisibility: () => {
      dispatch(toggleProductPoolVisibility())
    },
    toggleQuantityFormVisibility: () => {
      dispatch(toggleQuantityFormVisibility())
    },
    convertToLineItem: (productId) => {
      dispatch(convertToLineItem(productId))
    },
  }
};

const ProductPool = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);

export default ProductPool;