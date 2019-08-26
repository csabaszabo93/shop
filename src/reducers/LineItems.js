import {ADD_LINE_ITEM, DELETE_LINE_ITEMS, DELETE_LINE_ITEM, UPDATE_LINE_ITEM} from "../actions/actions";

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
    case DELETE_LINE_ITEMS:
      return state.filter(lineItem => !action.lineItemIds.includes(lineItem.id));
    case DELETE_LINE_ITEM:
      return state.filter(lineItem => lineItem.id !== action.lineItemId);
    default:
      return state
  }
}

export default lineItemsReducer;