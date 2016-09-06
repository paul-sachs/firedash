import { createStore, combineReducers } from 'redux';

import forms from './forms';
import ui from './ui';

const reducer = combineReducers({ ...ui.reducers, ...forms.reducers });

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

export default store;