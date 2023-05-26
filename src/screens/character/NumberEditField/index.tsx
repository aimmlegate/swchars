import { Button, Container, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { TickSquare } from "react-iconly";
import { EditFieldProps } from "../types";

export const NumberEditField: React.FC<EditFieldProps> = ({
  initial,
  onSave,
  abortEdit,
}) => {
  const [value, setValue] = useState(initial);
  return (
    <Container gap={0} display="flex" justify="flex-end">
      <Input
        aria-label="edit"
        size="sm"
        shadow={false}
        animated={false}
        type="number"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          console.log(e);
          if (e.key === "Enter") {
            onSave(value ?? "");
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
        color="primary"
        icon={<TickSquare set="broken" />}
        onPress={() => onSave(value ?? "")}
      >
        {" "}
      </Button>
    </Container>
  );
};
