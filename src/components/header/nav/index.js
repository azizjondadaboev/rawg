import DesktopNav from './desktop';
import MobileNav from './mobile';

const Nav = ({ user }) => {
  return (
    <>
      <DesktopNav user={user} />
      <MobileNav user={user} />
    </>
  );
};

export default Nav;
