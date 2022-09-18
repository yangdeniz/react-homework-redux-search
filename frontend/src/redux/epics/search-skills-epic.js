import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, filter, switchMap, catchError, retry, takeUntil } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ACTIONS } from '../actions/actions';
import { searchSkillsFailure, searchSkillsSuccess } from '../actions/action-creators';

const searchSkillsEpic = (action$) => {
  const cancel$ = action$.pipe(
    ofType(ACTIONS.CHANGE_SEARCH_FIELD),
    map(request => request.payload.search.trim()),
    filter(query => !query)
  );

  return action$.pipe(
    ofType(ACTIONS.SEARCH_SKILLS_REQUEST),
    map(request => request.payload.search),
    map(query => new URLSearchParams({ q: query })),
    switchMap(searchParams => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${searchParams}`).pipe(
      retry(3),
      map(response => searchSkillsSuccess(response)),
      catchError(error => of(searchSkillsFailure(error))),
      takeUntil(cancel$)
    ))
  );
};

export default searchSkillsEpic;