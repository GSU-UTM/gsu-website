import ColeDolnyImg from '../../assets/cole dolny.png';
import MikeJacobsImg from '../../assets/mike jacobs.png';
import JaseImg from '../../assets/jase.png';
import BenGulakImg from '../../assets/ben.jpg';
import AmirTavafiImg from '../../assets/amir.jpg';
import StephenSouthinImg from '../../assets/stephen.png';
import DennisLichtiImg from '../../assets/dennis.png';
import DoreenZarrabianImg from '../../assets/doreen.jpg';
import PrakashVenkataramanImg from '../../assets/prakash.png';

export interface Speaker {
  name: string;
  title: string;
  description?: string;
  photo?: string;
  linkedin?: string;
  event?: string;
}

export interface Sponsor {
  name: string;
  description: string;
  website: string;
}

export const speakers: Speaker[] = [
  {
    name: 'Prakash Venkataraman',
    title: 'Global Leadership & Innovation',
    description: 'With 28 years of global leadership across 100+ countries, Prakash has driven innovation, growth, and transformation worldwide. A proud Waterloo Region resident, he has dedicated over 20,000 volunteer hours to local nonprofits, inspiring change through mentorship, service, and music.',
    photo: PrakashVenkataramanImg,
    event: 'Case Competition Judge',
  },
  {
    name: 'Stephen Southin',
    title: 'Founder & CEO at Halo, Founder at PAVE.ai',
    description: 'A tech entrepreneur passionate about solving real-world problems. Founded PAVE.ai, which now powers over 1.5 million vehicle inspections annually across North America and Europe — recognized in Deloitte\'s Technology Fast 50 (2025). Currently building Halo for image capture and 3D reconstruction.',
    photo: StephenSouthinImg,
    linkedin: 'https://www.linkedin.com/in/southin/',
    event: 'Case Competition Judge',
  },
  {
    name: 'Ben Gulak',
    title: 'Inventor & Entrepreneur, Founder at NALA',
    description: 'An inventor and entrepreneur whose early science-fair project at 18 earned him a cover on Popular Science and funding on Dragons\' Den. Founded BPG Werks and created the Uno electric vehicle. Today focuses on NALA, using AI to connect artists directly with collectors and transform the art market.',
    photo: BenGulakImg,
    linkedin: 'https://www.linkedin.com/in/benjamingulak/',
    event: 'Case Competition Judge',
  },
  {
    name: 'Amir Tavafi',
    title: 'Co-Founder & CEO at Abloomify',
    description: 'Co-Founder & CEO at Abloomify, an analytics company helping businesses maximize productivity, retain employee talent, and make data-driven decisions.',
    photo: AmirTavafiImg,
    linkedin: 'https://www.linkedin.com/in/amirtavafi/',
    event: 'Case Competition Judge',
  },
  {
    name: 'Dennis Lichti',
    title: 'CEO & Founder at Developer Bump',
    description: 'A driven tech entrepreneur developing innovative solutions for businesses and consumers. Passionate about continuous growth, he thrives in dynamic environments that challenge him to learn and adapt.',
    photo: DennisLichtiImg,
    linkedin: 'https://www.linkedin.com/in/dennislichti/',
    event: 'Case Competition Judge',
  },
  {
    name: 'Doreen Zarrabian',
    title: 'Head of Research at Solace',
    description: 'Head of research at Solace, a web-3 native emotionally intelligent AI companion making therapy and support accessible for students, teachers, athletes, coaches, and more. Also an exec at two clubs at UofT.',
    photo: DoreenZarrabianImg,
    event: 'Case Competition Judge',
  },
  {
    name: 'Cole Dolny',
    title: 'TEC Chair & prev CEO at ASL Distribution',
    photo: ColeDolnyImg,
    linkedin: 'https://www.linkedin.com/in/coledolny/',
    event: 'Opening Ceremony Speaker',
  },
  {
    name: 'Mike Jacobs',
    title: 'CEO at The New Business & Co-Founder of Tourism Technology',
    photo: MikeJacobsImg,
    linkedin: 'https://www.linkedin.com/in/mjacobs3/',
    event: 'Opening Ceremony Speaker',
  },
  {
    name: 'Jase Lachowiez',
    title: 'Founder of Lachowiez Capital & MJ Landscapers',
    photo: JaseImg,
    linkedin: 'https://www.linkedin.com/in/jaselachowiez/',
    event: 'Opening Ceremony Speaker',
  },
];

export const sponsors: Sponsor[] = [
  {
    name: 'University of Toronto Mississauga',
    description: 'Our home campus and institutional partner supporting student entrepreneurship and innovation at UTM.',
    website: 'https://www.utm.utoronto.ca/',
  },
  {
    name: 'ICUBE UTM',
    description: 'UTM\'s startup incubator providing resources, mentorship, and programs for early-stage student ventures.',
    website: 'https://icubeutm.ca/',
  },
];
