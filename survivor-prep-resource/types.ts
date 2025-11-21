export interface TimelineEvent {
  day: string;
  title: string;
  description?: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  season: string;
  image: string;
}

export interface SubTopic {
  title: string;
  description: string;
  image?: string;
}

export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  subTopics: SubTopic[];
}