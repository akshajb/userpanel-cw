<template>
  <div
    :class="['h-full overflow-auto ', usersPanelOpened ? ' w-[450px]' : 'w-48']"
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

    roles() {
      return Object.keys(this.usersByRole) as Role[];
    },
  },

  methods: {
    toggleUsersPanel() {
      this.$emit('toggle');
    },
  },
});
</script>

<style></style>
