import { useState } from 'react';

import { ReactComponent as MenuIcon } from '../../../../../assets/icons/menu.svg';

import {
  Wrapper,
  Button,
  StyledLink,
  LinkForAgents,
  ClientName,
  ClientLogin,
  ClientBalanceBlock,
  ClientBalanceTitle,
  ClientBalanceValue,
  ExitButton,
} from './components';
import { useConfigs, useLocalization } from '../../../../../hooks';
import { Divider, ModalUI } from '../../../../ui';
import SearchOrder from '../../searchOrder';

const MainMenu = ({ user }) => {
  const {
    configs: { currency },
  } = useConfigs();
  const { language, t } = useLocalization();

  const [isActive, setIsActive] = useState(false);

  const agentsLink = process.env.agentsLink;

  const handleLogout = () => {
    setIsActive(false);
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/';
  };

  return (
    <Wrapper>
      <Button onClick={() => setIsActive(true)}>
        <MenuIcon />
      </Button>

      <ModalUI active={isActive} onClose={() => setIsActive(false)} title={t('menu')}>
        {!user ? (
          <>
            <StyledLink href={`${language}/auth`} onClick={() => setIsActive(false)}>
              {t('log_in')}
            </StyledLink>

            <StyledLink href={`${language}/register`} onClick={() => setIsActive(false)}>
              {t('registration')}
            </StyledLink>

            <SearchOrder />

            <LinkForAgents href={`${agentsLink}`}>{t('agents')}</LinkForAgents>
          </>
        ) : (
          <>
            <ClientName>
              {user.first_name} {user.last_name}
            </ClientName>
            <ClientLogin>{user.login}</ClientLogin>

            <Divider />

            <ClientBalanceBlock>
              <ClientBalanceTitle>{t('balance')}:</ClientBalanceTitle>

              <ClientBalanceValue>
                {user.balance || 0}
                <span>{user.currency || currency}</span>
              </ClientBalanceValue>
            </ClientBalanceBlock>

            <Divider />

            <StyledLink href={`${language}/user/orders`} onClick={() => setIsActive(false)} marginTop>
              {t('orders')}
            </StyledLink>

            <StyledLink href={`${language}/user/transactions`} onClick={() => setIsActive(false)}>
              {t('transactions')}
            </StyledLink>

            <StyledLink href={`${language}/user/profile`} onClick={() => setIsActive(false)}>
              {t('my_profile')}
            </StyledLink>

            <StyledLink href={`${language}/user/refill`} onClick={() => setIsActive(false)}>
              {t('recharging_balance')}
            </StyledLink>

            <ExitButton onClick={() => handleLogout()}>{t('log_out')}</ExitButton>
          </>
        )}
      </ModalUI>
    </Wrapper>
  );
};

export default MainMenu;
