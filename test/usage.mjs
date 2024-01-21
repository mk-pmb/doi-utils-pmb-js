// -*- coding: utf-8, tab-width: 2 -*-


import test from 'p-tape';
// import equal from 'equal-pmb';

import libDoi from '../index.js';


test('Validation', (t) => {
  t.plan(5);
  t.equal(libDoi.whyNotBareDoi('10.1000/182'), false);
  function f(x, w) { t.throws(() => libDoi.expectBareDoi(x), w); }
  f(23, /string/);
  f('', /empty/);
  f('doi:10.1000/182', /start with a pattern of/);
  f('https://doi.org/10.1000/182', /start with a pattern of/);
});


test('Conversion', (t) => {
  t.plan(7);
  t.equal(libDoi.toUri('10.1000/182'), 'https://doi.org/10.1000/182');
  function f(x, w) { t.throws(() => libDoi.toBare(x), w); }
  f(23, /string/);
  f('', /empty/);
  function b(x, w) { t.equal(libDoi.toBare(x), w); }
  b('doi:10.1000/182', '10.1000/182');
  b('urn:doi:10.1000/182', '10.1000/182');
  b('http://doi.org/10.1000/182', '10.1000/182');
  b('https://doi.org/10.1000/182', '10.1000/182');
});














console.debug('+OK usage tests passed.');
