import { Container, Spacer, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';

export const NoFoundScreen = () => {
  return (
    <>
      <Header />
      <Spacer y={2} />
      <Container gap={0}>
        <Text h1>Not Found</Text>
        <Link to="/">Return</Link>
      </Container>
    </>
  );
};
