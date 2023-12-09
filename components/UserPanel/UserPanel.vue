<template>
  <div
    :class="['h-full overflow-auto ', usersPanelOpened ? ' w-[450px]' : 'w-48']"
  >
    <button
      type="button"
      class="sticky top-0 z-10 flex w-full items-center justify-center gap-4 bg-blue-300 p-4 text-white"
      @click="toggleUsersPanel"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :class="[
          'h-8 w-8 transform duration-150 ease-linear',
          usersPanelOpened ? 'rotate-180' : '',
        ]"
      >
        <path
          fill="#FFFFFF"
          d="M11.46,8.29a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.16,12l2.3-2.29A1,1,0,0,0,11.46,8.29ZM14.66,12,17,9.71a1,1,0,0,0-1.42-1.42l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
        ></path>
      </svg>
      Members
      <span
        class="flex h-4 w-4 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white"
        >{{ users.length }}</span
      >
    </button>

    <div class="relative px-4">
      <div v-for="role in roles" :key="role">
        <users-list
          :role="role"
          :users="usersByRole[role]"
          :users-panel-opened="usersPanelOpened"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Role } from '../../types/UserPanel';
import type { User } from '../../types/UserPanel';
import type { PropType } from 'vue';
import UsersList from './UsersList.vue';
import { groupUsersByRole } from '~/services/users/users';

export default defineComponent({
  components: { UsersList },

  props: {
    users: {
      type: Object as PropType<User[]>,
      required: true,
    },
    usersPanelOpened: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['toggle'],

  data() {
    return {
      Role,
    };
  },

  computed: {
    usersByRole() {
      return groupUsersByRole(this.users);
    },

    /**
     * Array of roles
     */
    roles() {
      return Object.keys(this.usersByRole) as Role[];
    },
  },

  methods: {
    /**
     * Handles UsersPanel toggle state
     */
    toggleUsersPanel() {
      this.$emit('toggle');
    },
  },
});
</script>

<style></style>
