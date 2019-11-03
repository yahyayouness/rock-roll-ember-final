import Route from '@ember/routing/route';
import { capitalize as capitalizeWords } from 'rock-and-roll-with-ember/helpers/capitalize';

export default Route.extend({
  // This is done by default
  // model() {
  //   return this.modelFor('bands.band');
  // },

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  },

  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      let name = capitalizeWords(band.name);
      document.title = `${name} songs - Rock & Roll`;
    }
  }
});
