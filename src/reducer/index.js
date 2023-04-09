import {CLEAR_NOTIFICATOR, GET_RESOURSE} from "../actions";

const initialState = {
  title: "",
  description: "",
  background: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESOURSE:
      return {
        ...state,
        ...action.payload
      }
    case CLEAR_NOTIFICATOR:
      return {
        ...state,
        ...initialState
      }

    default:
      return  state ;
  }
};

export default reducer