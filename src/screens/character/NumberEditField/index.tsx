import { Button, Container, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { TickSquare } from "react-iconly";

interface Props {
  initial: string;
  onSave: (s: string) => void;
}

export const NumberEditField: React.FC<Props> = ({ initial, onSave }) => {
  const [value, setValue] = useState(initial);
  return (
    <Container gap={0} display="flex" justify="flex-end">
      <Input
        aria-label="edit"
        size="sm"
        shadow={false}
        animated={false}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
