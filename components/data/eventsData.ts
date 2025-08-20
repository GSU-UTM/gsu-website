export interface EventActivity {
  name: string;
  duration: string;
}

export interface Event {
  id: string;
  week: number;
  title: string;
  date: string;
  totalDuration: string;
  description: string;
  activities: EventActivity[];
}

export const upcomingEvents: Event[] = [
  {
    id: 'week3-opening',
    week: 3,
    title: 'Opening Ceremony',
    date: 'September 17, 2025',
    totalDuration: '2 hours',
    description: 'Welcome to GSU UTM! Join us for our official launch with guest speakers, networking, and food.',
    activities: [
      { name: 'Club Introduction', duration: '15 min' },
      { name: '2-3 Guest Speakers', duration: '45 min' },
      { name: 'Interview Panel with speakers', duration: '' },
      { name: 'Networking ice-breakers', duration: '' },
      { name: 'Food + Networking', duration: '1 hour' }
    ]
  },
  {
    id: 'week4-startup-process',
    week: 4,
    title: 'Workshop: The Startup Process',
    date: 'September 24, 2025',
    totalDuration: '2 hours',
    description: 'Learn the fundamentals of building a startup from idea to launch using Lean Startup principles.',
    activities: [
      { name: 'The startup process: Idea → Validation → MVP → Launch', duration: '' },
      { name: 'Walk through Lean Startup principles', duration: '' },
      { name: 'Initial team + idea formation', duration: '' },
      { name: 'Workshop', duration: '30 min' },
      { name: 'Problem brainstorming in teams and quick pitch prep', duration: '1 hour' },
      { name: 'Problem + Solution pitches', duration: '30 min' }
    ]
  },
  {
    id: 'week5-prototyping',
    week: 5,
    title: 'Workshop: Prototyping & Design',
    date: 'October 1, 2025',
    totalDuration: '2 hours',
    description: 'Master product design and prototyping. Learn to determine MVP features and test UI/UX effectively.',
    activities: [
      { name: 'Prototyping and Product/Service Design', duration: '' },
      { name: 'How to determine which features to include in MVP', duration: '' },
      { name: 'UI + UX and how to test it', duration: '' },
      { name: 'Workshop', duration: '45 min' },
      { name: 'Market research and design inspiration', duration: '15 min' },
      { name: 'Work on design + product flow/functionality', duration: '45 min' },
      { name: 'Present design ideas / prototype drawings or Figma', duration: '15 min' }
    ]
  },
  {
    id: 'week6-coworking1',
    week: 6,
    title: 'Co-Working Session',
    date: 'October 8, 2025',
    totalDuration: '2 hours',
    description: 'Collaborative work session for teams to develop their startup ideas with structured networking breaks.',
    activities: [
      { name: 'Teams meet to work on developing startup idea and initial task delegation', duration: '' },
      { name: 'Work session 1', duration: '45 min' },
      { name: 'Networking, snacks & chill', duration: '15 min' },
      { name: 'Work session 2', duration: '45 min' },
      { name: 'Large Group Discussion + Accountability Planning', duration: '15 min' }
    ]
  },
  {
    id: 'week7-ai-workshop',
    week: 7,
    title: 'Workshop: AI for Startups',
    date: 'October 15, 2025',
    totalDuration: '2 hours',
    description: 'Supercharge your workflow with AI. Learn prompt engineering and AI integration for business processes.',
    activities: [
      { name: 'Supercharging your workflow with AI', duration: '' },
      { name: 'Prompt engineering + AI integration into product or business processes', duration: '' },
      { name: 'AI for marketing, development, business decisions, and busy work', duration: '' },
      { name: 'Workshop', duration: '45 min' },
      { name: 'Develop an AI strategy and implement into product/marketing', duration: '' }
    ]
  },
  {
    id: 'week8-coworking2',
    week: 8,
    title: 'Co-Working Session',
    date: 'October 22, 2025',
    totalDuration: '2 hours',
    description: 'Continued team development with focused work sessions and accountability planning.',
    activities: [
      { name: 'Teams meet to work on startup', duration: '' },
      { name: 'Work session 1', duration: '45 min' },
      { name: 'Networking, snacks & chill', duration: '15 min' },
      { name: 'Work session 2', duration: '45 min' },
      { name: 'Large Group Discussion + Accountability Planning', duration: '15 min' }
    ]
  },
  {
    id: 'week9-storytelling',
    week: 9,
    title: 'Workshop: Startup Storytelling',
    date: 'October 29, 2025',
    totalDuration: '2 hours',
    description: 'Master the art of pitching. Learn business pitching and personal elevator pitches.',
    activities: [
      { name: 'Startup storytelling', duration: '' },
      { name: 'Business Pitches + Personal Pitching', duration: '' },
      { name: 'Workshop', duration: '30 min' },
      { name: 'Work on 2-5 min startup or personal 1 minute elevator pitches', duration: '1 hour' },
      { name: 'Present pitches', duration: '30 min' }
    ]
  },
  {
    id: 'week10-coworking3',
    week: 10,
    title: 'Co-Working Session',
    date: 'November 5, 2025',
    totalDuration: '2 hours',
    description: 'Final preparation session before the closing ceremony. Teams finalize their presentations.',
    activities: [
      { name: 'Teams meet to work on startup and prepare for closing ceremony', duration: '' },
      { name: 'Work session 1', duration: '45 min' },
      { name: 'Networking, snacks & chill', duration: '15 min' },
      { name: 'Work session 2', duration: '45 min' },
      { name: 'Large Group Discussion + Accountability Planning', duration: '15 min' }
    ]
  },
  {
    id: 'week11-closing',
    week: 11,
    title: 'Semester Closing Ceremony',
    date: 'November 12, 2025',
    totalDuration: '2 hours',
    description: 'Celebrate the semester with guest speakers, team pitches, and networking. Showcase your startup progress!',
    activities: [
      { name: 'Guest speakers', duration: '45 min' },
      { name: 'Startup team pitches', duration: '30 min' },
      { name: 'Networking + Food', duration: '' }
    ]
  }
];