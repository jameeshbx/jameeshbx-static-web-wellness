"use client";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const consent = localStorage.getItem("cookiesAccepted");
   
    if (!consent) {
      setIsVisible(true); 
    }
  }, []);


  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true"); 
    setIsVisible(false); 
    
  };

  
  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false"); 
    setIsVisible(false); 
    
  };

 
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 px-4 lg:justify-end lg:items-end lg:bottom-5 lg:right-5"
    >
      <div
        className="bg-cream text-white p-4 rounded-lg shadow-lg flex flex-col items-center gap-4 w-full max-w-[400px] mx-5 lg:w-[400px] lg:h-[200px]"
      >
        <p className="text-sm text-foreground text-center max-w-[300px] md:max-w-[400px]">
          We use cookies to improve your experience <br /> on our site. By using our site you consent <br /> to cookies{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="text-foreground-800 underline font-bold"
          >
            Learn more
          </a>
        </p>
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <button
            onClick={handleAccept}
            className="bg-cream-500 hover:bg-black hover:text-white text-foreground py-2 px-4 rounded border border-black w-56  text-sm md:text-lg"
          >
            Allow Cookies
          </button>
          <button
            onClick={handleDecline}
            className="bg-cream hover:bg-black hover:text-white text-black py-2 px-4 rounded border border-black w-56  text-sm md:text-lg"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;









