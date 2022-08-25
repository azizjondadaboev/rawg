import styled from 'styled-components';
import {
  COLOR_AZURE_RADIANCE,
  COLOR_BLACK,
  COLOR_CATSKILL_WHITE,
  COLOR_RIVER_BED,
  COLOR_ROCK_BLUE,
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

export const GroupTitle = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
  color: ${COLOR_AZURE_RADIANCE};
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 32px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  color: ${COLOR_BLACK};
`;

export const Code = styled.div`
  color: ${COLOR_ROCK_BLUE};
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  transition: color 0.26s ease;
  user-select: none;
  text-transform: uppercase;
`;

export const Label = styled.div`
  color: ${COLOR_RIVER_BED};
  margin-left: 8px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  width: 80%;
  text-align: left;

  &.active {
    color: ${COLOR_AZURE_RADIANCE};
  }
`;

export const CheckboxBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 4px;
`;

export const Checkbox = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  border-radius: 50%;
  transition: border-color 0.26s ease;
  background-color: ${COLOR_CATSKILL_WHITE};
  border: 1px solid ${COLOR_CATSKILL_WHITE};

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
    border: 3px solid ${COLOR_AZURE_RADIANCE};
  }
`;
