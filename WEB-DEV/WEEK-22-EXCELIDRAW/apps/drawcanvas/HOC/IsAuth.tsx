"use client";

import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const IsAuth = (Element: React.ComponentType, url: string = "/") => {
  const Wrapper = (props: any) => {
    const { user } = useContext(AuthContext);

    if (user?.id) {
      redirect(url);
    }

    return <Element {...props} />;
  };

  Wrapper.displayName = `IsAuth(${Element.displayName || Element.name || "Component"})`;

  return Wrapper;
};

export default IsAuth;
