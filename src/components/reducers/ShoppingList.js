import {ADD_SHOPPING_LIST_ITEM, CLEAR_SHOPPING_LIST, DELETE_SHOPPING_LIST_ITEM} from "../actions/actions";

const defaultShoppingList = [
  {
    id: 1,
    quantity: 3,
    product: 4,
    completed: false
  },
  {
    id: 2,
    quantity: 1,
    product: 7,
    completed: false
  }
];

function shoppingListReducer(state = defaultShoppingList, action) {
  switch(action.type) {
    case CLEAR_SHOPPING_LIST:
      return [];
    case ADD_SHOPPING_LIST_ITEM:
      const filteredLineItems = state.filter(lineItem => lineItem.product === action.product);
      if(filteredLineItems.length === 0) {
        return [
          ...state,
          {
            quantity: action.quantity,
            product: action.product
          }
        ];
      } else {
        const lineItem = filteredLineItems[0];
        const newState = Object.assign([], state);
        newState.filter(item => item.product === lineItem.product)[0].quantity += action.quantity;
        return newState;
      }
    case DELETE_SHOPPING_LIST_ITEM:
      return state.filter(lineItem => lineItem.id !== action.lineItemId);
    default:
      return state;
  }
}

export default shoppingListReducer;