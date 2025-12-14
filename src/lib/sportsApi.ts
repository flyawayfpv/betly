// src/lib/sportsApi.ts

export async function sportsApi(
  endpoint: string,
  params: Record<string, string | number | string[]> = {}
) {
  const url = new URL(`https://www.balldontlie.io/api/v1${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => url.searchParams.append(`${key}[]`, String(v)));
    } else {
      url.searchParams.append(key, String(value));
    }
  });

  console.log("➡️ Requesting:", url.toString());

  const res = await fetch(url.toString());

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`balldontlie ${res.status}: ${text}`);
  }

  return res.json();
}
