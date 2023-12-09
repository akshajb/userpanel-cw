<template>
  <div class="flex flex-grow items-center justify-between">
    <div>
      <div class="flex items-center gap-2">
        <h3 class="text-sm font-semibold">{{ name }}</h3>

        <span
          class="h-6 w-6 rounded-lg border border-gray-400 px-1 py-1 text-2xs text-gray-400"
          >{{ department }}</span
        >
      </div>
      <p
        :class="[
          'text-xs capitalize',
          workingFrom === 'home' ? 'text-blue-500' : 'text-yellow-600',
        ]"
      >
        {{ workingFrom }}
      </p>
    </div>
    <button
      type="button"
      class="rounded-xl bg-gray-100 p-2 text-gray-400 shadow hover:bg-gray-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    department: { type: String, required: true },
    workingFrom: { type: String, required: true },
  },
};
</script>
