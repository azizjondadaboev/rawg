import { useState, useRef, useEffect } from 'react';

import { useConfigs, useLocalization } from '../../../../hooks';

import { Divider } from '../../../ui';
import {
  Wrapper,
  EnterBlock,
  Dropdown,
  StyledLink,
  Component,
  Button,
  ClientName,
  ClientLogin,
  ClientBalanceBlock,
  ClientBalanceTitle,
  ClientBalanceValue,
  ExitButton,
} from './components';
import SelectLanguages from './languages';
import SelectCurrencies from './currencies';
import Contacts from './contact';
import SearchOrder from '../searchOrder';

import { ReactComponent as LogoutIcon } from '../../../../assets/icons/logout.svg';
import { ReactComponent as UserIcon } from '../../../../assets/icons/user.svg';

const DesktopNav = ({ user }) => {
  const {
    configs: { currency },
  } = useConfigs(store => store.appConfigs);
  const { language, t } = useLocalization();

  const dropdownRef = useRef();

  const [isActive, setIsActive] = useState(false);

  const agentsLink = process.env.agentsLink;

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleLogout = () => {
    setIsActive(false);
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/';
  };

  const handleClick = e => {
    if (dropdownRef.current?.contains(e.target)) {
      return;
    }

    setIsActive(false);
  };

  return (
    <Wrapper>
      {!user && (
        <Component>
          <Contacts />
          <SearchOrder />
          <SelectLanguages />
          <SelectCurrencies />

          <EnterBlock onClick={() => setIsActive(true)}>
            <LogoutIcon />
          </EnterBlock>

          <Dropdown active={isActive} ref={dropdownRef} right>
            <StyledLink href={`${language}/auth`}>{t('log_in')}</StyledLink>

            <Divider />

            <StyledLink href={`${language}/register`}>{t('registration')}</StyledLink>

            <Divider />

            <StyledLink href={`${language}/useful`}>{t('useful_info')}</StyledLink>

            <Divider />

            <StyledLink href={`${agentsLink}`}>{t('agents')}</StyledLink>
          </Dropdown>
        </Component>
      )}

      {user && (
        <Component>
          <Contacts />

          <SelectLanguages />

          <SelectCurrencies />

          <Button onClick={() => setIsActive(true)} active={isActive}>
            <UserIcon />
          </Button>

          <Dropdown active={isActive} ref={dropdownRef}>
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

            <StyledLink href={`${language}/user/orders`}>{t('orders')}</StyledLink>

            <Divider />

            <StyledLink href={`${language}/user/transactions`}>{t('transactions')}</StyledLink>

            <Divider />

            <StyledLink href={`${language}/user/profile`}>{t('my_profile')}</StyledLink>

            <Divider />

            <StyledLink href={`${language}/user/refill`}>{t('recharging_balance')}</StyledLink>

            <Divider />

            <ExitButton onClick={() => handleLogout()}>{t('log_out')}</ExitButton>
          </Dropdown>
        </Component>
      )}
    </Wrapper>
  );
};

export default DesktopNav;
