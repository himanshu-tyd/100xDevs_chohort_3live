"use client";

import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { Paintbrush, ArrowRight, Plus, User } from "lucide-react";
import { useCreatRoom } from "@/hooks/useCreateRom";
import ButtonLoader from "@/components/ButtonLoader";
import { getContext } from "@/context/AuthContext";

import RoomCard from "@/components/RoomCard";
import useFetchRooms from "@/hooks/useFetchRoom";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import {  useRouter } from "next/navigation";

function CreateRoom() {
  const [roomName, setRoomName] = useState("");
  const { loading, createRoom } = useCreatRoom();

  const { user, setUser } = getContext();
  const { loading: roomLoader, error, data: rooms } = useFetchRooms();
  const router = useRouter();


  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
   
  };

  useLayoutEffect(() => {
    if (!user?.id) {
      router.push("/sign-in");
    }
  }, [router, user?.id]);

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    createRoom({ name: roomName });
    setRoomName("");
  };

  

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-[138deg] from-[#AEEAEC] via-[#FFC9D0] to-[#56C5FF]">
      {/* Main Header */}
      <header className="w-full px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/20 border-b border-white/20">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            <Paintbrush className="w-6 h-6 mr-2 text-slate-800" />
            <span className="font-bold text-xl text-slate-800">
              100x Canvas
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
              <User className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">
                {user?.name}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
            >
              <Paintbrush className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Your Canvas Rooms
              </h1>
              <p className="text-slate-600 mt-1">
                Create or join existing rooms to start collaborating
              </p>
            </div>
            <button
              onClick={() =>
                document.getElementById("createRoomInput")?.focus()
              }
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/95 text-blue-600 font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              <Plus className="w-5 h-5" />
              New Room
            </button>
          </div>

          {/* Create Room Section */}
          <div className="backdrop-blur-md bg-white/20 rounded-xl p-6 shadow-lg border border-white/20">
            <form onSubmit={handleCreateRoom} className="flex gap-4">
              <input
                id="createRoomInput"
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 text-slate-800"
                placeholder="Enter room name..."
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm flex items-center gap-2"
              >
                {loading ? (
                  <ButtonLoader />
                ) : (
                  <>
                    Create Room
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Rooms Grid */}

          {roomLoader ? (
            <Loader />
          ) : error ? (
            <Error lable={error} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room ,index) => (
                <RoomCard key={index} room={room} />
              ))}
              {rooms.length < 0 && (
                <div className="col-span-full text-center py-12 backdrop-blur-md bg-white/20 rounded-xl">
                  <p className="text-slate-600">No rooms created yet</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CreateRoom;
