'use client'

import { isServer } from "@/lib/helper";
import { userDataType } from "@/types/types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface contextType {
  user: userDataType | null;
  setUser: React.Dispatch<React.SetStateAction<userDataType | null>>;
}

export const AuthContext = createContext<contextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userDataType | null>(null);

  useEffect(() => {

      if(isServer) return
    const storedUser = window.localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const context = {
    setUser,
    user,
  };

  return   <AuthContext.Provider value={context}> {children}</AuthContext.Provider>

}

export default  AuthContextProvider

export const getContext=()=>{
  const contex= useContext(AuthContext)

  if(contex)
  {
    return contex
  }else{
    throw new Error('Please Make sure you are login')
  }

}