import { reactive } from 'vue';
import { getUsers } from '~/services/users/users';

export const state = reactive({
  users: [],
});

export const getters = {};

export const mutations = {
  /**
   * @param {User[]} val
   */
  setUsers: (val) => (state.users = val),
};

export const actions = {
  /**
   * Action to fetch user from a service.
   */
  fetchUsers() {
    const users = getUsers();
    mutations.setUsers(users);
  },
};
