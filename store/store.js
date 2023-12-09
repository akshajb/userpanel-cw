import { reactive } from 'vue';
import { getUsers } from '~/services/users/users';

export const state = reactive({
  users: [],
});

export const getters = {};

export const mutations = {
  setUsers: (val) => (state.users = val),
};

export const actions = {
  fetchUsers() {
    const users = getUsers();
    mutations.setUsers(users);
  },
};
