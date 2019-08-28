import {REQUEST_USER_AUTH} from "../actions/actions";

const defaultState = null;

function UserReducer(state = defaultState, action) {
  switch(action.type) {
    case REQUEST_USER_AUTH:
      return state;
    default:
      return state;
  }
}

export default UserReducer;