import { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

import { useConfigs, useLocalization } from '../../../../../hooks';
import { defaultCurrencies, defaultLanguages } from '../../../../../utils';

import { ReactComponent as SettingsIcon } from '../../../../../assets/icons/settings.svg';

import { Wrapper, Button, GroupTitle, Items, Item, Code, Label, CheckboxBlock, Checkbox } from './components';
import { ModalUI } from '../../../../ui';

const SettingsMenu = () => {
  const router = useRouter();
  const {
    configs: { availableCurrencies, currency },
    changeConfigs,
  } = useConfigs();
  const { t, language, availableLanguages } = useLocalization();

  const [isActive, setIsActive] = useState(false);

  const handleSelectCurrency = useCallback(currency => {
    setIsActive(false);
    setCookie(null, 'currency', currency, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    changeConfigs({ currency });
  }, []);

  const handleSelectLanguage = useCallback(language => {
    setIsActive(false);

    setCookie(null, 'language', language, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    window.location.href = `/${language}${router.asPath}`;
  }, []);

  const renderCurrencies = useMemo(() => {
    return availableCurrencies.map(value => {
      return (
        <Item key={`currency-${value}`} onClick={() => handleSelectCurrency(value)}>
          <Code>{value}</Code>

          <Label className={value === currency && 'active'}>{defaultCurrencies[language][value]}</Label>

          <CheckboxBlock>
            <Checkbox className={value === currency && 'active'} />
          </CheckboxBlock>
        </Item>
      );
    });
  }, [availableCurrencies, currency, language]);

  const renderLanguages = useMemo(() => {
    return availableLanguages.map(value => {
      return (
        <Item key={`languages-${value}`} onClick={() => handleSelectLanguage(value)}>
          <Code>{value}</Code>

          <Label className={value === language && 'active'}>{defaultLanguages[language][value]}</Label>

          <CheckboxBlock>
            <Checkbox className={value === language && 'active'} />
          </CheckboxBlock>
        </Item>
      );
    });
  }, [availableLanguages, language]);

  return (
    <Wrapper>
      <Button onClick={() => setIsActive(true)}>
        <SettingsIcon />
      </Button>

      <ModalUI active={isActive} onClose={() => setIsActive(false)} title={t('settings')}>
        <GroupTitle>{t('currency')}</GroupTitle>
        <Items>{renderCurrencies}</Items>

        <GroupTitle>{t('language')}</GroupTitle>
        <Items>{renderLanguages}</Items>
      </ModalUI>
    </Wrapper>
  );
};

export default SettingsMenu;
