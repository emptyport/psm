module.exports =  class peptide-spectrum-match {
  constructor(options) {
    // Sequence related items
    this.sequence = this.opt(options, 'sequence', '');
    this.sequence_pre = this.opt(options, 'sequence_pre', '');
    this.sequence_post = this.opt(options, 'sequence_post', '');
    this.missed_cleavages = this.opt(options, 'missed_cleavages', 0)
    this.protein = this.opt(options, 'protein', '');
    
    // Mass related items
    this.charge = this.opt(options, 'charge', 0);
    this.retention_time = this.opt(options, 'retention_time', 0);
    this.precursor_mass = this.opt(options, 'precursor_mass', 0);
    this.mass_err = this.opt(options, 'mass_err', 0);
    this.theoretical_mass = this.opt(options, 'theoretical_mass', 0);

    // Modifications
    this.modifications = this.opt(options, 'modifications', {});

    // Search related info
    this.filename = this.opt(options, 'filename', '');
    this.scan_title = this.opt(options, 'scan_title', '');
    this.scan_id = this.opt(options, 'scan_id', '');
    this.search_engine = this.opt(options, 'search_engine', '');

    // Scoring
    this.score = this.opt(options, 'score', 0);
    this.expect = this.opt(options, 'expect', 0);
    this.is_decoy = this.opt(options, 'is_decoy', false);
    this.rank = this.opt(options, 'rank', 0);

  }

  // From here https://stackoverflow.com/questions/23577632/optional-arguments-in-nodejs-functions
  opt(options, name, default_value){
    return options && options[name]!==undefined ? options[name] : default_value;
  } 
  
}