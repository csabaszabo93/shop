import Welcome from "../welcome/Welcome";
import React from "react";
import ShopListContainer from "../containers/ShopList";
import AddShopContainer from "../containers/AddShopContainer";
import QuantityModal from "../product-list/QuantityModal";
import ProductListContainer from "../containers/ProductList";
import ShoppingListContainer from "../containers/ShoppingList";

export const menuTitleToComponent = {
  "welcome": <Welcome/>,
  "shops": [<ShopListContainer/>, <AddShopContainer/>],
  "add product to list": [<QuantityModal/>, <ProductListContainer/>],
  "latest shopping list": <ShoppingListContainer/>
};