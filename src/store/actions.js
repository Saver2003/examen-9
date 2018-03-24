import axios from '../axios-contacts';

export const FETCH_CONTACT_LIST_REQUEST = 'FETCH_CONTACT_LIST_REQUEST';
export const FETCH_CONTACT_LIST_SUCCESS = 'FETCH_CONTACT_LIST_SUCCESS';
export const FETCH_CONTACT_LIST_ERROR = 'FETCH_CONTACT_LIST_ERROR';
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';

export const addNewContact = (event, contacts) => {
  return (dispatch) => {
    dispatch(fetchContactListRequest());
    axios.post('/contacts.json', {contacts}).then(() => {
        dispatch(fetchContactListSuccess());
    })
  }
};

export const fetchContactListRequest = () => {
  return {type: FETCH_CONTACT_LIST_REQUEST};
};

export const fetchContactListSuccess = () => {
  return {type: FETCH_CONTACT_LIST_SUCCESS};
};

export const fetchContactListError = () => {
  return {type: FETCH_CONTACT_LIST_ERROR};
};

export const fetchContact = () => {
  return (dispatch) => {
    dispatch(fetchContactListRequest());
    axios.get('/contacts.json').then(response => {
      dispatch(fetchContactListSuccess(response.data));
    }, error => {
      dispatch(fetchContactListError(error))
    })
  }
};
