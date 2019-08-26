import Welcome from "./welcome/Welcome";
import React from "react";
import ShopListContainer from "../containers/ShopList";
import AddShopContainer from "../containers/AddShopContainer";
import QuantityModal from "./product-list/QuantityModal";
import ProductListContainer from "../containers/ProductList";
import ShoppingListsContainer, {ShoppingListContainer} from "../containers/ShoppingList";
import LineItemsContainer from "../containers/LineItemList";

export const WELCOME = "WELCOME";
export const SHOPS = "SHOPS";
export const PRODUCT_LIST = "PRODUCT_LIST";
export const SHOPPING_LISTS = "SHOPPING_LISTS";
export const LATEST_SHOPPING_LIST = "LATEST_SHOPPING_LIST";
export const LINE_ITEMS = "LINE_ITEMS";


const registeredComponents = {
  WELCOME: <Welcome/>,
  SHOPS: [<ShopListContainer/>, <AddShopContainer/>],
  PRODUCT_LIST: [<QuantityModal/>, <ProductListContainer/>],
  SHOPPING_LISTS: <ShoppingListsContainer/>,
  LATEST_SHOPPING_LIST: <ShoppingListContainer/>,
  LINE_ITEMS: <LineItemsContainer/>
};

export function getComponent(key) {
  return registeredComponents[key];
}

export function getComponentKeys() {
  const returnList = [];
  for(const key of Object.keys(registeredComponents)) {
    returnList.push(
      {
        key: key,
        title: key.toLowerCase().replace(/_/g, " ")
      }
    )
  }
  return returnList
}