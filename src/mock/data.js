import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ruuts', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Sinking carbon, one hectare at a time', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: ' ',
  subtitle: 'Transforming CO2 into life',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'project.png',
  paragraphOne: 'RUUTS is an ecosystem services marketplace that empowers individuals and corporations to take action on reversing climate change and land degradation.',
  paragraphTwo: 'Farmers get financial support to transition to regenerative agriculture. While this transition increase its profitability, biodiversity+water infiltration+carbon sink occurs and those ecological outcomes (RU) are measured every 5 years.',
  paragraphThree: 'Corporations and individuals can offset their carbon footprint by buying RU. Corporation can differentiate products and services by offering its customers to go neutral. Corporations can finance tailor made carbon capture project. Investors can get profit by financing farmers. ',
  //resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
    id: nanoid(),
    img: 'chubut.png',
    title: 'Chubut goes regenerative',
    info: 'Chubut Regenera is the regenerative livestock program of the Ministry of Production aimed at recovering grasslands, strengthening rural economies and achieving greater profitability in the productive systems of our province.',
    info2: '24 farmers + 254k Has = 250.000 tonnesCO2e/yr',
    url: 'https://chubutregenera.com/',
    repo: '', // if no repo, the button will not show up
  }]; 

export const projectsDataOLD = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to get in touch?',
  btn: 'Email us!',
  email: 'hola@ruuts.network',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/orgs/ruuts-sinking-carbon',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
