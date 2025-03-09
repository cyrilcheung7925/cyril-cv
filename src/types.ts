export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

export interface TechnicalSkills {
  programmingLanguages: string[];
  frameworksLibraries: string[];
  webServer: string[];
  toolsPlatforms: string[];
  databases: string[];
  other: string[];
}

export interface Experience {
  jobTitle: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  honors: string;
}

export interface CV {
  resumePath: string;
  shortSummary: string;
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  technicalSkills: TechnicalSkills;
  experience: Experience[];
  education: Education[];
} 