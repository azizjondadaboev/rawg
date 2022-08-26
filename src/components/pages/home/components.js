import styled from 'styled-components';

export const FiltersBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px 0;

  @media (max-width: 599px) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
    padding: 0 0 20px;
  }
`;

export const GamesBlock = styled.div`
  width: 100%;
  padding-bottom: 30px;

  & > .infinite-scroll {
    width: 100%;
  }
`;

export const LoadMoreBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;
