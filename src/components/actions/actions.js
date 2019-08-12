export const CLEAR_SHOPPING_LIST = "CLEAR_SHOPPING_LIST";
export const DELETE_SHOPPING_LIST_ITEM = "DELETE_SHOPPING_LIST_ITEM";
export const ADD_SHOPPING_LIST_ITEM = "ADD_SHOPPING_LIST_ITEM";
export const CLEAR_SHOP_LIST = "CLEAR_SHOP_LIST";
export const DELETE_SHOP_LIST_ITEM = "DELETE_SHOP_LIST_ITEM";
export const ADD_SHOP = "ADD_SHOP";
export const TOGGLE_QUANTITY_MODAL_VISIBILITY = "TOGGLE_QUANTITY_MODAL_VISIBILITY";

export function clearShoppingList() {
  return {type: CLEAR_SHOPPING_LIST}
}

export function deleteShoppingListItem(lineItemId) {
  return {type: DELETE_SHOPPING_LIST_ITEM, lineItemId: lineItemId}
}

export function addShoppingListItem(lineItem) {
  return {type: ADD_SHOPPING_LIST_ITEM, lineItem: lineItem}
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

export function toggleQuantityModalVisibility() {
  return {type: TOGGLE_QUANTITY_MODAL_VISIBILITY}
}