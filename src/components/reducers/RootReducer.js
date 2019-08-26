import {combineReducers} from "redux";
import shoppingListReducer from './ShoppingLists'
import shopListReducer from '../reducers/ShopList'
import productListReducer from "./ProductList";
import UIReducer from "./UI";
import lineItemsReducer from "./LineItems";

const rootReducer = combineReducers({
  shoppingLists: shoppingListReducer,
  shops: shopListReducer,
  products: productListReducer,
  lineItems: lineItemsReducer,
  UIState: UIReducer
});

export default rootReducer