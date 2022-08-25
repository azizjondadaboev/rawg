import styled from 'styled-components';

// import { COLOR_WHITE, COLOR_ZIRCON } from '../../globalStyles/colors';

export const Wrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  // background-color: ${COLOR_ZIRCON};
  height: 100px;
  max-height: 100px;
  // color: ${COLOR_WHITE};

  @media (max-width: 599px) {
    max-height: 80px;
  }
`;
