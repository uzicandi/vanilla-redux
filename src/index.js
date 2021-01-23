import { createStore } from 'redux';
// store = data를 넣는곳 = state 넣는곳을 생성함.
// state ? 어플리케이션에서 바뀌는 data

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (state = 0) => {
  /**
   * = reducer
   * 1. 데이터를 바꿔줌 (modify state)
   * 2. return하는 것은 우리 어플리케이션의 데이터임
   * 3. 데이터를 바꿀 수 있는 유일한 함수 => 데이터가 한 곳에 있게 됨
   */
  return state;
};
const countStore = createStore(countModifier); // createStore는 Reducer가 필요함

console.log(countStore.getState()); // hello (reducer return)
