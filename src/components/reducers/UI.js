import {
  TOGGLE_QUANTITY_MODAL_VISIBILITY,
  CONVERT_TO_LINE_ITEM,
  CHANGE_RENDERED_COMPONENT,
  TOGGLE_MENU_VISIBILITY, SAVE_LIST_TO_RENDER
} from "../actions/actions";
import {getComponent, WELCOME} from "../ComponentRegister";

const defaultUIState = {
  quantityModalVisibility: false,
  productToLineItem: null,
  componentToRender: getComponent(WELCOME),
  menuVisibility: false,
  listToRender: [],
};

function UIReducer(state = defaultUIState, action){
  switch(action.type) {
    case TOGGLE_QUANTITY_MODAL_VISIBILITY:
      return Object.assign({}, state, {quantityModalVisibility: !state.quantityModalVisibility});
    case TOGGLE_MENU_VISIBILITY:
      return Object.assign({}, state, {menuVisibility: !state.menuVisibility});
    case CONVERT_TO_LINE_ITEM:
      return Object.assign({}, state, {productToLineItem: action.productId});
    case CHANGE_RENDERED_COMPONENT:
      return Object.assign({}, state, {componentToRender: action.component});
    case SAVE_LIST_TO_RENDER:
      return Object.assign({}, state, {listToRender: action.list});
    default:
      return state
  }
}

export default UIReducer