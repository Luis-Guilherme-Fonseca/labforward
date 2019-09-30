import { GET_EXPERIMENT_DATA, GET_EXPERIMENT_LIST, GET_EXPERIMENT_ERROR } from './types'
import { getExperiment, getExperiments } from '../services'

export function getExperimentData(id) {
  return async (dispatch) => {
    try {
      const experiment = await getExperiment(id)
      const experimentData = experiment.peaks.map((peak, index) => ({peak: peak, raw: experiment.raw[index]}))
      dispatch({type: GET_EXPERIMENT_DATA, payload: {id: experiment.id, name: experiment.name, data: experimentData}})
    } catch {
      dispatch({type: GET_EXPERIMENT_ERROR})
    }
  }
}

export function getExperimentList() {
  return async (dispatch) => {
    try {
      const experiments = await getExperiments()
      dispatch({type: GET_EXPERIMENT_LIST, payload: {list: experiments}})
    } catch {
      dispatch({type: GET_EXPERIMENT_ERROR})
    }
  }
}