import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 1499px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
