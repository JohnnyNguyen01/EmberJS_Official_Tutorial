import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    //1. Navigate to '/'
    await visit('/');
    // Check that current URL === '/'
    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Hi Stuart!');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting /contact', async function (assert) {
    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('h2').containsText('Contact');

    assert.dom('.jumbo a.button').hasText('Home');
    assert.equal(currentURL(), '/');
  });
});
