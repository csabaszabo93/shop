import '../static/css/App.css';
import {addShop} from "../actions/actions";
import {connect} from "react-redux";
import CreateNewModel from "../components/CreateNewModel";
import {ShopModel} from "../models/models";


const mapDispatchToProps = dispatch => {
  return {
    createModel: (data) => {
      data = Object.assign({}, ShopModel, data);
      dispatch(addShop(data))
    }
  }
};

const AddShop = connect(null, mapDispatchToProps)(CreateNewModel);

export default AddShop;