import { Container, Loading, Spacer } from '@nextui-org/react';

export const LoaderCard = () => {
  return (
    <Container display="flex" justify="center">
      <Spacer y={5} />
      <Loading size="xl" type="points-opacity" />
    </Container>
  );
};
