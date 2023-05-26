import { Button, Container, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { TickSquare } from "react-iconly";
import { EditFieldProps } from "../types";

export const TextEditField: React.FC<EditFieldProps> = ({
  initial,
  onSave,
  abortEdit,
}) => {
  const [value, setValue] = useState(initial);

  const handleSave = (val: string) => {
    if (val.length > 0) {
      onSave(value);
    }
  };

  return (
    <Container gap={0} display="flex" justify="flex-end">
      <Input
        aria-label="edit"
        size="sm"
        shadow={false}
        animated={false}
        value={value}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          console.log(e);
          if (e.key === "Enter") {
            handleSave(value);
          }
          if (e.key === "Escape" && abortEdit) {
            abortEdit();
          }
        }}
      />
      <Button
        auto
        light
        size="sm"
        disabled={value.length === 0}
        color="primary"
        icon={<TickSquare set="broken" />}
        onPress={() => handleSave(value)}
      >
        {" "}
      </Button>
    </Container>
  );
};
