import styled from 'styled-components';

import {
  COLOR_AZURE_RADIANCE,
  COLOR_MALIBU,
  COLOR_PERIWINKLE_GRAY,
  COLOR_RED,
  COLOR_RIVER_BED,
  COLOR_WHITE,
} from '../../../../globalStyles/colors';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${COLOR_AZURE_RADIANCE};
  border: 1px solid ${COLOR_MALIBU};
  min-width: 50px;
  padding: 8px 12px;
  border-radius: 100px;
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
  height: 35px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${COLOR_AZURE_RADIANCE};
  }

  @media (max-width: 959px) {
    display: block;
    font-size: 18px;
    line-height: 1.6;
    margin: ${props => (props.marginTop ? '16px' : 0)} 0 16px;
    ${props => (props.desktop ? `margin: 8px;` : ``)}
    border: none;
    padding: 0;

    &:hover {
      border: none;
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  margin: 0 0 16px;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  font-size: 12px;
  top: 8px;
  left: 16px;
  font-weight: bold;
  color: ${COLOR_RIVER_BED};
`;

export const Input = styled.input`
  width: 100%;
  padding: 32px 16px 8px;
  font-size: 16px;
  border: 1px solid ${props => (props.error && props.touched ? COLOR_RED : COLOR_PERIWINKLE_GRAY)};
  border-radius: 12px;

  &:focus, &:active {
    outline: none;
  }
`;

export const FormSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50px;
  margin: 12px auto 0;
  background-color: ${COLOR_AZURE_RADIANCE};
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  color: ${COLOR_WHITE};
  cursor: pointer;
  padding: 12px 32px;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR_AZURE_RADIANCE};
    color: ${COLOR_WHITE};
    border-radius: 12px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ErrorText = styled.div`
  color: ${COLOR_RED};
  font-size: 14px;
  margin-top: 4px;
`;

export const NotFoundText = styled.div`
  color: ${COLOR_RED};
  font-size: 14px;
  margin-top: 4px;
  text-align: center;
`;
