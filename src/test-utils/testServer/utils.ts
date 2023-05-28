import { faker } from '@faker-js/faker';

export const getPage = (n: string, s?: string) => {
  const page = parseInt(n);
  if (s && s?.length > 0) {
    return {
      count: 2,
      next: `https://swapi.dev/api/people/?page=${page + 1}`,
      previous: page >= 2 ? `https://swapi.dev/api/people/?page=${page - 1}` : null,
      results: [...Array(2)].map((_, i) => ({
        name: faker.person.fullName({ firstName: s }),
        birth_year: faker.date.birthdate(),
        gender: faker.person.gender(),
        url: `https://swapi.dev/api/people/${i}/`,
      })),
    };
  }

  return {
    count: 82,
    next: `https://swapi.dev/api/people/?page=${n + 1}`,
    previous: page >= 2 ? `https://swapi.dev/api/people/?page=${page - 1}` : null,
    results: [...Array(10)].map((_, i) => ({
      name: faker.person.fullName(),
      birth_year: faker.date.birthdate(),
      gender: faker.person.gender(),
      url: `https://swapi.dev/api/people/${i}/`,
    })),
  };
};

export const getLuke = () => {
  return {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/',
  };
};
