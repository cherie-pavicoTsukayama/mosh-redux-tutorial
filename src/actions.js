import * as actions from './actionTypes';



// export function bugAdded(description){
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1"
//     }
//   }
// }

//the above code can also be written as an arrow function
export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description
  }
})

// export function bugResolved(id) {
//   return {
//     type: actions.BUG_RESOLVED,
//     payload: {
//       id: 1
//     }
//   }
// }

//the above code can also be written as an arrow function
export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id
  }
})
