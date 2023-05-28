import { useParams } from 'react-router-dom';

import { CharacterScreenComponent } from './CharacterScreenComponent';

export const CharacterScreen = () => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  return <CharacterScreenComponent id={id} />;
};
