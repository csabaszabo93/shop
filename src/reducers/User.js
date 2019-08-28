import {STORE_USER} from "../actions/actions";

const defaultState = null;

function UserReducer(state = defaultState, action) {
  switch(action.type) {
    case STORE_USER:
      return {
        ...action.user
      };
    default:
      return state;
  }
}

export default UserReducer;