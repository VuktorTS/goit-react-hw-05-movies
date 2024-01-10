import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
export const MovieName = styled.h2`
  font-size: 36px;
  line-height: 1.11;
`;
export const InfoAboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  & p {
    font-size: 18px;
  }
  & span {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const AdditionalContainer = styled.div`
  padding-bottom: 20px;
`;
export const AdditionlTitle = styled.h3`
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 28px;
  line-height: 1.11;
`;
export const AdditionlList = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  justify-content: center;
  & li:first-child {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      background-color: #5081f5d6;
      border-radius: 2px;
      width: 4px;
      height: 100%;
      bottom: -1px;
      right: -18px;
    }
  }
`;
export const AdditionlItem = styled.li``;
export const AdditionalLink = styled(NavLink)`
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 25px;
  line-height: 1.11;
  color: #5081f5d6;
  &.active {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      background-color: #5081f5d6;
      border-radius: 2px;
      width: 100%;
      height: 4px;
      bottom: -3px;
      left: 0;
    }
  }
`;
