import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  &.wrap {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1199px) {
    max-width: 900px;
  }

  @media screen and (max-width: 899px) {
    max-width: 600px;
  }

  @media screen and (max-width: 599px) {
    max-width: 100%;
  }
`;

export const ContainerWide = styled(Container)`
  padding: 0 40px;
  max-width: 100%;

  @media screen and (max-width: 1199px) {
    max-width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 599px) {
    padding: 0 15px;
  }
`;

export const FlexBox = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  gap: ${props => props.gap || 0};
  margin: ${props => props.margin || 0};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;
