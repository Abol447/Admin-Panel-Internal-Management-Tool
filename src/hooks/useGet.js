import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useGet(url, queryName, opt) {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [queryName],
    queryFn: async () => {
      const response = await api.get(`/${url}`);
      return response.data;
    },
    onError: (error) => {
      toast.error(error.message, { toastId: queryName });
      if (opt?.onError) {
        opt.onError(error);
      }
    },
    ...opt,
  });
  return { data, isLoading, isSuccess };
}
