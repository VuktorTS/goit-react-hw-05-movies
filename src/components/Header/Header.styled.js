import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
export const Link = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  &.active {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      background-color: red;
      border-radius: 2px;
      width: 100%;
      height: 4px;
      bottom: -1px;
      left: 0;
    }
  }
`;
