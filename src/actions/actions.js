import {getComponent} from "../components/ComponentRegister";

export const CLEAR_SHOPPING_LIST = "CLEAR_SHOPPING_LIST";
export const DELETE_LINE_ITEM = "DELETE_LINE_ITEM";
export const ADD_LINE_ITEM = "ADD_LINE_ITEM";
export const CLEAR_SHOP_LIST = "CLEAR_SHOP_LIST";
export const DELETE_SHOP_LIST_ITEM = "DELETE_SHOP_LIST_ITEM";
export const ADD_SHOP = "ADD_SHOP";
export const TOGGLE_QUANTITY_FORM_VISIBILITY = "TOGGLE_QUANTITY_FORM_VISIBILITY";
export const CONVERT_TO_LINE_ITEM = "CONVERT_TO_LINE_ITEM";
export const CHANGE_RENDERED_COMPONENT = "CHANGE_RENDERED_COMPONENT";
export const TOGGLE_MENU_VISIBILITY = "TOGGLE_MENU_VISIBILITY";
export const SAVE_LIST_TO_RENDER = "SAVE_LIST_TO_RENDER";
export const ADD_SHOPPING_LIST = "ADD_SHOPPING_LIST";
export const TOGGLE_PRODUCT_POOL_VISIBILITY = "TOGGLE_PRODUCT_POOL_VISIBILITY";
export const SAVE_SELECTED_SHOPPING_LIST = "SAVE_SELECTED_SHOPPING_LIST";

export function clearShoppingList() {
  return {type: CLEAR_SHOPPING_LIST}
}

export function deleteShoppingListItem(lineItemId) {
  return {type: DELETE_LINE_ITEM, lineItemId: lineItemId}
}

export function addLineItem(lineItem, shoppingListId) {
  return {type: ADD_LINE_ITEM, lineItem: lineItem, shoppingListId: shoppingListId}
}

export function clearShopList() {
  return {type: CLEAR_SHOP_LIST}
}

export function deleteShopListItem(shopId) {
  return {type: DELETE_SHOP_LIST_ITEM, shopId: shopId}
}

export function addShop(shop) {
  return {type: ADD_SHOP, shop: shop}
}

export function toggleQuantityFormVisibility() {
  return {type: TOGGLE_QUANTITY_FORM_VISIBILITY}
}

export function convertToLineItem(productId) {
  return {type: CONVERT_TO_LINE_ITEM, productId: productId}
}

export function renderComponent(component) {
  return {type: CHANGE_RENDERED_COMPONENT, component: getComponent(component)}
}

export function toggleMenuVisibility() {
  return {type: TOGGLE_MENU_VISIBILITY}
}

export function saveListToRender(list) {
  return {type: SAVE_LIST_TO_RENDER, list: list}
}

export function addShoppingList(shoppingList) {
  return {type: ADD_SHOPPING_LIST, shoppingList: shoppingList}
}

export function toggleProductPoolVisibility() {
  return {type: TOGGLE_PRODUCT_POOL_VISIBILITY}
}

export function saveSelectedShoppingList(id) {
  return {type: SAVE_SELECTED_SHOPPING_LIST, id: id}
}
