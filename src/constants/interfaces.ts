export enum RoutesEnum {
  HOME = "/",
  RESUME = "/resume",
  DOORR = "/doorr",
  LCBONEXT = "/lcbonext",
}

export interface IMedia {
  title: string;
  link: string;
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

export interface IJob {
  title: string;
  position: string;
  dateRange: string;
  logo: any;
  website: string;
  link: string;
  htmlName: string;
}

export interface IExperienceState {
  title: string;
  jobs: IJob[];
}
