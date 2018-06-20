module.exports =  class psm {
  constructor(options) {
    // Sequence related items
    this.sequence = this.opt(options, 'sequence', '');
    this.sequence_pre = this.opt(options, 'sequence_pre', '');
    this.sequence_post = this.opt(options, 'sequence_post', '');

    // Mass related items
    this.charge = this.opt(options, 'charge', 0);
    this.precursor_mass = this.opt(options, 'precursor_mass', 0);
    this.mass_err = this.opt(options, 'mass_err', 0);
    this.theoretical_mass = this.opt(options, 'theoretical_mass', 0);

    // Modifications
    this.modifications = this.opt(options, 'modifications', {});

    // Search related info
    this.filename = this.opt(options, 'filename', '');
    this.scan_title = this.opt(options, 'scan_title', '');







  }

  // From here https://stackoverflow.com/questions/23577632/optional-arguments-in-nodejs-functions
  opt(options, name, default_value){
    return options && options[name]!==undefined ? options[name] : default_value;
  } 
  
}