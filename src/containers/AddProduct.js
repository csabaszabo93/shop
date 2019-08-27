import {ProductModel} from "../models/models";
import {connect} from "react-redux";
import CreateNewResource from "../components/CreateNewResource";
import {addProduct} from "../actions/actions";

const mapStateToProps = state => {
  let numOfProducts;
  if (state.UIState.productFilter) {
    numOfProducts = state.products.filter(product => product.name === state.UIState.productFilter).length
  } else {
    numOfProducts = state.products.length
  }
  return {
    resourceName: "product",
    isVisible: numOfProducts === 0,
    attributes: ["name", "packaging"],
    numOfProducts: numOfProducts
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createModel: (data) => {
      data = Object.assign({}, ProductModel, data);
      dispatch(addProduct(data))
    },
  }
};

const AddProduct = connect(mapStateToProps, mapDispatchToProps)(CreateNewResource);

export default AddProduct
