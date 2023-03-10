import React from "react";
import ICharacter from "../../interfaces/CharacterInterface";
import colorFilter from "../../static/ThumbnailColourFilter";

type Props = {
  character: ICharacter;
};

interface CharacterRarity {
  QUALITY_ORANGE_SP: "QUALITY_ORANGE_SP";
  QUALITY_ORANGE: "QUALITY_ORANGE";
  QUALITY_PURPLE: "QUALITY_PURPLE";
}

export default function CharacterThumbnail({ character }: Props) {
  const { fromColor: bgFrom } =
    colorFilter[character.rarity as keyof CharacterRarity];
  const { viaColor: bgVia } =
    colorFilter[character.rarity as keyof CharacterRarity];
  const { toColor: bgTo } =
    colorFilter[character.rarity as keyof CharacterRarity];

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${bgFrom}, ${bgVia}, ${bgTo}`,
      }}
      className="border-2 mx-1 mr-4 md:mx-3 w-[95px] relative lg:w-[120px] rounded-xl shadow-xl overflow-hidden my-5 cursor-pointer"
    >
      <div className="w-full flex flex-col items-center mt-1h-[130px] lg:h-[170px]">
        <div className="h-3/4 flex items-end justify-center">
          <img src={character.iconUrl} alt={character.nameId} />
        </div>
        <div className="bg-black w-full h-1/4 flex items-center justify-center">
          <p className="text-xs lg:text-sm xl:text-sm text-center font-semibold leading-3 mt-1 flex items-center h-full">
            {character.name}
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 rounded-full flex items-center shadow-md text-white p-2 ml-[-5px] mt-[-5px]">
        <img
          className="w-4 h-4 lg:w-5 lg:h-5"
          src="https://th.bing.com/th/id/R.0225a465dcea6cb7e3a29dcb3d18e505?rik=RvAuJ1hcCs5yBQ&pid=ImgRaw&r=0"
          alt="Dendro"
        />
      </div>
    </div>
  );
}
