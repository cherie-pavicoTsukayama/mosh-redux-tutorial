import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer); //createStore is a higher order function because it takes a function as an argument.

export default store;
