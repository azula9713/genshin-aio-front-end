import { useEffect, useState } from "react";
import ICharacter from "../../interfaces/CharacterInterface";
import { fetchAllCharacters } from "../../services/characters/characters";
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
    <div className="overflow-x-hidden w-full items-center justify-center flex border-2">
      <div className="flex flex-wrap mt-2 items-center justify-center">
        {characters.map((character: ICharacter) => (
          <CharacterThumbnail character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}
