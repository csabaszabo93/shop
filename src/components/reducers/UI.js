import {TOGGLE_QUANTITY_MODAL_VISIBILITY, CONVERT_TO_LINE_ITEM} from "../actions/actions";

const defaultUIState = {
  quantityModalVisibility: false,
  productToLineItem: null
};

function UIReducer(state = defaultUIState, action){
  switch(action.type) {
    case TOGGLE_QUANTITY_MODAL_VISIBILITY:
      return Object.assign({}, state, {quantityModalVisibility: !state.quantityModalVisibility});
    case CONVERT_TO_LINE_ITEM:
      return Object.assign({}, state, {productToLineItem: action.productId});
    default:
      return state
  }
}

export default UIReducer