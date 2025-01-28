import Canvas from "@/app/_componets/Canvas";

interface canvasprops {
  params: {
    roomId: string;
  };
}

const CanvasPage = async({ params }: canvasprops) => {
  const roomId =(await params).roomId;

  

console.log(roomId)

  return <Canvas roomId={roomId} />;
};

export default CanvasPage;
