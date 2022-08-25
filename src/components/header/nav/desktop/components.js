import styled from 'styled-components';
import {
  COLOR_ALIZARIN_CRIMSON,
  COLOR_AZURE_RADIANCE,
  COLOR_RIVER_BED,
  COLOR_SILVER_CHALICE,
  COLOR_WHITE,
} from '../../../../globalStyles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 959px) {
    display: none;
  }
`;

export const EnterBlock = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  border: 1px solid ${COLOR_AZURE_RADIANCE};
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  color: ${COLOR_AZURE_RADIANCE};

  & > svg {
    display: block;
  }
`;

export const Dropdown = styled.div`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: calc(100% + 12px);
  right: -12px;
  background-color: ${COLOR_WHITE};
  box-shadow: 1px 10px 10px 0 rgba(0, 59, 110, 0.1);
  padding: 12px;
  border-radius: 4px;
  width: 250px;

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-bottom: 8px solid ${COLOR_WHITE};
    border-left: 10px solid transparent;
    position: absolute;
    top: -8px;
    right: 22px;
  }

  @media (max-width: 959px) {
    right: ${props => (props.right ? '6px' : '0')};
  }
`;

export const StyledLink = styled.a`
  color: ${COLOR_AZURE_RADIANCE};
  margin: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
`;

export const Component = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_AZURE_RADIANCE};
  color: ${COLOR_WHITE};
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;

  &:hover {
    cursor: pointer;
  }

  & > svg {
    display: block;
  }
`;

export const ClientName = styled.div`
  font-weight: bold;
  color: ${COLOR_AZURE_RADIANCE};
  margin-left: 8px;
`;

export const ClientLogin = styled.div`
  color: ${COLOR_SILVER_CHALICE};
  font-size: 14px;
  margin-left: 8px;
  margin-bottom: 8px;
`;

export const ClientBalanceBlock = styled.div`
  display: flex;
  padding: 8px;
  font-size: 14px;
`;

export const ClientBalanceTitle = styled.div`
  color: ${COLOR_SILVER_CHALICE};
  margin-right: 8px;
`;

export const ClientBalanceValue = styled.div`
  color: ${COLOR_RIVER_BED};
  font-weight: bold;

  & > span {
    margin-left: 4px;
    color: ${COLOR_AZURE_RADIANCE};
  }
`;

export const ExitButton = styled.div`
  color: ${COLOR_ALIZARIN_CRIMSON};
  cursor: pointer;
  margin-left: 8px;
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
`;
