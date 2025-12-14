import { sportsApi } from "../src/lib/sportsApi";

export interface NBAGame {
  id: number;
  home: string;
  away: string;
  startTime: string;
}

export async function fetchTodaysNBAGames(): Promise<NBAGame[]> {
  const today = new Date().toISOString().split("T")[0];

  const response = await sportsApi("/games", {
    dates: [today],
    per_page: 100
  });

  return response.data.map((game: any) => ({
    id: game.id,
    home: game.home_team.full_name,
    away: game.visitor_team.full_name,
    startTime: game.date
  }));
}
