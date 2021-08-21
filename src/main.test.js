import test from 'ava';

import main from './main';

test('main()', t => {
  t.is(main(), "hello");
});
