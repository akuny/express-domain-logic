module.exports = {
  checkJobPosting(input, cb) {
    if (!input) {
      return cb('There is no input');
    }

    return cb(null, input);
  },

  countFeaturedPosts(input, cb) {
    if (input.organization.featuredRemaining > 0) {
      return cb(null, true, input);
    }
    return cb('No features left', false);
  }
};
