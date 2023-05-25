import { Button, Container, Input } from "@nextui-org/react";
import React, { useState } from "react";

interface Props {
  initial?: string;
  name: string;
  onSave: (v: string) => void;
}

export const PropertyEdit: React.FC<Props> = ({ initial, name, onSave }) => {
  const [value, setValue] = useState(initial);
  return (
    <Container gap={0} display="flex">
      <Input
        aria-label={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button size="sm" onPress={() => onSave(value ?? "")}>
        save
      </Button>
    </Container>
  );
};
