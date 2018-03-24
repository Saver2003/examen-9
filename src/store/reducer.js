import {FETCH_CONTACT_LIST_ERROR, FETCH_CONTACT_LIST_REQUEST, FETCH_CONTACT_LIST_SUCCESS} from "./actions";

const initialState = {
  name: '',
  phone: '',
  email: '',
  photo: '',
  contacts: {},
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACT_LIST_REQUEST:
      return {...state, loading: true};
    case FETCH_CONTACT_LIST_SUCCESS:
      return {...state, contacts: action.name};
    case FETCH_CONTACT_LIST_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default reducer;