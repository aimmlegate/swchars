import { Button, Container, Spacer, Table } from '@nextui-org/react';
import { ChevronLeft } from 'react-iconly';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../../components/Header';
import { LoaderCard } from '../../../components/LoaderCard';
import { useGetCharacterQuery } from '../../../services/people';
import { GenderEditField } from '../GenderEditField';
import { NumberEditField } from '../NumberEditField';
import { Property } from '../Property';
import { TextEditField } from '../TextEditField';

interface Props {
  id: string;
}

export const CharacterScreenComponent: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetCharacterQuery(id);

  const state: 'normal' | 'loading' | 'error' = (() => {
    if (error) {
      return 'error';
    }
    if (isLoading) {
      return 'loading';
    }
    return 'normal';
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
        {state === 'loading' && <LoaderCard />}
        {state === 'error' && <p>Error</p>}
        {state === 'normal' && (
          <Table aria-label="Character detail information">
            <Table.Header>
              <Table.Column>Key</Table.Column>
              <Table.Column
                css={{
                  textAlign: 'end',
                }}
              >
                Value
              </Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>
                  <Property value={data?.name} path="name" id={id} EditComponent={TextEditField} />
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
              <Table.Row aria-label="DDD">
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
        <Button size="sm" icon={<ChevronLeft set="broken" />} onPress={() => navigate(-1)} />
      </Container>
    </div>
  );
};
