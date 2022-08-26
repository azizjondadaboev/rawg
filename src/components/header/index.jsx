import { LogoLink, Wrapper } from './components';
import { ContainerWide, FlexBox } from '../ui/common';

const Header = () => {
  return (
    <Wrapper>
      <ContainerWide>
        <FlexBox alignItems="center" height="100px">
          <LogoLink href="/">RAWG</LogoLink>
        </FlexBox>
      </ContainerWide>
    </Wrapper>
  );
};

export default Header;
