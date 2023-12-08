<template>
  <div class="flex items-center justify-center gap-2">
    <h2 class="my-3 text-center font-bold text-slate-600">
      {{ users[0].role }}
    </h2>

    <span
      class="flex h-4 w-4 items-center justify-center rounded-lg bg-gray-300 text-xs text-white"
      >{{ users.length }}</span
    >
  </div>

  <div
    v-for="(user, index) in users"
    :key="user.name"
    class="my-1 rounded-xl p-4 shadow"
  >
    <div class="flex items-center justify-between">
      <div class="flex flex-grow gap-4">
        <user-image
          :online="user.online"
          :src="`${user.profilePicture}${generateRandomNumber(index)}.jpg`"
          :alt="`profile picture of ${user.name}`"
          :status="user.status"
        />

        <transition name="slide-fade">
          <user-details
            v-if="usersPanelOpened"
            :name="user.name"
            :department="user.department"
            :working-from="user.workingFrom"
          />

          <div v-else>
            <svg
              v-if="user.workingFrom === 'home'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4 text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4 text-yellow-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import UserDetails from './UserDetails.vue';
import UserImage from './UserImage.vue';

export default {
  components: { UserDetails, UserImage },
  props: {
    users: {
      type: Array,
      required: true,
    },
    usersPanelOpened: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    generateRandomNumber(index) {
      return Math.floor(Math.random() * 50) + index;
    },
  },
};
</script>
