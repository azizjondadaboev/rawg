import styled from 'styled-components';

import {
  COLOR_AZURE_RADIANCE,
  COLOR_BLACK,
  COLOR_RIVER_BED,
  COLOR_SILVER_CHALICE,
  COLOR_WHITE,
} from '../../../globalStyles/colors';

export const Component = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${props => (props.active ? 'hsla(0, 0%, 88.2%, .2)' : 'transparent')};
  color: ${COLOR_WHITE};
  border: none;
  margin-left: 4px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 10px);
  right: ${props => (props.right ? '41px' : '0')};
  background-color: ${COLOR_WHITE};
  box-shadow: 1px 10px 10px 0 rgba(0, 59, 110, 0.1);
  padding: 12px;
  border-radius: 4px;
  width: 196px;

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

export const ExitButton = styled.div`
  color: ${COLOR_BLACK};
  cursor: pointer;
  margin-left: 8px;
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
`;

export const ClientName = styled.div`
  color: ${COLOR_BLACK};
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

export const LinksForAgents = styled.a`
  display: block;
  color: ${COLOR_AZURE_RADIANCE};
  font-size: 18px;
  font-weight: bold;
  font-weight: 600;
  line-height: 1.6;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  margin-top: 8px;
  text-decoration: none;
`;
