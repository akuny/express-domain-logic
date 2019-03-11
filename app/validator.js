module.exports = {
  checkJobPosting(input, cb) {
    if (!input) {
      cb('There is no input');
    }

    cb(null, input);
  },

  countFeaturedPosts(input, cb) {
    /*
     * Imagine we're dipping into the database to pull the number of featured
     * posts remaining for this organization this month
     */
    cb(null, true, input);
  }
};
