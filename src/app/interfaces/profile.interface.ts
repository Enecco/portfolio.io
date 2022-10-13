// Generated by https://quicktype.io

export interface Profile {
  email: string;
  location: string;
  name: string;
  phone: string;
  avatar: string;
  education: Education[];
  about: string;
  socials: Social[];
  resume: Resume[];
}

export interface Education {
  title: string;
  meta: string;
}
export interface Resume {
  path: string;
  name: string;
}

export interface Social {
  name: string;
  link: string;
  icon: string;
}
