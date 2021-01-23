import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

// ToDo 컴포넌트에 onBtnClick 넣을 수 있게됨
function mapDispatchToProps(dispatch, ownProps) {
  // ownProps (component props받기))
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ToDo);