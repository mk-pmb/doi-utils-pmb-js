/* -*- tab-width: 2 -*- */
'use strict';

function throwIf(x) { if (x) { throw x; } }
function testPrefix(s, p) { return (s.startsWith(p) ? p : ''); }

function stripPrefix(s, p) {
  return ((p && s.startsWith(p)) ? s.slice(p.length) : s);
}

function mustBeNonEmptyStr(w, x) {
  if ((x && typeof x) === 'string') { return x; }
  throw new TypeError(w + ' must be given as a non-empty string.');
}


const EX = {

  doiPrefixRgx: Object.assign(/^\d+\.\d+\//, {
    describe: ('DOIs are expected to start with a pattern of '
        + 'number, dot, number, slash.'),
  }),
  doiNsBaseUri: 'https://doi.org/',
  doiNsBaseUrn: 'urn:doi:',


  whyNotBareDoi(input) {
    mustBeNonEmptyStr('DOI', input);
    const m = EX.doiPrefixRgx.exec(input);
    if (!m) { throw new Error(EX.doiPrefixRgx.describe); }
    if (m[0] === input) { throw new Error('DOI lacks a suffix part.'); }
    return false;
  },


  expectBareDoi(input) { return (throwIf(EX.whyNotBareDoi(input)) || input); },


  toBare(uri) {
    const s = mustBeNonEmptyStr('DOI URI', uri);
    const p = (testPrefix(s, 'doi:') // DOI handbook
      || testPrefix(s, EX.doiNsBaseUri) // CrossRef
      || testPrefix(s, 'http://doi.org/') // CrossRef legacy
      || testPrefix(s, EX.doiNsBaseUrn)
      || testPrefix(s, 'info:doi/') // Handle System
    );
    return EX.expectBareDoi(stripPrefix(s, p));
  },


  toUri(doi) { return EX.doiNsBaseUri + EX.toBare(doi); },


};



module.exports = EX;
