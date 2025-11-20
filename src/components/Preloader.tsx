import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-hero animate-fade-in">
      <Loader2 className="w-16 h-16 text-yellow-400 animate-spin-slow mb-6" />
      <h2 className="font-heading text-2xl sm:text-3xl text-primary-foreground animate-fade-in-up">
        RadhaVallav Shri Harivansh
      </h2>
      <p className="text-sm text-white mt-2 animate-pulse">
        In the loving shelter of Radha Rani's lotus feet...
      </p>
    </div>
  );
};

export default Preloader;
