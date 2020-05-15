export interface IMedia {
  title: string;
  link: string;
  logo: any;
  color: string;
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
