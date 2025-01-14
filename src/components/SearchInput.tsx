import { Input } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { InputGroup } from './ui/input-group';

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />} w='100%'>
      <Input borderRadius={20} placeholder='Search games...' />
    </InputGroup>
  );
};

export default SearchInput;
