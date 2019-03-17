const { updateOrganization } = require('./database-gateway');

class Organization {
  constructor(input) {
    this.id = input.id;
    this.name = input.name;
    this.tier = input.tier;
    this.featuredRemaining = input.featuredRemaining;
  }

  useOneFeatured(cb) {
    if (this.featuredRemaining > 0) {
      this.featuredRemaining--;
      this.save((err, updatedOrganization) => {
        if (err) {
          return cb(err);
        }
        return cb(null, updatedOrganization);
      });
    }
  }

  save(cb) {
    const organization = {
      id: this.id,
      name: this.name,
      tier: this.tier,
      featuredRemaining: this.featuredRemaining
    };

    updateOrganization(organization, (err, savedOrganization) => {
      if (err) {
        return cb(err);
      }
      return cb(null, savedOrganization);
    });
  }
}

module.exports = Organization;
