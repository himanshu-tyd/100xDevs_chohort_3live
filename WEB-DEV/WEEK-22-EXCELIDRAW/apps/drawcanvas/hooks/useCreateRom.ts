import { roomType } from "@/types/types";
import { BASE_URL_HTTP } from "@/lib/config";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import api from "@/lib/axiosInstance";

export const useCreatRoom = () => {
  const [loading, setLoading] = useState<false | true>(false);
  const route = useRouter();
  const createRoom = async (data: roomType) => {
    try {
      setLoading(true);
      const res = await api.post(`/room`, data);

      const context = res.data;

      if (!context.success) {
        toast.error(context.message);
        return;
      }

      toast.success(context.message);

      route.push(`/canvas/${context.data}`);

    } catch (e) {
      console.log(e);
      if (e instanceof Error) toast.error(e.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, createRoom };
};
