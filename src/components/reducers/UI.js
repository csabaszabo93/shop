import {TOGGLE_QUANTITY_MODAL_VISIBILITY} from "../actions/actions";

const defaultUIState = {
  quantityModalVisibility: false
};

function UIReducer(state = defaultUIState, action){
  switch(action.type) {
    case TOGGLE_QUANTITY_MODAL_VISIBILITY:
      return Object.assign({}, state, {quantityModalVisibility: !state.quantityModalVisibility});
    default:
      return state
  }
}

export default UIReducer