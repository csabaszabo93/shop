import {ADD_SHOP, CLEAR_SHOP_LIST, DELETE_SHOP_LIST_ITEM} from "../actions/actions";

const defaultShopList = [
  { id: 1, name: 'FMCG', },
  {  id: 2, name: 'Travel',},
  {  id: 3, name: 'Food',  }
];

function shopListReducer(state = defaultShopList, action) {
  switch(action.type) {
    case CLEAR_SHOP_LIST:
      return [];
    case ADD_SHOP:
      return [
          ...state,
          {
            name: action.shop
          }
      ];
    case DELETE_SHOP_LIST_ITEM:
      return state.filter(shop => shop.id !== action.shopId);
    default:
      return state;
  }
}

export default shopListReducer