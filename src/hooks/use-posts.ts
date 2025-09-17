import { apiClient } from "@/lib/api-client";
import { Post, User } from "@/types";
import { useQuery } from "./use-query";

const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>("/posts");
  return response.data;
};

const getPost = async (id: number): Promise<Post> => {
  const response = await apiClient.get<Post>(`/posts/${id}`);
  return response.data;
};

const getPostAuthor = async (userId: number): Promise<User> => {
  const response = await apiClient.get<User>(`/users/${userId}`);
  return response.data;
};

export function usePosts() {
  return useQuery("posts", getPosts, {
    refetchOnWindowFocus: true,
  });
}

export function usePost(id: number) {
  return useQuery(`posts/${id}`, () => getPost(id), {
    enabled: !!id,
  });
}

export function usePostAuthor(userId: number) {
  return useQuery(`users/${userId}`, () => getPostAuthor(userId), {
    enabled: !!userId,
  });
}
