import { state, getters, mutations, actions } from '~/store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: {
      state: typeof state;
      getters: typeof getters;
      mutations: typeof mutations;
      actions: typeof actions;
    };
  }
}
