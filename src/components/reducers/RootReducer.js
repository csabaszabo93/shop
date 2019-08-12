import {combineReducers} from "redux";
import shoppingListReducer from '../reducers/ShoppingList'
import shopListReducer from '../reducers/ShopList'

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  shops: shopListReducer
});

export default rootReducer