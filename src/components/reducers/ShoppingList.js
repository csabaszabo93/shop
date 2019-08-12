import {
  CLEAR_SHOP_LIST,
  ADD_SHOP,
  DELETE_SHOP_LIST_ITEM
} from "../actions/actions";

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
    case CLEAR_SHOP_LIST:
      return [];
    case ADD_SHOP:
      return [
          ...state,
          action.shop
      ];
    case DELETE_SHOP_LIST_ITEM:
      return state.filter(shop => shop.id !== action.shopId);
    default:
      return state;
  }
}

export default shoppingListReducer;