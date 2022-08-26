import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
  left: ${props => (props.right ? 'auto' : 0)};
  right: ${props => (props.right ? 0 : 'auto')};
  z-index: 10;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  width: ${props => props.width};
  box-shadow: 0 0 5px 1px rgba(0, 59, 110, 0.1);
`;
