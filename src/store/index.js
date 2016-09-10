import { createStore, combineReducers } from 'redux';

import ui from './ui';

const reducer = combineReducers({ ...ui.reducers });

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

export default store;