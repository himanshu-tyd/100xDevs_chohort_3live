import api from "@/lib/axiosInstance";
import { toast } from "sonner";

const getShapes = async (roomId: string) => {
  try {
    const res = await api.get(`/chats/${roomId}`);

    const context = res.data;

    if (!context.success) {
      toast.error(context.message);
      return {};
    }

    console.log(context)
    
    
    const shapes=context.data

    if(!shapes) return
    
    const dataShape=shapes?.map((x)=>{
        const messageData=JSON.parse(x.message)
        
        return messageData
    })
    
    toast.success(context.message);

    return dataShape

  } catch (e) {
    if (e instanceof Error) toast.error(e.message);
    console.log(e);
    return {};
  }
};

export default getShapes;
