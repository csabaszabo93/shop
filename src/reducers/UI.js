import {
  TOGGLE_QUANTITY_FORM_VISIBILITY,
  CONVERT_TO_LINE_ITEM,
  CHANGE_RENDERED_COMPONENT,
  TOGGLE_MENU_VISIBILITY, SAVE_LIST_TO_RENDER, TOGGLE_PRODUCT_POOL_VISIBILITY
} from "../actions/actions";
import {getComponent, WELCOME} from "../components/ComponentRegister";

const defaultUIState = {
  isQuantityFormVisible: false,
  productToLineItem: null,
  componentToRender: getComponent(WELCOME),
  menuVisibility: false,
  listToRender: [],
  isProductPoolVisible: false,
};

function UIReducer(state = defaultUIState, action){
  switch(action.type) {
    case TOGGLE_QUANTITY_FORM_VISIBILITY:
      return Object.assign({}, state, {isQuantityFormVisible: !state.isQuantityFormVisible});
    case TOGGLE_MENU_VISIBILITY:
      return Object.assign({}, state, {menuVisibility: !state.menuVisibility});
    case CONVERT_TO_LINE_ITEM:
      return Object.assign({}, state, {productToLineItem: action.productId});
    case CHANGE_RENDERED_COMPONENT:
      return Object.assign({}, state, {componentToRender: action.component});
    case SAVE_LIST_TO_RENDER:
      return Object.assign({}, state, {listToRender: action.list});
    case TOGGLE_PRODUCT_POOL_VISIBILITY:
      return Object.assign({}, state, {isProductPoolVisible: !state.isProductPoolVisible});
    default:
      return state
  }
}

export default UIReducer