import { defineNuxtPlugin } from 'nuxt/app';
import * as store from '~/store/store';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$store = store;
});
