export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string;
  description: string;
}

export interface TimelineProps {
  milestones: Milestone[];
}

export interface ValuesProps {
  values: Value[];
}

export interface TeamProps {
  members: TeamMember[];
} 