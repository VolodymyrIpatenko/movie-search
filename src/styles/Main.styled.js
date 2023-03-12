import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  place-content: center;
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoviesSection = styled.ul`
  display: grid;
  @media screen and (min-width: 1199px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 155px;
    padding: 50px;
  }
`;

export const MovieItem = styled.li`
  width: 300px;
  height: 400px;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 25px;
  margin: 10px;
  border-radius: 7px;
  border: none;
  background: #1e52e1;
  color: white;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

export const DetailsBtn = styled(SearchButton)`
  width: auto;
  height: 30px;
  padding: 3px;
`;

export const InputElem = styled.input`
  width: 200px;
  padding: 3px;
  outline: none;
`;

