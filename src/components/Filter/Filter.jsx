import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filter);
  return (
    <>
      <label>
        Find contacts by name
        <p>
          <Styled.Input
            type="text"
            value={filters}
            onChange={event => dispatch(setFilter(event.target.value.trim()))}
          />
        </p>
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeInput: PropTypes.func,
};

export default Filter;
