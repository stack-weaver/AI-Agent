"use client";


import { HomeHeader } from "../components/header";


export const HomeView = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HomeHeader />
      <main
        className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:px-8 gap-8"
      >
        <section className="w-full max-w-md bg-white rounded-xl shadow p-8 flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">My AI Agent</h1>
          <p className="text-lg text-gray-600 text-center">
            Your personalized AI-powered assistant for seamless meetings, agent management, and smart collaboration. Get started with quick actions below!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="/dashboard/meetings"
              className="w-full sm:w-auto px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-center transition hover:bg-primary/90"
            >
              Go to Meetings
            </a>
            <a
              href="/dashboard/agents"
              className="w-full sm:w-auto px-6 py-2 rounded-lg border border-primary text-primary font-medium text-center transition hover:bg-primary/10"
            >
              Go to Agents
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
