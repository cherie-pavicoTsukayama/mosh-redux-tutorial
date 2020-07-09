let lastId = 0;
export default function reducer(state = [], action) { // set state to a default [], this is called a default argument.
  if (action.type === 'bugAdded') {
    return [
      ...state, //spread operator ... makes a shallow copy of the state ojbect.
      // putting the next object right after it adds the new object after the shallow copy of the array.
      // to see how to insert an object in the middle of an array see notes in google docs REDUX in the section on "Immutability working with arrays"
      {
        id: ++lastId, //subs the last id, adds 1 then assigs the lastId var to the id property
        description: action.payload.description,
        resolved: false
      }
    ]
  } else if (action.type ==='bugRemoved') {
    return state.filter(bug => bug !== action.payload.id); //filter removes the item and returns an array without that item.
  } else {
    return state;
  }
}
