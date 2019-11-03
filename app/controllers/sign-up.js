import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    init() {
      this._super(...arguments);
      this.set('showErrors', { email: false, password: false });
    },
    async signUp(event) {
      event.preventDefault();

      let { email, password } = this;
      let user = this.store.createRecord('user', { email, password });

      await user.save();
      await this.transitionToRoute('login');
    }
  }
});
