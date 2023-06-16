import { Film, IFilm } from "../models/Film";

async function getAllData(): Promise<IFilm[] | { error: string }> {
  try {
    const films: IFilm[] = await Film.find();
    return films;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return { error: "Failed to retrieve data" };
  }
}

export { getAllData };
