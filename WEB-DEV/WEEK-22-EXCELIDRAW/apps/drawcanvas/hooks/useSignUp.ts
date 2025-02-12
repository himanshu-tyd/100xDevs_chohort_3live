import { SingUpType } from "@/types/types";
import { BASE_URL_HTTP } from "@/lib/config";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import api from "@/lib/axiosInstance";

export const useSignUp = () => {
  const [loading, setLoading] = useState<false | true>(false);
  const route = useRouter();
  const singUp = async (data: SingUpType) => {
    try {
      setLoading(true);
      const res = await api.post(`/signup`, data);

      const context = res.data;

      if (!context.success) { 
        toast.error(context.message);
      }

      toast.success(context.message);

      route.push("/sign-in");
    } catch (e: unknown) {
      console.log(e);

      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, singUp };
};
