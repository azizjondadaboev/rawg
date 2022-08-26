import { useEffect, useCallback } from 'react';
import { Wrapper } from './components';

const Dropdown = ({ children, dropdownRef, show, onClickOutside, width = '100%', right = false }) => {
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = useCallback(
    e => {
      if (dropdownRef.current.contains(e.target)) {
        return;
      }

      onClickOutside();
    },
    [dropdownRef]
  );

  return (
    <Wrapper show={show} width={width} right={right}>
      {children}
    </Wrapper>
  );
};

export default Dropdown;
