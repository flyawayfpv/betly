import { fetchTodaysNBAGames } from "../../../lib/fetchTodaysNBAGames";
import { writeNBAGamesToFile } from "../../../lib/writeNBAGamesToFile";

export async function GET() {
  try {
    const games = await fetchTodaysNBAGames();
    const filePath = writeNBAGamesToFile(games);

    return Response.json({
      ok: true,
      gamesFound: games.length,
      fileWritten: filePath
    });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
