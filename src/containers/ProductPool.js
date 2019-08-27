import {connect} from 'react-redux';
import ProductList from '../components/product-list/ProductList'
import {convertToLineItem, toggleProductPoolVisibility, toggleQuantityFormVisibility} from "../actions/actions";

const mapStateToProps = state => {
  let products;
  if (state.UIState.productFilter) {
    products = state.products.filter(product => product.name === state.UIState.productFilter)
  } else {
    products = state.products
  }
  return {
    isVisible: state.UIState.isProductPoolVisible,
    isQuantityFormVisible: state.UIState.isQuantityFormVisible,
    products: products,
    productFilter: state.UIState.productFilter
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