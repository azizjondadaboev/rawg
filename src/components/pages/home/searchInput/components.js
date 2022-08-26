import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const InputElement = styled.input`
  padding: 0;
  background-color: transparent;
  border: none;
  font-size: 14px;
`;

export const SearchIcon = styled.img`
  width: 12px;
  height: 12px;
`;
