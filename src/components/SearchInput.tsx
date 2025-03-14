import { Input } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { InputGroup } from './ui/input-group';
import { useRef } from 'react';
import useGameQueryStore from '@/store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/');
        }
      }}
    >
      <InputGroup startElement={<BsSearch />} width='100%' paddingEnd='2%'>
        <Input ref={ref} borderRadius={20} placeholder='Search games...' />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
