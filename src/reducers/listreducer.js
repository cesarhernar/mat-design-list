import initialState from './../../state.js';
import * as types from './../actions/actionTypes';

export default function listReducer(state = initialState, action) { 
  switch (action.type) {
    case types.SHOW_MORE:
      let advocateList = [...state.advocates];
      advocateList[action.advocateIndex].showFullBio = true;
      return Object.assign({}, state, { advocates: advocateList });
    case types.SHOW_LESS:
      let advocates = [...state.advocates];
      advocates[action.advocateIndex].showFullBio = false;
      return Object.assign({}, state, {advocates});
    default:
      return state;
  }
}
