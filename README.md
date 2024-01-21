
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

This module exports an object that holds these properties and methods:


### .doiNsBaseUri

A string with the author's latest recommended prefix for constructing
a URI from a bare DOI.
Currently, in violation of the DOI handbook, it is: https://doi.org/


### .whyNotBareDoi(input)

If `input` is a string with a bare DOI (10.xxx/xxx), return `false`.
Otherwise, return an Error object describing a failed expectation.


### .expectBareDoi(input)

If `.whyNotBareDoi(input)` has a complaint, `throw` it.
Otherwise, return `input`.


### .toBare(input)

Remove known namespace identifier prefixes from a DOI URI,
and validate (`.expectBareDoi`) the remaining text.


### .toUri(doi)

Convert any understood representation of a DOI
to the recommended URI for that DOI.





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
