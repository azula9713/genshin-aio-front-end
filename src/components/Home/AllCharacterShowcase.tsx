import { useEffect, useState } from "react";
import { fetchAllCharacters } from "../../services/characters/characters";

export default function AllCharacterShowcase() {
  const [characters, setCharacters] = useState([]);

  async function getAllCharacters() {
    const response = await fetchAllCharacters();

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
    <div className="overflow-x-hidden">
      <ul className="grid grid-cols-3 gap-8 mt-8 md:mt-16 md:grid-cols-2 w-full">
        {characters.map((character: any) => (
          <div
            key={character.id}
            className="mx-auto w-[100px] rounded-3xl shadow-xl overflow-hidden from-[#0f134d] via-[#4b199c] to-[#3a31bd] dark:from-[#3a31bd] dark:to-[#0f134d] bg-gradient-to-br my-5"
          >
            {character.name}
            <div
              className="h-[236px]"
              style={{
                backgroundImage: `url(${character.iconUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* <div className="mx-auto">
             
              <div className="p-4 sm:p-6">
                <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                  {character.name}
                </p>
                <div className="flex flex-row">
                  <p className="text-[#3C3C4399] text-[17px] mr-2 line-through">
                    MVR 700
                  </p>
                  <p className="text-[17px] font-bold text-[#0FB478]">
                    MVR 700
                  </p>
                </div>
                <p className="text-[#7C7C80] font-[15px] mt-6">
                  Our shrimp sauce is made with mozarella, a creamy taste of
                  shrimp with extra kick of spices.
                </p>
                Download app
              </div>
            </div> */}
          </div>
        ))}
      </ul>
    </div>
  );
}
