'use client'

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/textInput";
import  {useRouter}  from "next/navigation";



export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"  
      }}
    >
      <TextInput placeholder="Room Name" />
      <button onClick={()=>router.push("/room/232")}  >Join</button>
    </div>
  );
}
