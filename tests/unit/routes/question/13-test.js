import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | question/13', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:question/13');
    assert.ok(route);
  });
});