const Organization = require('./Organization');
const User = require('./User');
const databaseGateway = require('../database/database-gateway');

class JobPosting {
  constructor(input = {}) {
    this.userId = input.userId;
    this.organizationId = input.organizationId;
    this.title = input.title;
    this.description = input.description;
    this.contact = input.contact;
    this.isFeatured = input.isFeatured;
    this.isClean = this.validate();
    this.getOrganization(this.organizationId);
    this.getUser(this.userId);
    return this;
  }

  validate() {
    if (
      !this.userId ||
      !this.organizationId ||
      !this.title ||
      !this.description ||
      !this.contact
    ) {
      return false;
    }
    return true;
  }

  getOrganization(id) {
    const instance = new Organization();
    instance.read(id);
    this.organization = instance;
  }

  getUser(id) {
    const instance = new User();
    instance.read(id);
    this.user = instance;
  }

  create(cb) {
    if (this.isFeatured) {
      if (!this.organization.hasFeatured()) {
        return cb('No featured posts left');
      }
      this.organization.useOneFeatured((err, result) => {
        if (err) {
          return err;
        }
      });
    }

    const jobPosting = {
      userId: this.userId,
      organizationId: this.organizationId,
      title: this.title,
      description: this.description,
      contact: this.contact,
      isFeatured: this.isFeatured
    };

    databaseGateway.saveJobPosting(jobPosting, (err, savedJobPosting) => {
      if (err) {
        return cb('Error saving job posting');
      }
      return cb(null, savedJobPosting);
    });
  }
}

module.exports = JobPosting;
