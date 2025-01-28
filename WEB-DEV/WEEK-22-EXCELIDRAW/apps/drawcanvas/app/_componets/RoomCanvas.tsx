"use client";

import { BASE_WS_URL } from "@/lib/config";
import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";

interface roomProps {
  roomId: string;
}

const RoomCanvas = ({ roomId }: roomProps) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const token=localStorage.getItem('token')

  useEffect(() => {
    const ws = new WebSocket(`${BASE_WS_URL}?token=${token}`);

    ws.onopen = () => {
      setSocket(ws);

      ws.send(
        JSON.stringify({
          type: "join_room",
          roomId,
        })
      );
    };
  }, []);

  if (!socket) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <span className="text-indigo-500 ">
          We are getting you shape please wait.🙂
        </span>
      </div>
    );
  }

  return <Canvas roomId={roomId} socket={socket} />;
};

export default RoomCanvas;
