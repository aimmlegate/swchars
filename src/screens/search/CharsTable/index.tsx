import { Table } from "@nextui-org/react";
import React from "react";
import { Person } from "../../../types";

interface Props {
  data: Person[];
}

export const CharsTable: React.FC<Props> = ({ data }) => {
  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>BIRTH YEAR</Table.Column>
        <Table.Column>GENDER</Table.Column>
      </Table.Header>

      <Table.Body>
        {data.map((char) => (
          <Table.Row key={char.url}>
            <Table.Cell>{char.name}</Table.Cell>
            <Table.Cell>{char.birth_year}</Table.Cell>
            <Table.Cell>{char.gender}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
