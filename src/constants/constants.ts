//Contact Logos
import email from "../assets/Contact/email.png";
import facebook from "../assets/Contact/facebook.png";
import github from "../assets/Contact/github.png";
import linkedin from "../assets/Contact/linkedin.png";
import resume from "../assets/Contact/resume.png";
import Resume from "../assets/Resume.pdf";

//Interests Pictures
import dicetower from "../assets/Interests/dicetower.jpg";
import outdoors from "../assets/Interests/outdoors.jpg";
import swimming from "../assets/Interests/swimming.jpg";
import tak from "../assets/Interests/tak.jpg";

//Profile Picture
import devonMillerJunk from "../assets/DevonMillerJunk.jpg";

//Doorr Job Pictures
import doorr from "../assets/Doorr/doorr.png";
import DoorrLogoColour from "../assets/Doorr/doorr-coloured.png";
import adtal from "../assets/Doorr/adtal.png";
import filogix from "../assets/Doorr/filogix.png";
import rotting from "../assets/Doorr/rotting.png";
import automatedTesting from "../assets/Doorr/automatedTesting.png";

//LCBO Job Pictures
import lcbonext from "../assets/LCBO/lcbonext.png";
import coldstream from "../assets/LCBO/coldstream.png";
import cr from "../assets/LCBO/cr.png";
import crown from "../assets/LCBO/crown.png";
import mixology from "../assets/LCBO/mixology.png";

//Finastra/Doorr Job Pictures
import finastra from "../assets/Finastra/finastra.png";
import cognito from "../assets/Finastra/cognito.jpg";
import csvUpload from "../assets/Finastra/csvUpload.png";
import externalDashboard from "../assets/Finastra/externalDashboard.png";
import metrics from "../assets/Finastra/metrics.png";

//Spatial
import spatial from "../assets/Spatial/logo.png"
import spatialNavbar from "../assets/Spatial/logo-transparent.png"
import spatialMux from "../assets/Spatial/mux-video.png"
import spatialSubscriptions from "../assets/Spatial/oculus-subscriptions.png"
import spatialThumbnails from "../assets/Spatial/room-thumbnails.png"
import spatialMiro from "../assets/Spatial/miro-integration.png"


//Technology Pictures
import Auth0 from "../assets/Technologies/Auth0.jpg";
import AWS from "../assets/Technologies/AWS.png";
import Azure from "../assets/Technologies/Azure.png";
import GoLogo from "../assets/Technologies/golang.png";
import CppLogo from "../assets/Technologies/Cpp.png";
import Docker from "../assets/Technologies/Docker.png";
import Elasticsearch from "../assets/Technologies/Elasticsearch.png";
import Mongo from "../assets/Technologies/Mongo.png";
import Node from "../assets/Technologies/Node.png";
import Postgres from "../assets/Technologies/Postgres.png";
import Python from "../assets/Technologies/Python.png";
import React from "../assets/Technologies/React.png";
import Redis from "../assets/Technologies/Redis.png";
import Typescript from "../assets/Technologies/Typescript.png";
import Vue from "../assets/Technologies/Vue.png";
import Yarn from "../assets/Technologies/Yarn.png";

//Necessary Types, Enums, and Interfaces
import {
  IContactState,
  IInterestState,
  IProfileState,
  IExperienceState,
  RoutesEnum,
  IJob,
  ITechnologyState
} from "./interfaces";

//Information for Contact Me Section
export const contactInfo: IContactState = {
  mediaInfo: [
    {
      title: "LinkedIn",
      link: `https://www.linkedin.com/in/DevonMillerJunk/`,
      logo: linkedin
    },
    {
      title: "GitHub",
      link: `https://github.com/DevonMillerJunk`,
      logo: github
    },
    {
      title: "Facebook",
      link: `https://www.facebook.com/devon.millerjunk`,
      logo: facebook
    },
    {
      title: "Email",
      link: `mailto:devonmillerjunk@gmail.com`,
      logo: email
    },
    {
      title: "Resume",
      link: Resume,
      logo: resume
    }
  ],
  title: "Let's Connect!",
  info:
    "Reach out whenever I'm always open to talk. I'm also in a co-op program and am always looking for cool projects to work on!"
};

//Information for Interests Section
export const interestInfo: IInterestState = {
  title: "What I Love To Do",
  info: "A few of the things that make me, well, me.",
  interestInfo: [
    {
      title: "Competitive Swimming",
      info: `I'm on the Waterloo Varsity Swim Team and have been swimming competitively for over 9 years in both Puerto Rico and Canada. I swim Breastroke and Freestyle, but also enjoy swimming Individual Medley whenever I can. In 2014 I represented Puerto Rico internationally at the ISSF World Cup in Poland.`,
      image: swimming
    },
    {
      title: "Hiking and Camping",
      info:
        "I love exploring Canada's outdoors and have been doing so my entire life. When I was really little we would go out camping every summer at different provincial parks. I've always wanted to go out portaging (with a group who will take me).",
      image: outdoors
    },
    {
      title: "Board Games",
      info:
        "I've been playing board games, especially strategy games, for a long time. My favorite game is Tak (in the picture above), which my Dad and I made out of wood and stones. A few of the games I find myself going back to are Quoridor, Nowhere to Go, Exploding Kittens, Settlers of Catan, and Khet.",
      image: tak
    },
    {
      title: "3D Printing and Rapid Prototyping",
      info:
        "I enjoy creating cool designs in AutoCAD and turning my designs into reality. I took an AutoCAD course in Inventor and have been using it ever since to create cool designs for different purposes. Lately, I've been using 3D printers a lot, but I love creating my designs in many different ways!",
      image: dicetower
    }
  ]
};

//Information for Profile Section
export const profileInfo: IProfileState = {
  background: devonMillerJunk,
  title: "Hi, I'm Devon",
  subtitle:
    "Studying Computer Engeering at UWaterloo. Swimming on the Waterloo Varsity Swim Team.",
  info: `I’m a big believer in the empowerment of individuals through software. It’s a large part of the reason why I want to become a programmer with the potential to ship code benefitting thousands of people’s lives. Being a co-op student gives has given me lots of opportunities to learn about how different teams can deliver that value to their users!`
};

//Information for Doorr Job
export const doorrInfo: IJob = {
  title: "Doorr",
  description: `As a Software Engineer at Doorr, I had the opportunity to work on a serverless Web Application that helps Mortgage Brokers conduct all of their business in a one-stop-shop solution. I worked on several projects, filling multiple different shoes, and performing whatever was needed most. It was a great experience that truly changed my perspective on what I'd like to accomplish with my career. Doorr taught me a lot about how to build proper code that is scalable and allows a full team of developers to work together throughout developing and refining a project.`,
  position: "Software Engineer",
  dateRange: "May-December 2019",
  logo: doorr,
  website: `https://www.finastra.com/news-events/press-releases/filogix-finastra-business-acquires-doorr`,
  link: RoutesEnum.DOORR,
  htmlName: "doorr",
  navbarLogo: DoorrLogoColour,
  projects: [
    {
      title: "Admin Portal",
      info: `Designed and implemented a serverless administration portal to reduce time 
      spent on client requests and provided statistics and usage rates essential for the business. 
      The portal saved our CEO tons of time and provided customers with a faster response time.`,
      picture: adtal,
      technologies: [
        "AWS Lambda",
        "AWS API Gateway",
        "Typescript",
        "Vue",
        "Redux",
        "REST API",
        "Postgres"
      ],
      htmlName: "adtal",
      disclaimer:
        "*All values shown here are false and not based off of any real data*"
    },
    {
      title: "Filogix Integrations",
      info: `Expanded upon and fixed the 3rd party mortgage application submission tool, one of the essential features our customers use daily. I reduced the number of errors occurring by 60%.`,
      picture: filogix,
      technologies: ["AWS Lambda", "Typescript", "Puppeteer"],
      htmlName: "snoopy"
    },
    {
      title: "Rotting",
      info: `Implemented the backend portion for several new features on the platform, including Rotting-
      where a card on a kanban turns a different shade if it has become stagnant.`,
      picture: rotting,
      technologies: [
        "AWS Lambda",
        "Typescript",
        "REST API",
        "Postgres",
        "Swagger"
      ],
      htmlName: "new-features"
    },
    {
      title: "Automated Testing",
      info: `Built out a set of automated tests and tools for the platform, speeding up pre-release testing by 40%. The entire set of tests was built as a serverless function and compiled a list of reports to display in our slack channel.`,
      picture: automatedTesting,
      technologies: ["AWS Lambda", "Typescript", "Jest", "Puppeteer"],
      htmlName: "automated-testing"
    }
  ]
};

//Information for LCBO job
export const lcboInfo: IJob = {
  title: "LCBO|next",
  description: `As a Full-Stack Developer at LCBO|next, I worked all across the stack and all across the development cycle on several up-and-coming projects. Working in a multidisciplinary team, we pushed Electronic Bin Tags into piloting in Ontario, created a Challenge Reporting application, and updated and improved upon several applications in production and piloting across Ontario. While working at LCBO|next,
  I not only had the opportunity to work on the back-end and front-end of all our applications but also create and manage the deployment process and architecture on the Azure cloud. LCBO|next provided me with an amazing opportunity 
  to become familiar with tons of cutting edge technologies under knowledgeable mentors with a group of amazing co-op students.`,
  position: "Full-Stack Developer",
  dateRange: "January-April 2020",
  logo: lcbonext,
  website: `https://www.lcbonext.com/`,
  link: RoutesEnum.LCBONEXT,
  htmlName: "lcbo",
  projects: [
    {
      title: "Coldstream",
      info: `Created and managed the implementation of an API for the piloting of Electronic Bin Tag tags in retail stores in Ontario.`,
      picture: coldstream,
      technologies: [
        "Azure Services",
        "Azure Pipelines",
        "Docker",
        "Typescript",
        "Swagger",
        "Redis",
        "Elasticsearch"
      ],
      htmlName: "coldstream"
    },
    {
      title: "Challenge & Refusal",
      info: `Programmed a Progressive Web App to submit and log alcohol challenge reports. 
      The app is configured with role-based access control from Auth0, supports multi-tenancy, and can be configured to work 
      as either a backend as a service or a full-stack application.`,
      picture: cr,
      technologies: [
        "Azure Services",
        "Azure Pipelines",
        "Docker",
        "Typescript",
        "Swagger",
        "Auth0",
        "Postgres"
      ],
      htmlName: "cr"
    },
    {
      title: "Crown",
      info: `Updated and improved upon Crown, a product discovery app to help customers discover products they hadn't tried before. 
      I added several new features and fixed some performance problems with the application.`,
      picture: crown,
      technologies: [
        "Typescript",
        "React",
        "SCSS",
        "HTML5",
        "Elasticsearch",
        "Redis"
      ],
      htmlName: "crown"
    },
    {
      title: "Mixology",
      info: `Stabilized and improved Mixology, a cocktail recommendation app for the LCBO. Mixology was already very far along, 
      so I had the chance to further push Mixology into its piloting phase.`,
      picture: mixology,
      technologies: ["Typescript", "React", "SCSS", "HTML5", "Azure Functions"],
      htmlName: "mixology"
    }
  ]
};

//Information for Finastra Job
export const finastraInfo: IJob = {
  title: "Finastra/Doorr",
  description: `During my internship at Finastra, I took a lead role on the Administration Portal Team, controlling releases, 
    feature development, roadmapping, and prioritizations. The features I added and scalability improvements helped grow the support the new Expert Pro user base.`,
  position: "Software Engineer",
  dateRange: "August-December 2020",
  logo: finastra,
  website: `https://www.finastracanada.com/category/expert-pro/`,
  link: RoutesEnum.FINASTRA,
  htmlName: "finastra",
  navbarLogo: finastra,
  projects: [
    {
      title: "Account Registration Refactor",
      info: `Designed new account registration and creation flow with AWS Cognito for the fast 
        and secure integration of over 17,000 broker accounts to the platform.`,
      picture: cognito,
      technologies: [
        "AWS SES",
        "AWS Cognito",
        "AWS Lambda",
        "Vue",
        "Typescript"
      ],
      htmlName: "auth"
    },
    {
      title: "Metrics Tracking Library",
      info: `Created a Metrics Tracking Library to monitor the status and uptime of large scale serverless systems.`,
      picture: metrics,
      technologies: ["AWS Lambda", "AWS SQS", "Graphana"],
      htmlName: "metrics"
    },
    {
      title: "External Services Dashboard",
      info: `Implemented an external service dashbord to easily inform users and limit functionality based on the service status of 3rd party systems.`,
      picture: externalDashboard,
      technologies: [
        "AWS Lambda",
        "Vue",
        "Redux",
        "Postgres"
      ],
      htmlName: "external-service"
    },
    {
      title: "CSV Uploader and Processor",
      info: `Created a CSV upload tool to batch process large requests.`,
      picture: csvUpload,
      technologies: [
        "Vue",
        "Redux",
        "Typescript",
        "Postgres"
      ],
      htmlName: "csv-upload"
    }
  ]
};

//Information for Spatial Job
export const spatialInfo: IJob = {
  title: "Spatial",
  description: `Working as a backend engineer at Spatial gave me the opportunity to design and build 
  3D interfaces and the backend data pipelines to support them. Creating data pipelines to support a wide 
  range of platforms (including 3D headsets, mobile, and web) with different specs and processes was really intriguing challenge!`,
  position: "Backend Engineer",
  dateRange: "April-August 2021",
  logo: spatial,
  website: `https://spatial.io/`,
  link: RoutesEnum.SPATIAL,
  htmlName: "spatial",
  navbarLogo: spatialNavbar,
  projects: [
    {
      title: "Video Processing System",
      info: `Designed and implemented video ingestion and processing flow to support modern video codecs and enable bandwidth-adaptive HLS video streaming in Golang for collaborative AR/VR environments`,
      picture: spatialMux,
      technologies: [
        "FFMPEG",
        "Mux",
        "MongoDB"
      ],
      htmlName: "mux"
    },
    {
      title: "Oculus Subscriptions",
      info: `Redesigning the subscriptions structure at Spatial was a thrilling challenge that allowed me to find new ways to deliver value to our users. It involved a completely new tier of subscriptions being implemented combined with a new way for users to sign up for our platform!`,
      picture: spatialSubscriptions,
      technologies: ["Stripe", "Oculus Subscriptions", "Unity", "C#"],
      htmlName: "oculus-subscriptions"
    },
    {
      title: "Updated Room Thumbnails",
      info: `Giving our users a sneak peak into interesting spaces by showing them an up-to-date thumbnail of all the magnificent rooms in the Spatialverse.`,
      picture: spatialThumbnails,
      technologies: [
        "AWS S3",
        "Golang",
        "MongoDB"
      ],
      htmlName: "room-thumbnails"
    },
    {
      title: "Miro Integrations",
      info: `Empower our users to move between Miro and Spatial, closing the gap between 2D and 3D spaces by providing tools to bring content from the 3D world into Miro's 2D infinite whiteboard.`,
      picture: spatialMiro,
      technologies: [
        "Miro API",
        "C#",
        "Polymer",
        "React"
      ],
      htmlName: "miro-integration"
    }
  ]
};

//Information for Experience Section
export const experienceInfo: IExperienceState = {
  title: "My Experience",
  jobs: [spatialInfo, finastraInfo, lcboInfo, doorrInfo]
};

//Information for Project Section
export const projectInfo = {
  title: "Projects",
  info: "A few of the projects I've worked on",
  projects: [
    {
      title: "Nowhere to Go",
      info: "",
      image: "",
      technologies: ["Python"]
    },
    {
      title: "Hearts card game",
      info: "",
      image: "",
      technologies: ["Java", "Object-Oriented Programming"]
    },
    {
      title: "Raspberry Pi Hardware Debugging Tool",
      info: "",
      image: "",
      technologies: ["C++", "C"]
    },
    {
      title: "Event.io",
      info: "",
      image: "",
      technologies: ["Typescript", "React", "Express"]
    }
  ]
};

//Information for Technologies Section
export const technologyInfo: ITechnologyState = {
  title: "A few of the Technologies I work with",
  technologies: [
    {
      logo: Auth0,
      title: "Auth0" 
    },
    {
      logo: AWS,
      title: "AWS" 
    },
    {
      logo: Azure,
      title: "Azure" 
    },
    {
      logo: GoLogo,
      title: "Golang" 
    },
    {
      logo: CppLogo,
      title: "Cpp" 
    },
    {
      logo: Docker,
      title: "Docker" 
    },
    {
      logo: Elasticsearch,
      title: "Elasticsearch" 
    },
    {
      logo: Mongo,
      title: "Mongo" 
    },
    {
      logo: Node,
      title: "Node" 
    },
    {
      logo: Postgres,
      title: "Postgres" 
    },
    {
      logo: Python,
      title: "Python" 
    },
    {
      logo: React,
      title: "React" 
    },
    {
      logo: Redis,
      title: "Redis" 
    },
    {
      logo: Typescript,
      title: "Typescript" 
    },
    {
      logo: Vue,
      title: "Vue" 
    },
    {
      logo: Yarn,
      title: "Yarn" 
    }
  ]
};

export const technologiesIUse = {
  languages: [
    "Go", "Typescript", "Javascript", "Java", "Python" , "C++", "C", "SQL", "CSS/SASS", "C#"
  ],
  JSFrameworks: ["React", "React Native", "Vue"],
  APIs: ["REST", "GraphQL", "SOAP"],
  Clouds: ["AWS", "Azure", "Heroku"],
  Scalability: ["Docker", "Terraform", "Kubernetes"],
  Databases: ["PostgreSQL", "MongoDB", "Elasticsearch", "Redis"],
  Others: ["Node", "Yarn", "Photon", "WebGL", "WebRTC", "Auth0", "Unity"]
}