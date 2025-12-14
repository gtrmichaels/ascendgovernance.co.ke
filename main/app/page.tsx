'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/homepage');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Fade out loading screen after 2 seconds
    const fadeTimer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimer);
    };
  }, [router]);

  const handleEnter = () => {
    router.push('/homepage');
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: "\n        /* Loading screen styles */\n        .loading-screen {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(135deg, #213B31 0%, #1C3229 100%);\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            z-index: 9999;\n            transition: opacity 0.5s ease-out, visibility 0.5s ease-out;\n        }\n\n        .loading-screen.fade-out {\n            opacity: 0;\n            visibility: hidden;\n        }\n\n        .logo-container {\n            text-align: center;\n            margin-bottom: 2rem;\n        }\n\n        .logo-text {\n            font-family: 'Inter', sans-serif;\n            font-size: 2.5rem;\n            font-weight: 700;\n            color: #FFFFFF;\n            margin-bottom: 0.5rem;\n            letter-spacing: -0.025em;\n        }\n\n        .logo-subtitle {\n            font-family: 'Inter', sans-serif;\n            font-size: 1rem;\n            font-weight: 400;\n            color: #D4AF37;\n            letter-spacing: 0.1em;\n            text-transform: uppercase;\n        }\n\n        .loading-spinner {\n            width: 40px;\n            height: 40px;\n            border: 3px solid rgba(212, 175, 55, 0.3);\n            border-top: 3px solid #D4AF37;\n            border-radius: 50%;\n            animation: spin 1s linear infinite;\n        }\n\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n\n        .loading-text {\n            font-family: 'Inter', sans-serif;\n            font-size: 0.875rem;\n            color: #F8F9FA;\n            margin-top: 1rem;\n            opacity: 0.8;\n        }\n\n        /* Fade in animation for content */\n        .content {\n            opacity: 0;\n            animation: fadeInContent 0.8s ease-out 0.5s forwards;\n        }\n\n        @keyframes fadeInContent {\n            from {\n                opacity: 0;\n                transform: translateY(20px);\n            }\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n\n        /* Respect reduced motion preferences */\n        @media (prefers-reduced-motion: reduce) {\n            .loading-screen,\n            .loading-spinner,\n            .content {\n                animation: none !important;\n                transition: none !important;\n            }\n            \n            .content {\n                opacity: 1;\n                transform: none;\n            }\n        }\n        /* Hero section background image and overlay */\n        #mainContent.hero-bg {\n            position: relative;\n            background: linear-gradient(rgba(28,50,41,0.65), rgba(28,50,41,0.65)), url('/images/nai-2.jpg') center center/cover no-repeat;\n            min-height: 100vh;\n        }\n        #mainContent.hero-bg > .overlay {\n            position: absolute;\n            top: 0; left: 0; right: 0; bottom: 0;\n            background: rgba(28,50,41,0.65);\n            z-index: 1;\n        }\n        #mainContent.hero-bg > .hero-content {\n            position: relative;\n            z-index: 2;\n        }\n        @media (max-width: 640px) {\n            #mainContent.hero-bg {\n                background-position: center 30%;\n            }\n        }\n    " }} />
      {/* Loading Screen */}
      <div id="loadingScreen" className={`loading-screen ${!showLoading ? 'fade-out' : ''}`}>
        <div className="logo-container">
          <div className="logo-text">Ascend Governance</div>
          <div className="logo-subtitle">Corporate Excellence</div>
        </div>
        <div className="loading-spinner" />
        <div className="loading-text">Preparing your governance solutions...</div>
      </div>
      {/* Main Content */}
      <div id="mainContent" className="content hero-bg min-h-screen flex items-center justify-center">
        <div className="overlay" />
        <div className="hero-content text-center max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Ascend Governance
            </h1>
            <p className="text-xl text-white/90 mb-2">
              Corporate Governance Excellence
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Professional corporate governance consultancy providing expert guidance on board composition, 
            compliance, and organizational leadership for today&apos;s dynamic business environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              id="enterBtn" 
              onClick={handleEnter}
              className="btn-primary text-lg px-8 py-4 rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              Enter Platform
            </button>
            <div className="text-sm text-white/80">
              Redirecting automatically in <span id="countdown">{countdown}</span> seconds
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
