import { Button, Container } from "@nextui-org/react";
import React, { useState } from "react";
import { TickSquare } from "react-iconly";
import { StyledSelect } from "./styled";

interface Props {
  initial: string;
  onSave: (s: string) => void;
}

const variants = ["male", "female", "hermaphrodite", "n/a"];

export const GenderEditField: React.FC<Props> = ({ initial, onSave }) => {
  const [value, setValue] = useState(initial);
  return (
    <Container gap={0} display="flex" justify="flex-end">
      <StyledSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setValue(e.target.value)
        }
        value={value}
      >
        {variants.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </StyledSelect>

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
