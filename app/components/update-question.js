import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    showForm() {
      this.set('isFormShowing', true);
    },
    updateQuestion(question) {
      var params = {
        name: this.get('name'),
        topic: this.get('topic'),
        question: this.get('newQuestion'),
        desc: this.get('desc'),
      };
      this.set('isFormShowing', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
