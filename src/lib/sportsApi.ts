export async function sportsApi(
    endpoint: string,
    params: Record<string, string | number> = {}
  ) {
    const url = new URL(`https://api.sportapi.ai${endpoint}`);
  
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, String(value))
    );
  
    const res = await fetch(url.toString(), {
      headers: {
        "Authorization": process.env.SPORTAPI_KEY!,
        "Content-Type": "application/json",
      }
    });
  
    if (!res.ok) {
      throw new Error(`SportAPI Error ${res.status}: ${await res.text()}`);
    }
  
    return res.json();
  }
  