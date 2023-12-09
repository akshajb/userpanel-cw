<template>
  <div class="relative">
    <img :src="src" width="65" height="65" :alt="alt" class="rounded-2xl" />

    <div
      :class="[
        'absolute -bottom-3 left-1/2 w-max -translate-x-1/2 transform rounded-full  px-2 py-0.5 text-center text-2xs text-gray-600',
        {
          'bg-yellow-200': status === 'in a meeting',
          'bg-red-200': status === 'troubleshooting',
          'bg-blue-200': status === 'on break',
        },
      ]"
    >
      {{ status }}
    </div>

    <div
      :class="[
        'absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full',
        online
          ? 'border border-green-100 bg-green-500'
          : 'border border-gray-100 bg-gray-300',
      ]"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    online: {
      required: true,
      type: Boolean,
    },
    alt: {
      required: true,
      type: String,
    },
  },
};
</script>

<style></style>
