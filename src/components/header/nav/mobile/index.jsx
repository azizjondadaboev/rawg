import { Wrapper } from './components';
import SettingsMenu from './settings';
import MainMenu from './menu';

const MobileNav = ({ user }) => {
  return (
    <Wrapper>
      <SettingsMenu />
      <MainMenu user={user} />
    </Wrapper>
  );
};

export default MobileNav;
