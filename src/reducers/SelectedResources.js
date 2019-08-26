import {SAVE_SELECTED_SHOPPING_LIST} from "../actions/actions";

const defaultSelectedResources = {
  shoppingList: null,
  lineItem: null,
  shop: null,
  product: null,
};

function selectedResourcesReducer(state = defaultSelectedResources, action){
  switch(action.type){
    case SAVE_SELECTED_SHOPPING_LIST:
      return Object.assign({}, state, {shoppingList: action.id});
    default:
      return state;
  }
}

export default selectedResourcesReducer;