import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button, Container, Spacer, Table } from "@nextui-org/react";
import { useGetCharacterQuery } from "../../services/people";
import { Property } from "./Property";
import { LoaderCard } from "../../components/LoaderCard";
import { ChevronLeft } from "react-iconly";
import { TextEditField } from "./TextEditField";
import { NumberEditField } from "./NumberEditField";
import { GenderEditField } from "./GenderEditField";

export const CharacterScreen = () => {
  // const { id } = useParams();
  const id = "1";
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetCharacterQuery(id ?? "0");

  console.log("useGetCharacterQuery", data);

  const state: "normal" | "loading" | "error" = (() => {
    if (error) {
      return "error";
    }
    if (isLoading) {
      return "loading";
    }
    return "normal";
  })();

  if (!id) {
    return null;
  }

  return (
    <div>
      <Header />
      <Spacer y={2} />
      <Container gap={0}>
        <Spacer y={1} />
        {state === "loading" && <LoaderCard />}
        {state === "error" && <p>Error</p>}
        {state === "normal" && (
          <Table aria-label="Character detail information">
            <Table.Header>
              <Table.Column>Key</Table.Column>
              <Table.Column
                css={{
                  textAlign: "end",
                }}
              >
                Value
              </Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>
                  <Property
                    value={data?.name}
                    path="name"
                    id={id}
                    EditComponent={TextEditField}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Gender</Table.Cell>
                <Table.Cell>
                  <Property
                    value={data?.gender}
                    path="gender"
                    id={id}
                    EditComponent={GenderEditField}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Birth Year</Table.Cell>
                <Table.Cell>
                  <Property
                    value={data?.birth_year}
                    path="birth_year"
                    id={id}
                    EditComponent={TextEditField}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Eye Color</Table.Cell>
                <Table.Cell>
                  <Property
                    value={data?.eye_color}
                    path="eye_color"
                    id={id}
                    EditComponent={TextEditField}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Hair Color</Table.Cell>
                <Table.Cell>
                  <Property
                    value={data?.hair_color}
                    path="hair_color"
                    id={id}
                    EditComponent={TextEditField}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Height</Table.Cell>
                <Table.Cell>
                  <Property
                    value={data?.height}
                    path="height"
                    id={id}
                    EditComponent={NumberEditField}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Mass</Table.Cell>
                <Table.Cell>
                  <Property
                    value={data?.mass}
                    path="mass"
                    id={id}
                    EditComponent={NumberEditField}
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )}
        <Spacer y={1} />
        <Button
          size="sm"
          icon={<ChevronLeft set="broken" />}
          onPress={() => navigate(-1)}
        />
      </Container>
    </div>
  );
};
