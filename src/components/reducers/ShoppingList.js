import {ADD_SHOPPING_LIST_ITEM, CLEAR_SHOPPING_LIST, DELETE_SHOPPING_LIST_ITEM} from "../actions/actions";

const defaultShoppingList = [
  {
    id: 1,
    product: 0,
    completed: false
  },
  {
    id: 2,
    product: 1,
    completed: false
  }
];

function shoppingListReducer(state = defaultShoppingList, action) {
  switch(action.type) {
    case CLEAR_SHOPPING_LIST:
      return [];
    case ADD_SHOPPING_LIST_ITEM:
      return [
          ...state,
        {
          quantity: action.quantity,
          product: action.product
        }
      ];
    case DELETE_SHOPPING_LIST_ITEM:
      return state.filter(lineItem => lineItem.id !== action.lineItemId);
    default:
      return state;
  }
}

export default shoppingListReducer;