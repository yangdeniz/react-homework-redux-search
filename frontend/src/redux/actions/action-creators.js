import { ACTIONS } from './actions';

export const searchSkillsRequest = search => ({
  type: ACTIONS.SEARCH_SKILLS_REQUEST,
  payload: {search}
});

export const searchSkillsFailure = error => ({
  type: ACTIONS.SEARCH_SKILLS_FAILURE,
  payload: {error}
});

export const searchSkillsSuccess = items => ({
  type: ACTIONS.SEARCH_SKILLS_SUCCESS,
  payload: {items}
});

export const changeSearchField = search => ({
  type: ACTIONS.CHANGE_SEARCH_FIELD,
  payload: {search}
});