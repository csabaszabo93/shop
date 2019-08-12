import {connect} from 'react-redux';
import ProductList from '../product-list/ProductList'
import {toggleQuantityModalVisibility} from "../actions/actions";

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return{
    toggleQuantityModalVisibility: () => {
      dispatch(toggleQuantityModalVisibility())
    }
  }
};

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);

export default ProductListContainer;