export interface FarcasterUser {
  fid: number;
  username: string;
  display_name: string;
  pfp_url: string;
  profile: {
    bio: {
      text: string;
    };
  };
  follower_count: number;
  following_count: number;
}

export interface Cast {
  hash: string;
  text: string;
  timestamp: string;
  reactions: {
    likes_count: number;
    recasts_count: number;
  };
}

export interface RoastState {
  status: 'idle' | 'fetching_user' | 'analyzing' | 'generating_meme' | 'complete' | 'error';
  user: FarcasterUser | null;
  roast: string | null;
  memeUrl: string | null;
  isMemeLoading?: boolean;
  error: string | null;
}

export interface NeynarConfig {
  apiKey: string;
}