import { FarcasterUser, Cast } from "@/types";

const NEYNAR_API_URL = "https://api.neynar.com/v2/farcaster";
const NEYNAR_API_KEY = "E48FE171-48D5-4FB7-A33B-4AC275E14E65";

export const fetchUserByUsername = async (username: string): Promise<FarcasterUser> => {
  const cleanUsername = username.replace(/^@/, '').trim().toLowerCase();
  
  const response = await fetch(`${NEYNAR_API_URL}/user/by_username?username=${cleanUsername}&viewer_fid=3`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'api_key': NEYNAR_API_KEY
    }
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("Rate limit hit. Please wait a minute before roasting again.");
    }

    let errorMsg = "User not found or API error.";
    try {
      const errorBody = await response.json();
      if (errorBody.message) errorMsg = errorBody.message;
    } catch (e) { /* empty */ }

    console.error(`Fetch User Error (${response.status}):`, errorMsg);

    if (response.status === 404) {
      throw new Error(`User @${cleanUsername} does not exist.`);
    }
    if (response.status === 401 || response.status === 403) {
      throw new Error("Invalid Neynar API Key configuration.");
    }
    throw new Error(errorMsg);
  }

  const data = await response.json();
  return data.user as FarcasterUser;
};

export const fetchUserCasts = async (fid: number): Promise<Cast[]> => {
  const response = await fetch(`${NEYNAR_API_URL}/feed/user/casts?fid=${fid}&limit=15&include_replies=false&include_recasts=false`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'api_key': NEYNAR_API_KEY
    }
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("Rate limit hit. Please wait a minute.");
    }
    let errorMessage = `Failed to fetch casts (Status: ${response.status})`;
    try {
      const errorBody = await response.json();
      if (errorBody.message) errorMessage += `: ${errorBody.message}`;
    } catch (e) { /* empty */ }
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data.casts.map((c: any) => ({
    hash: c.hash,
    text: c.text,
    timestamp: c.timestamp,
    reactions: {
      likes_count: c.reactions.likes_count,
      recasts_count: c.reactions.recasts_count
    }
  })) as Cast[];
};