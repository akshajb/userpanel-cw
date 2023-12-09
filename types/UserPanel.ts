export enum Department {
  D1 = 'D1',
  D2 = 'D2',
  D3 = 'D3',
}

export enum Workplace {
  HOME = 'home',
  OFFICE = 'office',
}

export enum Status {
  BREAK = 'on break',
  MEETING = 'in a meeting',
  TROUBLESHOOTING = 'troubleshooting',
}

export enum Role {
  AGENT = 'Agent',
  TEAM_LEADER = 'Team Leader',
  MANAGER = 'Manager',
  IT = 'IT',
}

export interface User {
  name: string;
  department: Department;
  status: Status;
  role: Role;
  workingFrom: Workplace;
  online: boolean;
  profilePicture: string;
}
