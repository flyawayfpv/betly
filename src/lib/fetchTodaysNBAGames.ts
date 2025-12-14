import { sportsApi } from "./sportsApi";

export interface NBAGame {
  id: number;
  homeTeam: string;
  awayTeam: string;
  startTime: string;
}

export async function fetchTodaysNBAGames(): Promise<NBAGame[]> {
  const today = new Date().toISOString().split("T")[0];

  const data = await sportsApi("/nba/games", {
    date: today
  });

  // Normalize API response into our own structure
  return data.map((game: any) => ({
    id: game.id,
    homeTeam: game.home_team.name,
    awayTeam: game.away_team.name,
    startTime: game.start_time
  }));
}
