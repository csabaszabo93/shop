import {ADD_LINE_ITEM, ADD_SHOPPING_LIST, CLEAR_SHOPPING_LIST, DELETE_LINE_ITEM} from "../actions/actions";

const defaultShoppingLists = [
  {
    id: 0,
    associatedShopId: -1,
    groupId: 20,
    ownerId: 1,
    lineItems: [],
    isArchived: false
  },
  {
    id: 1,
    associatedShopId: -1,
    groupId: 20,
    ownerId: 1,
    lineItems: [],
    isArchived: false
  }
];

function shoppingListReducer(state = defaultShoppingLists, action) {
  switch(action.type) {
    case CLEAR_SHOPPING_LIST:
      return [];
    case ADD_LINE_ITEM:
      const newState = Object.assign([], state);
      const shoppingListToChange = newState.filter(shoppingList => shoppingList.id === action.shoppingListId);
      shoppingListToChange.lineItems.push(action.lineItemId);
      return newState;
    case DELETE_LINE_ITEM:
      return state.filter(lineItem => lineItem.id !== action.lineItemId);
    case ADD_SHOPPING_LIST:
      return [
          ...state,
          action.shoppingList
      ]
    default:
      return state;
  }
}

export default shoppingListReducer;