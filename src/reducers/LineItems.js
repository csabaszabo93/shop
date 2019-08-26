import {ADD_LINE_ITEM, UPDATE_LINE_ITEM} from "../actions/actions";

const defaultLineItems = [
  {
    id: 0,
    quantity: 0,
    isArchived: false,
    product: 11
  }
];

function lineItemsReducer(state = defaultLineItems, action) {
  switch(action.type){
    case ADD_LINE_ITEM:
      return [
          ...state,
          action.lineItem
      ];
    case UPDATE_LINE_ITEM:
      const newState = Object.assign([], state);
      const lineItemToUpdate = newState.filter(lineItem => lineItem.product === action.lineItem.product)[0];
      lineItemToUpdate.quantity += action.lineItem.quantity;
      return newState;
    default:
      return state
  }
}

export default lineItemsReducer;