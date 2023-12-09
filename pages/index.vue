<template>
  <div>
    <main>
      <div class="flex h-[calc(100vh-64px)]">
        <div class="h-full w-64"></div>
        <div class="flex flex-1">
          <div class="h-full w-full bg-gray-50"></div>
          <user-panel
            :users="$store.state.users"
            :users-panel-opened="usersPanelOpened"
            @toggle="toggleUsersPanel"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserPanel from '~/components/UserPanel/UserPanel.vue';

export default defineComponent({
  components: { UserPanel },

  data() {
    return {
      usersPanelOpened: false as boolean,
    };
  },

  mounted() {
    this.$store.actions.fetchUsers();
  },

  methods: {
    toggleUsersPanel() {
      this.usersPanelOpened = !this.usersPanelOpened;
    },
  },
});
</script>
<style scoped></style>
