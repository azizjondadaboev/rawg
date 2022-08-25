import { useState, useCallback, useMemo, useRef } from 'react';
import { setCookie } from 'nookies';

import { useConfigs, useLocalization } from '../../../../../hooks';

import { Component, Button, Items, Item, Text, TextLanguage, CheckboxBlock, Checkbox } from './components';
import { DropdownUI } from '../../../../ui';

import { ReactComponent as CaretIcon } from '../../../../../assets/icons/caret.svg';
import { defaultCurrencies } from '../../../../../utils';

const SelectCurrencies = () => {
  const {
    configs: { currency, availableCurrencies },
    changeConfigs,
  } = useConfigs();
  const { language } = useLocalization();
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const handleSelectCurrency = useCallback(currency => {
    setCookie(null, 'currency', currency, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    changeConfigs({ currency });
    setIsActive(false);
  }, []);

  const currencies = useMemo(() => {
    return availableCurrencies.map((value, index) => {
      return (
        <Item key={`currency-${value}`} onClick={() => handleSelectCurrency(value)}>
          <Text>{value}</Text>
          <TextLanguage>{defaultCurrencies[language][value]}</TextLanguage>

          <CheckboxBlock>
            <Checkbox className={value === currency && 'active'} />
          </CheckboxBlock>
        </Item>
      );
    });
  }, [availableCurrencies, currency, language]);

  return (
    <Component ref={dropdownRef}>
      <Button onClick={() => setIsActive(prev => !prev)}>
        <span className="text-currency">{currency}</span>
        <span className={isActive ? 'caret-icon-active' : 'caret-icon'}>
          <CaretIcon />
        </span>
      </Button>

      <DropdownUI dropdownRef={dropdownRef} isActive={isActive} onClickOutside={() => setIsActive(false)}>
        <Items>{currencies}</Items>
      </DropdownUI>
    </Component>
  );
};

export default SelectCurrencies;
