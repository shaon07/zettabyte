"use client";

import { apiClient } from "@/lib/api-client";
import { useQuery } from "./use-query";

interface User {
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
