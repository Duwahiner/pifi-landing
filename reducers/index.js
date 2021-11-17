const GET_URL_IMG_SLIDER = 'GET_URL_IMG_SLIDER'
const GET_VALUE_INPUT = 'GET_SEARCH_VALUE'
const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS'
const GET_SHOW_ALERT = 'GET_SHOW_ALERT'
const GET_SHOW_SPINNER = 'GET_SHOW_SPINNER'
const GET_ERROR_REQUEST = 'GET_ERROR_REQUEST'
const GET_USER = 'GET_USER'

export const getUrlImgSlider = (data = []) => {
  return {
    type: GET_URL_IMG_SLIDER,
    payload: { data }
  }
}

export const getValueInput = (text = '') => {
  return {
    type: GET_VALUE_INPUT,
    payload: { text }
  }
}

export const getNotifications = (action = false) => {
  return {
    type: GET_NOTIFICATIONS,
    payload: { action }
  }
}


export const getShowAlert = (action = false) => {
  return {
    type: GET_SHOW_ALERT,
    payload: { action }
  }
}

export const getShowSpinner = (action = false) => {
  return {
    type: GET_SHOW_SPINNER,
    payload: { action }
  }
}

export const getErrorRequest = (request = false) => {
  return {
    type: GET_ERROR_REQUEST,
    payload: { request }
  }
}

export const getUser = (data = {
  data:  {}
}) => {
  return {
    type: GET_USER,
    payload: { data }
  }
}

export const initialState = {
  valueInput: '',
  showAlert: false,
  showNotications: false,
  showSpinner: false,
  errorRequets: false,

  data: {
    urlImgSlider: [],
    user: {
      data: {}
    }
   }
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_URL_IMG_SLIDER:
      return Object.assign({},
        state, { 
          data:  {
            ...state.data,
            urlImgSlider: payload.data
          }
        })

    case GET_VALUE_INPUT:
      return Object.assign({},
        state, { 
          valueInput:  payload.text 
        })

    case GET_NOTIFICATIONS:
      return Object.assign({},
        state, {
          showNotications:  payload.action
        })

    case GET_SHOW_ALERT:
      return Object.assign({},
        state, {
          showAlert:  payload.action
        })

    case GET_SHOW_SPINNER:
      return Object.assign({},
        state, { 
          showSpinner:  payload.action
        })

    case GET_ERROR_REQUEST:
      return Object.assign({},
        state, {
          errorRequets:  payload.request
        })

    case GET_USER:
      return Object.assign({},
        state, { 
          data:  {
            ...state.data,
            user: {...payload.data}
          }
        })

    default:
      return state
  }
}

