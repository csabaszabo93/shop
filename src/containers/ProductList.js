import {connect} from 'react-redux';
import ProductList from '../components/product-list/ProductList'
import {convertToLineItem, toggleQuantityFormVisibility} from "../actions/actions";

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return{
    toggleQuantityModalVisibility: () => {
      dispatch(toggleQuantityFormVisibility())
    },
    convertToLineItem: (productId) => {
      dispatch(convertToLineItem(productId))
    }
  }
};

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);

export default ProductListContainer;