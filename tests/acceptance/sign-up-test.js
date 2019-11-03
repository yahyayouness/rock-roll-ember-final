import { module, test } from 'qunit';
import { visit, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | Sign up', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('Successful sign up', async function(assert) {
    await visit('/sign-up');
    await fillIn('#email', 'dave@tcv.com');
    await fillIn('#password', 'ThemCr00ked!');
    await click('[data-test-rr=sign-up-button');
    
    assert.dom('[data-test-rr=form-header]').hasText('Log in to R&R', "User is redirected to log in");
  });
});
