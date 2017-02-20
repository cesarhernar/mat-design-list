import * as types from './actionTypes';

export function showMoreBio(advocateIndex) {
  return {
    type: types.SHOW_MORE,
    advocateIndex
  }
}

export function showLessBio(advocateIndex) {
  return {
    type: types.SHOW_LESS,
    advocateIndex
  }
 }