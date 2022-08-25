const apiUrl = process.env.apiUrl;
const apiKey = process.env.apiKey;

export const getGamesList = async () => {
  const searchParams = new URLSearchParams({
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

export const getPlatforms = async page => {
  const searchParams = new URLSearchParams({
    key: apiKey,
    page,
  });

  const res = await fetch(`${apiUrl}/platforms?${searchParams}`);

  return await res.json();
};

export const getGameById = async id => {
  const searchParams = new URLSearchParams({
    key: apiKey,
  });

  const res = await fetch(`${apiUrl}/games/${id}?${searchParams}`);

  return await res.json();
};
