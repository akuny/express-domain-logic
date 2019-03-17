const organizationService = require('./organization-service');
const { saveJobPosting } = require('./database-gateway');

class JobPosting {
  constructor(input) {
    this.userId = input.userId;
    this.title = input.title;
    this.description = input.description;
    this.contact = input.contact;
    this.isFeatured = input.isFeatured;
    this.isClean = this.validate();
    this.organization;
    this.getOrganization(this.userId);
  }

  validate() {
    if (
      !this.userId ||
      !this.title ||
      !this.company ||
      !this.description ||
      !this.contact
    ) {
      return false;
    }
    return true;
  }

  getOrganization(userId) {
    organizationService.getOne(userId, (err, organization) => {
      if (err) {
        return err;
      }
      this.organization = organization;
    });
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

  save(cb) {
    this.reviewFeatured((result, errorMessage) => {
      if (!result) {
        return cb(errorMessage);
      }

      const jobPosting = {
        userId: this.userId,
        title: this.title,
        description: this.description,
        contact: this.contact,
        isFeatured: this.isFeatured
      };

      saveJobPosting(jobPosting, (err, savedJobPosting) => {
        if (err) {
          return cb('Error saving job posting');
        }
        return cb(null, savedJobPosting);
      });
    });
  }
}

module.exports = JobPosting;
