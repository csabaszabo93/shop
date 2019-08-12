import {combineReducers} from "redux";
import shoppingListReducer from '../reducers/ShoppingList'
import shopListReducer from '../reducers/ShopList'
import productListReducer from "./ProductList";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  shops: shopListReducer,
  products: productListReducer
});

export default rootReducer