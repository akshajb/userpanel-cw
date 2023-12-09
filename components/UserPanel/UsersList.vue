<template>
  <div class="mb-2 mt-4 flex items-center justify-center gap-2">
    <h2 class="text-center font-bold text-slate-600">
      {{ role }}
    </h2>

    <span
      class="flex h-4 w-4 items-center justify-center rounded-lg bg-gray-300 text-xs text-white"
      >{{ users.length }}</span
    >
  </div>

  <div
    v-for="(user, index) in users"
    :key="index"
    class="my-1 rounded-xl p-4 shadow"
  >
    <div class="flex items-center justify-between">
      <div class="flex flex-grow gap-4">
        <user-image
          :online="user.online"
          :src="`${user.profilePicture}`"
          :alt="`profile picture of ${user.name}`"
          :status="user.status"
        />

        <transition name="fade">
          <user-details
            v-if="usersPanelOpened"
            :name="user.name"
            :department="user.department"
            :working-from="user.workingFrom"
          />

          <div v-else class="flex flex-col justify-between">
            <img
              v-if="user.workingFrom === 'home'"
              src="@/assets/icons/home.svg"
              alt="home icon"
              class="h-4 w-4"
            />
            <img
              v-else
              src="@/assets/icons/office.svg"
              alt="office icon"
              class="h-4 w-4"
            />

            <button
              type="button"
              class="rounded-xl bg-gray-100 p-1 text-gray-400 shadow hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
            </button>
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
    role: {
      type: String,
      required: true,
    },
    usersPanelOpened: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
.fade-enter-active {
  transition: all 150ms ease-in-out;
}

.fade-leave-active {
  transition: all 0s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
