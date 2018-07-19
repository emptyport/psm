# peptide-spectrum-match

This is a helper class for dealing with peptide spectrum matches. It is essentially a template for an object with a few useful functions thrown in.

> This module is still a work in progress. The idea is for this class to be a standard way of dealing with PSMs from X! tandem, mzIdentML, pepXML, and csv files. Anything is subject to change while all the various parsers are written, but things should be in a fairly stable state from here on out.

> Rather than try to choose which score should be reported as the score and which as the expect value, I am adding in fields for all the various types of scores (hyperscore, xcorr, etc.). Not all of them are added in yet and the example below is out of date. Don't build anything that depends on the structure of this class yet.

## Usage
### Quickstart
```javascript
var peptideSpectrumMatch = require('peptide-spectrum-match');

let psm = {
    'sequence': 'ELVISLIVESK',
    'sequence_pre': 'R',
    'sequence_post': 'L',
    'missed_cleavages': 0,
    'protein': 'Unknown protein',
    'charge': 2,
    'retention_time': 5.0,
    'precursor_mass': 1228.73,
    'mass_err': 0.0022,
    'theoretical_mass': 1228.7278,
    'modifications': [{'residue':'S', 'position':4, 'mass':23.1}],
    'filename': 'spectra.mgf',
    'scan_title': '3.3.1',
    'scan_id': '3',
    'score': 78.6,
    'expect': 3e-10,
    'is_decoy': false,
    'rank': 1,
    'search_engine': 'tandem'
  };

var psmObj = new peptideSpectrumMatch(psm);
```

If you want to save your PSMs as a csv, there are a couple helper functions to do so.

#### getHeader(delimiter=",")
This function will return a header string for a csv file with the specified delimiter. The returned string does not have a newline character at the end of it.

#### getDelimited(delimiter=",")
This function will return all the fields of the peptide-spectrum-match object as a delimited string. The values will be in the same order as what is indicated by the header. Once again there is no newline character at the end of the string.

The fields of each peptide-spectrum-match object are:
* `sequence` which is the sequence of the matched peptide
* `sequence_pre` which is the residue immediately before the `sequence`
* `sequence_post` which is the residue immediately after the `sequence`
* `missed_cleavages` is the reported number of missed cleavages
* `protein` is the FASTA entry against which this spectrum was matched
* `charge` is the charge of the spectrum
* `retention_time` is the retention time in minutes
* `precursor_mass` is the observed precursor neutral mass
* `mass_err` is the deviation of the observed mass from the theoretical. It is the precursor_mass - theoretical_mass
* `theoretical_mass` is the calculated neutral mass of the peptide
* `modifications` is a list of objects which specify the `residue`, `position` (0-based), and `mass` of the modification
* `filename` is the filename of the file from which the spectrum came
* `scan_title` is the title of the spectrum
* `scan_id` is the ID of the spectrum
* `score` is the score assigned by the search engine
* `expect` is the expectation value assigned by the search engine
* `is_decoy` is a boolean specifying whether or not the match is to a decoy sequence
* `rank` is the rank of the match
* `search_engine` is the name of the engine used to make the match

## Tests
You can run `npm test` to run the tests after installing the development dependencies.

## Future functionality
The name may be added in to the entries of the modifications array once a method is developed for handling cases where the modification doesn't come with a name.

## License
This software is released under the MIT license.

## Support this project!

[![Support this project on Patreon!](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/MikeTheBiochem)