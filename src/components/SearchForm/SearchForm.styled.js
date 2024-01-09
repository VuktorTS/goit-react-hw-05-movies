import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  max-width: 300px;
  margin: auto auto 20px;
  & button {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    border: 1px solid black;
    border-right: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    &:hover,
    &:active {
      box-shadow: #979494 0px 0px 7px 0px inset;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 7px 15px;
  border: 1px solid black;
  line-height: 1.5;
  letter-spacing: 0.04em;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &:focus {
    box-shadow: #979494 0px 0px 7px 0px inset;
  }
`;
