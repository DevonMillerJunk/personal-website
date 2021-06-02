export enum RoutesEnum {
  HOME = "/",
  DOORR = "/doorr",
  LCBONEXT = "/lcbonext",
  FINASTRA = "/finastra",
  SPATIAL = "/spatial"
}

export interface IMedia {
  title: string;
  link: string | any;
  logo: any;
}

export interface IContactState {
  mediaInfo: IMedia[];
  title: string;
  info: string;
}

export interface IInterest {
  title: string;
  info: string;
  image: any;
}

export interface IInterestState {
  interestInfo: IInterest[];
  title: string;
  info: string;
}

export interface IProfileState {
  background: any;
  title: string;
  subtitle: string;
  info: string;
}

export interface IJobProject {
  title: string;
  info: string;
  picture: any;
  technologies: string[];
  htmlName: string;
  disclaimer?: string;
}

export interface IJob {
  title: string;
  description: string;
  position: string;
  dateRange: string;
  logo: any;
  website: string;
  link: string;
  htmlName: string;
  navbarLogo?: any;
  projects: IJobProject[];
}

export interface IExperienceState {
  title: string;
  jobs: IJob[];
}

export interface ITechnology {
  title: string;
  logo: any;
}

export interface ITechnologyState {
  title: string;
  technologies: ITechnology[];
}
