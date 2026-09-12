import React, { useState, useEffect } from 'react';
import { anniversaryConfig } from './config/anniversaryData';
import { LoginScreen } from './components/LoginScreen';
import { Navbar } from './components/Navbar';
import { FloatingHearts } from './components/FloatingHearts';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { StoryTimeline } from './components/StoryTimeline';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveLetter } from './components/LoveLetter';
import { MemoriesSection } from './components/MemoriesSection';
import { FinalSection } from './components/FinalSection';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in during current session
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    if (loggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <LoginScreen onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="relative min-h-screen selection:bg-pink-200 selection:text-pink-900">
      {/* Navbar Header */}
      <Navbar coupleNames={anniversaryConfig.coupleNames} />

      {/* Floating Ambient Background FX */}
      <FloatingHearts />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          heroData={anniversaryConfig.hero}
          startDate={anniversaryConfig.startDate}
        />

        <StoryTimeline timelineData={anniversaryConfig.timeline} />

        <PhotoGallery
          galleryQuote={anniversaryConfig.galleryQuote}
          images={anniversaryConfig.galleryImages}
        />

        <LoveLetter letterData={anniversaryConfig.letter} />

        <MemoriesSection memoriesData={anniversaryConfig.memories} />

        <FinalSection finalData={anniversaryConfig.final} />
      </main>

      {/* Floating Audio Control Player */}
      <MusicPlayer musicUrl={anniversaryConfig.musicUrl} />
    </div>
  );
}

export default App;
