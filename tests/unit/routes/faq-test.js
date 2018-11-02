import { moduleFor, test } from 'ember-qunit';

moduleFor('route:faq', 'Unit | Route | faq', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['service:toast', 'service:error-handler']
});

test('it exists', function (assert) {
  let route = this.subject();
  assert.ok(route);
});
