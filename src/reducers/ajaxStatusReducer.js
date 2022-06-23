import * as types from '../actions/actionTypes';
//import initialState from './initialState';


function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

// Initially, "state = 0" used to be "state = initialState.ajaxCallsInProgress"
export default function ajaxStatusReducer(state = 0, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }


  return state;
}
