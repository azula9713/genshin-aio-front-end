import instance from "../axios";

async function fetchAllCharacters() {
  const result = await instance.get("/api/v1/characters/all");

  return result.data;
}

export { fetchAllCharacters };
