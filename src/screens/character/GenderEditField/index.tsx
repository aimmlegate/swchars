import { Button, Container } from "@nextui-org/react";
import React, { useState } from "react";
import { TickSquare } from "react-iconly";
import { StyledSelect } from "./styled";
import { EditFieldProps } from "../types";

const variants = ["male", "female", "hermaphrodite", "n/a", "unknown"];

export const GenderEditField: React.FC<EditFieldProps> = ({
  initial,
  onSave,
}) => {
  const [value, setValue] = useState(initial);
  return (
    <Container gap={0} display="flex" justify="flex-end">
      <StyledSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setValue(e.target.value)
        }
        aria-label="select gender"
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
        aria-label="save"
        icon={<TickSquare set="broken" />}
        onPress={() => onSave(value ?? "")}
      >
        {" "}
      </Button>
    </Container>
  );
};
