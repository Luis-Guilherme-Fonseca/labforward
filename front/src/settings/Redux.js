import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import experimentReducer from '../containers/seriesAnalysis/reducers'

export default function ReduxSettings({children}) {
  const store = createStore(experimentReducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}