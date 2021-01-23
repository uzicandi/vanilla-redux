import { createStore } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

console.log(addToDo, deleteToDo);

/** createReducer를 사용하면 state를 mutate하기 쉬워짐 (immer사용됨)
 * 1. state를 mutate 하거나 (return 없이)
 * 2. new state를 보내거나 (return 추가)
 * */

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload)
});

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

//const store = createStore(reducer);
const store = configureStore({ reducer }); // ReduxToolkit 안써도 Redux Developer Tool을 사용하게 해줌!

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
