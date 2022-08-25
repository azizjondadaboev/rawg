import styled from 'styled-components';
import {
  COLOR_AZURE_RADIANCE,
  COLOR_BLACK,
  COLOR_BLACK_SQUEEZE,
  COLOR_CATSKILL_WHITE,
  COLOR_MALIBU,
  COLOR_RIVER_BED,
  COLOR_ROCK_BLUE,
  COLOR_SELECTIVE_YELLOW,
  COLOR_WHITE,
} from '../../../../../globalStyles/colors';

export const Component = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: ${props => (props.notAlign ? null : 'center')};
  justify-content: ${props => (props.notJustify ? null : 'center')};
  background-color: transparent;
  color: ${props => (props.langColor ? COLOR_WHITE : COLOR_AZURE_RADIANCE)};
  border: ${props => (props.notBorder ? 'none' : `1px solid ${COLOR_MALIBU}`)};
  min-width: 50px;
  padding: ${props => (props.addPadding ? '' : '8px 12px')};
  border-radius: ${props => (props.notRadius ? '' : '100px')};
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
  height: 35px;

  &:hover {
    cursor: pointer;
    border: ${props => (props.noHover ? null : `1px solid ${COLOR_AZURE_RADIANCE}`)};
  }

  & svg {
    margin-left: 4px;
    color: ${COLOR_RIVER_BED};
  }

  & > span.text-currency {
    min-width: 35px;
    margin-right: 8px;
    text-transform: uppercase;
  }

  & > span.caret-icon {
    transition: all 0.2s ease;
  }

  & > span.caret-icon-active {
    transition: all 0.2s ease;
    transform: rotate(180deg);
  }
`;

export const Dropdown = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background-color: ${COLOR_WHITE};
  padding: 8px;
  border-radius: 12px;
  width: 200px;
  box-shadow: 0 0 5px 1px rgba(0, 59, 110, 0.1);
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLOR_BLACK};
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${COLOR_BLACK_SQUEEZE};
    border-radius: 4px;
  }
`;

export const Text = styled.div`
  color: ${COLOR_ROCK_BLUE};
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  transition: color 0.26s ease;
  user-select: none;
  text-transform: uppercase;
`;

export const TextLanguage = styled.div`
  color: ${COLOR_RIVER_BED};
  margin-left: 8px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  float: left;
  width: 80%;
`;

export const CheckboxBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.div`
  background-color: ${COLOR_WHITE};
  width: 15px;
  height: 15px;
  position: relative;
  border: 3px solid ${COLOR_CATSKILL_WHITE};
  border-radius: 50%;
  transition: border-color 0.26s ease;
  background-color: ${COLOR_CATSKILL_WHITE};

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: transparent;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 0.26s ease;
  }

  &.active {
    border-color: ${COLOR_AZURE_RADIANCE};
  }
`;

export const LanguageBlock = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: ${COLOR_SELECTIVE_YELLOW};
  margin-left: 4px;
`;
