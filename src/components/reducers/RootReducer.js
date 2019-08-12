import {combineReducers} from "redux";
import shoppingListReducer from '../reducers/ShoppingList'
import shopListReducer from '../reducers/ShopList'
import productListReducer from "./ProductList";
import UIReducer from "./UI";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  shops: shopListReducer,
  products: productListReducer,
  UIState: UIReducer
});

export default rootReducer