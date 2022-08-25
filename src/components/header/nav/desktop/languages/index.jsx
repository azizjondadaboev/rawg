import { useState, useCallback, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

import { defaultLanguages } from '../../../../../utils';
import { useLocalization } from '../../../../../hooks';

import { Component, Button, Items, Item, Text, TextLanguage, CheckboxBlock, Checkbox } from './components';
import { DropdownUI } from '../../../../ui';

import { ReactComponent as CaretIcon } from '../../../../../assets/icons/caret.svg';

const SelectLanguages = () => {
  const router = useRouter();

  const { language, availableLanguages } = useLocalization();
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const handleSelectLanguage = useCallback(language => {
    setIsActive(false);

    setCookie(null, 'language', language, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    window.location.href = `/${language}${router.asPath}`;
  }, []);

  const renderLanguages = useMemo(() => {
    return availableLanguages.map(value => {
      return (
        <Item key={`languages-${value}`} onClick={() => handleSelectLanguage(value)}>
          <Text>{value}</Text>

          <TextLanguage className={value === language && 'active'}>{defaultLanguages[language][value]}</TextLanguage>

          <CheckboxBlock>
            <Checkbox className={value === language && 'active'} />
          </CheckboxBlock>
        </Item>
      );
    });
  }, [availableLanguages, language]);

  return (
    <Component ref={dropdownRef}>
      <Button onClick={() => setIsActive(prev => !prev)}>
        <span className="text-currency">{language}</span>
        <span className={isActive ? 'caret-icon-active' : 'caret-icon'}>
          <CaretIcon />
        </span>
      </Button>

      <DropdownUI dropdownRef={dropdownRef} isActive={isActive} onClickOutside={() => setIsActive(false)}>
        <Items>{renderLanguages}</Items>
      </DropdownUI>
    </Component>
  );
};

export default SelectLanguages;
