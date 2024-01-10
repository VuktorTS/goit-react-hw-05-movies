import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
export const MoviesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  color: red;
  & li {
    flex-basis: calc((100% - 76px) / 4);
    border: 1px solid black;
    border-radius: 5px;
    overflow: hidden;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  & h2 {
    color: red;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  & img {
    border-bottom: 1px solid black;
  }
`;
