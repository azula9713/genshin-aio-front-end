interface ICharacter {
  id: string;
  enkaId: string;
  name: string;
  nameId: string;
  description: string;
  stars: number;
  rarity: string;
  iconUrl: string;
  element: {
    id: string;
    name: string;
  };
}

export default ICharacter;
