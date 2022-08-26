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
  actions: {
    fetchUsers({ commit }) {
      fetch("http://localhost:3001/users")
        .then((res) => res.json())
        .then((data) => commit("setUsers", data))
        .catch((err) => console.log(err.message));
    },

    fetchOpenedMessage({ commit }, user) {
      fetch(`http://localhost:3001/users/${user}`)
        .then((res) => res.json())
        .then((data) => commit("setOpenedMessage", data))
        .catch((err) => console.log(err.message));
    },

    fetchMessages({ commit }, messageurl) {
      fetch(`http://localhost:3001/chats/111${messageurl}`)
        .then((res) => res.json())
        .then((data) => commit("setMessages", data))
        .catch((err) => console.log(err.message));
    },

    sendMessage({ commit, state }, payloads) {
      commit("pushMessage", payloads.messagesent);
      fetch(`http://localhost:3001/chats/111${payloads.messageurl}`, {
        method: "PATCH",
        body: JSON.stringify({
          messages: state.messages.messages,
        }),
        headers: { "Content-Type": "application/Json" },
      })
        .then((res) => res.json())
        .then((data) => commit("setMessages", data))
        .catch((err) => console.log(err.message));
    },
  },
});

export default store;
