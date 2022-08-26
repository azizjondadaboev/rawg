import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #202020;
  border-radius: 15px;
`;

export const GameMedia = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  padding-bottom: 60%;

  @media (max-width: 599px) {
    padding-bottom: 50%;
  }
`;

export const GameImage = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  gap: 10px;
`;

export const GameNameLink = styled.a`
  font-weight: bold;
  font-size: 18px;
`;

export const Released = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #ffffff1a;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
`;

export const Metacritic = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #fff;
  font-size: 12px;
  font-weight: bold;

  &.green {
    color: #6dc849;
    border-color: #6dc849;
  }

  &.yellow {
    color: #fdca52;
    border-color: #fdca52;
  }

  &.red {
    color: #fc4b37;
    border-color: #fc4b37;
  }
`;

export const CalendarIcon = styled.img`
  width: 16px;
  height: 16px;
`;
