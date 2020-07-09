import store from './store';

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
  //this is where you would put
  //the code for updating the dom if you're working with vanilla javascript.
  //Or rerender if you're working in react.
})

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1"
  }
})

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1
  }
})

console.log(store.getState())
