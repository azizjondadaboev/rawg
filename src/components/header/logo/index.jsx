import useConfigs from '../../../hooks/useConfigs';
import { Wrapper, LogoImage, IataLogoImage } from './components';

const Logo = () => {
  const {
    configs: { logo },
  } = useConfigs();

  return (
    <Wrapper>
      <a href="/">
        <LogoImage alt="Fly.tj" src={logo ? `${process.env.uploadsUrl}/${logo}` : '/images/logos/logo.svg'} />
      </a>
      <IataLogoImage alt="Iata logo icon" src="/images/logos/iata-logo.png" />
    </Wrapper>
  );
};

export default Logo;
