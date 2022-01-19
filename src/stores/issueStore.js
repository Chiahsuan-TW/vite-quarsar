import { defineStore } from 'pinia';

export const issueStore = defineStore({
  id: 'issueArchive',
  state: () => ({
    issueList: JSON.parse(localStorage.getItem('issueList')) || []
  }),
  getters: {
    reviewedList() {
      return this.issueList.filter(issue => issue.isPermitted !== undefined);
    }
  },
  actions: {
    recordIssue(issue) {
      this.$patch(state => {
        state.issueList.push(issue);
        localStorage.setItem('issueList', JSON.stringify(state.issueList));
      });
    }
  }
});
