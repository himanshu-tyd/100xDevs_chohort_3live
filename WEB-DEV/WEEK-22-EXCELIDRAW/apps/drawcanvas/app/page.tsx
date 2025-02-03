"use client";

import Button from "@/components/Button";
import { getFullYear } from "@/lib/helper";
import { ArrowRight, Paintbrush, Share2, Users, LogIn } from "lucide-react";
import Link from "next/link";
import { getContext } from "@/context/AuthContext";

const LandingPage100xCanvas = () => {
  const { user } = getContext();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-[138deg] from-[#AEEAEC] via-[#FFC9D0] to-[#56C5FF]">
      <header className="w-full px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/20 border-b border-white/20">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            <Paintbrush className="w-6 h-6 mr-2 text-slate-800" />
            <span className="font-bold text-xl text-slate-800">
              100x Canvas
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-800 hover:text-slate-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-slate-800 hover:text-slate-600 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-slate-800 hover:text-slate-600 transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                  <span className="text-sm text-slate-800">Welcome back, </span>
                  <span className="font-medium text-slate-800">
                    {user.name}
                  </span>
                </div>
                <Link
                  href="/canvas"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
                >
                  <Paintbrush className="w-4 h-4" />
                  <span className="hidden sm:inline">My Canvas</span>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/sign-in"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-800 hover:bg-white/20 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign In</span>
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-slate-800">
                  Unleash Your Creativity with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    100x Canvas
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-700 text-lg md:text-xl">
                  The ultimate digital canvas for artists, designers, and
                  visionaries. Create, collaborate, and inspire.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white/95  shadow-lg backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-gradient-to-r border-l-blue-600 border-r-purple-600">
                  <Link
                    href={user?.id ? "/canvas" : "/sign-in"}
                    className="flex items-center justify-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold group-hover:text-blue-700 transition-colors p-1"
                  >
                    {user?.id ? "Open Canvas" : "Start Creating"}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform text-purple-600" />
                  </Link>
                </Button>
                <Button className=" bg-blue-500 border-2 hover:border-slate-700 text-slate-700 hover:text-slate-700 transition-all duration-300 transform hover:scale-105  hover:bg-white ">
                  Explore Gallery
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 backdrop-blur-md bg-white/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center text-slate-800">
                See It in Action
              </h2>
              <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/demo-canvas.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <p className="text-slate-700 text-lg text-center max-w-2xl">
                Watch how easy it is to bring your ideas to life with our
                intuitive drawing tools and collaborative features.
              </p>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 backdrop-blur-md bg-white/10"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-slate-800">
              Why Choose <span className="text-blue-600">100x Canvas</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Paintbrush className="h-10 w-10 text-pink-300" />}
                title="Intuitive Tools"
                description="Powerful yet easy-to-use tools that bring your ideas to life."
              />
              <FeatureCard
                icon={<Share2 className="h-10 w-10 text-purple-300" />}
                title="Seamless Sharing"
                description="Share your creations instantly with the world or collaborate in real-time."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-indigo-300" />}
                title="Vibrant Community"
                description="Join a community of creators, get inspired, and showcase your work."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 backdrop-blur-md bg-white/20">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Paintbrush className="w-6 h-6 text-slate-700" />
            <span className="text-sm text-slate-700">
              © {getFullYear()} 100x Canvas
            </span>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-center md:text-right text-slate-600">
            <p>This project was created as part of the 100xDev course.</p>
            <p>Designed with ❤️ by the Himanshu</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-700">{description}</p>
    </div>
  );
}

export default LandingPage100xCanvas;
