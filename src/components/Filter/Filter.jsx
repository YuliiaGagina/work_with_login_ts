import PropTypes from 'prop-types';
import {Title, Input} from './Filrer.styled'
function Filter ({value, onFilterChange}){
    return(
        <div >
        <Title>Find contacts by name</Title>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={onFilterChange}
        />
      </div>
    )
}


Filter.propTypes ={
value: PropTypes.string.isRequired,
onFilterChange: PropTypes.func,
}

export default Filter