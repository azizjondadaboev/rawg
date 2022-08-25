import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #202020;
  border-radius: 15px;
`;

export const GameMedia = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  padding-bottom: 50%;
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
  padding: 15px;
`;
