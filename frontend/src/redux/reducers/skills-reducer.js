import { ACTIONS } from '../actions/actions';

const initialState = { 
  items: [],
  loading: false,
  error: null,
  search: ''
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SEARCH_SKILLS_REQUEST:
      return { ...state, items: [], loading: true, error: null };

    case ACTIONS.SEARCH_SKILLS_FAILURE:
      const {error} = action.payload;
      return { ...state, items: [], loading: false, error };

    case ACTIONS.SEARCH_SKILLS_SUCCESS:
      const {items} = action.payload;
      return { ...state, items, loading: false, error: null };

    case ACTIONS.CHANGE_SEARCH_FIELD:
      const {search} = action.payload;
      return { ...state, items: [], error: null, search };

    default:
      return state;
  }
}