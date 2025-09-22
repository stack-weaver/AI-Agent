"use client";


import { HomeHeader } from "../components/header";

export const HomeView = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />
      <main className="flex-1 p-4 flex flex-col gap-4">Home view</main>
    </div>
  );
};
