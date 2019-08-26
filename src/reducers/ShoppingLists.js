import {ADD_LINE_ITEM, ADD_SHOPPING_LIST, CLEAR_SHOPPING_LISTS, REMOVE_SHOPPING_LIST} from "../actions/actions";

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
    case CLEAR_SHOPPING_LISTS:
      return [];
    case ADD_LINE_ITEM:
      const newState = Object.assign([], state);
      const selectedShoppingList = newState.filter(shoppingList => shoppingList.id === action.shoppingListId)[0];
      selectedShoppingList.lineItems.push(action.lineItem.id);
      return newState;
    case REMOVE_SHOPPING_LIST:
      return state.filter(shoppingList => shoppingList.id !== action.shoppingListId);
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