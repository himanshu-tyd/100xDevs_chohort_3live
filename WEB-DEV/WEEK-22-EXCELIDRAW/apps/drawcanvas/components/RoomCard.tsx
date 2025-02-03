import React from "react";
import Link from "next/link";
import { Grid, User } from "lucide-react";

interface roomProps {
  room: {
    id: number;
    slug: string;
    // lastActive: string;
    createdAt: string;
    // participants: number;
  };
}

const RoomCard = ({ room }: roomProps) => {
  return (
    <Link
      href={`/canvas/${room.id}`}
      className="group block rounded-xl bg-white/30 hover:bg-white/40 transition-all duration-300 transform hover:scale-102 backdrop-blur-sm border border-white/20 overflow-hidden shadow-lg hover:shadow-xl"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
            {room.slug}
          </h3>
          <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">
            <Grid className="w-4 h-4 text-slate-600" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <User className="w-4 h-4" />
            {/* <span>{room.participants} participants</span> */}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">
              Created {new Date(room.createdAt).toLocaleDateString()}
            </span>
        {/* <span className="text-blue-600">Active {room.lastActive}</span> */}
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
    </Link>
  );
};

export default RoomCard

