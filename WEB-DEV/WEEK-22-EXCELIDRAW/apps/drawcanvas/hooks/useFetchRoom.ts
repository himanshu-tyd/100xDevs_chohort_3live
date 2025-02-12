import api from "@/lib/axiosInstance";
import { useEffect, useState } from "react";


const useFetchRooms = () => {
  const [loading, setLoading] = useState<true | false>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<[]>([]);

  

  useEffect(() => {
    setLoading(true);
    const getRooms = async () => {
      try {
        const res = await api.get("/room");

        const context = res.data;

        if (!context.succes) {
          setError(context.message);
          return;
        }

        setData(context.data)

      } catch (e) {
        if (e instanceof Error) setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    getRooms();
  }, []);

  return { loading, error, data };
};


export default useFetchRooms