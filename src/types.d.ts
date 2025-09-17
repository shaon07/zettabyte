/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DashboardData {
  chartData: Array<{
    month: string;
    value: number;
  }>;
  activities: Array<{
    id: string;
    user: string;
    action: string;
    time: string;
    avatar: string;
  }>;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface UseQueryOptions<T> {
  enabled?: boolean;
  refetchOnWindowFocus?: boolean;
  staleTime?: number;
}

export interface UseQueryResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  invalidate: () => void;
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  isLoading: boolean;
  error: string | null;
}

interface QueryState {
  [key: string]: CacheEntry<any>;
}
