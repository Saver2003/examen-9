import axios from '../axios-contacts';

export const FETCH_CONTACT_LIST_REQUEST = 'FETCH_CONTACT_LIST_REQUEST';
export const FETCH_CONTACT_LIST_SUCCESS = 'FETCH_CONTACT_LIST_SUCCESS';
export const FETCH_CONTACT_LIST_ERROR = 'FETCH_CONTACT_LIST_ERROR';
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';

export const fetchContactListRequest = () => {
  return {type: FETCH_CONTACT_LIST_REQUEST};
};

export const fetchContactListSuccess = () => {
  return {type: FETCH_CONTACT_LIST_SUCCESS};
};

export const fetchContactListError = () => {
  return {type: FETCH_CONTACT_LIST_ERROR};
};

export const addNewContact = () => {
  return (dispatch, getState) => {
    dispatch(fetchContactListRequest());
    axios.post('/contacts.json',
      {
        name: getState().name,
        phone: getState().phone,
        email: getState().email,
        photo: getState().photo
      }).then(response => {
        dispatch(fetchContact());
    })
  }
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
