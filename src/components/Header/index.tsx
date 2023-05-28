import { Navbar, Text } from '@nextui-org/react';
import React from 'react';

interface Props {
  content?: React.ReactNode;
}

export const Header: React.FC<Props> = ({ content }) => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          SWCHARS
        </Text>
      </Navbar.Brand>
      <Navbar.Content>{content}</Navbar.Content>
    </Navbar>
  );
};
