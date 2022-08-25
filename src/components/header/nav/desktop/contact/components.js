import styled from 'styled-components';
import { COLOR_AZURE_RADIANCE, COLOR_MALIBU, COLOR_RIVER_BED } from '../../../../../globalStyles/colors';

export const ContactsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 20px;
  width: 35px;
  height: 35px;
  border: 1px solid ${COLOR_MALIBU};
  width: 85px;

  &:hover {
    border: 1px solid ${COLOR_AZURE_RADIANCE};
  }

  @media (max-width: 959px) {
    display: none;
  }
`;

export const PhoneNumber = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${COLOR_RIVER_BED};
  line-height: 1;
  font-weight: 600;

  & > svg {
    color: ${COLOR_AZURE_RADIANCE};
    margin-right: 6px;
  }
`;
