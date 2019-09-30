import API from '../../settings/Api';

export function getExperiments() {
  return API({method: 'GET', path: 'experiments', headers: {"Accept": "application/json"}})
}

export function getExperiment(id) {
  return API({method: 'GET', path: `experiment/${id}`, headers: {"Accept": "application/json"}})
}