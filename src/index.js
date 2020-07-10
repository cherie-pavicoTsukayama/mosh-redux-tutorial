import store from './store';
import { bugAdded } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
  //this is where you would put
  //the code for updating the dom if you're working with vanilla javascript.
  //Or rerender if you're working in react.
})

store.dispatch(bugAdded('Bug 1'))

unsubscribe(); // calling unsubscribe here will stop the subscription. It won't run subscribe for every dispatch just for the ones above unsubscribe

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1
  }
})

console.log(store.getState())
