import {
  ADD_LINE_ITEM,
  ADD_SHOPPING_LIST,
  CLEAR_SHOPPING_LISTS,
  DELETE_LINE_ITEM, DELETE_LINE_ITEMS,
  REMOVE_SHOPPING_LIST
} from "../actions/actions";

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
  const newState = Object.assign([], state);
  let shoppingListToUpdate;
  switch(action.type) {
    case CLEAR_SHOPPING_LISTS:
      return [];
    case ADD_LINE_ITEM:
      const selectedShoppingList = newState.filter(shoppingList => shoppingList.id === action.shoppingListId)[0];
      selectedShoppingList.lineItems.push(action.lineItem.id);
      return newState;
    case REMOVE_SHOPPING_LIST:
      return state.filter(shoppingList => shoppingList.id !== action.shoppingListId);
    case ADD_SHOPPING_LIST:
      return [
          ...state,
          action.shoppingList
      ];
    case DELETE_LINE_ITEM:
      shoppingListToUpdate = newState.filter(shoppingList => shoppingList.id === action.shoppingListId)[0];
      const idx = shoppingListToUpdate.lineItems.indexOf(action.lineItemId);
      shoppingListToUpdate.lineItems.splice(idx, 1);
      return newState;
    case DELETE_LINE_ITEMS:
      shoppingListToUpdate = newState.filter(shoppingList => shoppingList.id === action.shoppingListId)[0];
      shoppingListToUpdate.lineItems = [];
      return newState;
    default:
      return state;
  }
}

export default shoppingListReducer;