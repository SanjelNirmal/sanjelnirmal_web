import { useEffect, useState } from "react";
import { Music } from "lucide-react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1); 

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-hero animate-fade-in">
      <div className="flex flex-col items-center space-y-6">
        
        <h2 className="font-heading text-2xl sm:text-3xl text-primary-foreground animate-fade-in-up">
          RadhaVallav Shri Harivansh
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
