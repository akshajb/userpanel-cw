<template>
  <div>
    <header>
      <nav class="h-16 border"></nav>
    </header>
    <main>
      <div class="flex h-[calc(100vh-64px)]">
        <div class="h-full w-64"></div>
        <div class="flex flex-1">
          <div class="h-full w-full bg-gray-50"></div>
          <div
            :class="[
              'h-full overflow-auto transition-all',
              usersPanelOpened ? ' w-[450px]' : 'w-48',
            ]"
          >
            <button
              type="button"
              class="sticky top-0 z-10 flex w-full items-center justify-center gap-4 bg-blue-300 p-4 text-white"
              @click="toggleUsersPanel"
            >
              Members
              <span
                class="flex h-4 w-4 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white"
                >{{ users.length }}</span
              >
            </button>

            <div class="relative px-4">
              <users-list
                :users="getUsersByRole(Role.TEAM_LEADER)"
                :users-panel-opened="usersPanelOpened"
              />

              <users-list
                :users="getUsersByRole(Role.MANAGER)"
                :users-panel-opened="usersPanelOpened"
              />

              <users-list
                :users="getUsersByRole(Role.IT)"
                :users-panel-opened="usersPanelOpened"
              />

              <users-list
                :users="getUsersByRole(Role.AGENT)"
                :users-panel-opened="usersPanelOpened"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersList from '~/components/UsersPanel/UsersList.vue';

enum Department {
  D1 = 'D1',
  D2 = 'D2',
  D3 = 'D3',
}

enum Workplace {
  HOME = 'home',
  OFFICE = 'office',
}

enum Status {
  BREAK = 'on break',
  MEETING = 'in a meeting',
  TROUBLESHOOTING = 'troubleshooting',
}

enum Role {
  AGENT = 'Agent',
  TEAM_LEADER = 'Team Leader',
  MANAGER = 'Manager',
  IT = 'IT',
}

interface User {
  name: string;
  department: Department;
  status: Status;
  role: Role;
  workingFrom: Workplace;
  online: boolean;
  profilePicture?: string;
}

export default defineComponent({
  components: { UsersList },

  data() {
    return {
      Role,

      usersPanelOpened: false as boolean,

      users: [
        {
          name: 'Bessie Cooper',
          online: true,
          department: Department.D3,
          workingFrom: Workplace.HOME,
          status: Status.BREAK,
          role: Role.TEAM_LEADER,
          profilePicture: 'https://xsgames.co/randomusers/assets/avatars/male/',
        },
        {
          name: 'Darrel Steward',
          online: false,
          department: Department.D3,
          workingFrom: Workplace.OFFICE,
          status: Status.MEETING,
          role: Role.AGENT,
          profilePicture: 'https://xsgames.co/randomusers/assets/avatars/male/',
        },
        {
          name: 'Jerry Nelson',
          online: false,
          department: Department.D2,
          workingFrom: Workplace.HOME,
          status: Status.BREAK,
          role: Role.AGENT,
          profilePicture: 'https://xsgames.co/randomusers/assets/avatars/male/',
        },
        {
          name: 'Jenny Wilson',
          online: true,
          department: Department.D2,
          workingFrom: Workplace.HOME,
          status: Status.BREAK,
          role: Role.TEAM_LEADER,
          profilePicture:
            'https://xsgames.co/randomusers/assets/avatars/female/',
        },
        {
          name: 'Arlene McCoy',
          online: false,
          department: Department.D1,
          workingFrom: Workplace.OFFICE,
          status: Status.MEETING,
          role: Role.MANAGER,
          profilePicture:
            'https://xsgames.co/randomusers/assets/avatars/female/',
        },
        {
          name: 'Theresa Webb',
          online: false,
          department: Department.D1,
          workingFrom: Workplace.HOME,
          status: Status.BREAK,
          role: Role.IT,
          profilePicture:
            'https://xsgames.co/randomusers/assets/avatars/female/',
        },
        {
          name: 'John Doe',
          online: false,
          department: Department.D1,
          workingFrom: Workplace.HOME,
          status: Status.BREAK,
          role: Role.IT,
          profilePicture: 'https://xsgames.co/randomusers/assets/avatars/male/',
        },
        {
          name: 'Akmar Nafi',
          online: true,
          department: Department.D1,
          workingFrom: Workplace.OFFICE,
          status: Status.TROUBLESHOOTING,
          role: Role.IT,
          profilePicture: 'https://xsgames.co/randomusers/assets/avatars/male/',
        },
      ] as User[],
    };
  },

  methods: {
    toggleUsersPanel() {
      this.usersPanelOpened = !this.usersPanelOpened;
    },

    getUsersByRole(role: Role): User[] {
      return this.users.filter((user) => user.role === role);
    },
  },
});
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0 cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
