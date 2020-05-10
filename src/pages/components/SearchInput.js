import styled from 'styled-components';
import searchIcon from './../../assets/searchicon.png';

const SearchInput = styled.input`
  text-indent: 10px;
  padding: 8px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-image: url(${searchIcon});
  background-position: 2.5px 5px;
  background-repeat: no-repeat;

    &:hover {
      border: 2px solid rgb(151, 139, 139);
    }
`;

export default SearchInput;