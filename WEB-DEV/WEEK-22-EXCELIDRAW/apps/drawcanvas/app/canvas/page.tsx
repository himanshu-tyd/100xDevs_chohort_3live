"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shapes,
  Copy,
  Users,
  Settings,
  Lock,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useCreatRoom } from "@/hooks/useCreateRom";
import ButtonLoader from "@/components/ButtonLoader";

function CreateRoom() {
  const [roomName, setRoomName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [showInviteLink, setShowInviteLink] = useState(false);
  const [inviteLink, setInviteLink] = useState("");

  const { loading, createRoom } = useCreatRoom();

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();

    createRoom({ name: roomName });
    
    const demoLink = `test link here`;
    setInviteLink(demoLink);
    // setShowInviteLink(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shapes className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">
                DrawCanvas
              </span>
            </Link>
            <nav className="flex items-center space-x-4">
              <Link href="/rooms" className="text-gray-500 hover:text-gray-900">
                My Rooms
              </Link>
              <Link
                href="/settings"
                className="text-gray-500 hover:text-gray-900"
              >
                <Settings className="w-5 h-5" />
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          {!showInviteLink ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Create a New Room
                </h1>
                <p className="text-gray-600">
                  Set up your collaborative drawing space
                </p>
              </div>

              <form onSubmit={handleCreateRoom} className="space-y-6">
                <div>
                  <label
                    htmlFor="roomName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Room Name
                  </label>
                  <input
                    type="text"
                    id="roomName"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="My Drawing Room"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Privacy Settings
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setIsPrivate(false)}
                      className={`p-4 border rounded-lg text-left ${
                        !isPrivate
                          ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Globe className="w-5 h-5 text-gray-700" />
                        <div
                          className={`h-4 w-4 rounded-full ${!isPrivate ? "bg-indigo-500" : "border border-gray-300"}`}
                        />
                      </div>
                      <h3 className="font-medium text-gray-900">Public Room</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Anyone with the link can join
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsPrivate(true)}
                      className={`p-4 border rounded-lg text-left ${
                        isPrivate
                          ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Lock className="w-5 h-5 text-gray-700" />
                        <div
                          className={`h-4 w-4 rounded-full ${isPrivate ? "bg-indigo-500" : "border border-gray-300"}`}
                        />
                      </div>
                      <h3 className="font-medium text-gray-900">
                        Private Room
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Only invited people can join
                      </p>
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {loading ? (
                      <ButtonLoader />
                    ) : (
                      <span className="flex items-center">
                        Create Room <ArrowRight className="ml-2 w-5 h-5" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-8">
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Room Created!
                </h2>
                <p className="text-gray-600">
                  Share this link with others to invite them to your room
                </p>
              </div>

              <div className="max-w-xl mx-auto">
                <div className="flex items-center space-x-2 mb-6">
                  <input
                    type="text"
                    value={inviteLink}
                    readOnly
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Copy className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4">
                  <Link
                    href={`/room/${inviteLink.split("/").pop()}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Enter Room <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/rooms"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View All Rooms
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CreateRoom;
