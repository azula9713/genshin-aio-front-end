export interface ICharacter {
  id: string;
  enkaId: string;
  name: string;
  nameId: string;
  rarity: "QUALITY_PURPLE" | "QUALITY_ORANGE" | "QUALITY_ORANGE_SP";
  iconUrl: string;
  element: {
    id: string;
    name: "Anemo" | "Geo" | "Electro" | "Dendro" | "Hydro" | "Pyro" | "Cryo";
  };
}

export interface ICharacterData extends ICharacter {
  description: string;
  splashImageUrl: string;
  stars: number;
  costumes: {
    id: number;
    name: string;
    description: string;
    icon?: string;
  }[];
  skills: {
    id: number;
    name: string;
    description: string;
    icon: string;
  }[];
  passiveTalents: {
    id: number;
    name: string;
    description: string;
    icon: string;
  }[];
  constellations: {
    id: number;
    name: string;
    description: string;
  }[];
}
