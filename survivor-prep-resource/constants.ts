import { TimelineEvent, PortfolioItem, Topic } from './types';

export const HERO_IMAGE_URL = 'katesurvivor.jpeg';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { day: 'Day 1', title: 'Marooned' },
  { day: 'Day 2', title: 'First Vote' },
  { day: 'Day 13', title: 'Tribe Swap' },
  { day: 'Day 24', title: 'The Merge' },
  { day: 'Day 35', title: 'Loved Ones' },
  { day: 'Day 41', title: 'Final 4' },
  { day: 'Day 42', title: 'Sole SURVIVOR' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', name: 'The Strategist', season: 'Season 45', image: 'https://picsum.photos/400/600?random=1' },
  { id: '2', name: 'The Socialite', season: 'Season 32', image: 'https://picsum.photos/400/600?random=2' },
  { id: '3', name: 'The Beast', season: 'Season 28', image: 'https://picsum.photos/400/600?random=3' },
  { id: '4', name: 'The Villain', season: 'Season 20', image: 'https://picsum.photos/400/600?random=4' },
];

export const TOPICS: Topic[] = [
  {
    id: 'pregame',
    title: 'Pregame Guidelines',
    subtitle: 'The game begins before you hit the sand. Preparation is the only variable you can control.',
    subTopics: [
      {
        title: 'Archetype Analysis',
        description: 'Identify where you fit in the casting spectrum. Are you the "Brain", the "Beauty", or the "Brawn"? Knowing your perceived role helps you break or lean into stereotypes.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Archetypes'
      },
      {
        title: 'Alliance Pre-viz',
        description: 'Strategies for forming early bonds. Learn to recognize the subtle cues of potential allies during the pre-game lockdown.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Alliances'
      },
      {
        title: 'Survival Skills 101',
        description: 'Essential guide to fire making with flint, shelter structural integrity, and basic knot tying. Don\'t be the liability at camp.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Skills'
      }
    ]
  },
  {
    id: 'meta',
    title: 'Meta Game',
    subtitle: 'Understanding the invisible currents that drive the modern game.',
    subTopics: [
      {
        title: 'Threat Management',
        description: 'The art of lowering your profile while maintaining agency. How to be a pilot, not a passenger, without painting a target on your back.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Threats'
      },
      {
        title: 'Voting Blocs',
        description: 'Navigating the fluid gameplay of the new era. Why rigid alliances are dead and how to surf the chaos of voting blocs.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Voting+Blocs'
      },
      {
        title: 'Jury Management',
        description: 'Starting the game with the end in mind. How to vote people out in a way that makes them want to give you a million dollars.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=The+Jury'
      }
    ]
  },
  {
    id: 'outwit',
    title: 'Outwit',
    subtitle: 'The Social Game. People are the most dangerous puzzle pieces.',
    subTopics: [
      {
        title: 'Social Intelligence',
        description: 'Reading the room and understanding player motivations. The difference between hearing and listening.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Social+IQ'
      },
      {
        title: 'Art of Deception',
        description: 'When to lie, how to lie, and crucially, when to tell the truth to build credit for a future blindside.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Deception'
      },
      {
        title: 'Info Brokerage',
        description: 'Controlling the flow of information. Information is the currency of the game; spend it wisely.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Information'
      }
    ]
  },
  {
    id: 'outplay',
    title: 'Outplay',
    subtitle: 'The Physical Game. Adapting to the environment and the challenges.',
    subTopics: [
      {
        title: 'Challenge Prowess',
        description: 'Training guides for swimming, balance, and endurance. You don\'t need to win everything, just the ones that save your life.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Challenges'
      },
      {
        title: 'Camp Life',
        description: 'Balancing work ethic with energy conservation. How to be helpful enough to keep, but lazy enough to compete.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Camp+Life'
      },
      {
        title: 'Advantage Hunting',
        description: 'Clues, idols, and advantages. How to search effectively without raising suspicion from the tribe.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Advantages'
      }
    ]
  },
  {
    id: 'outlast',
    title: 'Outlast',
    subtitle: 'The Endurance Game. Surviving the elements and your own mind.',
    subTopics: [
      {
        title: 'Mental Resilience',
        description: 'Coping mechanisms for isolation and paranoia. How to keep your sanity when everyone is plotting against you.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Resilience'
      },
      {
        title: 'Physical Endurance',
        description: 'Managing hunger, sleep deprivation, and elements. Techniques to maintain focus on an empty stomach.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Endurance'
      },
      {
        title: 'The Long Game',
        description: 'Pacing yourself for the 26-day marathon. Timing your peak performance for the final stretch.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Long+Game'
      }
    ]
  },
  {
    id: 'endgame',
    title: 'End Game',
    subtitle: 'Closing the deal. The final hurdles between you and the title.',
    subTopics: [
      {
        title: 'Fire Making',
        description: 'Techniques to win the forced Final Four fire-making challenge. The only safety net left.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Fire'
      },
      {
        title: 'Final Tribal',
        description: 'Structuring your opening statement. How to articulate your game without sounding arrogant or passive.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=FTC'
      },
      {
        title: 'The Pitch',
        description: 'Resume building 101. Identifying your key moves and translating them into a winning narrative.',
        image: 'https://placehold.co/600x400/000000/FF69B4?text=Resume'
      }
    ]
  }
];