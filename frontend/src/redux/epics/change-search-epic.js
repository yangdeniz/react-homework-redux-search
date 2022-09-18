import { ofType } from 'redux-observable';
import { map, filter, debounceTime } from 'rxjs/operators';
import { ACTIONS } from '../actions/actions'
import { searchSkillsRequest } from '../actions/action-creators';

const changeSearchEpic = (action$) => {
  return action$.pipe(
    ofType(ACTIONS.CHANGE_SEARCH_FIELD),
    map(request => request.payload.search.trim()),
    filter(query => !!query),
    debounceTime(100),
    map(query => searchSkillsRequest(query))
  );
};

export default changeSearchEpic;