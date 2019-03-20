const databaseGateway = require('../database/database-gateway');

class Organization {
  constructor(input = {}) {
    this.name = input.name;
    this.tier = input.tier;
    this.featuredRemaining = input.featuredRemaining;
    this.isClean = this.validate();
    return this;
  }

  validate() {
    if (!this.name || !this.tier || !this.featuredRemaining) {
      return false;
    }
    return true;
  }

  read(id) {
    databaseGateway.getOneOrganization(id, (err, organization) => {
      this.id = organization.id;
      this.name = organization.name;
      this.tier = organization.tier;
      this.featuredRemaining = organization.featuredRemaining;
      return this;
    });
  }

  update(cb) {
    const organization = {
      id: this.id,
      name: this.name,
      tier: this.tier,
      featuredRemaining: this.featuredRemaining
    };

    databaseGateway.updateOrganization(
      organization,
      (err, savedOrganization) => {
        if (err) {
          return cb(err);
        }
        return cb(null, savedOrganization);
      }
    );
  }

  hasFeatured() {
    if (this.featuredRemaining > 0 && this.tier === 'gold') {
      return true;
    }
    return false;
  }

  useOneFeatured(cb) {
    if (this.featuredRemaining > 0) {
      this.featuredRemaining--;
      this.update((err, updatedOrganization) => {
        if (err) {
          return cb(err);
        }
        return cb(null, updatedOrganization);
      });
    }
  }
}

module.exports = Organization;
