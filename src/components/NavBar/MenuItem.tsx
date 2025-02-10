import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

interface MenuItemProps {
  children: ReactNode;
  to?: string;
}

const MenuItem = ({ children, to = '/' }: MenuItemProps) => {
  return (
    <Link to={to}>
      <Text whiteSpace='nowrap' display='block'>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
