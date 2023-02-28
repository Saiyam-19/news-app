import { useDispatch } from 'react-redux';
import { setCategory } from '../reducers/filtersReducer';

const Filters = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <div>
      <label htmlFor="category-select">Filter by category:</label>
      <select id="category-select" onChange={handleChange}>
        <option value="">All</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
};

export default Filters;
