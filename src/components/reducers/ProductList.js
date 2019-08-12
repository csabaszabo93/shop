// import {ADD_SHOPPING_LIST_ITEM, CLEAR_SHOPPING_LIST, DELETE_SHOPPING_LIST_ITEM} from "../actions/actions";

const defaultProductList = [
  {
    id: 11,
    name: "milk",
    packaging: "bottle",
    category: null,
    pictureUrl: null,
    tags: []
  },
  {
    id: 7,
    name: "salami",
    packaging: "box",
    category: null,
    pictureUrl: null,
    tags: []
  },
  {
    id: 4,
    name: "apple",
    packaging: "piece",
    category: null,
    pictureUrl: null,
    tags: []
  },
  {
    id: 22,
    name: "water",
    packaging: "bottle",
    category: null,
    pictureUrl: null,
    tags: []
  },
  {
    id: 27,
    name: "cheese",
    packaging: "box",
    category: null,
    pictureUrl: null,
    tags: []
  }
];

function productListReducer(state = defaultProductList, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default productListReducer;