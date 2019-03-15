const organizationService = require('organization-service');

class JobPosting {
  constructor(input) {
    this.title = input.title;
    this.company = input.company;
    this.description = input.description;
    this.contact = input.contact;
    this.isFeatured = input.isFeatured;
    this.isClean = this.validate();
  }

  validate() {
    if (!this.title || !this.company || !this.description || !this.contact) {
      return false;
    }
    return true;
  }

  reviewFeatured() {
    // if featured = true;
    //   use organizationService to pull the job posting's org
    //   check org type
    //     if normal return false
    //   check featured remaining
    //     if > 0 return true
    //     else return false
    // else return true
  }

  save() {
    // uses reviewFeatured before saving
    // also updates org's record using organizationService
  }
}

module.exports = JobPosting;
