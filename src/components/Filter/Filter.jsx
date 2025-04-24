import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from './Filter.styled';

export const Filter = ({ filter, changeHandler }) => {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="search"
        name="filter"
        title="Сontact search field"
        value={filter}
        onChange={changeHandler}
        required
      />
    </LabelFilter>
  );
};

Filter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
