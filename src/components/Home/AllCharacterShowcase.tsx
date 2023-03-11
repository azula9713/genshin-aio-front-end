import { useEffect, useState } from "react";
import ICharacter from "../../interfaces/CharacterInterface";
import { fetchAllCharacters } from "../../services/enka/characters";
import CharacterThumbnail from "./CharacterThumbnail";

export default function AllCharacterShowcase() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  async function getAllCharacters() {
    const response: ICharacter[] = await fetchAllCharacters();

    if (response.length > 0) {
      setCharacters(response);
    }
  }

  useEffect(() => {
    getAllCharacters();

    // return () => {
    //   second
    // }
  }, []);

  useEffect(() => {
    console.log("Character showcase", characters);
  }, [characters]);

  return (
    <div className="overflow-x-hidden w-full items-center justify-center flex">
      <div className="flex flex-wrap mt-2 items-center justify-start">
        {characters
          .filter((character) => {
            if (character.nameId === "PlayerGirl") {
              return ["Geo", "Dendro", "Pyro"].includes(character.element.name);
            } else if (character.nameId === "PlayerBoy") {
              return ["Anemo", "Electro", "Hydro", "Cryo"].includes(
                character.element.name
              );
            }
            return true;
          })
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((character: ICharacter) => (
            <CharacterThumbnail character={character} key={character.id} />
          ))}
      </div>
    </div>
  );
}
