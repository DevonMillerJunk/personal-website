import email from "../assets/Contact/email.png";
import facebook from "../assets/Contact/facebook.png";
import github from "../assets/Contact/github.png";
import linkedin from "../assets/Contact/linkedin.png";
import resume from "../assets/Contact/resume.png";

import dicetower from "../assets/Interests/dicetower.jpg";
import outdoors from "../assets/Interests/outdoors.jpg";
import swimming from "../assets/Interests/swimming.jpg";
import tak from "../assets/Interests/tak.jpg";

import devonMillerJunk from "../assets/DevonMillerJunk.jpg";

import doorr from "../assets/Doorr/doorr.png";
import DoorrLogoColour from "../assets/Doorr/doorr-coloured.png";
import adtal from "../assets/Doorr/adtal.png";
import filogix from "../assets/Doorr/filogix.png";
import rotting from "../assets/Doorr/rotting.png";
import automatedTesting from "../assets/Doorr/automatedTesting.png";

import lcbonext from "../assets/LCBO/lcbonext.webp";
import coldstream from "../assets/LCBO/coldstream.png";
import cr from "../assets/LCBO/cr.png";
import crown from "../assets/LCBO/crown.webp";
import mixology from "../assets/LCBO/mixology.png";

import {
  IContactState,
  IInterestState,
  IProfileState,
  IExperienceState,
  RoutesEnum,
  IJob,
} from "./interfaces";

export const contactInfo: IContactState = {
  mediaInfo: [
    {
      title: "LinkedIn",
      link: `https://www.linkedin.com/in/DevonMillerJunk/`,
      logo: linkedin,
    },
    {
      title: "GitHub",
      link: `https://github.com/DevonMillerJunk`,
      logo: github,
    },
    {
      title: "Facebook",
      link: `https://www.facebook.com/devon.millerjunk`,
      logo: facebook,
    },
    {
      title: "Email",
      link: `mailto:devonmillerjunk@gmail.com`,
      logo: email,
    },
    {
      title: "Resume",
      link: RoutesEnum.RESUME,
      logo: resume,
    },
  ],
  title: "Let's Connect!",
  info:
    "Reach out whenever, I'm always open to talk and will try to get back to you in under 24 hours. I'm also in a co-op program and am always looking for cool projects to work on with great people!",
};

export const interestInfo: IInterestState = {
  title: "What I Love To Do",
  info: "A few of the things that make me, well me.",
  interestInfo: [
    {
      title: "Competitive Swimming",
      info: `I'm on the Waterloo Varsity Swim Team and have been swimming competitively for over 7 years in both Puerto Rico and Canada. I swim Breastroke and Freestyle, but also enjoy swimming Individual Medley whenever I can.
        In 2014 I represented Puerto Rico internationally at the ISSF World Cup in Poland.`,
      image: swimming,
    },
    {
      title: "Hiking and Camping",
      info:
        "I love exploring Canada's outdoors and have been doing so my entire life. From when I was really little we would go out camping every summer at a different provincial park. I've always wanted to go out portaging with a group who will take me.",
      image: outdoors,
    },
    {
      title: "Board Games",
      info:
        "I've been playing board games, especially strategy games, for a long time. My favorite game is Tak (in the picture), which my Dad and I made out of wood and stone. A few of the names I find myself going back to are Quiridor, Nowhere to Go, Exploding Kittens, Settlers of Catan and Khet.",
      image: tak,
    },
    {
      title: "3D Printing and Rapid Prototyping",
      info:
        "I enjoy creating cool designs in AutoCAD and turning my designs into reality. I took an AutoCAD course using Inventor and have been using it every since to create cool designs for different for random purposes. Lately, I've beeing using 3D printers a lot, but I love creating my designs in lots of different ways!",
      image: dicetower,
    },
  ],
};

export const profileInfo: IProfileState = {
  background: devonMillerJunk,
  title: "Hi, I'm Devon",
  subtitle:
    "Competitive Swimmer and Challenge Seeker studying Computer Engineering",
  info: `I’m a Computer Engineering co-op student and swimmer at the University of Waterloo.
  From a young age I have enjoyed challenging myself solving new problems. While living in Puerto Rico, I was the activities director in my school’s 
  Society of Hispanic Professional Engineers Jr. chapter and competed in island wide math competitions to join the Puerto Rican Junior Olympic Math team.
  Since moving to Canada, I have designed and created several programming projects, including a Raspberry Pi hardware debugger, Nowhere to Go board game, and a pool temperature monitor.
  I'm recently worked a lot with Web Development as a Full-Stack Developer.`,
};

export const doorrInfo: IJob = {
  title: "Doorr",
  description:
    "As a Software Engineer at Doorr, I have had the opportunity to work on a severless Web Application that helped Mortgage Brokers conduct all of their business in a one-stop-shop solution. I worked in a wide variety of different projects, included designing and implementing the backend for the new admin portal, developing a set of automated tests using Jest and Puppeteer, and improving the 3rd party application submission system. It was a great experience that truly changed my perspective on what I'd like to accomplish with my career!",
  position: "Software Engineer",
  dateRange: "May-December 2019",
  logo: doorr,
  website: `https://doorr.com/`,
  link: RoutesEnum.DOORR,
  htmlName: "doorr",
  navbarLogo: DoorrLogoColour,
  projects: [
    {
      title: "Admin Portal",
      info:
        "Designed and implemented serverless administration portal in TypeScript, reducing time spent on client requests and provided statistics and usage rates essential for the business",
      picture: adtal,
      technologies: [
        "AWS Lambda",
        "AWS API Gateway",
        "Typescript",
        "REST API",
        "Postgres",
      ],
      htmlName: "adtal",
      disclaimer:
        "*All values shown here are false and not based off of any real data*",
    },
    {
      title: "Snoopy",
      info:
        "Expanded upon and fixed 3rd party mortgage application submission tool written in TypeScript and Puppeteer essential for the daily use of the platform, decreasing the amount of errors by 60% ",
      picture: filogix,
      technologies: ["AWS Lambda", "Typescript", "Puppeteer"],
      htmlName: "snoopy",
    },
    {
      title: "Rotting",
      info:
        "Maintained excellent communication with frontend team to integrate new personally created backend functions and features for the platform",
      picture: rotting,
      technologies: ["AWS Lambda", "Typescript", "REST API", "Postgres"],
      htmlName: "new-features",
    },
    {
      title: "Automated Testing",
      info:
        "Built out a set of automated tests and tools for the platform to speed up pre-release testing by 60%",
      picture: automatedTesting,
      technologies: ["AWS Lambda", "Typescript", "Jest", "Puppeteer"],
      htmlName: "automated-testing",
    },
  ],
};

export const lcboInfo: IJob = {
  title: "LCBO|next",
  description:
    "As a Full-Stack Developer at LCBO|next, I worked all over the stack and all across the development cycle on several up-and-coming projects for LCBO. Working in a multidisciplinary team, we pushed Electronic Bin Tags into piloting in Ontario, created a Challenge Reporting application to be sold as a white-labelled SaaS, and updating and improving upon several applications in production & piloting around Ontario. Working at LCBO|next I not only had the opportunity to work on the back-end and front-end of all our applications, but also create and manage the deployment process and architecture.",
  position: "Full-Stack Developer",
  dateRange: "January-April 2020",
  logo: lcbonext,
  website: `https://www.lcbonext.com/`,
  link: RoutesEnum.LCBONEXT,
  htmlName: "lcbo",
  projects: [
    {
      title: "Coldstream",
      info:
        "Created and managed implementation of an API for the piloting of Electronic Bin Tag tags in retail stores",
      picture: coldstream,
      technologies: [
        "Azure Services",
        "Azure Pipelines",
        "Docker",
        "Typescript",
        "Swagger",
        "Redis",
        "Elasticsearch",
      ],
      htmlName: "coldstream",
    },
    {
      title: "Challenge & Refusal",
      info:
        "Programmed a challenge reporting PWA in TS and React configured with role-based access control from Auth0",
      picture: cr,
      technologies: [
        "Azure Services",
        "Azure Pipelines",
        "Docker",
        "Typescript",
        "Swagger",
        "Auth0",
        "Postgres",
      ],
      htmlName: "cr",
    },
    {
      title: "Crown",
      info:
        "Updated and improved upon Crown, a product discovery app. Reduced the load time of the nearest store by 80%",
      picture: crown,
      technologies: [
        "Typescript",
        "React",
        "SCSS",
        "HTML5",
        "Elasticsearch",
        "Redis",
      ],
      htmlName: "crown",
    },
    {
      title: "Mixology",
      info:
        "Updated and improved upon Mixology, a cocktail recommendation app.",
      picture: mixology,
      technologies: ["Typescript", "React", "SCSS", "HTML5", "Azure Functions"],
      htmlName: "mixology",
    },
  ],
};

export const experienceInfo: IExperienceState = {
  title: "My Experience",
  jobs: [lcboInfo, doorrInfo],
};

export const projectInfo = {
  title: "Projects",
  info: "A few of the projects I've worked on",
  projects: [
    {
      title: "Nowhere to Go",
      info: "",
      image: "",
      technologies: [],
    },
  ],
};

export const resumeId: string = "1zLIG6ByMmqk_DagaXowzMIjvcyGL8RZy";
