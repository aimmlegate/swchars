import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import {
  Button,
  Card,
  Container,
  Loading,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useGetCharacterQuery } from "../../people";
import { Property } from "./Property";

export const CharacterScreen = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetCharacterQuery(id ?? "0");

  const state: "normal" | "loading" | "error" = (() => {
    if (error) {
      return "error";
    }
    if (isLoading) {
      return "loading";
    }
    return "normal";
  })();

  return (
    <div>
      <Header />
      <Spacer y={2} />

      <Container gap={0}>
        <Link to="/">Return</Link>
        <Spacer y={1} />
        {state === "loading" && <Loading size="xl" />}
        {state === "error" && <p>Error</p>}
        {state === "normal" && (
          <Card>
            <Property name="Name:" value={data?.name} path="name" id={id!} />
            <Property
              name="Gender:"
              value={data?.gender}
              path="gender"
              id={id!}
            />
            <Property
              name="Eye Color:"
              value={data?.eye_color}
              path="eye_color"
              id={id!}
            />
            <Property
              name="Hair Color:"
              value={data?.hair_color}
              path="hair_color"
              id={id!}
            />
            <Property
              name="Height:"
              value={data?.height}
              path="height"
              id={id!}
            />
            <Property name="Mass:" value={data?.mass} path="mass" id={id!} />
          </Card>
        )}
      </Container>
    </div>
  );
};
