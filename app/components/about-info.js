import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getHelp(getHelpUrl) {
      console.log("URL to redirect: ", getHelpUrl);
      window.location = getHelpUrl;
    },

    reportIssue(reportIssueUrl) {
      console.log("URL to redirect: ", reportIssueUrl);
      window.location = reportIssueUrl;
    }
  }
});
