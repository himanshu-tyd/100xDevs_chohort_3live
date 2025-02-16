"use client";

import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { Paintbrush, ArrowLeft } from "lucide-react";
import { SingUpType } from "@/types/types";
import { useSignUp } from "@/hooks/useSignUp";
import ButtonLoader from "@/components/ButtonLoader";
import { getContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function SignUp() {
  const [formData, setFormData] = useState<SingUpType>({
    username: "",
    password: "",
    name: "",
  });

  const { user } = getContext();

  const router = useRouter();

  useLayoutEffect(() => {
    if (user?.id) {
      router.push("/canvas");
    }
  }, [user?.id, router]);

  const { loading, singUp } = useSignUp();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await singUp(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-[138deg] from-[#AEEAEC] via-[#FFC9D0] to-[#56C5FF]">
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <Paintbrush className="w-8 h-8 text-slate-800" />
            <span className="text-2xl font-bold text-slate-800">
              100x Canvas
            </span>
          </Link>
          <h2 className="text-center text-3xl font-bold text-slate-800">
            Create your account
          </h2>
          <p className="mt-2 text-center text-slate-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="backdrop-blur-md bg-white/20 rounded-xl p-8 shadow-lg border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="appearance-none block w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="username"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="appearance-none block w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="appearance-none block w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <ButtonLoader /> : "Create account"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <Link
          href="/"
          className="mt-8 flex items-center justify-center text-sm text-slate-700 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
