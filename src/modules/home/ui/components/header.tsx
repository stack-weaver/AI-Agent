import Image from "next/image";

export const HomeHeader = () => (
  <header className="w-full flex flex-col items-center py-4 sm:py-6 bg-white shadow-sm">
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full justify-center px-2">
      <Image src="/logo.svg" alt="App Logo" width={40} height={40} className="sm:w-12 sm:h-12 w-10 h-10" />
      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">My AI Agent</span>
    </div>
    <span className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 text-center px-2">Your personalized AI-powered assistant</span>
  </header>
);
