import '../static/css/App.css';
import {addShoppingList} from "../actions/actions";
import {connect} from "react-redux";
import CreateNewResource from "../components/CreateNewResource";
import {ShoppingListModel} from "../models/models";

const mapStateToProps = state => {
  return {
    attributes: ["name"]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createModel: (data) => {
      data = Object.assign({}, ShoppingListModel, data);
      dispatch(addShoppingList(data))
    }
  }
};

const AddShoppingList = connect(mapStateToProps, mapDispatchToProps)(CreateNewResource);

export default AddShoppingList;