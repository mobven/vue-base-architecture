const actions = {
  changeTheme({ commit }: { commit: any }, theme: string) {
    commit("setTheme", theme);
  },
};

export default actions;
