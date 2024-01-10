import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 24px;
  padding-bottom: 20px;
`;
export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  width: calc((100% - 116px) / 5);
`;
export const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid black;
  flex-grow: 1;
  & h3 {
    font-size: 20px;
  }
  & p {
    text-align: center;
    & span {
      font-weight: 700;
      font-size: 16px;
    }
  }
`;
