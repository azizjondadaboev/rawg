import styled from 'styled-components';
import {
  COLOR_ALIZARIN_CRIMSON,
  COLOR_AZURE_RADIANCE,
  COLOR_BLACK,
  COLOR_RIVER_BED,
  COLOR_SILVER_CHALICE,
} from '../../../../../globalStyles/colors';

export const Wrapper = styled.div`
  margin-left: 12px;
`;

export const Button = styled.button`
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
`;

export const StyledLink = styled.a`
  display: block;
  color: ${COLOR_AZURE_RADIANCE};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
  margin: ${props => (props.marginTop ? '16px' : 0)} 0 16px;
`;

export const LinkForAgents = styled.a`
  display: block;
  color: ${COLOR_AZURE_RADIANCE};
  font-size: 18px;
  font-weight: bold;
  font-weight: 600;
  line-height: 1.6;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${COLOR_AZURE_RADIANCE};
  text-decoration: none;
`;

export const ClientName = styled.div`
  font-size: 20px;
  color: ${COLOR_BLACK};
  font-weight: bold;
  color: ${COLOR_AZURE_RADIANCE};
`;

export const ClientLogin = styled.div`
  color: ${COLOR_SILVER_CHALICE};
  font-size: 14px;
  margin-bottom: 8px;
`;

export const ClientBalanceBlock = styled.div`
  display: flex;
  padding: 16px 0;
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
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6;
`;
