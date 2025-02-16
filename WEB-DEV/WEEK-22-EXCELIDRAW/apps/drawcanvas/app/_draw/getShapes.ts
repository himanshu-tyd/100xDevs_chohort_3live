import api from "@/lib/axiosInstance";
import { messageType } from "@/types/types";
import { useState } from "react";
import { toast } from "sonner";

const useGetShapes =  () => {

  const [loading, setLoading]=useState<true | false>(false)

  const getShapes = async (roomId: string) => {
    try {
        setLoading(true)
      const res = await api.get(`/chats/${roomId}`);

    const context = res.data;

      if (!context.success) {
        toast.error(context.message);
        return {};
      }

      const shapes = context.data;

      if (!shapes) return;

      const dataShape = shapes?.map((x: messageType) => {
        const messageData = JSON.parse(x.message);

        return messageData.shape;
      });

      return dataShape;
    } catch (e) {
      if (e instanceof Error) toast.error(e.message);
      console.log(e);
      return {};
    }finally{
      setLoading(false)
    }
  };



  return {loading, getShapes}

};

export default useGetShapes;
