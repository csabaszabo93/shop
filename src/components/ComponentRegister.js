import Welcome from "./welcome/Welcome";
import React from "react";
import ShopListContainer from "../containers/ShopList";
import QuantityForm from "./product-list/QuantityForm";
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
  SHOPS: <ShopListContainer/>,
  PRODUCT_LIST: [<QuantityForm/>, <ProductListContainer/>],
  SHOPPING_LISTS: <ShoppingListsContainer/>,
  LATEST_SHOPPING_LIST: <ShoppingListContainer/>,
  LINE_ITEMS: <LineItemsContainer/>
};

const componentsInMenu = [
  WELCOME,
  SHOPS,
  SHOPPING_LISTS,
  LATEST_SHOPPING_LIST
]

export function getComponent(key) {
  return registeredComponents[key];
}

export function getComponentKeys() {
  const returnList = [];
  for(const key of componentsInMenu) {
    returnList.push(
      {
        key: key,
        title: key.toLowerCase().replace(/_/g, " ")
      }
    )
  }
  return returnList
}