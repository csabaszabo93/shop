import {
  TOGGLE_QUANTITY_MODAL_VISIBILITY,
  CONVERT_TO_LINE_ITEM,
  SELECT_MENU_ITEM,
  TOGGLE_MENU_VISIBILITY
} from "../actions/actions";

const defaultUIState = {
  quantityModalVisibility: false,
  productToLineItem: null,
  selectedMenuItem: "welcome",
  menuVisibility: false,
};

function UIReducer(state = defaultUIState, action){
  switch(action.type) {
    case TOGGLE_QUANTITY_MODAL_VISIBILITY:
      return Object.assign({}, state, {quantityModalVisibility: !state.quantityModalVisibility});
    case TOGGLE_MENU_VISIBILITY:
      return Object.assign({}, state, {menuVisibility: !state.menuVisibility});
    case CONVERT_TO_LINE_ITEM:
      return Object.assign({}, state, {productToLineItem: action.productId});
    case SELECT_MENU_ITEM:
      return Object.assign({}, state, {selectedMenuItem: action.title});
    default:
      return state
  }
}

export default UIReducer