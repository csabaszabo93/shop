import {connect} from "react-redux";
import {removeProductFilter, setProductFilter, toggleSearchBarVisibility} from "../actions/actions";
import SearchResource from "../components/SearchResource";

const mapStateToProps = state => {
  return{
    isVisible: state.UIState.isSearchBarVisible,
    target: "Product"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleVisibility: () => {
      dispatch(toggleSearchBarVisibility())
    },
    filter: (productName) => {
      dispatch(setProductFilter(productName))
    },
    removeFilter: () => {
      dispatch(removeProductFilter())
    }
  }
};

const SearchProduct = connect(mapStateToProps, mapDispatchToProps)(SearchResource);

export default SearchProduct;