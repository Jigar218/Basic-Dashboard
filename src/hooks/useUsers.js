import { useQuery } from "@tanstack/react-query";
import Api from "../api/api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await Api.get("?results=20");
      return res.data.results;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
