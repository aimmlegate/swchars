import { Button, Container, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { useUpdateCharacterMutation } from "../../../services/people";
import { Edit } from "react-iconly";
import { EditFieldProps } from "../types";

interface Props {
  value?: string;
  path: string;
  id: string;
  EditComponent: React.FC<EditFieldProps>;
}

export const Property: React.FC<Props> = ({
  value,
  id,
  path,
  EditComponent,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [mutate] = useUpdateCharacterMutation();

  const handleSave = (v: string) => {
    mutate({ id, path, value: v });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing && (
        <EditComponent
          initial={value ?? ""}
          onSave={handleSave}
          abortEdit={() => setIsEditing(false)}
        />
      )}
      {!isEditing && (
        <Container gap={0} display="flex" justify="flex-end">
          <Text size="$md">{value}</Text>
          <Button
            auto
            light
            aria-label={`Edit ${path}`}
            size="sm"
            icon={<Edit set="broken" />}
            onPress={() => setIsEditing(true)}
          >
            {" "}
          </Button>
        </Container>
      )}
    </>
  );
};
