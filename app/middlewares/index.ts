// tslint:disable no-string-literal

import {
//   applyMiddleware,
  compose,
  createStore,
 } from 'redux'
// import { createEpicMiddleware } from 'redux-observable'
import {
  autoRehydrate,
} from 'redux-persist'
import reducer from '../reducers'


export const whitelist = [
  'splash',
  'SearchHistory',
  'setting',
  'compareProducts',
]

declare const __DEV__: boolean

const composeAction = __DEV__ && global['reduxNativeDevToolsCompose'] ? global['reduxNativeDevToolsCompose'] : compose

const enhancer = composeAction(
  autoRehydrate(),
//   applyMiddleware(
//     createEpicMiddleware(epics),
//   ),
)

const store = createStore(reducer, undefined, enhancer)

export default store
