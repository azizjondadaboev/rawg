import { useRef, useState } from 'react';
import Dropdown from '../../../ui/dropdown';
import { ClearButton, DropdownButton, PlatformButton, PLatformsBlock, Wrapper } from './components';

const PlatformsDropdown = ({ platforms, selectedPlatform, changePlatform }) => {
  const dropdownRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectPlatform = platform => {
    changePlatform(platform);
    setShowDropdown(false);
  };

  const renderOrderingLabel = () => {
    const platform = platforms.find(x => x.id == selectedPlatform);

    if (platform) {
      return <span>{platform.name}</span>;
    }

    return null;
  };

  return (
    <Wrapper ref={dropdownRef}>
      <DropdownButton onClick={() => setShowDropdown(prev => !prev)}>Platform: {renderOrderingLabel()}</DropdownButton>

      <Dropdown
        dropdownRef={dropdownRef}
        show={showDropdown}
        onClickOutside={() => setShowDropdown(false)}
        width="160px"
        right
      >
        <PLatformsBlock>
          {platforms.map((platform, index) => (
            <PlatformButton key={index} onClick={() => handleSelectPlatform(platform.id)}>
              {platform.name}
            </PlatformButton>
          ))}
          {selectedPlatform ? <ClearButton onClick={() => handleSelectPlatform(null)}>Clear</ClearButton> : null}
        </PLatformsBlock>
      </Dropdown>
    </Wrapper>
  );
};

export default PlatformsDropdown;
