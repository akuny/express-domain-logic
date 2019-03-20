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

  reviewFeatured(cb) {
    if (this.isFeatured) {
      if (
        this.organization.tier === 'gold' &&
        this.organization.featuredRemaining < 1
      ) {
        return cb(false, 'Your organization has used all of its job postings');
      }
      if (this.organization.tier === 'normal') {
        return cb(
          false,
          'Your tier is normal, so you cannot have featured job postings'
        );
      }
      this.organization.useOneFeatured((err, updatedOrganization) => {
        if (err) {
          return cb(false, err);
        }
        return cb(true);
      });
    } else {
      return cb(true);
    }
  }

  create(cb) {
    this.reviewFeatured((result, errorMessage) => {
      if (!result) {
        return cb(errorMessage);
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
    });
  }
}

module.exports = JobPosting;
