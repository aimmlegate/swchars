import { Text, Spacer, Container } from "@nextui-org/react";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

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
