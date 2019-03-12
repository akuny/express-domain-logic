module.exports = {
  checkJobPosting(input, cb) {
    if (!input) {
      return cb('There is no input');
    }

    return cb(null, input);
  },

  countFeaturedPosts(input, cb) {
    /*
     * Imagine we're dipping into the database to pull the number of featured
     * posts remaining for this organization this month
     */
    console.log(input.organization.featuredRemaining);
    if (input.organization.featuredRemaining > 0) {
      return cb(null, true, input);
    }
    return cb('No features left', false);
  }
};
