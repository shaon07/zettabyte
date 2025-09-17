import { apiClient } from "@/lib/api-client";
import { User } from "@/types";
import { useQuery } from "./use-query";

const getUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>("/users");
  return response.data;
};

const getUser = async (id: number): Promise<User> => {
  const response = await apiClient.get<User>(`/users/${id}`);
  return response.data;
};

export function useUsers() {
  return useQuery("users", getUsers, {
    refetchOnWindowFocus: true,
  });
}

export function useUser(id: number) {
  return useQuery(`users/${id}`, () => getUser(id), {
    enabled: !!id,
  });
}
