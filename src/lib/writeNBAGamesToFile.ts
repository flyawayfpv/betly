import * as fs from "node:fs";
import * as path from "node:path"; // required using node:path as typecast error otherwise
import type { NBAGame } from "./fetchTodaysNBAGames";


export function writeNBAGamesToFile(games: NBAGame[]) {
  const filePath = path.join(process.cwd(), "nba_games_today.txt");

  const content = games.length === 0
    ? "No NBA games scheduled today.\n"
    : games.map(g =>
        `${g.awayTeam} @ ${g.homeTeam} — ${new Date(g.startTime).toLocaleTimeString()}`
      ).join("\n");

  fs.writeFileSync(filePath, content, { encoding: "utf-8" });

  return filePath;
}
