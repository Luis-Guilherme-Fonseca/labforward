import { GET_EXPERIMENT_LIST, GET_EXPERIMENT_DATA, GET_EXPERIMENT_ERROR } from "../actions/types"

const initialState = {
  list: [],
  currentExperiment: {
    id: '',
    name: '',
    data: []
  }
}

export default function experimentReducer(state = initialState, {type, payload}) {
  switch(type) {
    case GET_EXPERIMENT_LIST:
      return {
        ...state,
        list: payload.list
      }
    case GET_EXPERIMENT_DATA:
      return {
        ...state,
        currentExperiment: {...payload}
      }
    case GET_EXPERIMENT_ERROR:
      return {
        ...state,
        error: 'Something went wrong while trying to retrieve your data, please try again later.'
      }
    default:
      return state
  }
}