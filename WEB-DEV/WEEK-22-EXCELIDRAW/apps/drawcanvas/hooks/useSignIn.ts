import { signInType } from "@/types/types";

import { useState } from "react";
import { toast } from "sonner";
import api from "@/lib/axiosInstance";
import { isServer } from "@/lib/helper";
import { getContext } from "@/context/AuthContext";

export const useSignIn = () => {
  const { setUser } = getContext();

  const [loading, setLoading] = useState<false | true>(false);
  const signIn = async (data: signInType) => {
    try {
      setLoading(true);
      const res = await api.post(`/signin`, data);

      const context = res.data;

      if (!context.success) {
        toast.error(context.message);
        return false;
      }
      toast.success(context.message);

      if (isServer) return;

      localStorage.setItem("user", JSON.stringify(context.data));
      localStorage.setItem("token", context.token);

      setUser(context.data);

      return true;
    } catch (e: unknown) {
      if (e instanceof Error) toast.error(e.message);
      console.log(e);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, signIn };
};
