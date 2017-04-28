import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    showForm() {
      this.set('isFormShowing', true);
    },
    saveQuestion() {
      var params = {
        name: this.get('name'),
        topic: this.get('topic'),
        question: this.get('question'),
        desc: this.get('desc')
      };
      this.set('isFormShowing', false);
      this.set('name', '');
      this.set('topic', '');
      this.set('question', '');
      this.set('desc', '');
      this.sendAction('saveQuestion', params);
    }
  }
});
