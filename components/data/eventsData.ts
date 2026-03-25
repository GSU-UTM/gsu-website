import ColeDolnyImg from '../../assets/cole dolny.png';
import MikeJacobsImg from '../../assets/mike jacobs.png';
import JaseImg from '../../assets/jase.png';

export interface EventActivity {
  name: string;
  duration?: string;
}

export interface EventSpeaker {
  name: string;
  title: string;
  photo?: string;
}

export interface Event {
  id: string;
  week: number;
  title: string;
  date: string; // Display format
  dateObj: Date; // For sorting and filtering
  totalDuration: string;
  description: string;
  activities: EventActivity[];
  semester: 1 | 2;
  speakers?: EventSpeaker[];
  registrationLink?: string;
  location?: string;
  cohost?: string;
}

// Helper function to check if an event is in the past
export const isPastEvent = (event: Event): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset to start of day
  return event.dateObj < today;
};

// Helper function to get upcoming events
export const getUpcomingEvents = (events: Event[]): Event[] => {
  return events.filter(event => !isPastEvent(event)).sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
};

// Helper function to get past events
export const getPastEvents = (events: Event[]): Event[] => {
  return events.filter(event => isPastEvent(event)).sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
};

export const allEvents: Event[] = [
  // Semester 1 Events
  {
    id: 'week4-opening',
    week: 4,
    title: 'Opening Ceremony',
    date: 'September 24, 2025',
    dateObj: new Date('2025-09-24'),
    totalDuration: '2 hours',
    description: 'Welcome to GSU UTM! Join us for our official launch with guest speakers, networking, and food.',
    semester: 1,
    speakers: [
      {
        name: 'Cole Dolny',
        title: 'TEC Chair & prev CEO at ASL Distribution',
        photo: ColeDolnyImg
      },
      {
        name: 'Mike Jacobs',
        title: 'CEO at The New Business and Co-Founder of Tourism Technology',
        photo: MikeJacobsImg
      },
      {
        name: 'Jase Lachowiez',
        title: 'Founder of Lachowiez Capital & MJ Landscapers',
        photo: JaseImg
      }
    ],
    activities: [
      { name: 'Club Introduction', duration: '15 min' },
      { name: '2-3 Guest Speakers', duration: '45 min' },
      { name: 'Interview Panel with speakers' },
      { name: 'Networking ice-breakers' },
      { name: 'Food + Networking', duration: '1 hour' }
    ]
  },
  {
    id: 'week5-workshop',
    week: 5,
    title: 'Workshop: The Startup Process',
    date: 'October 3, 2025',
    dateObj: new Date('2025-10-03'),
    totalDuration: '2 hours',
    description: 'Learn the fundamentals of building a startup from idea to launch using Lean Startup principles.',
    semester: 1,
    activities: [
      { name: 'The startup process: Idea → Validation → MVP → Launch' },
      { name: 'Walk through Lean Startup principles' },
      { name: 'Initial team + idea formation' },
      { name: 'Workshop', duration: '30 min' },
      { name: 'Problem brainstorming in teams and quick pitch prep', duration: '1 hour' },
      { name: 'Problem + Solution pitches', duration: '30 min' }
    ]
  },
  {
    id: 'week6-design-workshop',
    week: 6,
    title: 'Workshop: Prototyping & Design',
    date: 'October 3, 2025',
    dateObj: new Date('2025-10-03'),
    totalDuration: '2 hours',
    description: 'Master product design and prototyping. Learn to determine MVP features and test UI/UX effectively. (Merged with Workshop 1)',
    semester: 1,
    activities: [
      { name: 'Prototyping and Product/Service Design' },
      { name: 'How to determine which features to include in MVP' },
      { name: 'UI + UX and how to test it' },
      { name: 'Workshop', duration: '45 min' },
      { name: 'Market research and design inspiration', duration: '15 min' },
      { name: 'Work on design + product flow/functionality', duration: '45 min' },
      { name: 'Present design ideas / prototype drawings or Figma', duration: '15 min' }
    ]
  },
  {
    id: 'week7-coworking',
    week: 7,
    title: 'Co-Working Session',
    date: 'October 15, 2025',
    dateObj: new Date('2025-10-15'),
    totalDuration: '2 hours',
    description: 'Collaborative work session for teams to develop their startup ideas with structured networking breaks.',
    semester: 1,
    activities: [
      { name: 'Ice Breaker - people share what they will be working on' },
      { name: 'Teams and individuals work on developing startup idea and prioritizing tasks' },
      { name: 'Work session 1', duration: '45 min' },
      { name: 'Networking and sharing ideas', duration: '10 min' },
      { name: 'Work session 2', duration: '45 min' },
      { name: 'Large Group Discussion + Accountability Planning', duration: '15 min' }
    ]
  },
  {
    id: 'week8-ai-workshop',
    week: 8,
    title: 'Workshop: AI for Startups',
    date: 'October 22, 2025',
    dateObj: new Date('2025-10-22'),
    totalDuration: '2 hours',
    description: 'Supercharge your workflow with AI. Learn prompt engineering and AI integration for business processes.',
    semester: 1,
    activities: [
      { name: 'Supercharging your workflow with AI' },
      { name: 'Prompt engineering + AI integration into product or business processes' },
      { name: 'AI for marketing, development, business decisions, and busy work', duration: '45 min' },
      { name: 'Develop an AI strategy and implement into product/marketing' }
    ]
  },
  {
    id: 'week9-coworking',
    week: 9,
    title: 'Co-Working Session',
    date: 'October 29, 2025',
    dateObj: new Date('2025-10-29'),
    totalDuration: '2 hours',
    description: 'Continued team development with focused work sessions and accountability planning.',
    semester: 1,
    activities: [
      { name: 'Teams meet to work on startup' },
      { name: 'Work session 1', duration: '45 min' },
      { name: 'Networking, snacks & chill', duration: '15 min' },
      { name: 'Work session 2', duration: '45 min' },
      { name: 'Large Group Discussion + Accountability Planning', duration: '15 min' }
    ]
  },
  {
    id: 'week11-case-competition',
    week: 11,
    title: '🏆 Entrepreneurial Case Competition - FLAGSHIP EVENT',
    date: 'November 12, 2025',
    dateObj: new Date('2025-11-12'),
    totalDuration: '3 hours (6:00 PM - 9:00 PM)',
    description: '🔥 GSU\'s BIGGEST EVENT OF THE SEMESTER! Compete in real-world business challenges judged by industry leaders and founders. 10 teams across 5 categories battle for cash prizes. Network with professionals, showcase your skills, and prove you have what it takes to build the future.',
    semester: 1,
    activities: [
      { name: '🎯 5 Business Categories: Marketing, Operations, Data Analytics, HR, Sales' },
      { name: '💰 Cash Prizes for Top 3 Teams' },
      { name: '🎤 5-Minute Team Presentations' },
      { name: '👔 Industry Professional Judges & Founders' },
      { name: '🤝 Networking with Mentors & Peers' },
      { name: '🍕 Food & Refreshments Provided' },
      { name: '📊 Evaluated on Strategy, Innovation, Impact & Presentation' }
    ]
  },
  {
    id: 'week12-general-meeting',
    week: 12,
    title: 'General Meeting',
    date: 'November 19, 2025',
    dateObj: new Date('2025-11-19'),
    totalDuration: '1 hour',
    description: 'Review club progress, discuss operations, and gather member feedback.',
    semester: 1,
    activities: [
      { name: 'Discuss club\'s progress and review club operations' },
      { name: 'Review club constitution and discuss potential changes' },
      { name: 'Check in with members and ask for their feedback' }
    ]
  },
  // Semester 2 Events
  {
    id: 'sem2-pitch-night',
    week: 5,
    title: 'GSU x Enactus UTM Startup Pitches',
    date: 'February 26, 2026',
    dateObj: new Date('2026-02-26'),
    totalDuration: '2 hours (6:00 PM - 8:00 PM)',
    description: 'Got a startup idea you\'ve been thinking about but haven\'t said out loud yet? We\'re hosting a pitch night where students can present their startup ideas in front of other ambitious builders on campus. No judges in suits. No corporate fluff. Just real ideas, real feedback, and real conversations.',
    semester: 2,
    location: 'UTM IB-380',
    cohost: 'Enactus UTM',
    registrationLink: 'https://luma.com/r51h5gsz',
    activities: [
      { name: 'Live pitch presentations from students' },
      { name: 'Structured pitch practice to refine your vision' },
      { name: 'Direct feedback from other founders and builders' },
      { name: 'High-signal networking with people who are actually building things' }
    ]
  },
  {
    id: 'sem2-week6-general-meeting',
    week: 6,
    title: 'General Meeting',
    date: 'TBD - Semester 2',
    dateObj: new Date('2026-02-15'), // Placeholder date
    totalDuration: '1 hour',
    description: 'Mid-semester check-in: Review club progress and gather feedback.',
    semester: 2,
    activities: [
      { name: 'Discuss club\'s progress and review club operations' },
      { name: 'Review club constitution and discuss potential changes' },
      { name: 'Check in with members and ask for their feedback' }
    ]
  },
  {
    id: 'sem2-week11-startup-fair',
    week: 11,
    title: 'GSU\'s Startup Fair',
    date: 'TBD - Semester 2',
    dateObj: new Date('2026-04-01'), // Placeholder date
    totalDuration: '3-4 hours',
    description: 'Showcase your startup! Pitch to investors, network with VCs, and collaborate with other entrepreneurship organizations.',
    semester: 2,
    activities: [
      { name: 'Startup pitches' },
      { name: 'Guest Speakers' },
      { name: 'Investor/VC panelists and judges' },
      { name: 'General member participation interactive events and opportunity booths' },
      { name: 'Collaborations with other entrepreneurship focused organizations' }
    ]
  }
];

// Export upcoming and past events for easy access
export const upcomingEvents = getUpcomingEvents(allEvents);
export const pastEvents = getPastEvents(allEvents);
