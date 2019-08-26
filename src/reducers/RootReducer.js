import shoppingListReducer from './ShoppingLists'
import shopListReducer from './ShopList'
import productListReducer from "./ProductList";
import UIReducer from "./UI";
import lineItemsReducer from "./LineItems";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  shoppingLists: shoppingListReducer,
  shops: shopListReducer,
  products: productListReducer,
  lineItems: lineItemsReducer,
  UIState: UIReducer
});

export default rootReducer