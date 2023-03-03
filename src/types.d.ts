export interface Gender {
  name: string;
  url: string;
}

export interface SpecifiedGender {
  pokemon_species: {
    name: string;
    url: string;
  };
  rate: number;
}
