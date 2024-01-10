import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  & li {
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px;
  }
`;

export const ReviewsTitle = styled.h4`
  text-align: center;
  margin-bottom: 20px;
`;
export const ReviewsContent = styled.p`
  line-height: 1.5;
  letter-spacing: 0.02em;
`;
