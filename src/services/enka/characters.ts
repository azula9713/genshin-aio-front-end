import instance from "../axios";

async function fetchAllCharacters() {
  const result = await instance.get("/api/v1/enkaCharacters/all");

  return result.data;
}

export { fetchAllCharacters };
