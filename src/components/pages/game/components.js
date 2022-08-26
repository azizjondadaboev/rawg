import styled from 'styled-components';

export const Wrapper = styled.div``;

export const GameImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const GameName = styled.h1`
  margin-bottom: 20px;

  @media (max-width: 599px) {
    font-size: 24px;
  }
`;

export const GameDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const GameInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 50px;
  border-top: 1px solid #ffffff1f;
  padding-top: 20px;
  margin-bottom: 30px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const GameInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GameInfoTitle = styled.div`
  font-size: 14px;
  color: #ffffff55;
  font-weight: bold;
`;

export const GameInfoValue = styled.div`
  display: flex;
  justify-content: flex-start;
  line-height: 20px;
`;

export const GameScreenshotsBlock = styled.div`
    margin-bottom: 50px;
`;

export const GameScreenshotsTitle = styled.h3`
    margin-bottom: 20px;
`;
