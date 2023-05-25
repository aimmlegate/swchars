import { Button, Card, Container, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { PropertyEdit } from "../PropertyEdit";
import { useUpdateCharacterMutation } from "../../../people";

interface Props {
  name: string;
  value?: string;
  path: string;
  id: string;
}

export const Property: React.FC<Props> = ({ name, value, id, path }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [mutate] = useUpdateCharacterMutation();

  const handleSave = (v: string) => {
    mutate({ id, path, value: v });
    setIsEditing(false);
  };
  return (
    <>
      <Card.Body>
        <Container display="flex" justify="space-between" gap={0}>
          <Text size="$md">{name}</Text>
          {isEditing && (
            <PropertyEdit initial={value} name={name} onSave={handleSave} />
          )}
          {!isEditing && (
            <Container gap={0} display="flex">
              <Text size="$md">{value}</Text>
              <Button light size="sm" onPress={() => setIsEditing(true)}>
                edit
              </Button>
            </Container>
          )}
        </Container>
      </Card.Body>
      <Card.Divider />
    </>
  );
};
