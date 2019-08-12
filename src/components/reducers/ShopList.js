import {
  CLEAR_SHOPPING_LIST,
  ADD_SHOPPING_LIST_ITEM,
  DELETE_SHOPPING_LIST_ITEM
} from "../actions/actions";

const defaultShopList = [
  { id: 1, name: 'FMCG', },
  {  id: 2, name: 'Travel',},
  {  id: 3, name: 'Food',  }
];

function shopListReducer(state = defaultShopList, action) {
  switch(action.type) {
    case CLEAR_SHOPPING_LIST:
      return [];
    case ADD_SHOPPING_LIST_ITEM:
      return [
          ...state,
          action.lineItem
      ];
    case DELETE_SHOPPING_LIST_ITEM:
      return state.filter(lineItem => lineItem.id !== action.lineItemId);
    default:
      return state;
  }
}

export default shopListReducer