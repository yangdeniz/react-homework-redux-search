import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import changeSearchEpic from './epics/change-search-epic';
import searchSkillsEpic from './epics/search-skills-epic';
import skillsReducer from './reducers/skills-reducer';

const reducer = combineReducers({
  skills: skillsReducer
});

const epic = combineEpics(
  changeSearchEpic,
  searchSkillsEpic
);

const epicMiddleware = createEpicMiddleware();

const store = legacy_createStore(reducer, compose(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);
export default store;