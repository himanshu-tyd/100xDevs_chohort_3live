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


export type roomType={
  name:string
}
