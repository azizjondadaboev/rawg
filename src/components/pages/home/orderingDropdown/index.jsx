import { useRef, useState } from 'react';
import Dropdown from '../../../ui/dropdown';
import { ArrowIcon, DropdownButton, OrderButton, OrderingBlock, Wrapper } from './components';

const ordersList = [
  { value: '-added', label: 'Popularity', icon: null },
  { value: '-metacritic', label: 'Metacritic', icon: 'arrowDown' },
  { value: 'metacritic', label: 'Metacritic', icon: 'arrowUp' },
  { value: '-released', label: 'Release date', icon: 'arrowDown' },
  { value: 'released', label: 'Release date', icon: 'arrowUp' },
];

const OrderingDropdown = ({ ordering, changeOrdering }) => {
  const dropdownRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectOrder = order => {
    changeOrdering(order);
    setShowDropdown(false);
  };

  const renderOrderingLabel = () => {
    const order = ordersList.find(x => x.value === ordering);

    if (order) {
      return (
        <>
          <span>{order.label}</span>
          {order.icon ? <ArrowIcon src={`/icons/${order.icon}.svg`} alt={order.icon} /> : null}
        </>
      );
    }

    return null;
  };

  return (
    <Wrapper ref={dropdownRef}>
      <DropdownButton onClick={() => setShowDropdown(prev => !prev)}>Order by: {renderOrderingLabel()}</DropdownButton>

      <Dropdown dropdownRef={dropdownRef} show={showDropdown} onClickOutside={() => setShowDropdown(false)}>
        <OrderingBlock>
          {ordersList.map((order, index) => (
            <OrderButton key={index} onClick={() => handleSelectOrder(order.value)}>
              {order.label} {order.icon ? <ArrowIcon src={`/icons/${order.icon}.svg`} alt={order.icon} /> : null}
            </OrderButton>
          ))}
        </OrderingBlock>
      </Dropdown>
    </Wrapper>
  );
};

export default OrderingDropdown;
