import React, { useState } from 'react';

// Hooks
import useCatalog from 'core/hooks/useCatalog';

// Styles
import { Container, Content } from './styles';

// Assets
import { ReactComponent as SearchIcon } from 'core/assets/images/search.svg';

interface IProps {
  placeholder: string;
}

const Search: React.FC<IProps> = ({ placeholder }) => {
  const { searchProduct } = useCatalog();
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    searchProduct(term);
  };

  return (
    <Container>
      <Content>
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder={placeholder}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </Content>
    </Container>
  );
};

export default Search;
