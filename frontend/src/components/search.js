import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField } from '../redux/actions/action-creators';

function Search() {
  const { items, loading, error, search } = useSelector(state => state.skills);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeSearchField(e.target.value));
  };

  const hasQuery = !!search.trim();
  return (
    <>
      <div>
        <input type='search' value={search} onChange={handleSearch} />
        {!hasQuery && <div>Type something to search...</div>}
        {hasQuery && loading && <div>searching...</div>}
        {error && <div>Error...</div>}
        {!error && <ul>{items.map(x => <li key={x.id}>{x.name}</li>)}</ul>}
      </div>
    </>
  );
}

export default Search;