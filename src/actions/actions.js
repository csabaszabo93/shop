import {getComponent} from "../components/ComponentRegister";
import {axiosInstance as axios} from "../helpers/helpers";

export const CLEAR_SHOPPING_LISTS = "CLEAR_SHOPPING_LISTS";
export const REMOVE_SHOPPING_LIST = "REMOVE_SHOPPING_LIST";
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
export const UPDATE_LINE_ITEM = "UPDATE_LINE_ITEM";
export const DELETE_LINE_ITEMS = "DELETE_LINE_ITEMS";
export const DELETE_LINE_ITEM = "DELETE_LINE_ITEM";
export const TOGGLE_SEARCH_BAR_VISIBILITY = "TOGGLE_SEARCH_BAR_VISIBILITY";
export const SET_PRODUCT_FILTER = "SET_PRODUCT_FILTER";
export const REMOVE_PRODUCT_FILTER = "REMOVE_PRODUCT_FILTER";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const START_FETCHING = "START_FETCHING";
export const TOGGLE_LOGIN_VISIBILITY = "TOGGLE_LOGIN_VISIBILITY";
export const STORE_USER = "STORE_USER";
export const STOP_FETCHING = "STOP_FETCHING";

export function clearShoppingLists() {
  return {type: CLEAR_SHOPPING_LISTS}
}

export function removeShoppingList(shoppingListId) {
  return {type: REMOVE_SHOPPING_LIST, shoppingListId: shoppingListId}
}

export function addLineItem(lineItem, shoppingListId) {
  return {type: ADD_LINE_ITEM, lineItem: lineItem, shoppingListId: shoppingListId}
}

export function updateLineItem(lineItem) {
  return {type: UPDATE_LINE_ITEM, lineItem: lineItem}
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

export function deleteLineItems(lineItemIds, shoppingListId) {
  return {type: DELETE_LINE_ITEMS, lineItemIds: lineItemIds, shoppingListId: shoppingListId}
}

export function deleteLineItem(lineItemId, shoppingListId) {
  return {type: DELETE_LINE_ITEM, lineItemId: lineItemId, shoppingListId: shoppingListId}
}

export function toggleSearchBarVisibility() {
  return {type: TOGGLE_SEARCH_BAR_VISIBILITY}
}

export function setProductFilter(productName) {
  return {type: SET_PRODUCT_FILTER, productName: productName}
}

export function removeProductFilter() {
  return {type: REMOVE_PRODUCT_FILTER}
}

export function addProduct(product) {
  return {type: ADD_PRODUCT, product: product}
}

function startFetching() {
  return {type: START_FETCHING}
}

export function toggleLoginVisibility() {
  return {type: TOGGLE_LOGIN_VISIBILITY}
}

function storeUser(user) {
  return {type: STORE_USER, user: user}
}

function stopFetching() {
  return {type: STOP_FETCHING}
}

export function authenticateUser(credentials) {
  return function(dispatch) {
    dispatch(startFetching());
    return axios.post("users/auth", credentials)
        .then((response) => {
          axios.defaults.headers["Authentication"] = "Bearer " + response.data.token;
          dispatch(storeUser(response.data));
          dispatch(stopFetching());
        },(error) => {
          console.log(error)
        })
  }
}
