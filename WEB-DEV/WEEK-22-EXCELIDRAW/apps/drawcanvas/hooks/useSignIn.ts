import { signInType, SingUpType } from "@/types/types";
import { BASE_URL_HTTP } from "@/lib/config";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useSignIn = () => {
  const [loading, setLoading] = useState<false | true>(false);
  const route = useRouter();
  const signIn = async (data: signInType) => {
    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL_HTTP}/signin`, data, {
        withCredentials: true,
      });

      const context = res.data;

      if (!context.success) {
        toast.error(context.message);
      }

      toast.success(context.message);

      localStorage.setItem("user", JSON.stringify(context.data));
      localStorage.setItem("token", context.token);

      route.push("/canvas");
    } catch (e: unknown) {
      if (e instanceof Error) toast.error(e.message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signIn };
};
