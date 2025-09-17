import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useMutationData(url, method, toastId, opt = {}) {
  const { mutate, isLoading, data, isSuccess } = useMutation({
    queryFn: async (info) => {
      const response = await api[method](`/${url}`, info);
      return response.data;
    },
    onError: (error) => {
      toast.error(error.message, { toastId: toastId });
      if (opt?.onError) {
        opt.onError(error);
      }
    },
    ...opt,
  });
  return { mutate, isLoading, isSuccess, data };
}
