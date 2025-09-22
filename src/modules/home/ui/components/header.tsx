import Image from "next/image";

export const HomeHeader = () => (
  <header className="w-full flex flex-col items-center py-6 bg-white shadow-sm">
    <div className="flex items-center gap-3">
      <Image src="/logo.svg" alt="App Logo" width={48} height={48} />
      <span className="text-2xl font-bold text-gray-900">My AI Agent</span>
    </div>
    <span className="mt-2 text-sm text-gray-500">Your personalized AI-powered assistant</span>
  </header>
);
