import recipeSharingImage from './assets/images/recipe-sharing.png'
import plogImage from './assets/images/plog.png'
import TaskImage from './assets/images/task.png'
import chatCampImage from './assets/images/chatCamp.png'


const header = {
  // all the properties are optional - can be left empty or deleted
  title: '{}.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ahmed Abdelwahab',
  role: 'Software Engineer',
  description:
    'As a skilled full stack engineer, I specialize in both front-end and back-end technologies, including HTML, CSS, JavaScript, TypeScript, Express.js, Python, Django, and Django REST Framework. With expertise in modern libraries like React and Redux, I also work with styling tools such as Tailwind CSS, SASS, and Material UI. I am proficient in version control with Git and experienced in implementing CI/CD pipelines to streamline development and deployment processes.',
  resume: 'https://drive.google.com/file/d/1lGhBkRUUaGrSLXSdGaCHO-NdHWl-cDum/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/ahmed-abdelwahab-92025226b',
    github: 'https://github.com/ahmedsamymohamad',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Recipe',
    description:
      'This is a recipe-sharing website that allows users to share recipes, including ingredients, engage with each other, like recipes, and comment on them.',
    // stack: ['SASS', 'TypeScript', 'React'],
    image: recipeSharingImage,
    sourceCode: 'https://github.com/ahmedsamymohamad/Recipe-Sharing',
    livePreview: 'https://recipe-sharing-five.vercel.app',
  },
  {
    name: 'Dev Plog',
    description:
    'This is a blog website that allows users to share posts, engage with each other, like posts, and comment on them.',
    image: plogImage,
    sourceCode: 'https://github.com/ahmedsamymohamad/nextjs-DevBlog',
    livePreview: 'https://nextjs-dev-blog-chi.vercel.app',
  },
  {
    name: 'Task',
    description:
      'This is a task management website that allows users to create, edit, and delete tasks, as well as mark them as in progress or completed.',
    image: TaskImage,
    sourceCode: 'https://github.com/ahmedsamymohamad/Task-Manager',
    livePreview: 'https://task-manager-tan-seven.vercel.app',
  },

  {
    name: 'Chat Camp',
    description:
      'Chat Camp is a social media platform that allows users to maintain a list of contacts to engage with, as well as groups of users to chat with each other. Users can find one another through the search functionality.',
    image: chatCampImage,
    sourceCode: 'https://github.com/ahmedsamymohamad/nextjs-chatCamp',
    livePreview: 'https://nextjs-chat-camp.vercel.app',
  },
]

// certificates

const certificates = [
  // certificates can be added an removed
  // if there are no certificates, Certificates section won't show up
  {
    title: "Bachlor's  Degree in Computer Science",
    organization: "BNU - University",
    date: "2022 - 2026",
    url:"",
  },
  {
    title: "Back End Development and APIs",
    organization: "freeCodeCamp",
    date: "July 6,2023",
    url:"https://www.freecodecamp.org/certification/ahmed01223330/back-end-development-and-apis",
  },
  {
    title: "CCNA",
    organization: "Cisco",
    date: "June 01, 2023",
    url:"https://www.credly.com/badges/c6196873-c299-43d2-8cb0-8c734d2ba4fc/public_url",
  },
  {
    title: "Software Engineer Certificate",
    organization: "Hackerrank",
    date: "Jul 07, 2024",
    url:"https://www.hackerrank.com/certificates/b09b6b614698",
  },
  {
    title: "Frontend Developer Certificate",
    organization: "Hackerrank",
    date: "Jul 08, 2024",
    url:"https://www.hackerrank.com/certificates/816008bc9e75",
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'express.js',
  'Python',
  'Django',
  'Django-rest-framework',
  'React',
  'Redux',
  'TailwindCss',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ahmed01223330@gmail.com',
}

export { header, about, projects, skills, certificates, contact }
