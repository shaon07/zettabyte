import { CacheEntry, QueryState } from "@/types";

class QueryClient {
  private cache: QueryState = {};
  private subscribers: { [key: string]: Set<() => void> } = {};
  private readonly CACHE_TIME = 5 * 60 * 1000; // 5 minutes

  subscribe(key: string, callback: () => void) {
    if (!this.subscribers[key]) {
      this.subscribers[key] = new Set();
    }
    this.subscribers[key].add(callback);

    return () => {
      this.subscribers[key]?.delete(callback);
      if (this.subscribers[key]?.size === 0) {
        delete this.subscribers[key];
      }
    };
  }

  private notify(key: string) {
    this.subscribers[key]?.forEach((callback) => callback());
  }

  getQuery<T>(key: string): CacheEntry<T> | undefined {
    const entry = this.cache[key];
    if (entry && Date.now() - entry.timestamp > this.CACHE_TIME) {
      delete this.cache[key];
      return undefined;
    }
    return entry;
  }

  setQuery<T>(key: string, data: Partial<CacheEntry<T>>) {
    this.cache[key] = {
      ...this.cache[key],
      ...data,
      timestamp: Date.now(),
    };
    this.notify(key);
  }

  invalidateQuery(key: string) {
    delete this.cache[key];
    this.notify(key);
  }

  invalidateQueries(pattern: string) {
    Object.keys(this.cache).forEach((key) => {
      if (key.includes(pattern)) {
        this.invalidateQuery(key);
      }
    });
  }
}

export const queryClient = new QueryClient();
