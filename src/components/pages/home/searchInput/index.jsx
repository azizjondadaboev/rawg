import { InputElement, SearchIcon, Wrapper } from './components';

const SearchInput = ({ value, onChange, onSubmit }) => {
  const keyPress = e => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <Wrapper>
      <SearchIcon src="/icons/search.svg" alt="search-icon" />
      <InputElement type="text" value={value} onChange={event => onChange(event.target.value)} onKeyDown={keyPress} placeholder="Search ..." />
    </Wrapper>
  );
};

export default SearchInput;
