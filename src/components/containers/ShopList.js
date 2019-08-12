import { connect } from "react-redux";
import ShopList from "../shops/ShopList"
import {clearShopList, deleteShopListItem} from "../actions/actions";

const mapStateToProps = state => {
  return {
    shops: state.shops
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteShop: id => {
      dispatch(deleteShopListItem(id))
    },
    clearList: () => {
      dispatch(clearShopList())
    }
  }
};

const ShopListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopList);

export default ShopListContainer;