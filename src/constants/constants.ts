import email from "../assets/email.jpg";
import facebook from "../assets/facebook.jpg";
import github from "../assets/github.jpg";
import linkedin from "../assets/linkedin.jpg";
import dicetower from "../assets/dicetower.jpg";
import outdoors from "../assets/outdoors.jpg";
import swimming from "../assets/swimming.jpg";
import tak from "../assets/tak.jpg";
import { IContactState, IInterestState } from "./interfaces";

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
      link: `devonmillerjunk@gmail.com`,
      logo: email
    }
  ],
  title: "Let's Talk",
  info:
    "Let's connect! I prefer email and LinkedIn messages, but can reach me in any other way you'd like!"
};

export const interestInfo: IInterestState = {
  title: "My Interests",
  info: "The things I love to do",
  interestInfo: [
    {
      title: "Competitive Swimming",
      info:
        "I'm on the Waterloo Varsity Competitive Swim Team and have been swimming competitively for over 7 years in both Puerto Rico and Canada!",
      image: swimming
    },
    {
      title: "Hiking and Camping",
      info:
        "I love hiking, camping, and exploring the outdoors! I've always wanted to go portaging or on a several-day hike!",
      image: outdoors
    },
    {
      title: "Board Games",
      info:
        "I love playing cool board games. My Dad and I created the pieces for this board game Tak.",
      image: tak
    },
    {
      title: "3D Printing and Rapid Prototyping",
      info:
        "I enjoy creating cool designs in AutoCAD and turining my designs into reality. I've been doing this through 3D printing and laser cutting lately, but I love creating in any way!",
      image: dicetower
    }
  ]
};
