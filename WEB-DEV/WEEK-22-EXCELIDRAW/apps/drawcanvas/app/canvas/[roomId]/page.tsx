import Canvas from "@/app/_componets/Canvas";
import RoomCanvas from "@/app/_componets/RoomCanvas";

interface canvasprops {
  params: {
    roomId: string;
  };
}

const CanvasPage = async({ params }: canvasprops) => {
  const roomId =(await params).roomId;

  

console.log(roomId)

  return <RoomCanvas roomId={roomId}  />
};

export default CanvasPage;
