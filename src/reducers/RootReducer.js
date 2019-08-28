import shoppingListReducer from './ShoppingLists'
import shopListReducer from './ShopList'
import productListReducer from "./ProductList";
import UIReducer from "./UI";
import lineItemsReducer from "./LineItems";
import {combineReducers} from "redux";
import selectedResourcesReducer from "./SelectedResources";
import UserReducer from "./User";

const rootReducer = combineReducers({
  shoppingLists: shoppingListReducer,
  shops: shopListReducer,
  products: productListReducer,
  lineItems: lineItemsReducer,
  UIState: UIReducer,
  selectedResources: selectedResourcesReducer,
  user: UserReducer,
});

export default rootReducer