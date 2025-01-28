"use client";

import {
  Pencil,
  Share2,
  Download,
  Users,
  Shapes,
  Palette,
  ArrowRight,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext, getContext } from "@/context/AuthContext";

const Landing = () => {
  const { user } = getContext();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shapes className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">
                DrawCanvas
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#examples" className="text-gray-600 hover:text-gray-900">
                Examples
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href={user?.id ? " /" : "/sign-in"}
                className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
              >
                {user?.id ? user.name : " Log in"}
              </Link>
              <Link
                href={user?.id ? "/canvas" : "/sign-up"}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
              >
                {user?.id ? "Start" : " Try Now "}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Collaborate and Create
            <span className="text-indigo-600"> Beautiful Diagrams</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The simplest way to create and share diagrams, wireframes, and
            visual ideas. No account required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium flex items-center justify-center">
              Start Drawing <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 font-medium flex items-center justify-center">
              <Github className="mr-2 w-5 h-5" /> View on GitHub
            </button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=2000&q=80"
              alt="Drawing Canvas Interface"
              className="w-full"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to create
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Pencil />}
              title="Freehand Drawing"
              description="Draw naturally with our smooth freehand drawing tools and customizable brushes."
            />
            <FeatureCard
              icon={<Share2 />}
              title="Real-time Collaboration"
              description="Work together with your team in real-time, see changes instantly."
            />
            <FeatureCard
              icon={<Download />}
              title="Export Options"
              description="Export your work in multiple formats including PNG, SVG, and PDF."
            />
            <FeatureCard
              icon={<Users />}
              title="Team Workspace"
              description="Organize your drawings in shared workspaces with your team."
            />
            <FeatureCard
              icon={<Shapes />}
              title="Smart Shapes"
              description="Perfect geometric shapes with our smart shape recognition."
            />
            <FeatureCard
              icon={<Palette />}
              title="Custom Styling"
              description="Customize colors, fonts, and styles to match your brand."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start creating?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of teams who trust DrawCanvas for their visual
            collaboration needs.
          </p>
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-center text-gray-600">
              © 2024 DrawCanvas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Landing;
