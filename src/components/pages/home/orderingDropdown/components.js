import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;

  & > span {
    font-weight: bold;
  }

  @media (max-width: 599px) {
    padding: 10px;
  }
`;

export const OrderingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ArrowIcon = styled.img`
  width: 12px;
  height: 12px;
`;

export const OrderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 14px;
  background-color: transparent;
  padding: 5px 0;
  border: none;
`;
