import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({ toDos }) {
  console.log('toDos', toDos);
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText('');
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  /**
   * state = redux store의 default state,
   * ownProps = Home으로 넘어온 Props (이전 component)
   *  */
  console.log(state, ownProps);
  return { toDos: state }; // Home으로 보내는 props에 추가됨
}

export default connect(mapStateToProps)(Home);
