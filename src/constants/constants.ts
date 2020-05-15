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

import { IContactState, IInterestState, IProfileState } from "./interfaces";

export const contactInfo: IContactState = {
  mediaInfo: [
    {
      title: "LinkedIn",
      link: `https://www.linkedin.com/in/DevonMillerJunk/`,
      logo: linkedin,
      color: "#0e76a8",
    },
    {
      title: "GitHub",
      link: `https://github.com/DevonMillerJunk`,
      logo: github,
      color: "#767676", //"#333" as darker option
    },
    {
      title: "Facebook",
      link: `https://www.facebook.com/devon.millerjunk`,
      logo: facebook,
      color: "#3b5998",
    },
    {
      title: "Email",
      link: `mailto:devonmillerjunk@gmail.com`,
      logo: email,
      color: "#004f9f",
    },
    {
      title: "Resume",
      link: "/resume",
      logo: resume,
      color: "#ff0000",
    },
  ],
  title: "Let's Talk",
  info:
    "Let's connect! I prefer email and LinkedIn messages, but can reach me in any other way you'd like!",
};

export const interestInfo: IInterestState = {
  title: "What I Love To Do",
  info: "A few of the things I love to do in my spare time",
  interestInfo: [
    {
      title: "Competitive Swimming",
      info:
        "I'm on the Waterloo Varsity Swim Team and have been swimming competitively for over 7 years in both Puerto Rico and Canada! I swim breastroke and freestyle",
      image: swimming,
    },
    {
      title: "Hiking and Camping",
      info:
        "I love hiking, camping, and exploring the outdoors! I've always wanted to go portaging or on a several-day hike!",
      image: outdoors,
    },
    {
      title: "Board Games",
      info:
        "I love playing cool board games. My Dad and I designed and created the pieces for this board game, Tak.",
      image: tak,
    },
    {
      title: "3D Printing and Rapid Prototyping",
      info:
        "I enjoy creating cool designs in AutoCAD and turning my designs into reality. I've been doing this through 3D printing and laser cutting lately, but I love creating in any way!",
      image: dicetower,
    },
  ],
};

export const profileInfo: IProfileState = {
  background: devonMillerJunk,
  title: "Devon Miller-Junk",
  subtitle: "Competitive Swimmer and Studying Computer Engineering",
  info: `I’m a Computer Engineering student and swimmer at the University of Waterloo.
  From a young age I have enjoyed challenging myself solving new problems. While living in Puerto Rico, I was the activities director in my school’s Society of Hispanic Professional Engineers Jr. chapter and competed in island wide math competitions to join the Puerto Rican Junior Olympic Math team.
  Since moving to Canada, I have designed and created several programming projects, including a Raspberry Pi hardware debugger, Nowhere to Go board game, and a pool temperature monitor.
  I'm recently worked a lot with Web Development as a Full-Stack Developer`,
};

export const experienceInfo = {
  title: "Experience",
  jobs: [
    {
      title: "LCBO|next",
      position: "Full-Stack Developer",
      dateRange: "Jan-April 2020",
      logo: lcbonext,
      website: `https://www.lcbonext.com/`,
    },
    {
      title: "Doorr",
      position: "Software Engineer",
      dateRange: "May-December 2019",
      logo: doorr,
      website: `https://doorr.com/`,
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

export const resumeId = "1zLIG6ByMmqk_DagaXowzMIjvcyGL8RZy";
