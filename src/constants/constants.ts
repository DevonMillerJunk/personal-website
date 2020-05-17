import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import dicetower from "../assets/dicetower.jpg";
import outdoors from "../assets/outdoors.jpg";
import swimming from "../assets/swimming.jpg";
import tak from "../assets/tak.jpg";
import devonMillerJunk from "../assets/DevonMillerJunk.jpg";
import doorr from "../assets/doorr.png";
import lcbonext from "../assets/lcbonext.webp";
import resume from "../assets/resume.png";

import {
  IContactState,
  IInterestState,
  IProfileState,
  IExperienceState,
  RoutesEnum,
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

// `I’m a Computer Engineering student and swimmer at the University of Waterloo.
//   From a young age I have enjoyed challenging myself solving new problems. While living in Puerto Rico, I was the activities director in my school’s
//   Society of Hispanic Professional Engineers Jr. chapter and competed in island wide math competitions to join the Puerto Rican Junior Olympic Math team.
//   Since moving to Canada, I have designed and created several programming projects, including a Raspberry Pi hardware debugger, Nowhere to Go board game, and a pool temperature monitor.
//   I'm recently worked a lot with Web Development as a Full-Stack Developer.`

export const experienceInfo: IExperienceState = {
  title: "My Experience",
  jobs: [
    {
      title: "LCBO|next",
      position: "Full-Stack Developer",
      dateRange: "January-April 2020",
      logo: lcbonext,
      website: `https://www.lcbonext.com/`,
      link: RoutesEnum.LCBONEXT,
      htmlName: "lcbo",
    },
    {
      title: "Doorr",
      position: "Software Engineer",
      dateRange: "May-December 2019",
      logo: doorr,
      website: `https://doorr.com/`,
      link: RoutesEnum.DOORR,
      htmlName: "doorr",
    },
  ],
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
