import '../static/css/App.css';
import {addShop, addShoppingList} from "../actions/actions";
import {connect} from "react-redux";
import CreateNewModel from "../components/CreateNewModel";
import {ShoppingListModel} from "../models/models";


const mapDispatchToProps = dispatch => {
  return {
    createModel: (data) => {
      data = Object.assign({}, ShoppingListModel, data);
      dispatch(addShoppingList(data))
    }
  }
};

const AddShoppingList = connect(null, mapDispatchToProps)(CreateNewModel);

export default AddShoppingList;