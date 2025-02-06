import { shapes as shapeTypes } from "@/app/_draw/shapes";
import { shapes } from "@/constans";



export type SingUpType = {
  username: string;
  password: string;
  name: string;
};

export type signInType = {
  username: string;
  password: string;
};

export type userDataType = {
  id: string;
  email: string;
  password: string;
  name: string;
  photo?: string | null;
};

export type roomType = {
  name: string;
};

export type canvasType = {
  w: number;
  h: number;
};

export type messageType={
  id:number,
  roomId:number,
  message: string,
  userId:number
}





export type shapesType = (typeof shapes)[number]["name"] | null;
