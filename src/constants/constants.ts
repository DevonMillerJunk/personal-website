import email from "../assets/email.jpg";
import facebook from "../assets/facebook.jpg";
import github from "../assets/github.jpg";
import linkedin from "../assets/linkedin.jpg";
import { IContactInfo } from "./interfaces";

export const contactInfo: IContactInfo = {
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
