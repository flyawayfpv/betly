import "dotenv/config";
import { fetchTodaysNBAGames } from "./fetchGames";

async function main() {
  console.log("🏀 Fetching today's NBA games...\n");

  const games = await fetchTodaysNBAGames();

  if (games.length === 0) {
    console.log("No NBA games today.");
    return;
  }

  for (const game of games) {
    console.log(
      `${game.away} @ ${game.home} — ${new Date(game.startTime).toLocaleTimeString()}`
    );
  }
}

main().catch(err => {
  console.error("CLI error:", err.message);
});
