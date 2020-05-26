import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | UserVisitCard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:user-visit-card');
    assert.ok(route);
  });
});
