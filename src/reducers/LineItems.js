import {ADD_LINE_ITEM, ADD_SHOP} from "../actions/actions";

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
    default:
      return state
  }
}

export default lineItemsReducer;