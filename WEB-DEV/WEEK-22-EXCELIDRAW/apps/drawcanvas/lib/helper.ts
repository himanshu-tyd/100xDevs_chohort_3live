"use client";

export const getFullYear = () => {
  return new Date().getFullYear();
};

export const isServer: boolean = typeof window == "undefined";

export const getUser = () => {
  if (!isServer) {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }
};

export const getToken = () => {
  if (!isServer) {
    return localStorage.getItem("token");
  }
};

export const user = getUser();
export const token = getToken();
