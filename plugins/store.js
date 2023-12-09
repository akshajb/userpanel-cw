import { defineNuxtPlugin } from 'nuxt/app';
import * as store from '~/store/store';

/**
 * Adds store to nuxt context
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$store = store;
});
