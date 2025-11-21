import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { ContentHubs } from './components/ContentHubs';
import { CoreTriangle } from './components/CoreTriangle';
import { EndGame } from './components/EndGame';
import { Portfolios } from './components/Portfolios';
import { TopicPage } from './components/TopicPage';
import { TOPICS } from './constants';

const App: React.FC = () => {
  const [currentTopicId, setCurrentTopicId] = useState<string | null>(null);

  const handleTopicSelect = (id: string) => {
    setCurrentTopicId(id);
  };

  const handleBack = () => {
    setCurrentTopicId(null);
  };

  const currentTopic = TOPICS.find(t => t.id === currentTopicId);

  if (currentTopic) {
    return <TopicPage topic={currentTopic} onBack={handleBack} />;
  }

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white selection:bg-neon-pink selection:text-black">
      <Hero />
      <Timeline />
      <ContentHubs onTopicSelect={handleTopicSelect} />
      <CoreTriangle onTopicSelect={handleTopicSelect} />
      <EndGame onTopicSelect={handleTopicSelect} />
      <Portfolios />
    </main>
  );
};

export default App;