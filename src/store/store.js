import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      users: [],
      messages: [],
      info: false,
      openedMessage: null,
    };
  },
  mutations: {
    setOpenedMessage(state, user) {
      state.openedMessage = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    pushMessage(state, message) {
      state.messages.messages.push(message);
    },
    toggleInfo(state, info) {
      state.info = info;
    },
  },
});

export default store;
