import RoomCanvas from "@/app/_componets/RoomCanvas";
import { redirect } from "next/navigation";
import { user } from "@/lib/helper";

interface canvasprops {
  params: {
    roomId: string;
  };
}

const CanvasPage = async ({ params }: canvasprops) => {
  if (!user) {
    redirect("/sign-in");
  }

  const roomId = (await params).roomId;
  return <RoomCanvas roomId={roomId} />;
};

export default CanvasPage;
