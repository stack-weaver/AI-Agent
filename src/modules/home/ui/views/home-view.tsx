"use client";
import Link from 'next/link';

import { HomeHeader } from "../components/header";


export const HomeView = () => {
  return (
  <div className="flex flex-col min-h-screen bg-background">
      <HomeHeader />
      <main
        className="flex-1 flex flex-col items-center justify-center px-4 py-6 sm:px-8 md:py-12 lg:py-20 gap-8 w-full"
      >
        <section
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-center gap-6 sm:gap-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center break-words">
            My AI Agent
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center break-words">
            Your personalized AI-powered assistant for seamless meetings, agent management, and smart collaboration. Get started with quick actions below!
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full justify-center">
            <Link
              href="/meetings"
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-primary text-primary-foreground font-medium text-center transition hover:bg-primary/90 text-base sm:text-lg"
            >
              Go to Meetings
            </Link>
            <Link
              href="/agents"
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-2 rounded-lg border border-primary text-primary font-medium text-center transition hover:bg-primary/10 text-base sm:text-lg"
            >
              Go to Agents
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
