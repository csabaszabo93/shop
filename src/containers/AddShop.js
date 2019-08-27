import '../static/css/App.css';
import {addShop} from "../actions/actions";
import {connect} from "react-redux";
import CreateNewResource from "../components/CreateNewResource";
import {ShopModel} from "../models/models";

const mapStateToProps = state => {
  return {
    resourceName: "shop",
    isVisible: true,
    attributes: ["name"]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createModel: (data) => {
      console.log(data)
      data = Object.assign({}, ShopModel, data);
      dispatch(addShop(data))
    }
  }
};

const AddShop = connect(mapStateToProps, mapDispatchToProps)(CreateNewResource);

export default AddShop;