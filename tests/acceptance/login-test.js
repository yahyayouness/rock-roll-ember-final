import { module, test } from 'qunit';
import { visit, fillIn, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | Login', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('Log in with valid credentials', async function(assert) {
    let email = 'dave@tcv.com';
    let password = 'ThemCr00ked!';
    this.server.create('user', { email, password });

    await visit('/login');
    await fillIn('#email', email);
    await fillIn('#password', password);
    await click('[data-test-rr=login-button');

    assert.equal(currentURL(), '/bands');
    assert.dom('[data-test-rr=bands-empty-message]').hasText("Let's start by creating a band.", "A descriptive empty message is shown");
    assert.dom('[data-test-rr=user-email]').hasText('dave@tcv.com', "The logged in user's email is shown");

    await click('[data-test-rr=logout]');
    assert.dom('[data-test-rr=form-header]').hasText('Log in to R&R');
    assert.dom('[data-test-rr=user-email]').doesNotExist();
  });
});
