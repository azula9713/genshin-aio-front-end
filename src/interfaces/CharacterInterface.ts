interface ICharacter {
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

export default ICharacter;
