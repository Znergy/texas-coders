import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    addAnswer() {
      var params = {
        name: this.get('name'),
        reply: this.get('reply'),
        question: this.get('question')
      };
      this.set('isFormShowing', false);
      this.set('name', '');
      this.set('reply', '');
      this.sendAction('addAnswer', params);
    },
    showForm() {
      this.set('isFormShowing', true);
    }
  }
});
