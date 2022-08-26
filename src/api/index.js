const apiUrl = process.env.apiUrl;
const apiKey = process.env.apiKey;

export const getGamesList = async params => {
  const searchParams = new URLSearchParams({
    ...params,
    key: apiKey,
  });

  const res = await fetch(`${apiUrl}/games?${searchParams}`);

  return await res.json();
};

export const getGamesListByFilters = async params => {
  const searchParams = new URLSearchParams({
    ...params,
    key: apiKey,
  });

  const res = await fetch(`${apiUrl}/games?${searchParams}`);

  return await res.json();
};

export const getPlatforms = async () => {
  const searchParams = new URLSearchParams({
    key: apiKey,
  });

  const res = await fetch(`${apiUrl}/platforms/lists/parents?${searchParams}`);

  return await res.json();
};

export const getGameBySlug = async slug => {
  const searchParams = new URLSearchParams({
    key: apiKey,
  });

  const res = await fetch(`${apiUrl}/games/${slug}?${searchParams}`);

  return await res.json();
};

export const getGameScreenshots = async slug => {
  const searchParams = new URLSearchParams({
    key: apiKey,
    page_size: 10,
  });

  const res = await fetch(`${apiUrl}/games/${slug}/screenshots?${searchParams}`);

  return await res.json();
};
