import test from 'tape-catch';
import { prepareForMap, mapResponse } from './helpers';

test('prepare for map', t => {
  t.deepEqual(
    prepareForMap({ id: 1, content: 'hello' }),
    [1, { id: 1, content: 'hello' }],
    'maps to an array of [id, item]'
  );

  t.end();
});

test('mapResponse', t => {

  t.deepEqual(
    mapResponse({ id: 42, type: 'badass', components: ['other'] }),
    { id: 42, type: 'badass' },
    'just return id and type'
  );
  t.end();
});
