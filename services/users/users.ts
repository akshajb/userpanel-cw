import {
  Department,
  Workplace,
  Status,
  Role,
  type User,
} from '~/types/UserPanel';

export const getUsers = () => {
  return [
    {
      name: 'Bessie Cooper',
      online: true,
      department: Department.D3,
      workingFrom: Workplace.HOME,
      status: Status.BREAK,
      role: Role.TEAM_LEADER,
      profilePicture:
        'https://xsgames.co/randomusers/assets/avatars/male/1.jpg',
    },
    {
      name: 'Darrel Steward',
      online: false,
      department: Department.D3,
      workingFrom: Workplace.OFFICE,
      status: Status.MEETING,
      role: Role.AGENT,
      profilePicture:
        'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
    },
    {
      name: 'Jerry Nelson',
      online: false,
      department: Department.D2,
      workingFrom: Workplace.HOME,
      status: Status.BREAK,
      role: Role.AGENT,
      profilePicture:
        'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
    },
    {
      name: 'Jenny Wilson',
      online: true,
      department: Department.D2,
      workingFrom: Workplace.HOME,
      status: Status.BREAK,
      role: Role.TEAM_LEADER,
      profilePicture:
        'https://xsgames.co/randomusers/assets/avatars/female/4.jpg',
    },
    {
      name: 'Arlene McCoy',
      online: false,
      department: Department.D1,
      workingFrom: Workplace.OFFICE,
      status: Status.MEETING,
      role: Role.MANAGER,
      profilePicture:
        'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
    },
    {
      name: 'Theresa Webb',
      online: false,
      department: Department.D1,
      workingFrom: Workplace.HOME,
      status: Status.BREAK,
      role: Role.IT,
      profilePicture:
        'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
    },
    {
      name: 'John Doe',
      online: false,
      department: Department.D1,
      workingFrom: Workplace.HOME,
      status: Status.BREAK,
      role: Role.IT,
      profilePicture:
        'https://xsgames.co/randomusers/assets/avatars/male/7.jpg',
    },
    {
      name: 'Akmar Nafi',
      online: true,
      department: Department.D1,
      workingFrom: Workplace.OFFICE,
      status: Status.TROUBLESHOOTING,
      role: Role.IT,
      profilePicture:
        'https://xsgames.co/randomusers/assets/avatars/male/8.jpg',
    },
  ];
};

export const groupUsersByRole = (users: User[]): Record<Role, User[]> => {
  if (users && users.length > 0) {
    return users.reduce(
      (acc: Record<Role, User[]>, user: User) => {
        const { role } = user;
        if (!acc[role]) {
          acc[role] = [];
        }
        acc[role].push(user);
        return acc;
      },
      {} as Record<Role, User[]>,
    );
  }
  return {} as Record<Role, User[]>;
};
