const defaultLineItems = [
  {
    id: 0,
    quantity: 0,
    isArchived: false,
    product: 11
  }
];

function lineItemsReducer(state = defaultLineItems, action) {
  switch(action.type){
    default:
      return state
  }
}

export default lineItemsReducer;