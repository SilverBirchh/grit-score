import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | question/7', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:question/7');
    assert.ok(route);
  });
});
