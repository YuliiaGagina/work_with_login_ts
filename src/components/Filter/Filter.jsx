import PropTypes from 'prop-types';
import {Title, Input} from './Filrer.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
function Filter (){
  const dispatch = useDispatch();
    return(
        <div >
        <Title>Find contacts by name</Title>
        <Input
          type="text"
          name="filter"
          onChange={event => dispatch(addFilter(event.target.value))}
        />
      </div>
    )
}


Filter.propTypes ={
value: PropTypes.string.isRequired,
onFilterChange: PropTypes.func,
}

export default Filter