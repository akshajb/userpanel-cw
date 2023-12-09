import { describe, expect, test } from 'vitest';
import { Department, Workplace, Status, Role } from '../../types/UserPanel';

import { groupUsersByRole } from './users';

describe('Users', async () => {
  test('should group users correctly', () => {
    const mockUsers = [
      {
        name: 'User 1',
        online: false,
        department: Department.D2,
        workingFrom: Workplace.HOME,
        status: Status.BREAK,
        role: Role.AGENT,
        profilePicture:
          'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
      },
      {
        name: 'User 2',
        online: true,
        department: Department.D1,
        workingFrom: Workplace.OFFICE,
        status: Status.MEETING,
        role: Role.AGENT,
        profilePicture:
          'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
      },
      {
        name: 'User 3',
        online: true,
        department: Department.D1,
        workingFrom: Workplace.OFFICE,
        status: Status.MEETING,
        role: Role.MANAGER,
        profilePicture:
          'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
      },
    ];

    const result = groupUsersByRole(mockUsers);

    expect(result).not.toBeNull();
    expect(Object.keys(result).length).toBe(2);
    expect(result[Role.AGENT].length).toBe(2);
    expect(result[Role.MANAGER].length).toBe(1);
    expect(result[Role.AGENT][0].name).toBe('User 1');
    expect(result[Role.AGENT][1].name).toBe('User 2');
    expect(result[Role.MANAGER][0].name).toBe('User 3');
  });
});
