
<!--#echo json="package.json" key="name" underline="=" -->
doi-utils-pmb
=============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Validate and normalize a Digital Object Identifier (DOI).
<!--/#echo -->


Similar projects
----------------

Other projects I found that claim to be able to validate DOIs,
normalize them, and format them as URI:

* [`identifiers-doi`](https://npm.im/identifiers-doi):
  Readme says it's only for ancient node versions.
  Also its only interface (as of v0.2.1) is `.extract()`,
  no obvious way to validate and build a URI.
* [`doi-utils`](https://npm.im/doi-utils):
  Seems rather battle-proven, has lots more tests, and can detect a much
  wider range of DOI-containing URIs.
  * Unfortunately, in versions &ge; 2.x, the author's ESM-only crusade got to
    levels where my eslint is no longer able to verify that the dependency can
    be resolved.
    So I tried using the latest CJS version, but its export is wrapped in a
    `default` property and eslint says I cannot use destructuring
    in `import` statements.
    Thus, effectively, I would need almost as much code just for importing his
    package (either as ESM or CJS) as I had needed for the crappy draft
    implementation I made before I went searching for a pre-existing module.



API
---

This module exports an object that holds these methods:

### .validateBareDoi(input)

:TODO:


### .toBare(doi)

:TODO:


### .toURI(doi)

:TODO:





Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
MIT
<!--/#echo -->
