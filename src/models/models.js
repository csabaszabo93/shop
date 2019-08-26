export const ShoppingListModel = {
  id: 420,
  associatedShopId: -1,
  groupId: 20,
  ownerId: 1,
  lineItems: [],
  isArchived: false
};

export const ShopModel = {
  id: 420,
  name: "",
  address: "",
  openingHours: [],
  open: true,
  tags: []
};

export const ProductModel = {
  id: 420,
  name: "",
  packaging: "",
  category: null,
  pictureUrl: null,
  tags: []
};

export const LineItemModel = {
  id: 420,
  quantity: null,
  isArchived: false,
  product: null
};

